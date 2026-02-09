
import React, { useState, useRef, useEffect } from 'react';
import { IBButton, IBCard, IBInput, IBBadge } from '../components/UI';
import { aiService } from '../services/geminiService';
import { ButtonVariant } from '../types';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to the InfraBuild AI Strategic Console. I am your specialized consultant for data solutions and AI architecture. How can I help you optimize your business infrastructure today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    
    // Prepare history for the AI service before updating local state
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Pass the previous conversation history to maintain context
      const responseText = await aiService.getChatResponse(userMessage, history);
      setMessages(prev => [...prev, { role: 'model', text: responseText || 'I am sorry, I could not process that request.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'Connection to the AI core lost. Please check your credentials.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col gap-6">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-white">Strategic Consultant</h1>
          <p className="text-slate-400">AI-driven architecture and strategy guidance.</p>
        </div>
        <IBBadge color="brand">Session Active</IBBadge>
      </div>

      <IBCard className="flex-1 overflow-hidden p-0 flex flex-col border-slate-800 bg-slate-900/30">
        {/* Message area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                m.role === 'user' 
                ? 'bg-brand-600 text-white rounded-tr-none' 
                : 'bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700'
              }`}>
                {m.text.split('\n').map((line, idx) => (
                  <p key={idx} className={idx > 0 ? 'mt-2' : ''}>{line}</p>
                ))}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 text-slate-100 rounded-2xl rounded-tl-none px-5 py-3 border border-slate-700 flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0s' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <form onSubmit={handleSend} className="p-4 border-t border-slate-800 bg-slate-900/60 backdrop-blur-md">
          <div className="flex gap-3">
            <IBInput 
              placeholder="Describe your infrastructure challenge..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <IBButton type="submit" disabled={isLoading} className="px-6 shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </IBButton>
          </div>
        </form>
      </IBCard>
    </div>
  );
};

export default AIConsultant;
