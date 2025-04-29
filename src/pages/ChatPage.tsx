
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bot, FileText, Send, MessageSquare, User, Sparkles } from 'lucide-react';
import Header from '@/components/header';
import MobileNav from '@/components/mobile-nav';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `Hello! I'm your AI career assistant. How can I help you today?`,
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newUserMessage = {
      id: Date.now().toString(),
      content: message,
      sender: 'user' as const,
      timestamp: new Date(),
    };
    
    setMessages([...messages, newUserMessage]);
    setMessage('');
    
    // Simulate AI response based on the message content
    const userMessageLower = message.toLowerCase();
    let aiResponseContent = '';
    
    if (userMessageLower.includes('resume') || userMessageLower.includes('cv')) {
      aiResponseContent = `
        I'd be happy to help with your resume! Here are some tips to make your resume stand out:

        1. Tailor your resume for each job application
        2. Use quantifiable achievements rather than just listing duties
        3. Keep it concise - usually 1-2 pages is ideal
        4. Include relevant keywords from the job description
        5. Ensure your contact information is up to date

        Would you like me to review your resume or help with a specific section?
      `;
    } else if (userMessageLower.includes('interview')) {
      aiResponseContent = `
        Preparing for interviews is crucial! Here are some tips:

        1. Research the company thoroughly
        2. Practice common questions and your answers
        3. Prepare specific examples that highlight your skills
        4. Prepare thoughtful questions to ask the interviewer
        5. For technical roles, practice relevant coding problems

        Would you like interview tips for a specific role or practice with some common questions?
      `;
    } else if (userMessageLower.includes('find job') || userMessageLower.includes('job search')) {
      aiResponseContent = `
        Looking for a new job? Let me help optimize your search:

        1. I can help you identify roles that match your skills and experience
        2. Let's make sure your LinkedIn profile is optimized
        3. I can suggest industry-specific job boards
        4. Networking is crucial - I can suggest approaches
        5. Consider both traditional applications and reaching out directly

        Based on your profile, I see you have experience in web development. Are you looking for roles in this field?
      `;
    } else {
      aiResponseContent = `
        I'm here to help with your career journey! I can assist with:

        • Resume and cover letter optimization
        • Interview preparation and practice
        • Job search strategies
        • Skill development recommendations
        • Career path guidance
        • Salary negotiation tips

        What specific aspect of your career would you like to focus on today?
      `;
    }
    
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        content: aiResponseContent.trim(),
        sender: 'ai' as const,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestionTopics = [
    "Resume optimization",
    "Interview tips",
    "Job search strategy",
    "Salary negotiation",
    "Career change advice"
  ];

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="container mx-auto pt-24 px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - only visible on desktop */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold">AI Career Assistant</h2>
                <p className="text-sm text-gray-500">Powered by HireAI</p>
              </div>
              
              <div className="p-4">
                <h3 className="text-sm font-medium mb-3">I can help you with:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <FileText className="h-4 w-4 text-hireai-blue mr-2 mt-0.5" />
                    <span>Resume and cover letter review</span>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="h-4 w-4 text-hireai-blue mr-2 mt-0.5" />
                    <span>Interview preparation</span>
                  </li>
                  <li className="flex items-start">
                    <Search className="h-4 w-4 text-hireai-blue mr-2 mt-0.5" />
                    <span>Job search strategies</span>
                  </li>
                  <li className="flex items-start">
                    <ChartBar className="h-4 w-4 text-hireai-blue mr-2 mt-0.5" />
                    <span>Skill assessments</span>
                  </li>
                  <li className="flex items-start">
                    <Briefcase className="h-4 w-4 text-hireai-blue mr-2 mt-0.5" />
                    <span>Career path guidance</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-hireai-light-blue">
                <div className="flex items-center mb-2">
                  <Sparkles className="h-4 w-4 text-hireai-blue mr-1" />
                  <span className="text-sm font-medium">Premium Features</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li>• Advanced job matching</li>
                  <li>• Document analysis</li>
                  <li>• Mock interviews</li>
                  <li>• Personalized coaching</li>
                </ul>
                <Button size="sm" className="w-full mt-3 text-xs">
                  Upgrade to Premium
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 mt-4 p-4">
              <h3 className="text-sm font-medium mb-3">Recent Conversations</h3>
              <div className="space-y-3">
                <Button variant="ghost" className="w-full justify-start text-sm h-auto py-2 font-normal">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Resume Review (July 18)
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm h-auto py-2 font-normal">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Interview Prep (July 15)
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm h-auto py-2 font-normal">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Job Search Tips (July 10)
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main Chat Area */}
          <div className="flex-1">
            <div className="bg-white rounded-lg border border-gray-200 flex flex-col h-[calc(100vh-180px)]">
              <div className="p-4 border-b border-gray-200 flex items-center">
                <div className="bg-hireai-light-purple p-2 rounded-full">
                  <Bot className="h-5 w-5 text-hireai-purple" />
                </div>
                <div className="ml-3">
                  <h2 className="font-semibold">AI Career Assistant</h2>
                  <p className="text-xs text-gray-500">Online now</p>
                </div>
              </div>
              
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
                            : 'bg-gray-100 rounded-tl-none'
                        }`}
                      >
                        {msg.sender === 'ai' && (
                          <div className="flex items-center mb-1">
                            <Bot size={16} className="text-hireai-purple mr-1" />
                            <span className="text-xs font-semibold text-hireai-purple">AI Assistant</span>
                          </div>
                        )}
                        <div className={`text-sm whitespace-pre-line ${msg.sender === 'user' ? '' : 'text-gray-800'}`}>
                          {msg.content}
                        </div>
                        <div className="text-xs mt-1 opacity-70 text-right">
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-2 mb-3">
                  {suggestionTopics.map((topic, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => setMessage(topic)}
                    >
                      {topic}
                    </Button>
                  ))}
                </div>
                
                <div className="flex items-center gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-hireai-blue hover:bg-blue-700"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <MobileNav />
    </div>
  );
};

export default ChatPage;

function Search(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function Briefcase(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function ChartBar(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}
