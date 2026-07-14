import { motion } from 'framer-motion';
import { Mail, Linkedin, Download } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'malarmadhu412@gmail.com',
    href: 'mailto:malarmadhu412@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/malar-subramani',
    href: 'https://www.linkedin.com/in/malar-subramani/',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(124,58,237,0.06),transparent)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always interested in discussing Marketing Automation, CRM, Customer Lifecycle Marketing, and Marketing Technology opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-4 mb-8"
        >
          {contactDetails.map((detail, idx) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-black/8 hover:border-primary/25 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                <detail.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">{detail.label}</div>
                <a
                  href={detail.href}
                  target={detail.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {detail.value}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-card border border-black/8 hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-sm font-display font-semibold text-foreground mb-2">Resume</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Download my full resume for a comprehensive overview of my experience, skills, and achievements.
            </p>
            <a
              href="/Malar_Subramani_Resume.pdf"
              download="Malar_Subramani_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-primary/8 to-secondary/8 border border-primary/15"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-foreground">Available for opportunities</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Open to Marketing Automation, CRM, and MarTech roles. Remote and London-based positions welcome.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
