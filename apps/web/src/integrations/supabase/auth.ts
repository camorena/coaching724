import { useState, useEffect } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import supabase from './client';

export type AuthResponse = {
  user: User | null;
  session: Session | null;
  error: AuthError | null;
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      setLoading(true);
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Error getting session:', error.message);
      }
      
      setSession(session);
      setUser(session?.user || null);
      setLoading(false);
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user || null);
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (options: { email: string; password: string }): Promise<AuthResponse> => {
    const { data, error } = await supabase.auth.signInWithPassword(options);
    return { user: data.user, session: data.session, error };
  };

  const signInWithOAuth = async (provider: 'google' | 'apple') => {
    return await supabase.auth.signInWithOAuth({ provider });
  };

  const signInWithMagicLink = async (email: string) => {
    return await supabase.auth.signInWithOtp({ email });
  };

  const signUp = async (options: { email: string; password: string }): Promise<AuthResponse> => {
    const { data, error } = await supabase.auth.signUp(options);
    return { user: data.user, session: data.session, error };
  };

  const signOut = async () => {
    return await supabase.auth.signOut();
  };

  return {
    user,
    session,
    loading,
    signIn,
    signInWithOAuth,
    signInWithMagicLink,
    signUp,
    signOut,
  };
};
