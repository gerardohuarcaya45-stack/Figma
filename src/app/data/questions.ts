export type BigFiveTrait = 'openness' | 'conscientiousness' | 'extraversion' | 'agreeableness' | 'neuroticism';

export interface Question {
  id: number;
  text: string;
  trait: BigFiveTrait;
  reverse?: boolean;
}

export const questions: Question[] = [
  // Apertura (Openness) - 8 questions
  { id: 1, text: "Disfruto explorar ideas complejas.", trait: "openness" },
  { id: 2, text: "La creatividad es importante en mi vida.", trait: "openness" },
  { id: 3, text: "Me gusta experimentar cosas nuevas.", trait: "openness" },
  { id: 4, text: "Prefiero seguir rutinas establecidas.", trait: "openness", reverse: true },
  { id: 5, text: "Me interesan las discusiones filosóficas profundas.", trait: "openness" },
  { id: 6, text: "Disfruto del arte y la música.", trait: "openness" },
  { id: 7, text: "Prefiero las cosas prácticas a las abstractas.", trait: "openness", reverse: true },
  { id: 8, text: "Me gusta imaginar posibilidades futuras.", trait: "openness" },

  // Responsabilidad (Conscientiousness) - 8 questions
  { id: 9, text: "Me gusta planificar con anticipación.", trait: "conscientiousness" },
  { id: 10, text: "Cumplo mis responsabilidades cuidadosamente.", trait: "conscientiousness" },
  { id: 11, text: "Soy organizado y ordenado.", trait: "conscientiousness" },
  { id: 12, text: "A menudo dejo las cosas para después.", trait: "conscientiousness", reverse: true },
  { id: 13, text: "Presto atención a los detalles.", trait: "conscientiousness" },
  { id: 14, text: "Me esfuerzo por alcanzar la excelencia.", trait: "conscientiousness" },
  { id: 15, text: "A veces soy descuidado.", trait: "conscientiousness", reverse: true },
  { id: 16, text: "Termino lo que empiezo.", trait: "conscientiousness" },

  // Extraversión (Extraversion) - 8 questions
  { id: 17, text: "Me siento energizado al interactuar con otras personas.", trait: "extraversion" },
  { id: 18, text: "Disfruto ser el centro de atención.", trait: "extraversion" },
  { id: 19, text: "Me gusta estar rodeado de gente.", trait: "extraversion" },
  { id: 20, text: "Prefiero pasar tiempo solo.", trait: "extraversion", reverse: true },
  { id: 21, text: "Soy el alma de la fiesta.", trait: "extraversion" },
  { id: 22, text: "Me resulta fácil hablar con extraños.", trait: "extraversion" },
  { id: 23, text: "Soy reservado en situaciones sociales.", trait: "extraversion", reverse: true },
  { id: 24, text: "Me gusta tomar la iniciativa en grupos.", trait: "extraversion" },

  // Amabilidad (Agreeableness) - 8 questions
  { id: 25, text: "Intento comprender las emociones de los demás.", trait: "agreeableness" },
  { id: 26, text: "Evito conflictos innecesarios.", trait: "agreeableness" },
  { id: 27, text: "Me preocupo por el bienestar de otros.", trait: "agreeableness" },
  { id: 28, text: "A veces soy escéptico con las intenciones de otros.", trait: "agreeableness", reverse: true },
  { id: 29, text: "Soy cooperativo y colaborador.", trait: "agreeableness" },
  { id: 30, text: "Perdono fácilmente.", trait: "agreeableness" },
  { id: 31, text: "Puedo ser competitivo y desafiante.", trait: "agreeableness", reverse: true },
  { id: 32, text: "Me gusta ayudar a los demás.", trait: "agreeableness" },

  // Neuroticismo (Neuroticism) - 8 questions
  { id: 33, text: "A veces me preocupo más de lo necesario.", trait: "neuroticism" },
  { id: 34, text: "Puedo sentir estrés fácilmente.", trait: "neuroticism" },
  { id: 35, text: "Mis emociones cambian con frecuencia.", trait: "neuroticism" },
  { id: 36, text: "Me mantengo calmado en situaciones difíciles.", trait: "neuroticism", reverse: true },
  { id: 37, text: "A veces me siento ansioso sin razón aparente.", trait: "neuroticism" },
  { id: 38, text: "Tiendo a pensar demasiado en las cosas.", trait: "neuroticism" },
  { id: 39, text: "Soy emocionalmente estable.", trait: "neuroticism", reverse: true },
  { id: 40, text: "Puedo sentirme abrumado por responsabilidades.", trait: "neuroticism" },
];

export const introductionSlides = [
  "Tu personalidad influye en cómo amas, trabajas, decides y sueñas.",
  "El modelo Big Five es utilizado por psicólogos e investigadores en todo el mundo.",
  "Responder intuitivamente genera resultados más precisos.",
];

export const transitionMessages = [
  "Excelente progreso.",
  "Tus respuestas están construyendo tu perfil psicológico.",
  "Ya casi terminamos.",
];

export const loadingMessages = [
  "Analizando patrones de personalidad…",
  "Detectando tendencias cognitivas",
  "Interpretando rasgos conductuales",
  "Construyendo tu perfil",
];

export const traitNames: Record<BigFiveTrait, string> = {
  openness: "Apertura",
  conscientiousness: "Responsabilidad",
  extraversion: "Extraversión",
  agreeableness: "Amabilidad",
  neuroticism: "Neuroticismo",
};

export const traitDescriptions: Record<BigFiveTrait, {
  high: string;
  low: string;
  strengths: string[];
  challenges: string[];
}> = {
  openness: {
    high: "Eres creativo, curioso y abierto a nuevas experiencias. Disfrutas explorar ideas abstractas y pensar de forma innovadora.",
    low: "Prefieres lo práctico y lo familiar. Valoras la tradición y te sientes cómodo con rutinas establecidas.",
    strengths: ["Creatividad", "Curiosidad intelectual", "Adaptabilidad", "Imaginación"],
    challenges: ["Puede ser visto como poco práctico", "Dificultad con rutinas"],
  },
  conscientiousness: {
    high: "Eres organizado, confiable y orientado a metas. Planificas cuidadosamente y cumples tus compromisos.",
    low: "Eres espontáneo y flexible. Prefieres la libertad y no te gustan las estructuras rígidas.",
    strengths: ["Disciplina", "Organización", "Confiabilidad", "Perseverancia"],
    challenges: ["Perfeccionismo", "Puede ser inflexible"],
  },
  extraversion: {
    high: "Te energizas con la interacción social. Eres sociable, entusiasta y disfrutas estar rodeado de personas.",
    low: "Prefieres ambientes tranquilos y reflexivos. Valoras la introspección y las conversaciones profundas.",
    strengths: ["Habilidades sociales", "Energía", "Optimismo", "Liderazgo"],
    challenges: ["Puede abrumar a otros", "Necesita estimulación constante"],
  },
  agreeableness: {
    high: "Eres empático, cooperativo y valoras la armonía. Te preocupas genuinamente por los demás.",
    low: "Eres directo y objetivo. Priorizas la verdad sobre la diplomacia y defiendes tus ideas firmemente.",
    strengths: ["Empatía", "Cooperación", "Compasión", "Diplomacia"],
    challenges: ["Dificultad para decir no", "Puede evitar conflictos necesarios"],
  },
  neuroticism: {
    high: "Eres sensible emocionalmente y consciente de tus sentimientos. Esto te permite conectar profundamente con tus emociones.",
    low: "Eres emocionalmente estable y resiliente. Manejas bien el estrés y mantienes la calma bajo presión.",
    strengths: ["Conciencia emocional", "Profundidad", "Sensibilidad"],
    challenges: ["Tendencia a la ansiedad", "Puede preocuparse en exceso"],
  },
};
