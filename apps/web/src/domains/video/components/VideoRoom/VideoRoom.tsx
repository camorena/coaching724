import React from 'react';


export interface VideoRoomProps {
  children?: React.ReactNode;
  className?: string;
}

export const VideoRoom: React.FC<VideoRoomProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`videoroom ${className}`}>
      {children}
    </div>
  );
};

export default VideoRoom;
