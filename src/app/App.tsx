import { useState } from "react";
import { LandingHero } from "./components/LandingHero";
import { IntroductionScreen } from "./components/IntroductionScreen";
import { QuestionScreen } from "./components/QuestionScreen";
import { LoadingScreen } from "./components/LoadingScreen";
import { ResultsScreen } from "./components/ResultsScreen";
import { questions, BigFiveTrait } from "./data/questions";

type Screen = "landing" | "introduction" | "questions" | "loading" | "results";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleStart = () => {
    setCurrentScreen("introduction");
  };

  const handleIntroComplete = () => {
    setCurrentScreen("questions");
  };

  const handleAnswer = (value: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setCurrentScreen("loading");
      }, 300);
    }
  };

  const handleLoadingComplete = () => {
    setCurrentScreen("results");
  };

  const handleRestart = () => {
    setCurrentScreen("landing");
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const calculateScores = (): Record<BigFiveTrait, number> => {
    const traitScores: Record<BigFiveTrait, { sum: number; count: number }> = {
      openness: { sum: 0, count: 0 },
      conscientiousness: { sum: 0, count: 0 },
      extraversion: { sum: 0, count: 0 },
      agreeableness: { sum: 0, count: 0 },
      neuroticism: { sum: 0, count: 0 },
    };

    questions.forEach((question) => {
      const answer = answers[question.id];
      if (answer !== undefined) {
        const score = question.reverse ? 6 - answer : answer;
        traitScores[question.trait].sum += score;
        traitScores[question.trait].count += 1;
      }
    });

    const normalizedScores: Record<BigFiveTrait, number> = {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: 0,
    };

    (Object.keys(traitScores) as BigFiveTrait[]).forEach((trait) => {
      const { sum, count } = traitScores[trait];
      if (count > 0) {
        const average = sum / count;
        normalizedScores[trait] = ((average - 1) / 4) * 100;
      }
    });

    return normalizedScores;
  };

  return (
    <div className="size-full min-h-screen overflow-x-hidden">
      {currentScreen === "landing" && <LandingHero onStart={handleStart} />}
      {currentScreen === "introduction" && (
        <IntroductionScreen onComplete={handleIntroComplete} />
      )}
      {currentScreen === "questions" && (
        <QuestionScreen
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      {currentScreen === "loading" && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      {currentScreen === "results" && (
        <ResultsScreen scores={calculateScores()} onRestart={handleRestart} />
      )}
    </div>
  );
}