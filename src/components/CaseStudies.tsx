import { motion } from 'motion/react';
import { BookOpen, AlertCircle, Lightbulb, GitMerge, FolderOpen, FileText, ArrowUpRight } from 'lucide-react';

const DRIVE_FOLDER = "https://drive.google.com/drive/folders/1c8BmrOZZBkV8kUm_W_hZJ48-gBhIl4b_?usp=drive_link";
const driveFile = (id: string) => `https://drive.google.com/file/d/${id}/view`;

type Study = {
  title: string;
  type: string;
  problem: string;
  hypothesis: string;
  strategy: string;
  tradeoffs?: string;
  linkText?: string;
  linkUrl?: string;
};

const studies: Study[] = [
  {
    title: "2014 Lok Sabha Election Analysis",
    type: "ELECTORAL DATA ANALYSIS",
    problem: "Every Lok Sabha seat has a crowded field, but only one candidate wins. Campaigns often pick candidates on instinct rather than on what the data says separates winners from the rest.",
    hypothesis: "Winners share measurable traits that can be read from public ECI data, which gives campaigns a sharper basis for candidate and seat decisions than instinct alone.",
    strategy: "Built a dataset of all 8,794 candidates across 543 seats from Election Commission of India data and compared winners against the rest of the field. My Python model calls the result correctly about 65% of the time.",
  },
  {
    title: "SWOT Analysis of BJP in Southern States",
    type: "POLITICAL STRATEGY",
    problem: "BJP has a strong national brand and a growing base in Karnataka and Telangana, but struggles across Tamil Nadu, Kerala and Andhra Pradesh, where strong regional parties, language and cultural identity, and a 'North Indian party' image limit its reach.",
    hypothesis: "Long-term success in the South depends less on national visibility and more on cultural legitimacy, grassroots integration and strong local leadership.",
    strategy: "A full SWOT across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Telangana and Puducherry: cadre base, urban vote and welfare schemes as strengths; over-centralised leadership and language barriers as weaknesses; fragmented regional politics, alliances and aspirational urban voters as openings; strong regional parties and cultural backlash as threats.",
    linkText: "Read the SWOT (PDF)",
    linkUrl: driveFile("1-mprf-MRY54E7bxx3NPGxZ9rg9fFebVE"),
  },
  {
    title: "Women's & Adolescent Health for Viksit Bharat 2047",
    type: "PUBLIC HEALTH WHITE PAPER · CO-WRITING",
    problem: "NFHS data from 700+ districts shows hospital births and antenatal check-ups have risen sharply, yet anaemia and child malnutrition have barely moved. Access has improved faster than outcomes.",
    hypothesis: "Counting visits and institutional deliveries is not enough. Policy needs to target nutrition and follow-up care, and track outcome indicators at district level, if 2047 health goals are to be met.",
    strategy: "District-level analysis of NFHS indicators to find where coverage gains did not translate into health gains, and what that means for nutrition and follow-up care policy.",
    tradeoffs: "Coverage targets are easy to report; outcome targets are harder to move and slower to show. The paper argues for measuring what actually changes lives.",
  },
  {
    title: "Evaluation of Malnutrition Interventions: PDS Logistics & Poshan Tracker",
    type: "PROGRAMME EVALUATION · MAHARASHTRA",
    problem: "Chronic malnutrition in rural Tier-3 districts is as much a supply-chain failure as a funding gap: fragmented last-mile distribution, local stock-outs and delayed help for the most vulnerable families.",
    hypothesis: "Treating welfare delivery as a fast, data-driven supply chain, rather than a passive handover, closes the gap between policy intent and what reaches the household, without building new infrastructure.",
    strategy: "A targeted intervention for 2.5 lakh vulnerable households and 50 schools: turn 25 existing PDS shops into high-turnover centres for bio-fortified grains, reconcile stock digitally through the Poshan Tracker, and tie distribution to health screenings. Target: 5.5 lakh hot cooked meals verifiably delivered over 12 months.",
    tradeoffs: "Repurposing existing PDS shops is faster and cheaper than new infrastructure, but depends on strict data discipline at shop level to work.",
    linkText: "Read the evaluation",
    linkUrl: driveFile("1afcJXDvgxJlTSe9f9h2F0v3wmTpfa-SS"),
  },
  {
    title: "Ayushman Bharat Digital Mission (ABDM)",
    type: "HEALTHCARE POLICY BRIEF",
    problem: "India's healthcare system remains highly fragmented, leading to inefficiencies, redundant tests, and poor continuity of care for over 1.4 billion citizens.",
    hypothesis: "A unified digital health infrastructure (ABHA IDs, PHR apps, and Health Facility Registries) will streamline patient data access, reduce out-of-pocket expenses, and enable interoperability across public and private healthcare providers.",
    strategy: "This brief evaluates the strategic implementation of ABDM, analyzing its components (ABHA, HPR, HFR), the underlying architecture (UHI), and the critical balance between data accessibility and patient privacy under the DPDP Act.",
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

const documents = [
  { name: "SWOT Analysis of BJP in Southern States", kind: "PDF", note: "Five southern states and Puducherry", url: driveFile("1-mprf-MRY54E7bxx3NPGxZ9rg9fFebVE") },
  { name: "Evaluation of Malnutrition Interventions", kind: "DOC", note: "PDS logistics and Poshan Tracker, Maharashtra", url: driveFile("1afcJXDvgxJlTSe9f9h2F0v3wmTpfa-SS") },
  { name: "Theory of Change: Climate-Resilient Farm Incomes", kind: "PDF", note: "Inputs to impact for smallholder farmers", url: driveFile("19FzxTq5EqCAWbMa-3OzCYMZ4p-Ky4zjF") },
  { name: "Theory of Change: Group Activity", kind: "PDF", note: "Rebounce program, Group 7", url: driveFile("1d7g15InlZ6xvYPuta_LrB2tY1RpZVgTn") },
  { name: "Logframe: Education Programme", kind: "PPT", note: "Rebounce program, Group 4", url: driveFile("1Z156nTpS4xgXTtzC7cuxEaevYsbLku1f") },
];

function Field({ icon: Icon, label, children, muted }: { icon: typeof BookOpen; label: string; children: string; muted?: boolean }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 text-sm text-secondary uppercase tracking-wider font-mono">
        <Icon className="w-4 h-4" /> {label}
      </div>
      <p className={`text-sm leading-relaxed ${muted ? 'italic text-secondary' : ''}`}>{children}</p>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section id="thinking" className="py-32 bg-surface/50 border-y subtle-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-mono text-secondary uppercase tracking-widest mb-4">Strategic Analysis</h2>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">Research & Policy Briefs</h3>
          </div>
          <div className="max-w-md flex flex-col items-start gap-4">
            <p className="text-secondary font-light">
              Electoral data analysis, party strategy, public health research and policy briefs: how I read the numbers, test a thesis and turn it into a recommendation.
            </p>
            <a href="#documents" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors">
              <FolderOpen className="w-4 h-4" /> Jump to the document library
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {studies.map((study, idx) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.15 }}
              className="glass-pill p-8 rounded-3xl flex flex-col h-full"
            >
              <div className="text-accent text-xs font-mono uppercase tracking-widest mb-4">{study.type}</div>
              <h4 className="text-2xl font-semibold mb-8">{study.title}</h4>

              <div className="space-y-6 flex-grow">
                <Field icon={AlertCircle} label="Context & Challenge">{study.problem}</Field>
                <Field icon={Lightbulb} label="Core Thesis">{study.hypothesis}</Field>
                <Field icon={BookOpen} label="Approach">{study.strategy}</Field>
                {study.tradeoffs && <Field icon={GitMerge} label="Trade-offs" muted>{study.tradeoffs}</Field>}
              </div>

              {study.linkUrl && (
                <div className="pt-6 mt-6 border-t border-white/10">
                  <a href={study.linkUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors">
                    {study.linkText} <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        <div id="documents" className="mt-20 scroll-mt-32">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-semibold">Document library</h3>
              <p className="text-secondary text-sm mt-2 font-light">Original files on Google Drive, including Theory of Change and logframe work from the Rebounce Public Policy & Political Consulting Program.</p>
            </div>
            <a href={DRIVE_FOLDER} target="_blank" rel="noopener noreferrer" className="glass-pill inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-surface-hover transition-colors shrink-0">
              <FolderOpen className="w-4 h-4 text-accent" /> Open full folder
            </a>
          </div>
          <div className="glass-pill rounded-3xl divide-y divide-white/5 overflow-hidden">
            {documents.map(doc => (
              <a
                key={doc.name}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-6 py-5 hover:bg-surface-hover/50 transition-colors"
              >
                <FileText className="w-5 h-5 text-secondary group-hover:text-accent transition-colors shrink-0" />
                <div className="flex-grow min-w-0">
                  <div className="font-medium truncate">{doc.name}</div>
                  <div className="text-xs text-secondary mt-0.5">{doc.note}</div>
                </div>
                <span className="text-[10px] font-mono text-secondary border border-white/10 rounded px-2 py-0.5 shrink-0">{doc.kind}</span>
                <ArrowUpRight className="w-4 h-4 text-secondary group-hover:text-accent transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
