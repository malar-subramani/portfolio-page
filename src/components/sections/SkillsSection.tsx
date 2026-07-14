import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { Megaphone, Settings2, Code2, Target, GitBranch, Zap, Mail, FileText, Users, Database, Braces, Globe, Filter, Layers, BarChart2, RefreshCw } from 'lucide-react';
import { Sisalesforce, SiHubspot, SiHtml5 } from 'react-icons/si';
import brazeLogo from '@/assets/braze-logo.png';

// ─── Theme colour tokens ──────────────────────────────────────────────────────
const C = {
  purple1: '#7C3AED',
  purple2: '#C084FC',
  cyan1:   '#0891B2',
  cyan2:   '#22D3EE',
  blue1:   '#7C3AED',
  blue2:   '#3B82F6',
  green1:  '#059669',
  green2:  '#34D399',
};

// ─── Card data ────────────────────────────────────────────────────────────────

interface Skill {
  name: string;
  icon: ReactNode;
}

interface CardDef {
  id: string;
  title: string;
  icon: ReactNode;
  iconBg: string;
  ring: [string, string];
  skills: Skill[];
}

const CARDS: CardDef[] = [
  {
    id: 'marketing',
    title: 'Marketing Platforms',
    icon: <Megaphone size={18} />,
    iconBg: 'linear-gradient(135deg,#7C3AED,#C084FC)',
    ring: [C.purple1, C.purple2],
    skills: [
            { name: 'Salesforce Marketing Cloud', icon: <Sisalesforce size={12} color="#00A1E0" /> },
      { name: 'Braze',                      icon: <img src={brazeLogo} alt="Braze" style={{ width: 14, height: 14, flexShrink: 0, borderRadius: '50%' }} /> },
      { name: 'HubSpot',                    icon: <SiHubspot size={12} color="#FF7A59" /> },
    ],
  },
  {
    id: 'crm',
    title: 'CRM & Automation Tools',
    icon: <Settings2 size={18} />,
    iconBg: 'linear-gradient(135deg,#0891B2,#22D3EE)',
    ring: [C.cyan1, C.cyan2],
    skills: [
      { name: 'Journey Builder',   icon: <GitBranch size={12} /> },
      { name: 'Automation Studio', icon: <Zap size={12} /> },
      { name: 'Email Studio',      icon: <Mail size={12} /> },
      { name: 'Content Builder',   icon: <FileText size={12} /> },
      { name: 'Contact Builder',   icon: <Users size={12} /> },
    ],
  },
  {
    id: 'dev',
    title: 'Development',
    icon: <Code2 size={18} />,
    iconBg: 'linear-gradient(135deg,#7C3AED,#3B82F6)',
    ring: [C.blue1, C.blue2],
    skills: [
      { name: 'HTML & CSS',                   icon: <SiHtml5 size={12} color="#E34F26" /> },
      { name: 'AMPscript',                      icon: <Sisalesforce size={12} color="#00A1E0" /> },
      { name: 'Liquid',                       icon: <Braces size={12} /> },
      { name: 'SQL',                          icon: <Database size={12} /> },
      { name: 'Responsive Email Development', icon: <Mail size={12} /> },
    ],
  },
  {
    id: 'mktskills',
    title: 'Marketing Skills',
    icon: <Target size={18} />,
    iconBg: 'linear-gradient(135deg,#059669,#34D399)',
    ring: [C.green1, C.green2],
    skills: [
      { name: 'Lifecycle Marketing',            icon: <RefreshCw size={12} /> },
      { name: 'Segmentation & Personalization', icon: <Filter size={12} /> },
      { name: 'Dynamic Content',                icon: <Layers size={12} /> },
      { name: 'Localization',                   icon: <Globe size={12} /> },
      { name: 'Deliverability & A/B Testing',   icon: <BarChart2 size={12} /> },
    ],
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────

function SkillCard({ card, index }: { card: CardDef; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09 }}
      whileHover={{ y: -3, transition: { duration: 0.25 } }}
      className="rounded-2xl border border-black/8 bg-card/80 backdrop-blur-sm hover:border-black/12 transition-all duration-300"
      style={{
        padding: '20px 20px 22px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
      }}
    >
      {/* Subtle corner tint */}
      <div style={{
        position: 'absolute', top: -40, left: -40,
        width: 160, height: 160, borderRadius: '50%',
        background: `radial-gradient(circle,${card.ring[0]}0D 0%,transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Top gradient hairline */}
      <div style={{
        position: 'absolute', top: 0, left: '8%', right: '8%', height: 1,
        background: `linear-gradient(90deg,transparent,${card.ring[0]}60,${card.ring[1]}60,transparent)`,
      }} />

      {/* ── Header row ── */}
      <div className="flex items-center gap-3 mb-5">
        <span style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 36, height: 36, borderRadius: 10,
          background: card.iconBg,
          color: '#fff', flexShrink: 0,
          boxShadow: `0 4px 12px ${card.ring[0]}40`,
        }}>
          {card.icon}
        </span>
        <span className="text-base font-semibold text-foreground font-display">
          {card.title}
        </span>
      </div>

      {/* ── Skill pills with icons ── */}
      <div className="flex flex-wrap gap-2">
        {card.skills.map(skill => (
          <span
            key={skill.name}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
            style={{
              background: `${card.ring[0]}15`,
              color: card.ring[0],
              borderColor: `${card.ring[0]}35`,
            }}
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,rgba(124,58,237,0.05),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_60%,rgba(6,182,212,0.04),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Skills &amp; Expertise
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Technologies and platforms I use to build scalable CRM, marketing automation,
            personalization and customer engagement solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {CARDS.map((card, i) => (
            <SkillCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
