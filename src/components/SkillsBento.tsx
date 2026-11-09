import { motion } from 'motion/react';
import { Vote, ScrollText, BarChart3, Users, Bot } from 'lucide-react';

const cards = [
  {
    icon: Vote,
    title: 'Electoral & Constituency Research',
    blurb: 'Reading seats the way a war room needs them: who is competitive, what separates winners, and which issues are live.',
    skills: ['Electoral analysis', 'Constituency analysis', 'ECI & Census data', 'Narrative & sentiment tracking', 'Survey & indicator design'],
    span: 'md:col-span-2',
  },
  {
    icon: ScrollText,
    title: 'Policy Research',
    blurb: 'Briefs and programme designs written for the person who has to decide.',
    skills: ['Legislative research', 'Policy briefs & white papers', 'Theory of Change', 'Logframes'],
    span: '',
  },
  {
    icon: Users,
    title: 'Stakeholders & Delivery',
    blurb: 'Making a plan land on the ground.',
    skills: ['Stakeholder mapping', 'Implementation-risk mapping', 'Project management', 'Team leadership', 'Agile / Scrum'],
    span: '',
  },
  {
    icon: BarChart3,
    title: 'Data & Analysis',
    blurb: 'From spreadsheets to models to dashboards.',
    skills: ['Python', 'Excel & Google Sheets', 'Basic SQL', 'Power BI', 'Tableau'],
    span: '',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    blurb: 'Building the tools myself, fast.',
    skills: ['Claude & Claude Code', 'ChatGPT & Gemini', 'RAG & agentic workflows', 'n8n, Make, Zapier'],
    span: '',
  },
];

export function SkillsBento() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-sm font-mono text-secondary uppercase tracking-widest mb-4 text-center">Core Competencies</h2>
        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-14">What I can do for your campaign or office</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`glass-pill p-8 rounded-3xl relative overflow-hidden group ${card.span}`}
              >
                <Icon className="w-7 h-7 text-accent mb-5" />
                <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
                <p className="text-secondary text-sm mb-6 max-w-md">{card.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {card.skills.map(skill => (
                    <span key={skill} className="bg-surface px-3 py-1.5 rounded-full text-xs font-mono subtle-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
