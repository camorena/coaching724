import { useState, useEffect } from 'react';
import ZoomVideo from '@zoom/videosdk';

export type ZoomMeetingOptions = {
  meetingNumber: string;
  password?: string;
  userName: string;
  userEmail?: string;
  sdkKey: string;
  sdkSecret?: string;
  signature?: string;
  onMeetingJoined?: () => void;
  onMeetingLeft?: () => void;
  onError?: (error: any) => void;
};

export const useZoomMeeting = (options?: ZoomMeetingOptions) => {
  const [zoomClient, setZoomClient] = useState<any>(null);
  const [stream, setStream] = useState<any>(null);
  const [participants, setParticipants] = useState<any[]>([]);
  const [isJoined, setIsJoined] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  
  // Initialize Zoom client
  useEffect(() => {
    try {
      const client = ZoomVideo.createClient();
      setZoomClient(client);
      
      // Set up event listeners
      client.on('connection-change', (payload: any) => {
        if (payload.state === 'Connected') {
          setIsJoined(true);
          if (options?.onMeetingJoined) {
            options.onMeetingJoined();
          }
        } else if (payload.state === 'Closed') {
          setIsJoined(false);
          if (options?.onMeetingLeft) {
            options.onMeetingLeft();
          }
        }
      });
      
      client.on('user-added', (payload: any) => {
        setParticipants(prev => [...prev, payload.userInfo]);
      });
      
      client.on('user-removed', (payload: any) => {
        setParticipants(prev => prev.filter(p => p.userId !== payload.userId));
      });
      
      client.on('error', (error: any) => {
        setError(error);
        if (options?.onError) {
          options.onError(error);
        }
      });
    } catch (err) {
      setError(err);
      if (options?.onError) {
        options.onError(err);
      }
    }
  }, []);
  
  // Join meeting if options are provided
  useEffect(() => {
    if (zoomClient && options?.meetingNumber && options?.sdkKey) {
      joinMeeting(options);
    }
  }, [zoomClient, options?.meetingNumber, options?.sdkKey]);
  
  const getSignature = async (
    meetingNumber: string, 
    role: number = 0
  ): Promise<string> => {
    // In a production app, you'd fetch this from your server
    // For this example, we'll assume the signature is provided or generated locally
    if (options?.signature) {
      return options.signature;
    }
    
    if (options?.sdkSecret) {
      // This should be done on the server, not client-side!
      // Included here for example purposes only
      const timestamp = new Date().getTime() - 30000;
      const msg = Buffer.from(
        options.sdkKey + meetingNumber + timestamp + role
      ).toString('base64');
      
      // This is a placeholder - actual HMAC-SHA256 implementation would be needed
      // and should be done server-side for security
      return 'PLACEHOLDER_SIGNATURE';
    }
    
    throw new Error('Either signature or sdkSecret must be provided');
  };
  
  const joinMeeting = async (joinOptions: ZoomMeetingOptions) => {
    if (!zoomClient) return;
    
    try {
      const signature = await getSignature(joinOptions.meetingNumber);
      
      await zoomClient.join({
        sdkKey: joinOptions.sdkKey,
        signature,
        meetingNumber: joinOptions.meetingNumber,
        password: joinOptions.password || '',
        userName: joinOptions.userName,
        userEmail: joinOptions.userEmail,
      });
      
      // Create media stream
      const mediaStream = zoomClient.getMediaStream();
      setStream(mediaStream);
      
      setIsJoined(true);
      
      // Get participants
      const users = zoomClient.getAllUser();
      setParticipants(users);
    } catch (err) {
      setError(err);
      if (joinOptions.onError) {
        joinOptions.onError(err);
      }
    }
  };
  
  const leaveMeeting = () => {
    if (zoomClient && isJoined) {
      zoomClient.leave();
      setIsJoined(false);
    }
  };
  
  const toggleVideo = () => {
    if (stream) {
      if (stream.isCapturingVideo()) {
        stream.stopVideo();
        return false;
      } else {
        stream.startVideo();
        return true;
      }
    }
    return false;
  };
  
  const toggleAudio = () => {
    if (stream) {
      if (stream.isCapturingAudio()) {
        stream.stopAudio();
        return false;
      } else {
        stream.startAudio();
        return true;
      }
    }
    return false;
  };
  
  const shareScreen = async () => {
    if (stream) {
      try {
        if (stream.isStartShareScreen()) {
          await stream.stopShareScreen();
          return false;
        } else {
          await stream.startShareScreen();
          return true;
        }
      } catch (err) {
        setError(err);
        return false;
      }
    }
    return false;
  };
  
  const startRecording = () => {
    if (zoomClient && isJoined) {
      // Note: Recording requires additional setup and permissions
      // This is a placeholder for the actual implementation
      console.log('Recording started');
    }
  };
  
  return {
    zoomClient,
    stream,
    participants,
    isJoined,
    error,
    joinMeeting,
    leaveMeeting,
    toggleVideo,
    toggleAudio,
    shareScreen,
    startRecording,
  };
};
