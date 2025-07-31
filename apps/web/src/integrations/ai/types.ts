export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
}

export interface ChatSession {
  id: string;
  messages: ChatMessage[];
  title?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AgentConfig {
  id: string;
  name: string;
  description: string;
  systemPrompt: string;
  type: 'chatbot' | 'progress' | 'summary' | 'recommendation' | 'intake' | 'admin';
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

export interface ChatResponse {
  message: ChatMessage;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export interface StreamChunk {
  id: string;
  content: string;
  role: 'assistant';
}

export type StreamCallbacks = {
  onChunk?: (chunk: StreamChunk) => void;
  onComplete?: (message: ChatMessage) => void;
  onError?: (error: Error) => void;
};
