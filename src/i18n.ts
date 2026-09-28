export type Locale = "fr" | "en";

export const defaultLocale: Locale = "fr";

export type Localized = {
  fr: string;
  en: string;
};

export const ui = {
  about: { fr: "À propos", en: "About" },
  projects: { fr: "Projets", en: "Projects" },
  experience: { fr: "Expérience", en: "Experience" },
  education: { fr: "Formation", en: "Education" },
  hello: { fr: "Bonjour ! 👋", en: "Hello! 👋" },
  im: { fr: "Je suis", en: "I'm" },
  rights: { fr: "Tous droits réservés.", en: "All rights reserved." },
  caseStudy: { fr: "Case study", en: "Case study" },
  allProjects: { fr: "Tous les projets", en: "All projects" },
  role: { fr: "Rôle", en: "Role" },
  duration: { fr: "Durée", en: "Duration" },
  problem: { fr: "Le problème", en: "The problem" },
  myRole: { fr: "Mon rôle", en: "My role" },
  choices: { fr: "Mes choix techniques", en: "Technical choices" },
  challenges: { fr: "Les défis", en: "Challenges" },
  results: { fr: "Résultats", en: "Results" },
  improve: { fr: "Ce que j'améliorerais", en: "What I would improve" },
  demoCaption: {
    fr: "Parcours principal, 20 à 30 secondes",
    en: "Main user flow, 20 to 30 seconds",
  },
} as const satisfies Record<string, Localized>;
