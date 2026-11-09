import { motion } from 'motion/react';
import { ArrowUpRight, Code, Cpu, LineChart, Target } from 'lucide-react';

const projects = [
  {
    title: 'Punjab Constituency Intelligence Lab',
    category: 'Electoral & Constituency Research',
    description: 'An evidence-first research workstation covering all 117 Punjab Assembly seats, built on 2017 and 2022 ECI Form 20 results and Census 2011. Pick any seat and see how competitive it is, which issues are live, where it sits on the map, and generate a 13-section seat brief from it.',
    metrics: ['All 117 Assembly seats, 3 regions, 23 districts', 'Seat explorer, competitiveness index, issue tracker and map', '13-section seat-brief builder on aggregate data (no individual profiling)'],
    stack: ['ECI Form 20', 'Census 2011', 'Seat Briefs'],
    tags: ['Electoral Analysis', 'Constituency Research', 'Punjab'],
    image: '/punjab_constituency_lab.png',
    link: 'https://punjab-constituency-intelligence-la.vercel.app'
  },
  {
    title: 'Rajneeti-OS',
    category: 'Constituency Office Workspace',
    description: 'A prototype workspace for an MLA or MP\'s office. It brings citizen grievances, media and narrative sentiment, promises, speeches and contacts into one place, so the office can see what constituents are raising and respond before a story turns.',
    metrics: ['Grievance tracking for Jan Sunwai-style helplines', 'Media and narrative sentiment monitoring', 'Promise, speech and contact records for the office'],
    stack: ['Grievance Desk', 'Sentiment Tracking', 'Office Records'],
    tags: ['Political Tech', 'Constituency Management', 'Public Leaders'],
    image: '/rajneeti_os.png',
    link: 'https://rajneeti-os.vercel.app'
  },
  {
    title: 'Yavatmal Political Intelligence Lab',
    category: 'Municipal Governance Prototype',
    description: 'A prototype for the office of the Yavatmal Municipal Council President. Every complaint, promise and project gets an owner and a deadline, overdue items raise alerts, and a ward map plus a morning brief show what needs a decision today. Runs on demo data.',
    metrics: ['29 wards with complaints, promises and projects', 'Owners, deadlines and overdue alerts', 'Ward map and daily morning brief'],
    stack: ['Ward Map', 'Delivery Tracking', 'Morning Brief'],
    tags: ['Local Governance', 'Service Delivery', 'Maharashtra'],
    image: '/yavatmal_intel_lab.png',
    link: 'https://yavatmal-political-intelligence-sys.vercel.app'
  },
  {
    title: 'AI Policy Advisor',
    category: 'Policy Strategy & Analysis',
    description: 'A concept demo for Government of India-style policy teams. It tests budget and scheme choices district by district on sample data, so a team can compare options before committing money. Built as a demonstration, not in official use.',
    metrics: ['District-level budget and scheme scenarios', 'Side-by-side comparison of policy options'],
    stack: ['LLMs', 'Policy Analysis', 'Scenario Testing'],
    tags: ['GovTech', 'Policy Strategy', 'Public Sector'],
    image: '/AI_Policy_Advisor.png',
    link: 'https://govt-policy-maker.vercel.app'
  },
  {
    title: 'Vantage Intel Analyzer',
    category: 'AI Political Campaign Manager',
    description: 'A campaign command center for tracking narratives, spotting emerging threats and mapping sentiment, so a campaign team can see how a story is moving and decide how to respond.',
    metrics: ['Sentiment and threat mapping', 'Automated narrative tracking'],
    stack: ['Next.js', 'Data Pipelines', 'Workflow Automation'],
    tags: ['Political Tech', 'Campaign Strategy', 'Elections'],
    image: '/vantage_ai_consultant.png',
    link: 'https://vantage-intel-analyzer.vercel.app/'
  },
  {
    title: 'Vocal Verify',
    category: 'Cybersecurity & Governance',
    description: 'Flags AI-cloned voices during identity checks, a growing risk for public offices, helplines and campaigns as voice deepfakes get cheaper. Correct in 94%+ of my tests against Gemini TTS voices.',
    metrics: ['94%+ detection accuracy in testing (Gemini TTS)', 'Built for identity and verification checks'],
    stack: ['Audio Forensics', 'Machine Learning', 'Deepfake Detection'],
    tags: ['GovTech', 'Cybersecurity', 'Deepfake Detection'],
    image: '/vocalverify.png',
    link: 'https://vocalverify-amber.vercel.app'
  },
  {
    title: 'Valkoma AI',
    category: 'Founder · AI Products & Automation',
    description: 'The company I founded and run. I have built and shipped 7 AI products for small businesses and freelancers, taking each from the first customer conversation through pricing and release, plus n8n and Make automations for clients.',
    metrics: ['7 AI products shipped', '15+ user interviews across 4 segments reset the roadmap', 'Client automations cut manual work by 60%'],
    stack: ['LLMs', 'n8n & Make', 'Workflow Automation'],
    tags: ['Founder', 'Automation', 'Product'],
    image: '/valkoma.png',
    link: 'https://valkomaai.com'
  }
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-mono text-secondary uppercase tracking-widest mb-4">Political & Policy Work</h2>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">Constituency & Policy Tools, Built & Live</h3>
        </div>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                {/* Project Image/Visual */}
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative rounded-2xl overflow-hidden glass-pill border border-white/5 bg-black/20 cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 pointer-events-none" />
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-auto opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                      />
                      {/* Floating Tech Stack */}
                      <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
                        {project.stack.map(tech => (
                          <span key={tech} className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-mono text-secondary border border-white/10 pointer-events-none">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </a>
                  ) : (
                    <div className="relative rounded-2xl overflow-hidden glass-pill border border-white/5 bg-black/20">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 pointer-events-none" />
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-auto opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                      />
                      {/* Floating Tech Stack */}
                      <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
                        {project.stack.map(tech => (
                          <span key={tech} className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-mono text-secondary border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-4">
                    <Cpu className="w-3 h-3" />
                    {project.category}
                  </div>
                  
                  <h4 className="text-3xl font-semibold mb-6 flex items-center justify-between group-hover:text-accent transition-colors">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full relative z-30 cursor-pointer">
                        {project.title}
                        <ArrowUpRight className="w-6 h-6 opacity-0 -translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </a>
                    ) : (
                      <>
                        {project.title}
                        <ArrowUpRight className="w-6 h-6 opacity-0 -translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </>
                    )}
                  </h4>
                  
                  <p className="text-secondary text-lg font-light leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {project.metrics.map(metric => (
                      <div key={metric} className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-8 border-t border-white/10">
                    {project.tags.map(tag => (
                      <div key={tag} className="text-xs font-mono text-secondary capitalize">
                        // {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
