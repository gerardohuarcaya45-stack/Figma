import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { loadingMessages } from "../data/questions";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1500);

    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated orbitals */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-64 h-64 border-2 border-indigo-200/30 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute w-96 h-96 border-2 border-purple-200/30 rounded-full"
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute w-48 h-48 border-2 border-indigo-300/40 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>

      {/* Pulsing center */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 max-w-lg px-6">
        <motion.div
          key={currentMessageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl text-gray-800 font-light"
        >
          {loadingMessages[currentMessageIndex]}
        </motion.div>

        {/* Loading dots */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-indigo-600 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
