import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

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
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-[1000] h-0.5 origin-left"
        style={{
          background: `linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)))`,
          transform: `scaleX(${progress / 100})`,
          transformOrigin: 'left',
        }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 2.2 }}
        className={`fixed top-0.5 left-0 right-0 z-[999] transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-black/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-display font-bold tracking-tight transition-opacity hover:opacity-80"
            data-testid="nav-logo"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Malar Subramani
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-black/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/Malar_Subramani_Resume.pdf"
              download="Malar_Subramani_Resume.pdf"
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              data-testid="nav-cta-resume"
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            data-testid="nav-mobile-toggle"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-black/5"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    onClick={() => { scrollTo(link.href); setMobileOpen(false); }}
                    className="w-full text-left px-3 py-2.5 text-sm rounded-md text-muted-foreground hover:text-foreground hover:bg-black/5 transition-colors"
                    data-testid={`nav-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-2">
                  <a
                    href="/Malar_Subramani_Resume.pdf"
                    download="Malar_Subramani_Resume.pdf"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    data-testid="nav-mobile-resume"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
