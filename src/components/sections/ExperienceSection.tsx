import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'FXCM & Tradu',
    role: 'Customer Engagement Associate',
    period: 'Oct 2023 – Present',
    location: 'London, UK',
    type: 'Fintech',
    highlights: [
      'Built lifecycle campaigns across Email, Push, and In-App Messaging.',
      'Developed personalization using AMPscript and Liquid.',
      'Reduced campaign deployment time by 30%.',
      'Improved click-through rates by 15%.',
      'Delivered localized campaigns across French, German, Greek, Italian, Swedish, Polish, Dutch, Spanish, and Arabic.',
      'Worked closely with Product, Compliance, Legal, Content, and Translation teams.',
      'Ensured GDPR and regulatory compliance across all campaign communications.',
    ],
    color: 'primary',
  },
  {
    company: 'Webberax',
    role: 'Junior Email Marketing Associate',
    period: 'Jul 2021 – Sep 2023',
    location: 'Remote',
    type: 'Digital Agency',
    highlights: [
      'Built responsive HTML emails.',
      'Managed campaigns through HubSpot and PowerMTA.',
      'Coordinated creative assets.',
      'Reported campaign performance and KPIs.',
    ],
    color: 'secondary',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,rgba(6,182,212,0.05),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`md:grid md:grid-cols-2 md:gap-12 ${idx % 2 === 0 ? '' : 'md:[direction:rtl]'}`}
              >
                <div className={`relative ${idx % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8 md:[direction:ltr]'}`}>
                  <div
                    className={`hidden md:block absolute top-6 ${idx % 2 === 0 ? '-right-[calc(2rem+0.5px)]' : '-left-[calc(2rem+0.5px)]'} w-4 h-4 rounded-full border-2 ${exp.color === 'primary' ? 'border-primary bg-primary/30' : 'border-secondary bg-secondary/30'} translate-x-1/2`}
                  />
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${exp.color === 'primary' ? 'bg-primary/15 text-primary border border-primary/20' : 'bg-secondary/15 text-secondary border border-secondary/20'}`}>
                    <Building2 className="w-3 h-3" />
                    {exp.type}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-1">{exp.company}</h3>
                  <p className="text-base font-medium text-muted-foreground mb-3">{exp.role}</p>
                  <div className={`flex gap-4 text-xs text-muted-foreground ${idx % 2 === 0 ? 'md:justify-end' : ''} flex-wrap`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </span>
                  </div>
                </div>

                <div className={`mt-6 md:mt-0 ${idx % 2 !== 0 ? 'md:[direction:ltr] md:pl-8' : 'md:pl-8'}`}>
                  <div className="p-6 rounded-2xl bg-card/60 border border-black/8 hover:border-black/10 transition-all duration-300 backdrop-blur-sm">
                    <ul className="space-y-3">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${exp.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
