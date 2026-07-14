import { motion } from 'framer-motion';
import { TrendingUp, Users, Target } from 'lucide-react';

const caseStudies = [
  {
    title: 'Scaling Global Trading Platform Marketing',
    company: 'FXCM & Tradu',
    period: '2022–Present',
    icon: TrendingUp,
    metrics: [
      { value: '60%', label: 'Email Open Rate' },
      { value: '3×', label: 'Revenue Growth' },
      { value: '$50M+', label: 'Pipeline Attributed' },
      { value: '94%', label: 'Data Accuracy' },
    ],
    challenge: 'FXCM needed unified marketing automation across 15 markets. Data was fragmented across 6 platforms with no central attribution, causing duplicate sends, inconsistent messaging, and zero visibility into campaign ROI.',
    solution: 'Architected a HubSpot + Salesforce + Segment integration as the unified customer data layer. Built custom lead scoring models using 50+ behavioral signals, launched localised automation sequences per market, and created a multi-touch attribution model in Tableau connecting every touchpoint to revenue.',
    result: '60% average email open rate (3× industry benchmark), $50M+ attributed pipeline, data accuracy improved from 62% to 94%, and 3× revenue growth from automated nurture programs within 18 months.',
    stack: ['HubSpot', 'Salesforce', 'Segment', 'Tableau', 'SQL', 'Pardot'],
    color: 'primary',
  },
  {
    title: 'B2B SaaS Demand Generation Transformation',
    company: 'Webberax',
    period: '2019–2021',
    icon: Target,
    metrics: [
      { value: '45%', label: 'Conversion Rate Lift' },
      { value: '£2M+', label: 'Pipeline Generated' },
      { value: '8', label: 'Clients Scaled' },
      { value: '8-person', label: 'Team Trained' },
    ],
    challenge: 'Southeast Asia SaaS clients had siloed marketing operations with no lead scoring, no nurture infrastructure, and no alignment between sales and marketing. MQL-to-SQL conversion averaged 8% — half the industry benchmark.',
    solution: 'Implemented Pardot-based automation with behavioral segmentation, LinkedIn lead gen forms integrated directly into CRM, custom scoring models per client ICP, and a sales-marketing alignment framework with shared pipeline definitions and SLA agreements.',
    result: '45% increase in MQL-to-SQL conversion rate, £2M+ in attributed pipeline within 6 months, 8 SaaS clients onboarded and scaled, and an 8-person marketing team trained to full automation proficiency.',
    stack: ['Pardot', 'Salesforce', 'LinkedIn Campaign Manager', 'HubSpot', 'Tableau', 'Zapier'],
    color: 'secondary',
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_30%,rgba(6,182,212,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-secondary mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Deep Dives
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Challenges, decisions, and outcomes — how real problems became real results.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-2xl border border-black/8 bg-card/50 backdrop-blur-sm overflow-hidden"
              data-testid={`case-study-${idx}`}
            >
              <div className={`px-6 py-4 border-b border-black/6 bg-gradient-to-r ${cs.color === 'primary' ? 'from-primary/10 to-transparent' : 'from-secondary/10 to-transparent'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${cs.color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'}`}>
                    <cs.icon className={`w-4.5 h-4.5 ${cs.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg">{cs.title}</h3>
                    <p className="text-xs text-muted-foreground">{cs.company} · {cs.period}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/6 border-b border-black/6">
                {cs.metrics.map(m => (
                  <div key={m.label} className="p-4 text-center">
                    <div className={`text-2xl md:text-3xl font-display font-bold mb-1 ${cs.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                      {m.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/6">
                {[
                  { label: 'Challenge', text: cs.challenge },
                  { label: 'Solution', text: cs.solution },
                  { label: 'Result', text: cs.result },
                ].map(section => (
                  <div key={section.label} className="p-6">
                    <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 ${cs.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                      {section.label}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{section.text}</p>
                  </div>
                ))}
              </div>

              <div className="px-6 py-4 border-t border-black/6 flex flex-wrap gap-2">
                {cs.stack.map(s => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded-md bg-black/5 border border-black/10 text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
