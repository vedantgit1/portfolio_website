import { motion } from 'motion/react';
import { ArrowUpRight, Landmark, Target, Users, Info } from 'lucide-react';

type Project = {
  title: string;
  category: string;
  description: string;
  audience: string;
  metrics: string[];
  stack: string[];
  dataNote: string;
  image: string;
  link: string;
};

const flagship: Project[] = [
  {
    title: 'Punjab Constituency Intelligence Lab',
    category: 'Electoral & Constituency Research',
    description: 'An evidence-first research workstation for all 117 Punjab Assembly seats, built on 2017 and 2022 ECI Form 20 results and Census 2011. Pick a seat and see how competitive it is, which issues are live and where it sits on the map, then generate a 13-section seat brief.',
    audience: 'Campaign strategists, political researchers, party war rooms',
    metrics: ['All 117 Assembly seats, 3 regions, 23 districts', 'Seat explorer, competitiveness index, issue tracker and map', '13-section seat-brief builder'],
    stack: ['ECI Form 20', 'Census 2011', 'Seat Briefs'],
    dataNote: 'Aggregate data only, no individual profiling. Full seat data in progress.',
    image: '/punjab_constituency_lab.png',
    link: 'https://punjab-constituency-intelligence-la.vercel.app'
  },
  {
    title: 'Rajneeti-OS',
    category: 'Constituency Office Workspace',
    description: 'A prototype workspace for an MLA or MP\'s office. Citizen grievances, media and narrative sentiment, promises, speeches and contacts sit in one place, so the office can see what constituents are raising and respond before a story turns.',
    audience: 'MLA and MP offices, constituency staff',
    metrics: ['Grievance tracking for Jan Sunwai-style helplines', 'Media and narrative sentiment monitoring', 'Promise, speech and contact records'],
    stack: ['Grievance Desk', 'Sentiment Tracking', 'Office Records'],
    dataNote: 'Prototype. Office data stays in the browser.',
    image: '/rajneeti_os.png',
    link: 'https://rajneeti-os.vercel.app'
  },
  {
    title: 'Yavatmal Political Intelligence Lab',
    category: 'Municipal Governance Prototype',
    description: 'Built for the office of the Yavatmal Municipal Council President. Every complaint, promise and project gets an owner and a deadline, overdue items raise alerts, and a ward map and morning brief show what needs a decision today.',
    audience: 'Municipal council leadership and ward offices',
    metrics: ['29 wards: complaints, promises and projects', 'Owners, deadlines and overdue alerts', 'Ward map and daily morning brief'],
    stack: ['Ward Map', 'Delivery Tracking', 'Morning Brief'],
    dataNote: 'Runs on demo data. No voter data, by design.',
    image: '/yavatmal_intel_lab.png',
    link: 'https://yavatmal-political-intelligence-sys.vercel.app'
  }
];

const more = [
  {
    title: 'AI Policy Advisor',
    category: 'Policy Scenario Testing',
    description: 'Concept demo for Government of India-style policy teams. Tests budget and scheme choices district by district on sample data. Not in official use.',
    image: '/AI_Policy_Advisor.png',
    link: 'https://govt-policy-maker.vercel.app'
  },
  {
    title: 'Vantage Intel Analyzer',
    category: 'Campaign Narrative Tracking',
    description: 'Campaign command centre for tracking narratives, spotting emerging threats and mapping sentiment, so a team can see how a story is moving.',
    image: '/vantage_ai_consultant.png',
    link: 'https://vantage-intel-analyzer.vercel.app/'
  },
  {
    title: 'Vocal Verify',
    category: 'Deepfake Voice Detection',
    description: 'Flags AI-cloned voices during identity checks, a growing risk for helplines and campaigns. Correct in 94%+ of my tests (Gemini TTS).',
    image: '/vocalverify.png',
    link: 'https://vocalverify-amber.vercel.app'
  },
  {
    title: 'Valkoma AI',
    category: 'Founder · Since Jan 2024',
    description: 'The company I run: 7 AI products shipped for small businesses and freelancers, plus client automations that cut manual work by 60%.',
    image: '/valkoma.png',
    link: 'https://valkomaai.com'
  }
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-mono text-secondary uppercase tracking-widest mb-4">Political & Policy Work</h2>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">Constituency tools, live and clickable</h3>
          </div>
          <p className="text-secondary max-w-md font-light">
            Three tools for the three levels where political work happens: the state seat map, the legislator's office and the municipal council.
          </p>
        </div>

        <div className="space-y-32">
          {flagship.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative rounded-2xl overflow-hidden glass-pill border border-white/5 bg-black/20">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent z-10 pointer-events-none" />
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className="w-full h-auto opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-emerald-300 border border-emerald-400/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
                    </div>
                    <div className="absolute bottom-5 left-5 z-20 flex flex-wrap gap-2">
                      {project.stack.map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-mono text-secondary border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </a>
                </div>

                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-4">
                    <Landmark className="w-3 h-3" />
                    {project.category}
                  </div>

                  <h4 className="text-3xl font-semibold mb-5 group-hover:text-accent transition-colors">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                  </h4>

                  <p className="text-secondary text-lg font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex items-start gap-3 text-sm mb-6">
                    <Users className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-secondary"><span className="text-primary">Built for:</span> {project.audience}</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {project.metrics.map(metric => (
                      <div key={metric} className="flex items-start gap-3">
                        <Target className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-start gap-2 text-xs font-mono text-secondary mb-8">
                    <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    {project.dataNote}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
                  >
                    Open the live tool <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40">
          <h3 className="text-sm font-mono text-secondary uppercase tracking-widest mb-8">More tools I've built</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {more.map((p, idx) => (
              <motion.a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group glass-pill rounded-2xl overflow-hidden flex flex-col hover:border-white/20 transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden bg-black/30">
                  <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-accent font-mono text-[11px] uppercase tracking-widest mb-2">{p.category}</div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h4 className="text-lg font-semibold">{p.title}</h4>
                    <ArrowUpRight className="w-4 h-4 text-secondary group-hover:text-accent transition-colors shrink-0" />
                  </div>
                  <p className="text-sm text-secondary leading-relaxed">{p.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
