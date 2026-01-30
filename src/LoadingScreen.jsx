import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Small delay before finishing to appreciate the 100% state
          setTimeout(onFinish, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(timer);
  }, [onFinish]);

  const words = ["DESIGN", "CODE", "CREATE"];
  const wordIndex = Math.min(Math.floor((progress / 100) * words.length), words.length - 1);

  const pillars = [
    { color: "bg-stone-900", delay: 0 },
    { color: "bg-tan-dark", delay: 0.1 },
    { color: "bg-tan", delay: 0.2 },
    { color: "bg-tan-light", delay: 0.3 },
    { color: "bg-stone-100", delay: 0.4 },
  ];

  return (
    <div className="fixed inset-0 z-[200] overflow-hidden bg-cream">
      {/* Pillar Container */}
      <div className="flex h-full w-full">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 1,
              delay: pillar.delay,
              ease: [0.76, 0, 0.24, 1],
            }}
            className={`flex-1 ${pillar.color} relative`}
          />
        ))}
      </div>

      {/* Center Content UI */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        {/* Kinetic Word Reveal */}
        <div className="overflow-hidden h-24 mb-4">
          <AnimatePresence mode="wait">
            <motion.h2
              key={wordIndex}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl font-display font-bold text-white mix-blend-difference tracking-tighter"
            >
              {words[wordIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Massive Progress Number */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
        >
          <span className="text-[30vw] font-display font-bold text-stone-900 leading-none">
            {Math.round(progress)}
          </span>
        </motion.div>

        {/* Branding & Status */}
        <div className="mt-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 mb-2"
          >
            <span className="text-[10px] font-bold text-white mix-blend-difference uppercase tracking-[0.5em]">
              PraveenKumar <span className="italic">A</span>
            </span>
          </motion.div>
          
          <div className="w-48 h-[1px] bg-white/20 relative">
            <motion.div
              className="absolute inset-0 bg-white"
              style={{ scaleX: progress / 100 }}
            />
          </div>
        </div>
      </div>

      {/* Ambient Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

LoadingScreen.propTypes = {
  onFinish: PropTypes.func.isRequired,
};

export default LoadingScreen;
