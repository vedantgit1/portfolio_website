import { motion } from 'motion/react';
import { BookOpen, AlertCircle, Lightbulb, GitMerge } from 'lucide-react';

const studies = [
  {
    title: "2014 Lok Sabha Election Analysis",
    type: "ELECTORAL DATA ANALYSIS",
    problem: "Every Lok Sabha seat has a crowded field, but only one candidate wins. Campaigns often pick candidates on instinct rather than on what the data says separates winners from the rest.",
    hypothesis: "Winners share measurable traits that can be read from public ECI data, which gives campaigns a sharper basis for candidate and seat decisions than instinct alone.",
    strategy: "Built a dataset of all 8,794 candidates across 543 seats from Election Commission of India data and compared winners against the rest of the field. My Python model calls the result correctly about 65% of the time.",
  },
  {
    title: "Women's & Adolescent Health for Viksit Bharat 2047",
    type: "PUBLIC HEALTH WHITE PAPER · CO-WRITING",
    problem: "NFHS data from 700+ districts shows hospital births and antenatal check-ups have risen sharply, yet anaemia and child malnutrition have barely moved. Access has improved faster than outcomes.",
    hypothesis: "Counting visits and institutional deliveries is not enough. Policy needs to target nutrition and follow-up care, and track outcome indicators at district level, if 2047 health goals are to be met.",
    strategy: "District-level analysis of NFHS indicators to find where coverage gains did not translate into health gains. Alongside the paper: Malnutrition and Education Retention frameworks scoped for 2.5 lakh households and 50 schools, built on Poshan Tracker data.",
    tradeoffs: "Coverage targets are easy to report; outcome targets are harder to move and slower to show. The paper argues for measuring what actually changes lives.",
  },
  {
    title: "Ayushman Bharat Digital Mission (ABDM)",
    type: "HEALTHCARE POLICY BRIEF",
    problem: "India's healthcare system remains highly fragmented, leading to inefficiencies, redundant tests, and poor continuity of care for over 1.4 billion citizens.",
    hypothesis: "A unified digital health infrastructure (ABHA IDs, PHR apps, and Health Facility Registries) will streamline patient data access, reduce out-of-pocket expenses, and enable interoperability across public and private healthcare providers.",
    strategy: "This brief evaluates the strategic implementation of ABDM, analyzing its components (ABHA, HPR, HFR), the underlying architecture (UHI), and the critical balance between data accessibility and patient privacy under the DPDP Act.",
    linkText: "→ Read Full Policy Brief",
    linkUrl: "https://docs.google.com/document/d/1afcJXDvgxJlTSe9f9h2F0v3wmTpfa-SS/edit?usp=sharing&ouid=103801233458286648995&rtpof=true&sd=truei"
  },
  {
    title: "AI Regulation & Innovation Act",
    type: "TECHNOLOGY POLICY BRIEF",
    problem: "Rapid AI deployment outpaces current regulatory frameworks, creating a tension between fostering technological innovation and mitigating systemic risks (bias, job displacement, data security).",
    hypothesis: "A tiered, risk-based regulatory approach (similar to the EU AI Act but tailored for emerging markets) will allow low-risk AI development to flourish while placing strict compliance requirements on high-risk, critical infrastructure AI.",
    strategy: "Analyzed comparative international AI frameworks to draft a recommendation that balances open-source innovation with mandatory audits for enterprise-scale AI, focusing on algorithmic transparency and ethical deployment guidelines.",
    tradeoffs: "Innovation velocity vs. Regulatory friction. Balancing the need to attract AI capital against the necessity of citizen data protection.",
  }
];

export function CaseStudies() {
  return (
    <section id="thinking" className="py-32 bg-surface/50 border-y subtle-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-mono text-secondary uppercase tracking-widest mb-4">Strategic Analysis</h2>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">Research & Policy Briefs</h3>
          </div>
          <p className="text-secondary max-w-md font-light">
            Electoral data analysis, public health research and policy briefs: how I read the numbers, test a thesis and turn it into a recommendation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {studies.map((study, idx) => (
            <motion.div 
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-pill p-8 rounded-3xl flex flex-col h-full"
            >
              <div className="text-accent text-xs font-mono uppercase tracking-widest mb-4">
                {study.type}
              </div>
              <h4 className="text-2xl font-semibold mb-8">{study.title}</h4>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-sm text-secondary uppercase tracking-wider font-mono">
                    <AlertCircle className="w-4 h-4" /> Context & Challenge
                  </div>
                  <p className="text-sm leading-relaxed">{study.problem}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2 text-sm text-secondary uppercase tracking-wider font-mono">
                    <Lightbulb className="w-4 h-4" /> Core Thesis
                  </div>
                  <p className="text-sm leading-relaxed">{study.hypothesis}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2 text-sm text-secondary uppercase tracking-wider font-mono">
                    <BookOpen className="w-4 h-4" /> Policy Analysis
                  </div>
                  <p className="text-sm leading-relaxed text-primary/90">{study.strategy}</p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex flex-col items-start">
                  {study.tradeoffs && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2 text-sm text-secondary uppercase tracking-wider font-mono">
                        <GitMerge className="w-4 h-4" /> Policy Trade-offs
                      </div>
                      <p className="text-sm italic text-secondary">{study.tradeoffs}</p>
                    </div>
                  )}
                  {study.linkUrl && (
                    <a href={study.linkUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors mt-auto">
                      {study.linkText || 'Read Policy Brief'}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
