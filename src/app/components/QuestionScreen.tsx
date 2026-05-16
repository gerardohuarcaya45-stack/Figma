import { motion } from "motion/react";
import { Question } from "../data/questions";

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (value: number) => void;
}

const likertOptions = [
  { value: 1, label: "Muy en desacuerdo" },
  { value: 2, label: "En desacuerdo" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "De acuerdo" },
  { value: 5, label: "Muy de acuerdo" },
];

export function QuestionScreen({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuestionScreenProps) {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="min-h-screen w-full flex flex-col p-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Progress bar */}
      <div className="w-full max-w-3xl mx-auto mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-600">
            Pregunta {questionNumber} de {totalQuestions}
          </span>
          <span className="text-sm font-medium text-indigo-600">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-600 to-purple-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question content */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-3xl"
        >
          {/* Question text */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-gray-900 mb-16 leading-relaxed font-light px-4">
            {question.text}
          </h2>

          {/* Likert scale options */}
          <div className="space-y-3 px-4">
            {likertOptions.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => onAnswer(option.value)}
                whileHover={{ scale: 1.01, x: 8 }}
                whileTap={{ scale: 0.99 }}
                className="w-full p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl text-left hover:border-indigo-400 hover:bg-white hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-gray-300 group-hover:border-indigo-600 flex items-center justify-center transition-colors">
                    <span className="text-lg font-medium text-gray-600 group-hover:text-indigo-600 transition-colors">
                      {option.value}
                    </span>
                  </div>
                  <span className="text-lg text-gray-800 group-hover:text-indigo-900 transition-colors">
                    {option.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
