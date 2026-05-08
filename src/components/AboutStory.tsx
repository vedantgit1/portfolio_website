import { motion } from 'motion/react';

export function AboutStory() {
  return (
    <section id="about" className="py-32 border-t subtle-border relative overflow-hidden">
      <div className="absolute -left-1/4 top-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-mono text-secondary uppercase tracking-widest mb-6">Profile</h2>
          <h3 className="text-3xl font-semibold mb-8 leading-tight">I architect political victories and data-driven policy — not just whitepapers.</h3>
          
          <div className="space-y-6 text-secondary font-light text-lg leading-relaxed">
            <p>
              As a Political Consultant and Policy Advisor, I've driven strategies across campaign management, legislative analysis, voter sentiment mapping, public sector AI integration, and large-scale policy implementation.
            </p>
            <p>
              I own the full strategic lifecycle: analyzing the socio-political landscape, drafting robust policy frameworks, deploying campaign technologies, and adapting to real-time electoral feedback. My edge isn't just knowing policy. <strong className="text-primary font-medium">It's knowing how to turn complex legislative concepts into strategies that win elections and create real-world impact.</strong>
            </p>
            
            <div className="pt-8 mt-8 border-t border-white/10 space-y-6">
              <h4 className="text-xl font-medium text-primary">What makes me different</h4>
              <ul className="space-y-4 text-base">
                <li><strong className="text-primary">I deliver.</strong> From granular policy briefs to deploying campaign command centers — tested and functional.</li>
                <li><strong className="text-primary">I think in systems.</strong> My background wired me for root cause analysis, enabling me to foresee policy implications that others miss.</li>
                <li><strong className="text-primary">I merge politics with technology.</strong> From drafting legislative strategy to utilizing AI for narrative tracking — I bridge the gap.</li>
                <li><strong className="text-primary">I operate with tactical precision.</strong> I build with resourcefulness, speed, and political judgment — exactly what high-stakes campaigns demand.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4 text-xs font-mono text-secondary">
            <span className="px-4 py-2 border border-white/10 rounded-full glass-pill">Policy Strategy</span>
            <span className="px-4 py-2 border border-white/10 rounded-full glass-pill">Data-Driven Campaigns</span>
            <span className="px-4 py-2 border border-white/10 rounded-full glass-pill">AI in Governance</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
