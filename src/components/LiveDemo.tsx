import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, User, Send, Terminal } from 'lucide-react';

const mockThinkingChunks = [
  "Analyzing problem constraint: High cart abandonment.",
  "User persona: Impulse buyer looking for quick checkout.",
  "Hypothesis: Generative UI can offer personalized bundles at checkout.",
  "Trade-off: Latency vs Personalization.",
  "Decision: Use lighter 7B model on edge for <200ms TTFB."
];

export function LiveDemo() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: "I'm a simulation of Alex's product thinking. Give me a product problem, and I'll break down how I would solve it using AI." }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [thinkLogs, setThinkLogs] = useState<string[]>([]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isThinking) return;

    const userText = input;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsThinking(true);
    setThinkLogs([]);

    // Simulate multi-step thinking process
    let step = 0;
    const interval = setInterval(() => {
      if (step < mockThinkingChunks.length) {
        const currentStep = step;
        setThinkLogs(prev => [...prev, mockThinkingChunks[currentStep]]);
        step++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsThinking(false);
          setMessages(prev => [...prev, { 
            role: 'bot', 
            text: `To solve "${userText}", I would architect an edge-deployed LLM pattern. We start with a baseline model to maintain <200ms latency, keeping the experience invisible to the user. We track conversion lift as our primary metric, not model accuracy.` 
          }]);
        }, 500);
      }
    }, 800);
  };

  return (
    <section id="demo" className="py-32 bg-surface/20 border-y subtle-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4" /> Live Interactive Demo
          </h2>
          <h3 className="text-4xl font-semibold tracking-tight">Experience Product Thinking.</h3>
        </div>

        <div className="glass-pill rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 flex flex-col h-[600px] bg-background/80">
          {/* Header */}
          <div className="px-6 py-4 border-b subtle-border flex items-center justify-between bg-surface/50">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="text-xs font-mono text-secondary">pm_thought_engine.tsx</div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-white text-black' : 'bg-accent/20 text-accent border border-accent/20'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`p-4 rounded-2xl max-w-[80%] ${msg.role === 'user' ? 'bg-surface subtle-border rounded-tr-sm text-sm' : 'glass-pill rounded-tl-sm text-sm leading-relaxed'}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Thinking logs */}
            {isThinking && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-secondary/20 text-secondary border border-secondary/20">
                  <span className="animate-pulse">...</span>
                </div>
                <div className="p-4 rounded-2xl glass-pill rounded-tl-sm text-xs font-mono text-secondary space-y-2">
                  {thinkLogs.map((log, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-accent">{'>'}</span> {log}
                    </motion.div>
                  ))}
                  <div className="animate-pulse">_</div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 border-t subtle-border bg-surface/30">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="e.g. How do we reduce churn for a SaaS app using AI?"
                disabled={isThinking}
                className="w-full bg-background border border-white/10 rounded-full py-4 pl-6 pr-14 text-sm focus:outline-none focus:border-white/30 transition-colors disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={isThinking || !input.trim()}
                className="absolute right-2 bg-primary text-background p-2.5 rounded-full hover:bg-white/90 disabled:opacity-50 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
