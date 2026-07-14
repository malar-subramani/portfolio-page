import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import imgLocalization from '@/assets/projects/project-localization.jpg';
import imgLibrary from '@/assets/projects/project-library.jpg';
import imgOptimization from '@/assets/projects/project-optimization.jpg';
import imgMultiEntity from '@/assets/projects/project-multientity.jpg';
import imgExpense from '@/assets/projects/project-expense.jpg';
import imgPortfolio from '@/assets/projects/project-portfolio.jpg';

interface Project {
  title: string;
  tag: string;
  summary: string;
  outcome: string;
  image: string;
  role: string;
  description: string;
  highlights: string[];
  tools: string[];
}

const projects: Project[] = [
  {
    title: 'Global Localization Framework',
    tag: 'Braze • Salesforce Marketing Cloud',
    summary:
      'A centralized localization framework that delivers dynamic, region-specific email campaigns from a single reusable template.',
    outcome: 'Reduced maintenance effort by 60%',
    image: imgLocalization,
    role: 'Marketing Automation Engineer',
    description:
      'Designed and implemented a centralized localization framework to support multi-region email campaigns across global markets. The solution enabled marketing teams to deliver fully localized, region-specific content — including language, imagery, and offers — all from a single master template, eliminating the need to maintain separate templates per region.',
    highlights: [
      'Reduced template maintenance effort by 60% by consolidating region-specific variations into one dynamic template',
      'Supported campaigns across 10+ regions and languages using dynamic content blocks',
      'Collaborated with regional marketing teams to map localization rules and content requirements',
      'Integrated with CRM data to auto-detect user locale and apply the correct content variant at send time',
    ],
    tools: ['Braze', 'Salesforce Marketing Cloud', 'Liquid', 'AMPscript', 'HTML/CSS'],
  },
  {
    title: 'Reusable AMPscript Component Library',
    tag: 'Salesforce Marketing Cloud • AMPscript',
    summary:
      'A standardized library of reusable email components that accelerated campaign production and improved consistency.',
    outcome: 'Cut campaign build time by 40%',
    image: imgLibrary,
    role: 'Marketing Automation Developer',
    description:
      'Built a comprehensive library of reusable, AMPscript-powered email components to standardize campaign production across teams. Each component was modular, well-documented, and designed to drop into any campaign template with minimal configuration — dramatically reducing build time and ensuring visual and functional consistency across all sends.',
    highlights: [
      'Created 20+ reusable components, including personalized greetings, and dynamic product blocks',
      'Cut average campaign build time by 40% across the marketing team',
      'Established coding standards and documentation practices adopted across the CRM team',
      'Accelerated campaign deployment speed by 30% across the marketing team',
    ],
    tools: ['Salesforce Marketing Cloud', 'AMPscript', 'HTML', 'CSS', 'Content Builder'],
  },
  {
    title: 'Campaign Optimization',
    tag: 'Braze • A/B Testing',
    summary:
      'Streamlined campaign workflows and a data-driven A/B testing framework that improved deployment speed and engagement.',
    outcome: 'Improved CTR by 18%',
    image: imgOptimization,
    role: 'Marketing Automation Specialist',
    description:
      'Led a campaign optimization initiative to improve both the speed of campaign delivery and the quality of engagement outcomes. Introduced a structured A/B testing framework and streamlined internal workflows so every campaign send was informed by data — reducing guesswork and improving key engagement metrics over time.',
    highlights: [
      'Designed a repeatable A/B testing framework covering subject lines, CTAs, send times, and content formats',
      'Improved email open rates by 22% and click-through rates by 18% through iterative testing',
      'Reduced campaign QA and deployment cycle from 3 days to under 1 day',
      'Built reporting dashboards to track test results and share insights with stakeholders',
    ],
    tools: ['Braze', 'A/B Testing', 'Analytics', 'HTML/CSS', 'Google Sheets'],
  },
  {
    title: 'Dynamic Multi-Entity Email Framework',
    tag: 'Salesforce Marketing Cloud • AMPscript',
    summary:
      'Replaced four separate email templates with one dynamic AMPscript-powered framework serving multiple business entities.',
    outcome: 'Reduced maintenance workload by 75%',
    image: imgMultiEntity,
    role: 'Marketing Automation Engineer',
    description:
      "Architected a dynamic email framework that unified four separate business-entity templates into a single, intelligent system. Using AMPscript logic to detect the subscriber's associated entity at send time, the framework automatically applied the correct branding, content, legal disclaimers, and imagery — eliminating template sprawl and significantly reducing long-term maintenance overhead.",
    highlights: [
      'Consolidated 4 standalone email templates into 1 dynamic, entity-aware framework',
      'Reduced template maintenance workload by 75% for my team',
      'Applied entity-specific branding, legal copy, and content blocks using data-driven conditional logic',
      'Enabled faster campaign launches across all business units from a single deployment pipeline',
      'Improved subscriber engagement by 25% through entity-specific personalization',
    ],
    tools: ['Salesforce Marketing Cloud', 'AMPscript', 'HTML', 'CSS', 'Content Builder'],
  },
  {
    title: 'Expense Tracker',
    tag: 'Personal Finance • Product Build',
    summary:
      'A personal finance app that tracks daily expenses and generates a monthly spending analysis with simple insights and reports.',
    outcome: 'Simplified monthly expense tracking',
    image: imgExpense,
    role: 'Product Builder (Personal Project)',
    description:
      'Built a personal finance app to track daily expenses, categorize spending, and generate monthly summary reports with actionable insights. Designed with simplicity in mind — letting users log expenses quickly, view spending trends over time, and understand where their money goes each month without complexity.',
    highlights: [
      'Designed an intuitive expense-logging interface with category tagging and date filtering',
      'Built a monthly summary view showing total spend, category breakdown, and top expense categories',
      'Implemented trend analysis to highlight month-over-month changes in spending habits',
      'Created a clean, mobile-friendly UI focused on ease of daily use',
    ],
    tools: ['React', 'JavaScript', 'CSS', 'Local Storage', 'Chart.js'],
  },
  {
    title: 'Personal Portfolio',
    tag: 'Design • AI-Assisted Build',
    summary:
      'This website — built to showcase my projects, skills, and interest in AI and technology, developed with the help of AI tools.',
    outcome: '6 case studies, fully responsive build',
    image: imgPortfolio,
    role: 'Designer & Developer (Personal Project)',
    description:
      'Designed and built this portfolio from the ground up to showcase my experience, projects, and skills in marketing automation and technology. I used AI-assisted development to speed up the build while keeping code quality high — the same efficiency-focused approach I bring to my marketing automation work.',
    highlights: [
      'Designed and built a fully responsive, animated portfolio with smooth section transitions and scroll interactions',
      'Built using React, TypeScript, and Tailwind CSS, with Framer Motion for animations',
      'Structured content and layout to translate technical marketing work into a clear, recruiter-friendly narrative',
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
];

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(124,58,237,0.04),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real work, measurable results. Click any project to see the full case study.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.button
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              onClick={() => setSelected(project)}
              className="text-left rounded-2xl bg-card border border-black/8 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg leading-snug bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{project.summary}</p>
                <p className="text-sm font-semibold text-foreground mb-3">{project.outcome}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground/70">{project.tag}</p>
                  <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View details →
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 bg-background rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Hero image */}
            <div className="aspect-[16/7] overflow-hidden rounded-t-2xl">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="p-6 md:p-8">
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-2">
                {selected.tag}
              </p>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                {selected.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">{selected.role}</p>

              <p className="text-muted-foreground leading-relaxed mb-6">{selected.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {selected.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-3">
                  Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
