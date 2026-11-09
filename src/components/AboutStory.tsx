import { motion } from 'motion/react';
import { GraduationCap, Award, BadgeCheck } from 'lucide-react';

const experience = [
  { role: 'Founder', org: 'Valkoma AI', when: 'Jan 2024 – Present', note: '7 AI products shipped; 15+ user interviews reset the roadmap.' },
  { role: 'AI Data Specialist (Annotation & QA)', org: 'RWS Group', when: 'Nov 2025 – Present', note: 'Owns consistency standards for AI training data.' },
  { role: 'Project Management Associate', org: 'Excelerate', when: 'Dec 2025 – Feb 2026', note: 'Sprint planning across concurrent client projects.' },
  { role: 'AI Data Specialist', org: 'Innodata', when: 'Sept 2025 – Nov 2025', note: 'QA across 10+ projects; error rates down about 25%.' },
  { role: 'Warehouse Operations Analyst', org: 'Zepto Dark Store', when: 'Oct 2024 – Jan 2025', note: 'Led the floor team and delivery riders; ran audits and escalations.' },
  { role: 'Logistics Supervisor (Trainee)', org: 'Schnellecke Jeena Logistics', when: 'Feb 2024 – Jun 2024', note: 'Bajaj Auto assembly quality checks and daily dispatch.' },
];

const certifications = [
  'Google Project Management',
  'Google GenAI Leader',
  'Management Consulting (Emory)',
  'GenAI Governance & Policy (UMich)',
  'Enterprise PM Fundamentals (Microsoft)',
  'GenAI & LLMs (IBM)',
];

export function AboutStory() {
  return (
    <section id="about" className="py-32 border-t subtle-border relative overflow-hidden">
      <div className="absolute -left-1/4 top-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3"
        >
          <h2 className="text-sm font-mono text-secondary uppercase tracking-widest mb-6">Profile</h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight">An engineer's way of reading politics: start with the data, end with something an office can use.</h3>

          <div className="space-y-6 text-secondary font-light text-lg leading-relaxed">
            <p>
              I'm a mechanical engineer turned political and policy researcher. I build constituency tools on real data and write the research behind them: seat-level electoral analysis, party strategy, and public health policy grounded in NFHS and Poshan Tracker data.
            </p>
            <p>
              Before politics I ran ground operations. At a Zepto dark store I led the floor team and delivery riders, ran the audits and took the escalations. At Schnellecke I handled quality checks and dispatch for Bajaj Auto. <strong className="text-primary font-medium">That is the same last-mile problem a constituency office faces: a promise is only as good as its delivery.</strong>
            </p>

            <div className="pt-8 mt-8 border-t border-white/10">
              <h4 className="text-xl font-medium text-primary mb-6">What I bring to a team</h4>
              <ul className="space-y-4 text-base">
                <li><strong className="text-primary">Evidence you can check.</strong> Every claim traces back to ECI, Census, NFHS or a cited public source.</li>
                <li><strong className="text-primary">Working tools, not just slides.</strong> Five political and policy tools are live on this page, built end to end by me.</li>
                <li><strong className="text-primary">Ground-level execution.</strong> I've led frontline teams and know what it takes for a plan to reach the last household.</li>
                <li><strong className="text-primary">Rooted in Vidarbha.</strong> Based in Nagpur and Yavatmal, working in Hindi, Marathi and English.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-2 space-y-10"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-secondary uppercase tracking-widest mb-4">
              <GraduationCap className="w-4 h-4" /> Education & Programs
            </div>
            <div className="space-y-4">
              <div className="glass-pill rounded-2xl p-5">
                <div className="font-medium">Rebounce Public Policy & Political Consulting Program</div>
                <div className="text-sm text-secondary mt-1">Mar 2026 · Coursework completed. Policy analysis, legislative research, briefs, stakeholder and implementation-risk mapping.</div>
              </div>
              <div className="glass-pill rounded-2xl p-5">
                <div className="font-medium">B.Tech, Mechanical Engineering</div>
                <div className="text-sm text-secondary mt-1">Bajaj Institute of Technology, Wardha · 2018–2022 · CGPA 7.97</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-secondary uppercase tracking-widest mb-4">
              <Award className="w-4 h-4" /> Fellowships
            </div>
            <ul className="space-y-2 text-sm">
              <li><span className="text-primary">Founders Find Fellowship 2026</span> <span className="text-secondary">· selected June 2026</span></li>
              <li><span className="text-primary">Google for Startups Immersion 2026</span> <span className="text-secondary">· Top 1,000 globally (Phase 1)</span></li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-secondary uppercase tracking-widest mb-4">
              <BadgeCheck className="w-4 h-4" /> Experience
            </div>
            <ol className="relative border-l border-white/10 ml-1.5 space-y-5">
              {experience.map(e => (
                <li key={e.org + e.role} className="pl-5 relative">
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-surface border border-accent/60" />
                  <div className="text-sm font-medium">{e.role} · <span className="text-secondary font-normal">{e.org}</span></div>
                  <div className="text-[11px] font-mono text-secondary mt-0.5">{e.when}</div>
                  <div className="text-sm text-secondary mt-1">{e.note}</div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="text-xs font-mono text-secondary uppercase tracking-widest mb-3">Certifications</div>
            <div className="flex flex-wrap gap-2">
              {certifications.map(c => (
                <span key={c} className="px-3 py-1 rounded-full text-[11px] font-mono text-secondary border border-white/10">{c}</span>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
