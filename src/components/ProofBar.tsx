import { motion } from 'motion/react';

const stats = [
  { label: 'AI Tools Launched', value: '4' },
  { label: 'Active Users Impacted', value: '1.2M+' },
  { label: 'LLM Architectures', value: 'GPT-4, Claude 3, Llama' },
  { label: 'Product Focus', value: 'B2B SaaS & Growth' },
];

export function ProofBar() {
  return (
    <section className="py-12 border-y subtle-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${index !== 0 ? 'pt-8 md:pt-0' : ''} md:px-8`}
            >
              <div className="text-secondary font-mono text-[10px] uppercase tracking-widest mb-2">
                {stat.label}
              </div>
              <div className="text-2xl font-medium tracking-tight">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
