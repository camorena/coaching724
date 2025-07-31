import React from 'react';


export interface RecordingControlsProps {
  children?: React.ReactNode;
  className?: string;
}

export const RecordingControls: React.FC<RecordingControlsProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`recordingcontrols ${className}`}>
      {children}
    </div>
  );
};

export default RecordingControls;
