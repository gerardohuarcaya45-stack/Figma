import { motion } from "motion/react";
import { Brain, Lock, Clock } from "lucide-react";

interface LandingHeroProps {
  onStart: () => void;
}

export function LandingHero({ onStart }: LandingHeroProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-tight tracking-tight">
            Descubre cómo funciona<br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              realmente tu personalidad
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Una evaluación moderna basada en el modelo psicológico Big Five.
          </p>

          {/* CTA Button */}
          <motion.button
            onClick={onStart}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-medium rounded-2xl shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow"
          >
            Comenzar evaluación
          </motion.button>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-16 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-600" />
              <span>5–8 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-600" />
              <span>Privacidad garantizada</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-indigo-600" />
              <span>Basado en ciencia</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
