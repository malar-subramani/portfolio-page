import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

function AutomationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let width = 0;
    let height = 0;

    const nodes: { x: number; y: number; vx: number; vy: number; r: number; color: string }[] = [];
    const NODE_COUNT = 40;
    const colors = ['rgba(124,58,237,', 'rgba(6,182,212,', 'rgba(139,92,246,'];

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function init() {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 3 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.25;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(124,58,237,${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color + '0.6)';
        ctx.shadowColor = n.color + '0.8)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function update() {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
    }

    function loop() {
      update();
      draw();
      animFrameId = requestAnimationFrame(loop);
    }

    resize();
    init();
    loop();

    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animFrameId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40"
      aria-hidden="true"
    />
  );
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-display font-bold text-foreground">
        {count}{suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{label}</div>
    </div>
  );
}

const platformBadges = [
  'Salesforce Marketing Cloud', 'Braze', 'HubSpot', 'AMPscript', 'Liquid',
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(124,58,237,0.15),transparent)]" />
      <AutomationCanvas />

      <motion.div
        ref={containerRef}
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm bg-black/5 border border-black/10 text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.45 }}
          className="text-base text-secondary font-medium tracking-wide uppercase mb-4"
        >
          Marketing Automation Specialist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.5 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[0.95] tracking-tight mb-4"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Malar Subramani
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.65 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed font-medium"
        >
          I turn one-off email campaigns into automated lifecycle journeys that drive measurable engagement.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.7 }}
          className="text-base text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I help businesses create meaningful customer experiences through marketing automation.
          With over five years of experience, I specialize in Salesforce Marketing Cloud and Braze,
          building personalized customer journeys, responsive email campaigns, and scalable
          automation solutions that improve efficiency and engagement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-xl font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 text-base"
          >
            View My Projects
          </button>
          <a
            href="/Malar_Subramani_Resume.pdf"
            download="Malar_Subramani_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium bg-black/5 text-foreground border border-black/10 hover:bg-black/8 transition-all duration-200 text-base"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
