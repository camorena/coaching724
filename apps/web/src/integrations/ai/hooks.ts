import { useState, useCallback, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AIService, agentConfigs } from './service';
import { ChatMessage, ChatSession, AgentConfig } from './types';

// Environment variable for API key
const API_KEY = import.meta.env.VITE_AI_API_KEY || 'mock-api-key';

export const useChat = (options?: {
  agentId?: string;
  initialMessages?: ChatMessage[];
  sessionId?: string;
  onResponse?: (message: ChatMessage) => void;
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(options?.initialMessages || []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [sessionId, setSessionId] = useState<string>(options?.sessionId || uuidv4());
  const [agentConfig, setAgentConfig] = useState<AgentConfig>(
    options?.agentId ? agentConfigs[options.agentId] : agentConfigs.chatbot
  );
  
  // Create AI service instance
  const aiServiceRef = useRef<AIService>(new AIService(API_KEY));
  
  // Add system message at initialization if none exists
  useEffect(() => {
    if (messages.length === 0 && agentConfig.systemPrompt) {
      setMessages([{
        id: uuidv4(),
        role: 'system',
        content: agentConfig.systemPrompt,
        timestamp: new Date().toISOString(),
      }]);
    }
  }, [agentConfig.systemPrompt]);
  
  // Function to send a message
  const sendMessage = useCallback(async (
    content: string,
    options?: {
      stream?: boolean;
    }
  ) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Create user message
      const userMessage: ChatMessage = {
        id: uuidv4(),
        role: 'user',
        content,
        timestamp: new Date().toISOString(),
      };
      
      // Add user message to state
      setMessages(prev => [...prev, userMessage]);
      
      // Prepare all messages for the AI service
      const allMessages = [...messages, userMessage];
      
      // Send to AI service
      const response = await aiServiceRef.current.sendMessage(allMessages, {
        model: agentConfig.model,
        temperature: agentConfig.temperature,
        maxTokens: agentConfig.maxTokens,
        stream: options?.stream,
        callbacks: {
          onChunk: chunk => {
            // This would update a streaming message
            console.log('Received chunk:', chunk);
          },
          onComplete: message => {
            setMessages(prev => [...prev, message]);
            setIsLoading(false);
            
            if (options?.onResponse) {
              options.onResponse(message);
            }
          },
          onError: err => {
            setError(err);
            setIsLoading(false);
          },
        },
      });
      
      // If not streaming, add response to messages
      if (!options?.stream) {
        setMessages(prev => [...prev, response.message]);
        
        if (options?.onResponse) {
          options.onResponse(response.message);
        }
      }
      
      return response.message;
    } catch (err) {
      setError(err as Error);
      return null;
    } finally {
      if (!options?.stream) {
        setIsLoading(false);
      }
    }
  }, [messages, agentConfig, options?.onResponse]);
  
  // Clear all messages except system message
  const clearMessages = useCallback(() => {
    setMessages(prev => {
      const systemMessage = prev.find(m => m.role === 'system');
      return systemMessage ? [systemMessage] : [];
    });
  }, []);
  
  // Change the agent
  const changeAgent = useCallback((agentId: string) => {
    const newAgent = agentConfigs[agentId];
    if (newAgent) {
      setAgentConfig(newAgent);
      
      // Update system message
      setMessages(prev => {
        const systemMessageIndex = prev.findIndex(m => m.role === 'system');
        const newMessages = [...prev];
        
        const newSystemMessage = {
          id: uuidv4(),
          role: 'system' as const,
          content: newAgent.systemPrompt,
          timestamp: new Date().toISOString(),
        };
        
        if (systemMessageIndex >= 0) {
          newMessages[systemMessageIndex] = newSystemMessage;
        } else {
          newMessages.unshift(newSystemMessage);
        }
        
        return newMessages;
      });
    } else {
      setError(new Error());
    }
  }, []);
  
  // Save session
  const saveSession = useCallback(async (): Promise<ChatSession> => {
    const session: ChatSession = {
      id: sessionId,
      messages,
      title: messages.find(m => m.role === 'user')?.content.slice(0, 50) || 'New Chat',
      createdAt: messages[0]?.timestamp || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    // In a real app, you would save to database/localStorage
    console.log('Saving session:', session);
    
    return session;
  }, [sessionId, messages]);
  
  // Load session
  const loadSession = useCallback((session: ChatSession) => {
    setSessionId(session.id);
    setMessages(session.messages);
  }, []);
  
  return {
    messages,
    isLoading,
    error,
    sessionId,
    agentConfig,
    sendMessage,
    clearMessages,
    changeAgent,
    saveSession,
    loadSession,
  };
};
