import { motion } from 'motion/react';
import { ArrowRight, MapPin, Languages } from 'lucide-react';

const credentials = [
  'Rebounce Public Policy & Political Consulting Program',
  'Founders Find Fellowship 2026',
  'Google for Startups Immersion 2026 · Top 1,000',
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-[150vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center mb-8"
        >
          <span className="glass-pill px-4 py-1.5 rounded-full text-[11px] md:text-xs font-mono text-secondary flex items-center gap-2 uppercase tracking-wider subtle-border">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Political Consultant · Electoral Analysis · Policy Research
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-[92px] font-semibold leading-[0.95] tracking-tight mb-8 text-gradient"
        >
          Constituency intelligence, <br className="hidden md:block" />
          <span className="ai-gradient">built on real data.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          I turn ECI results, Census and NFHS data into tools and briefs a campaign or a public office can act on: a research lab for all 117 Punjab seats, a model of 8,794 Lok Sabha candidates, and working prototypes for an MLA's office and a municipal council.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="bg-primary text-background px-8 py-4 rounded-full text-sm font-medium hover:bg-white/90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
            See the live tools <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#thinking" className="glass-pill px-8 py-4 rounded-full text-sm font-medium hover:bg-surface-hover transition-all w-full sm:w-auto justify-center text-center">
            Read the research
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-secondary">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Nagpur / Yavatmal · open to Mumbai, Pune, Bengaluru, Hyderabad</span>
            <span className="flex items-center gap-1.5"><Languages className="w-3.5 h-3.5" /> Hindi · Marathi · English</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {credentials.map(c => (
              <span key={c} className="px-3 py-1 rounded-full text-[11px] font-mono text-secondary border border-white/10">{c}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
