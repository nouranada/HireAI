
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, Plus, Bot } from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AiChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI assistant. How can I help with your job search today?',
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const newUserMessage = {
      id: Date.now().toString(),
      content: message,
      sender: 'user' as const,
      timestamp: new Date(),
    };
    
    setMessages([...messages, newUserMessage]);
    setMessage('');
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(message),
        sender: 'ai' as const,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (userMessage: string) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('resume') || lowerCaseMessage.includes('cv')) {
      return "I can help optimize your resume to highlight your skills and experience. Would you like me to suggest improvements or tailor it for a specific job?";
    } else if (lowerCaseMessage.includes('interview')) {
      return "Preparing for interviews is crucial. I can provide practice questions, tips for common interview formats, or help you research a specific company. What would be most helpful?";
    } else if (lowerCaseMessage.includes('job') || lowerCaseMessage.includes('search')) {
      return "I've found several job openings that match your profile. Based on your experience with React and TypeScript, I recommend focusing on frontend developer positions. Would you like me to show you the top matches?";
    } else {
      return "I'm here to help with your job search. I can assist with resume optimization, interview preparation, job recommendations, and more. What specific aspect would you like to focus on?";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestionTopics = [
    "Resume optimization tips",
    "Interview preparation",
    "Job search strategies",
    "Skills assessment"
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-lg">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.sender === 'user'
                    ? 'bg-hireai-blue text-white rounded-tr-none'
                    : 'bg-white border border-gray-200 rounded-tl-none'
                }`}
              >
                {msg.sender === 'ai' && (
                  <div className="flex items-center mb-1">
                    <Bot size={16} className="text-hireai-purple mr-1" />
                    <span className="text-xs font-semibold text-hireai-purple">AI Assistant</span>
                  </div>
                )}
                <div className="text-sm">{msg.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex flex-wrap gap-2 mb-3">
          {suggestionTopics.map((topic, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => {
                setMessage(topic);
                toast.info(`Topic selected: ${topic}`);
              }}
            >
              {topic}
            </Button>
          ))}
        </div>
        
        <div className="flex items-end gap-2">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="min-h-[80px] flex-1 resize-none"
          />
          <Button
            onClick={handleSendMessage}
            className="bg-hireai-blue hover:bg-blue-700 h-10 w-10 p-0 rounded-full flex items-center justify-center"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AiChat;
