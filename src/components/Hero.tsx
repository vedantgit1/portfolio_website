import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-28 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="glass-pill px-4 py-1.5 rounded-full text-xs font-mono text-secondary flex items-center gap-2 uppercase tracking-wider subtle-border">
            <Sparkles className="w-3 h-3 text-accent" />
            Political Consultant · Policy Advisor · Strategist
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-[100px] font-semibold leading-[0.9] tracking-tight mb-8 text-gradient"
        >
          Architecting <span className="ai-gradient">Political Victories</span> <br className="hidden md:block" />
          with data-driven <br className="hidden md:block" />
          strategies.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          I turn complex political landscapes into actionable roadmaps. From comprehensive policy briefs to AI-powered campaign management, I provide the strategic edge needed to win.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#thinking" className="bg-primary text-background px-8 py-4 rounded-full text-sm font-medium hover:bg-white/90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
            View Case Studies <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#projects" className="glass-pill px-8 py-4 rounded-full text-sm font-medium hover:bg-surface-hover transition-all w-full sm:w-auto justify-center text-center">
            View My Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
