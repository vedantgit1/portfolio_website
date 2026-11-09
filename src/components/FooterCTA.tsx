import { motion } from 'motion/react';
import { ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { EMAIL, RESUME_URL } from './Navigation';

export function FooterCTA() {
  return (
    <footer id="contact" className="pt-32 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 z-0" style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Need someone who can read the numbers <br className="hidden md:block" />
            <span className="ai-gradient">and ship the tool?</span>
          </h2>

          <div className="text-secondary text-base mb-12 max-w-2xl mx-auto font-light space-y-4">
            <p>
              I build constituency tools on real data: all 117 Punjab Assembly seats, 8,794 Lok Sabha candidates, a working prototype for a municipal council office, and research drawn from 700+ districts of NFHS data.
            </p>
            <p>
              Open to political consulting, campaign research and policy roles in Mumbai, Pune, Bengaluru and Hyderabad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-primary text-background rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-xl shadow-white/10 w-full sm:w-auto">
              Let's talk <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/vedant-joshi-a7b276187/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-5 glass-pill rounded-full font-medium hover:bg-surface-hover transition-colors w-full sm:w-auto">
              <Linkedin className="w-5 h-5" /> Connect on LinkedIn
            </a>
          </div>
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 mt-6 text-sm text-secondary hover:text-primary transition-colors">
            <Mail className="w-4 h-4" /> {EMAIL}
          </a>
        </motion.div>

        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-secondary">
          <p>© {new Date().getFullYear()} Vedant Joshi · Political Consultant & Policy Researcher</p>
          <div className="flex items-center gap-6">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" aria-label="Resume" className="hover:text-primary transition-colors"><FileText className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/in/vedant-joshi-a7b276187/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="https://github.com/vedantgit1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors"><Github className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
