import { useEffect, useState, useRef } from 'react';
import SimplePeer from 'simple-peer';

export type PeerConnection = {
  peer: SimplePeer.Instance;
  stream?: MediaStream;
};

export type WebRTCOptions = {
  room: string;
  onStream?: (stream: MediaStream, peerId: string) => void;
  onData?: (data: any, peerId: string) => void;
  onPeerLeave?: (peerId: string) => void;
};

// This is a simplified implementation
// In a real application, you'd need a signaling server
export const useWebRTC = (options: WebRTCOptions) => {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [peers, setPeers] = useState<Record<string, PeerConnection>>({});
  const [connected, setConnected] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  
  // References to maintain state in callbacks
  const peersRef = useRef<Record<string, PeerConnection>>({});
  
  const initializeMedia = async (
    videoConstraints: MediaTrackConstraints = { width: 1280, height: 720 }
  ) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: videoConstraints,
        audio: true,
      });
      
      setLocalStream(stream);
      return stream;
    } catch (err) {
      setError(err as Error);
      return null;
    }
  };
  
  const createPeer = (
    peerId: string, 
    initiator: boolean, 
    stream: MediaStream
  ) => {
    const peer = new SimplePeer({
      initiator,
      stream,
      trickle: false,
    });
    
    peer.on('signal', (signal) => {
      // In a real app, send this signal to the peer via your signaling server
      console.log('Generated signal for peer', peerId, signal);
      
      // Example: sendSignalToPeer(peerId, signal);
    });
    
    peer.on('stream', (remoteStream) => {
      console.log('Received stream from peer', peerId);
      
      // Update peer connection with stream
      const updatedPeers = { ...peersRef.current };
      updatedPeers[peerId] = {
        ...updatedPeers[peerId],
        stream: remoteStream,
      };
      
      peersRef.current = updatedPeers;
      setPeers(updatedPeers);
      
      // Call onStream callback
      if (options.onStream) {
        options.onStream(remoteStream, peerId);
      }
    });
    
    peer.on('data', (data) => {
      const decodedData = JSON.parse(data.toString());
      
      // Call onData callback
      if (options.onData) {
        options.onData(decodedData, peerId);
      }
    });
    
    peer.on('close', () => {
      console.log('Peer connection closed', peerId);
      
      // Remove peer
      const updatedPeers = { ...peersRef.current };
      delete updatedPeers[peerId];
      
      peersRef.current = updatedPeers;
      setPeers(updatedPeers);
      
      // Call onPeerLeave callback
      if (options.onPeerLeave) {
        options.onPeerLeave(peerId);
      }
    });
    
    peer.on('error', (err) => {
      console.error('Peer connection error', peerId, err);
      setError(err);
    });
    
    return peer;
  };
  
  const joinRoom = async () => {
    try {
      if (!localStream) {
        const stream = await initializeMedia();
        if (!stream) return;
      }
      
      // In a real app, you would:
      // 1. Connect to your signaling server
      // 2. Join the room
      // 3. Get the list of existing peers
      // 4. Create peer connections with them
      
      setConnected(true);
    } catch (err) {
      setError(err as Error);
    }
  };
  
  const leaveRoom = () => {
    // Close all peer connections
    Object.values(peersRef.current).forEach(({ peer }) => {
      peer.destroy();
    });
    
    // Stop local stream tracks
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
    }
    
    setPeers({});
    peersRef.current = {};
    setLocalStream(null);
    setConnected(false);
  };
  
  const toggleVideo = () => {
    if (localStream) {
      const videoTrack = localStream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        return !videoTrack.enabled;
      }
    }
    return false;
  };
  
  const toggleAudio = () => {
    if (localStream) {
      const audioTrack = localStream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        return !audioTrack.enabled;
      }
    }
    return false;
  };
  
  const shareScreen = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      
      // Replace video track in all peers
      if (localStream) {
        const videoTrack = localStream.getVideoTracks()[0];
        const screenTrack = screenStream.getVideoTracks()[0];
        
        if (videoTrack && screenTrack) {
          Object.values(peersRef.current).forEach(({ peer }) => {
            peer.replaceTrack(videoTrack, screenTrack, localStream);
          });
          
          // Add listener to detect when screen sharing stops
          screenTrack.onended = () => {
            Object.values(peersRef.current).forEach(({ peer }) => {
              peer.replaceTrack(screenTrack, videoTrack, localStream);
            });
          };
          
          return screenStream;
        }
      }
      
      return null;
    } catch (err) {
      setError(err as Error);
      return null;
    }
  };
  
  const sendMessage = (message: any) => {
    // Send message to all peers
    Object.values(peersRef.current).forEach(({ peer }) => {
      peer.send(JSON.stringify(message));
    });
  };
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      leaveRoom();
    };
  }, []);
  
  return {
    localStream,
    peers,
    connected,
    error,
    initializeMedia,
    joinRoom,
    leaveRoom,
    toggleVideo,
    toggleAudio,
    shareScreen,
    sendMessage,
  };
};
