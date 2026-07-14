import { Mail, Linkedin, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

function scrollTo(href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Footer() {
  return (
    <footer className="relative border-t border-black/8 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="text-2xl font-display font-bold mb-3">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Malar Subramani
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Marketing Automation Specialist building scalable CRM experiences through automation, personalization, and data.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Connect</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.linkedin.com/in/malar-subramani/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-black/5 border border-black/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-black/20 hover:bg-black/8 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:malarmadhu412@gmail.com"
                className="w-9 h-9 rounded-lg bg-black/5 border border-black/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-black/20 hover:bg-black/8 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              malarmadhu412@gmail.com
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-black/8">
          <p className="text-xs text-muted-foreground">
            &copy; 2025 Malar Subramani. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
