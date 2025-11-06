import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedLogoProps {
  onComplete?: () => void;
}

export default function AnimatedLogo({ onComplete }: AnimatedLogoProps) {
  const [isComplete, setIsComplete] = useState(false);
  const text = "houseflow";
  const letters = text.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      if (onComplete) {
        setTimeout(onComplete, 500);
      }
    }, 1200 + 500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isComplete ? 0 : 1,
              y: isComplete ? 0 : 0,
              color: isComplete ? "#1D1D1F" : "#86868B",
            }}
            transition={{
              opacity: { delay: index * 0.08, duration: 0.3 },
              y: { delay: index * 0.08, duration: 0.4, ease: "easeOut" },
              color: { delay: 0.6, duration: 0.3 },
            }}
            className="text-6xl font-light tracking-tight"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
