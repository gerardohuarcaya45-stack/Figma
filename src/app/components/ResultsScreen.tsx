import { motion } from "motion/react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { BigFiveTrait, traitNames, traitDescriptions } from "../data/questions";
import { Download, RotateCcw } from "lucide-react";

interface ResultsScreenProps {
  scores: Record<BigFiveTrait, number>;
  onRestart: () => void;
}

export function ResultsScreen({ scores, onRestart }: ResultsScreenProps) {
  const chartData = [
    { trait: traitNames.openness, value: scores.openness, fullMark: 100 },
    { trait: traitNames.conscientiousness, value: scores.conscientiousness, fullMark: 100 },
    { trait: traitNames.extraversion, value: scores.extraversion, fullMark: 100 },
    { trait: traitNames.agreeableness, value: scores.agreeableness, fullMark: 100 },
    { trait: traitNames.neuroticism, value: scores.neuroticism, fullMark: 100 },
  ];

  const personalityType = generatePersonalityType(scores);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-semibold text-gray-900"
          >
            Tu Perfil de Personalidad
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600"
          >
            {personalityType}
          </motion.p>
        </div>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200"
        >
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={chartData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="trait" tick={{ fill: "#4b5563", fontSize: 14 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#9ca3af" }} />
              <Radar
                name="Tu perfil"
                dataKey="value"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={0.5}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Trait Details */}
        <div className="grid gap-6 md:grid-cols-2">
          {(Object.keys(scores) as BigFiveTrait[]).map((trait, index) => {
            const score = scores[trait];
            const isHigh = score >= 60;
            const description = isHigh
              ? traitDescriptions[trait].high
              : traitDescriptions[trait].low;
            const strengths = traitDescriptions[trait].strengths;
            const challenges = traitDescriptions[trait].challenges;

            return (
              <motion.div
                key={trait}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 space-y-4"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {traitNames[trait]}
                  </h3>
                  <div className="text-2xl font-bold text-indigo-600">
                    {Math.round(score)}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${score}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  />
                </div>

                <p className="text-gray-700 leading-relaxed">{description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-900">Fortalezas:</p>
                  <ul className="space-y-1">
                    {strengths.slice(0, 2).map((strength, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                {score >= 80 || score <= 20 ? (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">Consideraciones:</p>
                    <ul className="space-y-1">
                      {challenges.slice(0, 1).map((challenge, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </motion.div>
            );
          })}
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={onRestart}
            className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-2xl inline-flex items-center gap-2 hover:border-indigo-600 hover:text-indigo-600 transition-colors shadow-md"
          >
            <RotateCcw className="w-5 h-5" />
            Realizar evaluación nuevamente
          </button>
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
            <Download className="w-5 h-5" />
            Descargar resultados (PDF)
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

function generatePersonalityType(scores: Record<BigFiveTrait, number>): string {
  const dominant = (Object.keys(scores) as BigFiveTrait[]).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  const types: Record<BigFiveTrait, string[]> = {
    openness: ["El Explorador Creativo", "La Mente Visionaria", "El Pensador Innovador"],
    conscientiousness: ["El Estratega Disciplinado", "La Mente Organizada", "El Planificador Metódico"],
    extraversion: ["El Alma Sociable", "El Líder Natural", "La Energía Contagiosa"],
    agreeableness: ["El Corazón Empático", "La Mente Colaborativa", "El Mediador Natural"],
    neuroticism: ["La Sensibilidad Profunda", "El Alma Consciente", "La Mente Reflexiva"],
  };

  const typeOptions = types[dominant];
  return typeOptions[Math.floor(Math.random() * typeOptions.length)];
}
