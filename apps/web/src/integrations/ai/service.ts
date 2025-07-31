import { v4 as uuidv4 } from 'uuid';
import { 
  ChatMessage, 
  ChatResponse, 
  StreamChunk, 
  StreamCallbacks,
  AgentConfig
} from './types';

// This is a mock implementation
// In a real app, you would connect to an actual AI service
export class AIService {
  private apiKey: string;
  private baseUrl: string;
  
  constructor(apiKey: string, baseUrl: string = 'https://api.openai.com/v1') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }
  
  async sendMessage(
    messages: ChatMessage[], 
    options?: {
      model?: string;
      temperature?: number;
      maxTokens?: number;
      stream?: boolean;
      callbacks?: StreamCallbacks;
    }
  ): Promise<ChatResponse> {
    // In a real implementation, this would call the AI service API
    // For this example, we'll simulate a response
    
    const lastMessage = messages[messages.length - 1];
    
    if (options?.stream) {
      return this.streamResponse(lastMessage, options.callbacks);
    }
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const response: ChatResponse = {
      message: {
        id: uuidv4(),
        role: 'assistant',
        content: this.generateMockResponse(lastMessage.content),
        timestamp: new Date().toISOString(),
      },
      usage: {
        promptTokens: 50,
        completionTokens: 100,
        totalTokens: 150,
      },
    };
    
    return response;
  }
  
  private async streamResponse(
    message: ChatMessage,
    callbacks?: StreamCallbacks
  ): Promise<ChatResponse> {
    const response = this.generateMockResponse(message.content);
    const words = response.split(' ');
    const messageId = uuidv4();
    
    let fullContent = '';
    
    // Simulate streaming by sending one word at a time
    for (let i = 0; i < words.length; i++) {
      // Pause between words
      await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 100));
      
      const word = words[i] + (i < words.length - 1 ? ' ' : '');
      fullContent += word;
      
      const chunk: StreamChunk = {
        id: messageId,
        content: word,
        role: 'assistant',
      };
      
      callbacks?.onChunk?.(chunk);
    }
    
    const fullMessage: ChatMessage = {
      id: messageId,
      role: 'assistant',
      content: fullContent,
      timestamp: new Date().toISOString(),
    };
    
    callbacks?.onComplete?.(fullMessage);
    
    return {
      message: fullMessage,
      usage: {
        promptTokens: 50,
        completionTokens: 100,
        totalTokens: 150,
      },
    };
  }
  
  private generateMockResponse(prompt: string): string {
    // Simple logic to generate mock responses
    if (prompt.toLowerCase().includes('hello') || prompt.toLowerCase().includes('hi')) {
      return 'Hello! How can I help you today with your coaching needs?';
    }
    
    if (prompt.toLowerCase().includes('book') || prompt.toLowerCase().includes('appointment')) {
      return 'I can help you book an appointment with one of our coaches. What type of coaching are you looking for, and when would you like to schedule it?';
    }
    
    if (prompt.toLowerCase().includes('goal') || prompt.toLowerCase().includes('objective')) {
      return 'Setting clear goals is important for effective coaching. Could you tell me more about what you want to achieve through coaching? This will help us match you with the right coach and approach.';
    }
    
    if (prompt.toLowerCase().includes('coach') || prompt.toLowerCase().includes('trainer')) {
      return 'We have several expert coaches specializing in different areas like career development, leadership, personal growth, and more. What specific area are you looking to improve?';
    }
    
    return 'Thank you for your message. Our coaching platform offers personalized sessions to help you achieve your goals. Is there something specific you\'d like to know about our services?';
  }
}

// Predefined agent configurations
export const agentConfigs: Record<string, AgentConfig> = {
  chatbot: {
    id: 'chatbot',
    name: 'Support Chatbot',
    description: 'General support chatbot for answering questions',
    systemPrompt: 'You are a helpful assistant for the Coaching724 platform. Provide concise and accurate information about our coaching services.',
    type: 'chatbot',
    model: 'gpt-4',
    temperature: 0.7,
  },
  progress: {
    id: 'progress',
    name: 'Progress Agent',
    description: 'Monitors progress and provides nudges',
    systemPrompt: 'You are a progress tracking assistant. Your role is to help users stay accountable and motivated by providing gentle nudges and progress tracking.',
    type: 'progress',
    model: 'gpt-4',
    temperature: 0.5,
  },
  summary: {
    id: 'summary',
    name: 'Summary Agent',
    description: 'Creates summaries of coaching sessions',
    systemPrompt: 'You are a summarization assistant. Create concise, action-oriented summaries of coaching sessions highlighting key points, action items, and insights.',
    type: 'summary',
    model: 'gpt-4',
    temperature: 0.3,
  },
  recommendation: {
    id: 'recommendation',
    name: 'Recommendation Agent',
    description: 'Provides personalized recommendations',
    systemPrompt: 'You are a recommendation assistant. Based on user preferences, history, and goals, suggest appropriate coaches, resources, and next steps.',
    type: 'recommendation',
    model: 'gpt-4',
    temperature: 0.7,
  },
  intake: {
    id: 'intake',
    name: 'Intake Agent',
    description: 'Handles initial client intake and coach matching',
    systemPrompt: 'You are an intake assistant. Guide new users through the onboarding process, gather their coaching needs, and help match them with suitable coaches.',
    type: 'intake',
    model: 'gpt-4',
    temperature: 0.6,
  },
  admin: {
    id: 'admin',
    name: 'Admin Agent',
    description: 'Assists with administrative tasks',
    systemPrompt: 'You are an administrative assistant. Help with creating invoices, reports, and other administrative tasks for the coaching platform.',
    type: 'admin',
    model: 'gpt-4',
    temperature: 0.4,
  },
};
