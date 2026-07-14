import { useEffect, useRef } from 'react';

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let raf: number;
    let mouseX = -200;
    let mouseY = -200;
    let currentX = -200;
    let currentY = -200;

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function update() {
      currentX = lerp(currentX, mouseX, 0.12);
      currentY = lerp(currentY, mouseY, 0.12);
      el.style.left = `${currentX}px`;
      el.style.top = `${currentY}px`;
      raf = requestAnimationFrame(update);
    }

    function onMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
      style={{
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, rgba(6,182,212,0.03) 40%, transparent 70%)',
        borderRadius: '50%',
      }}
    />
  );
}
