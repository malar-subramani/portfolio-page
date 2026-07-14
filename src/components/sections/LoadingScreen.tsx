import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background pointer-events-none"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tight text-center px-4"
            >
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Malar Subramani
              </span>
            </motion.div>
            
            <div className="h-1 w-48 bg-black/8 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary to-secondary"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
