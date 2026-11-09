import { motion } from 'motion/react';
import { FileText, Mail } from 'lucide-react';

export const RESUME_URL = 'https://drive.google.com/drive/folders/1ScxUGD5BGM-kvP0PHmr-lbFJPWum2gN_';
export const EMAIL = 'verdant.a.joshi@gmail.com';

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className="glass-pill rounded-full px-5 md:px-6 py-3 flex items-center justify-between w-full max-w-4xl pointer-events-auto">
        <a href="#" className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-medium tracking-tight text-sm">VEDANT JOSHI</span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-secondary">
          <a href="#projects" className="hover:text-primary transition-colors">Tools</a>
          <a href="#method" className="hover:text-primary transition-colors">Method</a>
          <a href="#thinking" className="hover:text-primary transition-colors">Research</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <a href={`mailto:${EMAIL}`} aria-label="Email Vedant" className="text-secondary hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
          </a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors">
            <FileText className="w-4 h-4" /> Resume
          </a>
          <a href="#contact" className="bg-primary text-background px-4 py-1.5 rounded-full text-xs font-medium hover:bg-white/90 transition-colors">
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
