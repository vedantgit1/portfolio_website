import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, ShieldCheck, LineChart, FileText, ListChecks, ArrowUpRight } from 'lucide-react';

const stages = [
  {
    key: 'data',
    label: 'Data',
    icon: Database,
    title: 'Start from official, public sources',
    body: 'Every piece of work begins with data anyone can check: Election Commission results, Census tables, NFHS health surveys, Poshan Tracker records and cited public documents.',
    sources: ['ECI Form 20 results', 'Census 2011 PCA', 'NFHS district data', 'Poshan Tracker'],
    proof: { name: 'Punjab Constituency Intelligence Lab', href: 'https://punjab-constituency-intelligence-la.vercel.app' }
  },
  {
    key: 'evidence',
    label: 'Evidence',
    icon: ShieldCheck,
    title: 'Clean it, check it, cite it',
    body: 'Raw numbers become evidence only after they are matched across years and sources and traced back to where they came from. I work with aggregate data and keep individual voters out of it by design.',
    sources: ['Cross-year seat matching', 'Source citations', 'Aggregate-only data', 'No individual profiling'],
    proof: { name: 'Yavatmal Political Intelligence Lab', href: 'https://yavatmal-political-intelligence-sys.vercel.app' }
  },
  {
    key: 'analysis',
    label: 'Analysis',
    icon: LineChart,
    title: 'Find what actually moves the result',
    body: 'Competitiveness by seat, what separates winners from the field, where health coverage rose but outcomes did not, and where a party is strong or exposed.',
    sources: ['Competitiveness index', 'Winner-vs-field model (~65%)', 'District indicator gaps', 'SWOT'],
    proof: { name: '2014 Lok Sabha analysis & BJP South SWOT', href: '#thinking' }
  },
  {
    key: 'brief',
    label: 'Brief',
    icon: FileText,
    title: 'Turn it into something a leader can read in minutes',
    body: 'Seat briefs, policy briefs, white papers, and programme designs with a Theory of Change and logframe, written for the person who has to make the call.',
    sources: ['13-section seat brief', 'Policy briefs', 'Theory of Change', 'Logframes'],
    proof: { name: 'Research & policy briefs', href: '#thinking' }
  },
  {
    key: 'follow',
    label: 'Follow-through',
    icon: ListChecks,
    title: 'Track delivery after the decision',
    body: 'Politics is judged on delivery. I build the office systems that give every grievance, promise and project an owner, a deadline and an alert when it slips.',
    sources: ['Grievance tracking', 'Promise tracker', 'Overdue alerts', 'Morning brief'],
    proof: { name: 'Rajneeti-OS', href: 'https://rajneeti-os.vercel.app' }
  }
];

export function HowIWork() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  const Icon = stage.icon;
  const external = stage.proof.href.startsWith('http');

  return (
    <section id="method" className="py-32 bg-surface/20 border-y subtle-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">How I Work</h2>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">From raw data to a decision</h3>
          <p className="text-secondary font-light mt-5 max-w-2xl mx-auto">
            The same five steps sit behind every tool and brief on this page. Click through to see each one and where it shows up in my work.
          </p>
        </div>

        <div role="tablist" aria-label="Method stages" className="flex flex-wrap justify-center gap-2 mb-10">
          {stages.map((s, i) => {
            const StageIcon = s.icon;
            const selected = i === active;
            return (
              <button
                key={s.key}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-colors border ${
                  selected
                    ? 'bg-primary text-background border-primary'
                    : 'glass-pill text-secondary hover:text-primary'
                }`}
              >
                <span className={`font-mono text-[11px] ${selected ? 'text-background/60' : 'text-accent'}`}>0{i + 1}</span>
                <StageIcon className="w-4 h-4" />
                {s.label}
              </button>
            );
          })}
        </div>

        <div className="glass-pill rounded-3xl p-8 md:p-12 min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-5 gap-10"
            >
              <div className="md:col-span-3">
                <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/25 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-2xl font-semibold mb-4">{stage.title}</h4>
                <p className="text-secondary leading-relaxed font-light text-lg">{stage.body}</p>
              </div>
              <div className="md:col-span-2 flex flex-col gap-6">
                <div>
                  <div className="text-xs font-mono text-secondary uppercase tracking-widest mb-3">In practice</div>
                  <div className="flex flex-wrap gap-2">
                    {stage.sources.map(src => (
                      <span key={src} className="bg-surface px-3 py-1.5 rounded-full text-xs font-mono subtle-border">{src}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <div className="text-xs font-mono text-secondary uppercase tracking-widest mb-2">See it in</div>
                  <a
                    href={stage.proof.href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-medium"
                  >
                    {stage.proof.name} <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
