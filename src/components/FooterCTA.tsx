import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

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
            Let's build something <br />
            <span className="ai-gradient">that actually matters.</span>
          </h2>
          
          <div className="text-secondary text-base mb-12 max-w-2xl mx-auto font-light space-y-4">
            <p>
              Most AI PMs talk strategy. I've shipped products — six of them, across six domains, with real users and real constraints.
            </p>
            <p>
              I bring an engineer's precision, a builder's hands, and a strategist's mind. I'm not chasing the AI wave. <strong className="text-primary font-medium">I'm building the infrastructure underneath it.</strong>
            </p>
          </div>

          <a href="mailto:vedant.a.joshi@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-primary text-background rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-xl shadow-white/10">
            Let's Talk <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-secondary">
          <p>© {new Date().getFullYear()} Vedant Joshi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/vedant-joshi-a7b276187/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Github className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
