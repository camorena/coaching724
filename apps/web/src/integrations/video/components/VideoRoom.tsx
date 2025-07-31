import React, { useEffect, useRef, useState } from 'react';
import { useWebRTC } from '../webrtc';

interface VideoRoomProps {
  roomId: string;
  userName: string;
}

export const VideoRoom: React.FC<VideoRoomProps> = ({ roomId, userName }) => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const [remoteStreams, setRemoteStreams] = useState<Record<string, MediaStream>>({});
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  
  const {
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
  } = useWebRTC({
    room: roomId,
    onStream: (stream, peerId) => {
      setRemoteStreams(prev => ({
        ...prev,
        [peerId]: stream,
      }));
    },
    onPeerLeave: (peerId) => {
      setRemoteStreams(prev => {
        const newStreams = { ...prev };
        delete newStreams[peerId];
        return newStreams;
      });
    },
  });
  
  // Initialize media and join room
  useEffect(() => {
    const setup = async () => {
      await initializeMedia();
      await joinRoom();
    };
    
    setup();
    
    return () => {
      leaveRoom();
    };
  }, [roomId]);
  
  // Set local video stream
  useEffect(() => {
    if (localStream && localVideoRef.current) {
      localVideoRef.current.srcObject = localStream;
    }
  }, [localStream]);
  
  const handleToggleAudio = () => {
    const newState = toggleAudio();
    setIsMuted(newState);
  };
  
  const handleToggleVideo = () => {
    const newState = toggleVideo();
    setIsVideoOff(newState);
  };
  
  const handleShareScreen = async () => {
    const screenStream = await shareScreen();
    setIsScreenSharing(!!screenStream);
  };
  
  const handleSendMessage = () => {
    sendMessage({
      type: 'chat',
      content: 'Hello from ' + userName,
      sender: userName,
      timestamp: new Date().toISOString(),
    });
  };
  
  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-lg">
        Error: {error.message}
      </div>
    );
  }
  
  return (
    <div className="video-room">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Room: {roomId}</h2>
        <div className="space-x-2">
          <button
            onClick={handleToggleAudio}
            className={}
          >
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
          <button
            onClick={handleToggleVideo}
            className={}
          >
            {isVideoOff ? 'Turn Video On' : 'Turn Video Off'}
          </button>
          <button
            onClick={handleShareScreen}
            className={}
          >
            {isScreenSharing ? 'Stop Sharing' : 'Share Screen'}
          </button>
          <button
            onClick={handleSendMessage}
            className="p-2 rounded-full bg-blue-500 text-white"
          >
            Send Test Message
          </button>
          <button
            onClick={leaveRoom}
            className="p-2 rounded-full bg-red-500 text-white"
          >
            Leave
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <video
            ref={localVideoRef}
            autoPlay
            muted
            playsInline
            className="w-full rounded-lg border border-gray-300"
          />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
            You ({userName})
          </div>
        </div>
        
        {Object.entries(remoteStreams).map(([peerId, stream]) => (
          <div key={peerId} className="relative">
            <video
              autoPlay
              playsInline
              className="w-full rounded-lg border border-gray-300"
              ref={el => {
                if (el) {
                  el.srcObject = stream;
                }
              }}
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
              Peer {peerId}
            </div>
          </div>
        ))}
      </div>
      
      {!connected && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="text-white text-xl">Connecting...</div>
        </div>
      )}
    </div>
  );
};
