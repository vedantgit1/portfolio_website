import { motion } from 'motion/react';
import { Database, Layout, GitBranch, LineChart, Cpu, Zap, ScrollText, Network, TrendingUp } from 'lucide-react';

export function SkillsBento() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-sm font-mono text-secondary uppercase tracking-widest mb-12 text-center">Core Competencies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {/* AI & Policy Stack - Takes up 2 columns */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 glass-pill p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <ScrollText className="w-32 h-32" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Policy & Data Architecture</h3>
            <p className="text-secondary text-sm mb-8 max-w-sm">Not just writing briefs. Building data-backed political strategies and intelligent forecasting models.</p>
            
            <div className="flex flex-wrap gap-2 relative z-10">
              {['Data-Driven Policy', 'Legislative Analysis', 'Voter Sentiment Mapping', 'Strategic Forecasting', 'AI in Governance', 'Campaign Optimization'].map(skill => (
                <span key={skill} className="bg-surface px-4 py-2 rounded-full text-xs font-mono subtle-border">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Campaign Execution */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-pill p-8 rounded-3xl bg-gradient-to-br from-surface to-background relative overflow-hidden group"
          >
            <TrendingUp className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Campaign Execution</h3>
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-3 text-sm text-secondary">
                <Network className="w-4 h-4" /> Narrative Tracking
              </div>
              <div className="flex items-center gap-3 text-sm text-secondary">
                <LineChart className="w-4 h-4" /> Polling & Metrics
              </div>
              <div className="flex items-center gap-3 text-sm text-secondary">
                <Layout className="w-4 h-4" /> Threat Detection
              </div>
            </div>
          </motion.div>

          {/* Political Strategy */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 glass-pill p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Political Strategy</h3>
              <p className="text-secondary text-sm max-w-2xl">Aligning complex socio-economic realities with clear, actionable campaign models. Navigating the gap between "public sentiment" and "electoral victory".</p>
            </div>
            <div className="flex gap-4">
              <div className="text-center px-6 py-4 bg-surface rounded-2xl subtle-border">
                <div className="text-sm font-mono text-secondary mb-1">Focus</div>
                <div className="font-medium">Data-Driven Campaigns</div>
              </div>
              <div className="text-center px-6 py-4 bg-surface rounded-2xl subtle-border">
                <div className="text-sm font-mono text-secondary mb-1">Metric</div>
                <div className="font-medium">Electoral Impact</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
