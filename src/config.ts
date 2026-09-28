import type { Localized } from "./i18n";

export type ProjectLink = {
  label: Localized;
  href: string;
};

export type Project = {
  slug: string;
  name: Localized;
  hook: Localized;
  skills: string[];
  role?: Localized;
  duration?: Localized;
  video?: string;
  screenshots?: string[];
  links?: ProjectLink[];
  caseStudy?: {
    problem: Localized;
    role: Localized;
    choices: Localized;
    challenges: Localized;
    results: Localized;
    improve: Localized;
  };
};

export const siteConfig = {
  name: "Thomas Pouly",
  title: {
    fr: "Développeur Flutter",
    en: "Flutter Developer",
  } satisfies Localized,
  description: {
    fr: "Portfolio de Thomas Pouly, développeur Flutter à Marseille.",
    en: "Portfolio of Thomas Pouly, Flutter developer based in Marseille.",
  } satisfies Localized,
  accentColor: "#1d4ed8",
  social: {
    email: "tpouly@live.fr",
    linkedin: "https://linkedin.com/in/thomaspouly",
    twitter: "",
    github: "https://github.com/thomaspouly",
  },
  aboutMe: {
    fr: "Développeur Flutter avec 6 ans d'expérience sur des applications mobiles iOS et Android complexes. Spécialisé en architecture BLoC, optimisation des performances et interfaces avancées (rendering pipeline, shaders, 3D). À l'aise en environnement startup, avec une forte évolution produit, des pivots fréquents et une collaboration directe avec les équipes design et produit.",
    en: "Flutter developer with 6 years of experience building complex iOS and Android apps. I focus on BLoC architecture, performance work, and advanced interfaces (rendering pipeline, shaders, 3D). Comfortable in startups with fast product changes, frequent pivots, and close work with design and product.",
  } satisfies Localized,
  skills: [
    "Flutter",
    "Dart",
    "BLoC",
    "Clean Architecture",
    "Firebase",
    "REST API",
    "Web3",
    "CI/CD",
  ],
  projects: [
    {
      slug: "mydid",
      name: { fr: "MyDid", en: "MyDid" },
      hook: {
        fr: "Application mobile d'identité numérique et de badges décentralisés, avec messagerie sécurisée. Publiée sur iOS et Android.",
        en: "Mobile app for digital identity and decentralized badges, with secure messaging. Live on iOS and Android.",
      },
      skills: [
        "Flutter",
        "Dart",
        "BLoC",
        "Web3",
        "Nostr",
        "REST API",
        "Shaders",
        "Three.js",
      ],
      role: { fr: "Mobile Developer", en: "Mobile Developer" },
      duration: { fr: "Depuis juillet 2024", en: "Since July 2024" },
      links: [
        { label: { fr: "Site", en: "Website" }, href: "https://studio.mydid.com" },
      ],
      caseStudy: {
        problem: {
          fr: "MyDid construit une identité numérique et une communauté autour de badges décentralisés, d'une messagerie sécurisée et d'un produit qui pivote souvent. L'enjeu mobile : livrer des parcours Web3 utilisables, sans que la complexité blockchain ou 3D rende l'app illisible.",
          en: "MyDid is building digital identity and community around decentralized badges, secure messaging, and a product that pivots often. The mobile challenge: ship usable Web3 flows without letting blockchain or 3D complexity get in the way.",
        },
        role: {
          fr: "Mobile Developer dans l'équipe produit, à Aix-en-Provence. Je développe les fonctionnalités Flutter iOS/Android, les parcours Web3, la messagerie et les interfaces avancées, en lien direct avec le design et le produit.",
          en: "Mobile Developer on the product team in Aix-en-Provence. I build the Flutter iOS/Android features, Web3 flows, messaging, and advanced UI, working directly with design and product.",
        },
        choices: {
          fr: "Flutter et Dart pour un seul code iOS/Android, avec un cycle de vie complet jusqu'aux stores. BLoC pour le state : prévisible, testable, et déjà le standard de l'équipe. Nostr pour la messagerie décentralisée plutôt qu'un backend propriétaire. Shaders et Three.js quand un rendu 3D apporte vraiment un différenciant visuel, pas par défaut.",
          en: "Flutter and Dart for one iOS/Android codebase, through to store release. BLoC for state: predictable, testable, and already the team standard. Nostr for decentralized messaging instead of a proprietary backend. Shaders and Three.js only when 3D actually differentiates the product.",
        },
        challenges: {
          fr: "Deux sujets concrets. D'abord les pivots produit : chaque refonte UI/UX s'empile sur la précédente, donc il faut livrer sans figer une dette impossible à reprendre. Ensuite Web3 et Nostr : transactions, wallets et messagerie décentralisée doivent rester compréhensibles, avec des états d'erreur et de sync clairs. Les shaders et l'intégration 3D demandent aussi de surveiller le rendering pipeline pour ne pas casser les perfs.",
          en: "Two real problems. First, product pivots: each UI/UX rewrite stacks on the last one, so you ship without locking in debt you cannot unwind. Second, Web3 and Nostr: transactions, wallets, and decentralized messaging have to stay understandable, with clear error and sync states. Shaders and 3D also mean watching the rendering pipeline so performance does not fall over.",
        },
        results: {
          fr: "L'application est publiée sur l'App Store et le Play Store. Fonctionnalités livrées : parcours Web3 (transactions, blockchain, wallets), messagerie décentralisée Nostr, interfaces 3D et shaders, et plusieurs refontes UI/UX majeures.",
          en: "The app is live on the App Store and Play Store. Shipped: Web3 flows (transactions, blockchain, wallets), Nostr decentralized messaging, 3D UI and custom shaders, and several major UI/UX redesigns.",
        },
        improve: {
          fr: "Je documenterais plus tôt les couches qui survivent aux pivots, pour limiter la dette à chaque refonte. Sur le Web3, je pousserais encore les états vides et les erreurs métier : c'est ce qui décide si un utilisateur non-crypto reste. Je n'ai pas de chiffres d'usage publics à afficher ici.",
          en: "I would document earlier which layers should survive pivots, to limit debt on each redesign. On Web3, I would push empty and error states further: that is what decides whether a non-crypto user stays. I do not have public usage numbers to show here.",
        },
      },
    },
  ] satisfies Project[],
  experience: [
    {
      company: "MyDid — Aix-en-Provence",
      title: { fr: "Mobile Developer", en: "Mobile Developer" },
      dateRange: { fr: "Juil. 2024 — Présent", en: "Jul 2024 — Present" },
      bullets: [
        {
          fr: "Développement Flutter d'une app Web3 : badges décentralisés, identité numérique, messagerie sécurisée.",
          en: "Flutter development on a Web3 app: decentralized badges, digital identity, secure messaging.",
        },
        {
          fr: "Parcours Web3 : transactions crypto, intégration blockchain, gestion de wallets.",
          en: "Web3 flows: crypto transactions, blockchain integration, wallet management.",
        },
        {
          fr: "Messagerie décentralisée complète via le protocole Nostr.",
          en: "Full decentralized messaging over the Nostr protocol.",
        },
        {
          fr: "Interfaces 3D et shaders personnalisés, plus plusieurs refontes UI/UX dans un contexte de pivots fréquents.",
          en: "3D interfaces and custom shaders, plus several UI/UX redesigns during frequent product pivots.",
        },
      ],
    },
    {
      company: "Auto-entrepreneur",
      title: {
        fr: "Mobile Developer — Freelance",
        en: "Mobile Developer — Freelance",
      },
      dateRange: { fr: "Juil. 2021 — Août 2024", en: "Jul 2021 — Aug 2024" },
      bullets: [
        {
          fr: "Missions Flutter pour clients directs : jeu mobile, e-commerce, applications métier.",
          en: "Flutter work for direct clients: mobile game, e-commerce, business apps.",
        },
        {
          fr: "Livraison de fonctionnalités sur plusieurs applications publiées, de la conception à la mise en store.",
          en: "Shipped features on several published apps, from design through store release.",
        },
        {
          fr: "Jeu mobile Flutter de A à Z : game loop, animations, state management.",
          en: "Flutter mobile game from scratch: game loop, animations, state management.",
        },
        {
          fr: "App e-commerce (catalogue, panier, API REST) et collaboration directe sur maquettes Figma.",
          en: "E-commerce app (catalog, cart, REST API) and direct collaboration on Figma designs.",
        },
      ],
    },
    {
      company: "Diverses entreprises",
      title: {
        fr: "Stages en développement mobile",
        en: "Mobile development internships",
      },
      dateRange: { fr: "Mai 2019 — Août 2021", en: "May 2019 — Aug 2021" },
      bullets: [
        {
          fr: "Trois stages mobile : découverte de Flutter et des fondamentaux (BLoC, REST, Firebase, Agile).",
          en: "Three mobile internships: Flutter fundamentals (BLoC, REST, Firebase, Agile).",
        },
      ],
    },
  ],
  education: [
    {
      school: "Université Lyon 2 — Lyon, France",
      degree: {
        fr: "M1 Informatique — Spécialisation Data Science",
        en: "M1 Computer Science — Data Science",
      },
      dateRange: { fr: "Sep. 2017 — Juil. 2021", en: "Sep 2017 — Jul 2021" },
      achievements: [
        {
          fr: "DUT + L3 MIASHS + M1 : programmation, algorithmique, bases de données, statistiques décisionnelles.",
          en: "DUT + L3 MIASHS + M1: programming, algorithms, databases, decision statistics.",
        },
      ],
    },
  ],
};
