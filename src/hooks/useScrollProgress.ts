import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }
      
      const currentScroll = window.scrollY;
      const scrollPercentage = (currentScroll / documentHeight) * 100;
      setProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
