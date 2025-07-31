import { useState } from 'react';
import supabase from './client';

export type UploadResult = {
  path: string | null;
  error: Error | null;
};

export const useStorage = (bucket: string) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const uploadFile = async (
    file: File, 
    path?: string, 
    options?: { upsert?: boolean }
  ): Promise<UploadResult> => {
    try {
      setUploading(true);
      setProgress(0);
      
      const filePath = path ?  : file.name;
      
      const { error } = await supabase.storage
        .from(bucket)
        .upload(filePath, file, {
          upsert: options?.upsert || false,
          onUploadProgress: (progressEvent) => {
            const percent = progressEvent.loaded / (progressEvent.total || 1) * 100;
            setProgress(percent);
          },
        });
      
      if (error) {
        throw error;
      }
      
      // Get public URL
      const { data } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);
      
      return { path: data.publicUrl, error: null };
    } catch (error) {
      console.error('Error uploading file:', error);
      return { path: null, error: error as Error };
    } finally {
      setUploading(false);
    }
  };
  
  const downloadFile = async (path: string): Promise<Blob | null> => {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .download(path);
      
      if (error) {
        throw error;
      }
      
      return data;
    } catch (error) {
      console.error('Error downloading file:', error);
      return null;
    }
  };
  
  const deleteFile = async (path: string): Promise<boolean> => {
    try {
      const { error } = await supabase.storage
        .from(bucket)
        .remove([path]);
      
      if (error) {
        throw error;
      }
      
      return true;
    } catch (error) {
      console.error('Error deleting file:', error);
      return false;
    }
  };
  
  const getPublicUrl = (path: string): string => {
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(path);
    
    return data.publicUrl;
  };
  
  return {
    uploadFile,
    downloadFile,
    deleteFile,
    getPublicUrl,
    uploading,
    progress,
  };
};
