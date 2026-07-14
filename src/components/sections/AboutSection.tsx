import { motion, Variants } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_60%,rgba(124,58,237,0.05),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-black/8 bg-card backdrop-blur-sm p-8 lg:p-10 shadow-sm">
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/8 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-secondary/8 blur-3xl" />

              <div className="relative flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                  <span className="text-white text-sm font-bold font-display">MS</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Malar Subramani</div>
                  <div className="text-xs text-muted-foreground">Customer Engagement Associate</div>
                  <div className="text-xs text-muted-foreground">FXCM &amp; Tradu</div>
                </div>
              </div>

              <div className="relative grid grid-cols-2 gap-4 mb-8 max-w-xs mx-auto w-full">
                {[
                  { val: '5+', label: 'Years Experience', color: 'text-primary' },
                  { val: '1000+', label: 'Campaigns Delivered', color: 'text-secondary' },
                ].map(item => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl bg-black/3 border border-black/8 text-center hover:border-primary/20 transition-colors"
                  >
                    <div className={`text-2xl font-display font-bold ${item.color} mb-1`}>
                      {item.val}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="relative flex items-center gap-4 pt-4 border-t border-black/8">
                <a href="mailto:malarmadhu412@gmail.com" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  malarmadhu412@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/malar-subramani/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
                Turning Automation into{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Meaningful Experiences
                </span>
              </h2>
            </motion.div>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="text-muted-foreground leading-relaxed mb-5"
            >
              My journey into marketing automation began with digital marketing, where I discovered
              a passion for the technical side of customer engagement. While creating campaigns,
              I became increasingly interested in automation, personalization, and data.
            </motion.p>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="text-muted-foreground leading-relaxed"
            >
              Today, I specialize in Salesforce Marketing Cloud and Braze, building responsive
              HTML emails, reusable AMPscript components, automated customer journeys, and
              localized campaigns across multiple regions. I enjoy solving technical challenges
              and finding ways to make marketing more efficient, personal, and impactful.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
