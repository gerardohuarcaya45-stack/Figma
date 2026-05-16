import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { introductionSlides } from "../data/questions";

interface IntroductionScreenProps {
  onComplete: () => void;
}

export function IntroductionScreen({ onComplete }: IntroductionScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < introductionSlides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center space-y-12"
      >
        {/* Progress dots */}
        <div className="flex justify-center gap-2">
          {introductionSlides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-indigo-600"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-relaxed font-light px-8">
          {introductionSlides[currentSlide]}
        </p>

        {/* Continue button */}
        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-16 px-10 py-4 bg-gray-900 text-white rounded-2xl inline-flex items-center gap-2 text-lg hover:bg-gray-800 transition-colors shadow-lg"
        >
          {currentSlide < introductionSlides.length - 1 ? "Continuar" : "Comenzar preguntas"}
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </div>
  );
}
