import { motion } from 'motion/react';
import { ArrowUpRight, Code, Cpu, LineChart, Target } from 'lucide-react';

const projects = [
  {
    title: 'AI Government Policy Advisor',
    category: 'Policy Strategy & Analysis',
    description: 'An intelligent system designed to analyze legislative documents, forecast policy impacts, and generate actionable recommendations for political leaders and government officials.',
    metrics: ['Rapid policy impact simulation', 'Data-driven legislative briefs'],
    stack: ['LLMs', 'Policy Analysis', 'Strategic Forecasting'],
    tags: ['GovTech', 'Policy Strategy', 'Public Sector'],
    image: '/AI_Policy_Advisor.png',
    link: 'https://govt-policy-maker.vercel.app'
  },
  {
    title: 'Vantage Intel Analyzer',
    category: 'AI Political Campaign Manager',
    description: 'A tactical command center for modern political campaigns. It provides defense-grade narrative tracking, threat detection, and real-time sentiment mapping to give apex political consulting firms an unfair advantage.',
    metrics: ['Real-time sentiment and threat mapping', 'Automated narrative tracking'],
    stack: ['Next.js', 'Data Pipelines', 'Workflow Automation'],
    tags: ['Political Tech', 'Campaign Strategy', 'Elections'],
    image: '/vantage_ai_consultant.png',
    link: 'https://vantage-intel-analyzer.vercel.app/'
  },
  {
    title: 'Valkoma AI',
    category: 'AI Strategy Platform',
    description: 'An end-to-end AI-powered orchestration system. Generates automated pipelines and orchestrates intelligent chatbots for targeted messaging and forward-thinking campaigns.',
    metrics: ['Architected intelligent content pipelines', 'Bespoke strategic consulting'],
    stack: ['LLMs', 'Strategy', 'Workflow Automation'],
    tags: ['Automation', 'Growth', 'Strategic Systems'],
    image: '/valkoma.png',
    link: 'https://valkomaai.vercel.app'
  },
  {
    title: 'Vocal Verify App',
    category: 'Cybersecurity & Governance',
    description: 'An advanced audio forensics system that differentiates between AI-generated voice synthesis and human speech to prevent deepfake attacks and automated bot infiltration in government systems.',
    metrics: ['Deepfake voice detection', 'Defense-grade attack prevention'],
    stack: ['Audio Forensics', 'Machine Learning', 'Threat Prevention'],
    tags: ['GovTech', 'Cybersecurity', 'Deepfake Detection'],
    image: '/vocalverify.png',
    link: 'https://vocalverify-amber.vercel.app'
  }
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-mono text-secondary uppercase tracking-widest mb-4">Featured Execution</h2>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">Products Built & Launched</h3>
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
