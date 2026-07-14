import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { Award, CheckCircle } from 'lucide-react';

const achievements = [
  { value: 1000, suffix: '+', label: 'Campaigns Delivered', sub: 'Across email, push & in-app' },
  { value: 50, suffix: '+', label: 'Customer Journeys Built', sub: 'Automated lifecycle flows' },
  { value: 80, suffix: '%', label: 'Faster Email Build & QA', sub: 'Via reusable AMPscript framework' },
  { value: 9, suffix: '+', label: 'Languages Localized', sub: 'Across EMEA markets' },
  { value: 40, suffix: '%', label: 'Reduction in Manual Work', sub: 'From dynamic template systems' },
  { value: 98, suffix: '%', label: 'Email Deliverability', sub: 'Through domain & list hygiene' },
];

const certifications = [
  { name: 'Braze Certified Marketer', issuer: 'Braze', color: 'primary' },
  { name: 'Braze Certified Developer', issuer: 'Braze', color: 'secondary' },
];

function AchievementCard({ achievement, delay }: { achievement: typeof achievements[0]; delay: number }) {
  const { count, ref } = useCountUp(achievement.value, 2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-2xl bg-card border border-black/8 hover:border-primary/30 hover:shadow-md transition-all duration-300 text-center group"
    >
      <div className="text-3xl md:text-4xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-1">
        {count}{achievement.suffix}
      </div>
      <div className="text-sm font-semibold text-foreground/80 mb-1">{achievement.label}</div>
      <div className="text-xs text-muted-foreground">{achievement.sub}</div>
    </motion.div>
  );
}

export function AchievementsSection() {
  return (
    <>
      <section id="achievements" className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_50%,rgba(124,58,237,0.04),transparent)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
              Impact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Achievements
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-8">
            {achievements.map((a, i) => (
              <AchievementCard key={a.label} achievement={a} delay={i * 0.05} />
            ))}
          </div>

        </div>
      </section>

      <section id="certifications" className="pb-24 lg:pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-secondary mb-4">
              Credentials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Certifications
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 max-w-2xl mx-auto gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-black/8 hover:border-black/15 hover:shadow-md transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${cert.color === 'primary' ? 'bg-primary/10 border border-primary/20' : 'bg-secondary/10 border border-secondary/20'}`}>
                  <Award className={`w-6 h-6 ${cert.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground mb-1 leading-tight">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{cert.issuer}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-green-600">
                    <CheckCircle className="w-3 h-3" /> Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
