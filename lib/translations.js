const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      services: "Programs",
      qualification: "For You?",
      contact: "Contact",
      cta: "Book now",
    },

    // Hero
    hero: {
      greeting: "Hi, I'm Youmene",
      headline1: "Train with a plan.",
      headlineAccent: "Progress every week.",
      headline2: "No guesswork.",
      description:
        "We build your training around your body, your goals, and your real schedule so you keep improving without burning out.",
      cta: "Start coaching",
      ctaSecondary: "See real results",
      availability: "1:1 coaching - limited spots",
      humanTitle: "I coach real people with real schedules.",
      humanText:
        "Sessions adapt to your work, stress, and recovery so you can stay consistent.",
      coachNote:
        "Small wins repeated every week create lasting transformation.",
      watermark: "GET STRONGER",
      statYears: "Years Exp.",
      statClients: "Clients",
      statSessions: "Sessions",
    },

    // Tagline
    tagline: {
      eyebrow: "Why choose us",
      headline1: "Built for",
      headline2: "real ",
      headlineAccent: "progress",
      description:
        "You get a clear plan, expert coaching, and measurable outcomes. Every week has a purpose, every session is tracked, and every adjustment is based on your data.",
      proofs: [
        "Custom plan in 72h",
        "Weekly progress tracking",
        "Technique feedback every session",
      ],
      scrollBtn: "See how it works",
      stats: [
        { value: "500+", label: "Athletes Trained" },
        { value: "98%", label: "Success Rate" },
        { value: "15+", label: "Years Experience" },
        { value: "10K+", label: "Sessions Completed" },
      ],
      pillars: [
        {
          title: "Precision Programming",
          desc: "Training blocks are periodized around your goal, schedule, and recovery capacity.",
        },
        {
          title: "Coaching That Adapts",
          desc: "Loads, intensity, and exercise selection are adjusted from your weekly performance and readiness.",
        },
        {
          title: "Results You Can Verify",
          desc: "Strength, body-composition, and conditioning metrics are tracked so progress is visible and objective.",
        },
      ],
    },

    // Coach (Community)
    coach: {
      divider: "MEET YOUR COACH",
      eyebrow: "About the coach",
      headline1: "Coaching with",
      headlineAccent: "real connection",
      bio: "I have coached athletes and everyday people for over 15 years. My work is simple: listen first, understand your reality, then build training that fits your body and your life.",
      noteLabel: "My promise",
      note: "You will always know why you are doing each exercise, and how it helps you move forward.",
      highlights: [
        "Honest feedback in every session",
        "Smart adjustments when life gets busy",
        "Progress you can feel and measure",
      ],
      edgeTitle: "What makes this coaching stand out",
      edgeItems: [
        {
          metric: "24h",
          title: "Fast Feedback Loop",
          desc: "After your check-ins, you get clear feedback quickly so your next sessions are sharper.",
        },
        {
          metric: "Weekly",
          title: "Real Progress Review",
          desc: "Every week we review what worked, what felt off, and what to adjust for steady progress.",
        },
        {
          metric: "Data + Feel",
          title: "Smart Program Adjustments",
          desc: "Your plan is adjusted with both performance data and how your body actually feels.",
        },
      ],
      cta: "Work with me",
      expNumber: "15+",
      expLabel: "Years of\nCoaching",
      placeholder: "Coach photo",
    },

    // About (How it works)
    about: {
      eyebrow: "How it works",
      headline1: "Your path from",
      headline2: "day one to ",
      headlineAccent: "results",
      subtitle: "A proven 4-step process that's transformed hundreds of athletes.",
      steps: [
        {
          num: "01",
          title: "Assessment",
          desc: "Full body composition analysis, mobility screening, and an in-depth goal-setting conversation to build your custom roadmap.",
        },
        {
          num: "02",
          title: "Program Design",
          desc: "Periodized plans rooted in sport science — strength, speed, conditioning, nutrition — all tailored exclusively to you.",
        },
        {
          num: "03",
          title: "1-on-1 Coaching",
          desc: "Hands-on guidance every session. Form corrections, load management, and real-time feedback to maximize every rep.",
        },
        {
          num: "04",
          title: "Track & Evolve",
          desc: "Bi-weekly check-ins, progress metrics, and plan adjustments so you never plateau. We evolve as you evolve.",
        },
        {
          num: "05",
          title: "Pro Results",
          desc: "You've done the work — now see the transformation. Measurable strength gains, a leaner physique, and the confidence that comes from knowing you've earned every result.",
          isFinal: true,
        },
      ],
    },

    // Services
    services: {
      eyebrow: "Programs",
      headline1: "The Team Behind",
      headline2: "Your ",
      headlineAccent: "Progress",
      subtitle:
        "Six focused coaching tracks designed to build speed, strength, and confidence with a clear plan.",
      proofs: [
        "Goal-based planning",
        "Weekly coaching adjustments",
        "Trackable outcomes",
      ],
      metaFocus: "Focus",
      metaResult: "Result",
      bottomTitle: "Not sure where to start?",
      bottomText:
        "I will guide you to the right track based on your level, your goal, and your weekly schedule.",
      bottomCta: "Get my recommendation",
      items: [
        {
          title: "Speed & Agility",
          desc: "Explosive drills, acceleration mechanics, and reactive movement coaching.",
          focus: "first-step speed + movement control",
          result: "quicker cuts and cleaner change of direction",
          tag: "Popular",
        },
        {
          title: "Strength Training",
          desc: "Progressive strength cycles built around safe and efficient compound lifts.",
          focus: "full-body force production",
          result: "measurable weekly PRs",
        },
        {
          title: "Conditioning",
          desc: "Targeted cardio blocks to improve stamina without killing recovery.",
          focus: "aerobic + anaerobic capacity",
          result: "better work capacity in sessions",
        },
        {
          title: "Sprint Mechanics",
          desc: "Technical sprint sessions with drill correction and stride optimization.",
          focus: "running efficiency",
          result: "cleaner and faster sprint form",
        },
        {
          title: "Fat Loss Programs",
          desc: "Training and nutrition strategy that supports sustainable body composition change.",
          focus: "metabolic consistency",
          result: "leaner physique without burnout",
        },
        {
          title: "Injury Prevention",
          desc: "Prehab work, mobility sequencing, and load management to keep you available.",
          focus: "joint resilience",
          result: "fewer setbacks and interruptions",
        },
      ],
    },

    // Standout Tools
    standout: {
      eyebrow: "Coach Tools",
      headline1: "Smart tools for",
      headlineAccent: "faster results",
      subtitle:
        "Use the same decision framework I use with 1-on-1 clients to plan training and adjust intensity.",
      estimatorTitle: "Goal Timeline Estimator",
      goalLabel: "Primary goal",
      goals: {
        fatLoss: "Fat loss",
        strength: "Strength",
        speed: "Speed",
      },
      levelLabel: "Current level",
      levels: {
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
      },
      sessionsLabel: "Sessions per week",
      week: "week",
      weeks: "weeks",
      recommendedLabel: "Best track",
      focusLabel: "Primary focus",
      splitLabel: "Weekly split",
      winLabel: "Expected win",
      programs: {
        fatLoss: "Fat Loss Program",
        strength: "Strength Training",
        speed: "Speed & Agility",
      },
      focuses: {
        fatLoss: "metabolic consistency + adherence",
        strength: "compound lift quality + load progression",
        speed: "first-step acceleration + clean mechanics",
      },
      wins: {
        fatLoss: "leaner look with better energy",
        strength: "higher numbers with safer form",
        speed: "quicker reactions and sharper movement",
      },
      splits: {
        two: "2 focused full-body sessions",
        three: "3 sessions: strength + speed + conditioning",
        four: "4 sessions with balanced progression",
        five: "5 sessions with high-frequency technical work",
      },
      readinessTitle: "Daily Readiness Check",
      sleepLabel: "Sleep last night",
      stressLabel: "Current stress",
      sorenessLabel: "Muscle soreness",
      readinessScoreLabel: "Readiness score",
      plateauTitle: "Plateau Breaker Protocol",
      stallWeeksLabel: "Weeks stuck at same level",
      trendLabel: "Performance trend",
      trendOptions: {
        down: "Going down",
        flat: "Stagnant",
        up: "Still improving",
      },
      motivationLabel: "Motivation right now",
      sleepQualityLabel: "Sleep quality",
      days: "days",
      coachPlanLabel: "Coach action plan",
      protocols: {
        deload: {
          title: "Strategic Deload",
          desc: "Your system is overloaded. Recover first, then rebuild intensity.",
          actions: [
            "Reduce load to 65-70% for 7 days",
            "Keep technique quality high on core lifts",
            "Increase sleep and hydration targets this week",
          ],
        },
        variation: {
          title: "Variation Reset",
          desc: "You need a fresh training stimulus while keeping progression measurable.",
          actions: [
            "Swap 1-2 key exercises for close variants",
            "Keep volume moderate and add clean tempo work",
            "Re-test top sets after the reset window",
          ],
        },
        adherence: {
          title: "Consistency Rescue",
          desc: "Execution consistency is the limiter. Simplify the week and rebuild rhythm.",
          actions: [
            "Use a 3-session minimum non-negotiable schedule",
            "Prioritize your first main lift and one accessory block",
            "Log every session and review with coach at week end",
          ],
        },
        progression: {
          title: "Progression Push",
          desc: "Momentum is good. Keep structure and push load with control.",
          actions: [
            "Progress one primary lift by small weekly jumps",
            "Keep one speed/conditioning block sharp",
            "Preserve one recovery day to avoid hidden fatigue",
          ],
        },
      },
      statuses: {
        push: {
          title: "Push Day",
          desc: "You are in a strong state today. Keep high-quality intensity in your main lifts.",
          tips: [
            "Prioritize heavy or explosive work first",
            "Keep rest periods honest and track top sets",
            "Finish with technical volume, not random fatigue",
          ],
        },
        build: {
          title: "Build Day",
          desc: "Good day to progress through quality reps and controlled loading.",
          tips: [
            "Use moderate intensity and perfect execution",
            "Add one quality set instead of chasing max load",
            "Keep mobility work at the end of session",
          ],
        },
        recover: {
          title: "Recover Day",
          desc: "Your body needs lower stress input today to protect long-term progress.",
          tips: [
            "Reduce load and focus on movement quality",
            "Use shorter technical sets and longer warm-up",
            "Prioritize sleep and hydration before next hard day",
          ],
        },
      },
      bottomTitle: "Want this built around your exact profile?",
      bottomText:
        "Book your strategy call and I will map your training priorities for the next 8-12 weeks.",
      bottomCta: "Get your custom roadmap",
    },

    // Transformations (Testimonials)
    testimonials: {
      eyebrow: "Testimonials",
      headline1: "What our athletes ",
      headlineAccent: "say",
      items: [
        {
          name: "Alex Rivera",
          role: "Marathon Runner",
          quote:
            "Youmene completely transformed my approach to training. My times dropped by 12% in just 3 months. His understanding of biomechanics is unmatched.",
        },
        {
          name: "Jordan Mitchell",
          role: "CrossFit Athlete",
          quote:
            "The personalized programming is next level. Every session builds on the last. I've never felt stronger or more confident in my movement.",
        },
        {
          name: "Sarah Chen",
          role: "Soccer Player",
          quote:
            "After working with Youmene, my sprint speed and agility improved dramatically. I went from bench player to team captain within a season.",
        },
      ],
    },

    // Qualification
    qualification: {
      eyebrow: "Who I Work With",
      headline1: "Is This",
      headlineAccent: "Right",
      headline2: "For You?",
      subtitle: "I work with dedicated individuals who are serious about transforming their body and mindset. Here's how to know if we're a good match.",
      rightTitle: "This is for you if…",
      wrongTitle: "This is NOT for you if…",
      rightFit: [
        "You're committed to showing up and putting in the work",
        "You want a structured, science-backed training program",
        "You're ready to invest in long-term health, not quick fixes",
        "You value accountability and expert coaching",
        "You're open to pushing past your comfort zone",
      ],
      wrongFit: [
        "You're looking for a magic pill or overnight results",
        "You're not willing to follow a consistent routine",
        "You expect results without effort or discipline",
        "You're not ready to prioritize your health",
        "You just want someone to count your reps",
      ],
      cta: "Book Your Free Strategy Call",
      ctaNote: "No commitment required — let's just talk.",
    },

    // Contact
    contact: {
      eyebrow: "Get in touch",
      headline1: "Ready to start",
      headlineAccent: "training?",
      subtitle:
        "Book your free consultation today. Tell us about your goals and we'll build the perfect plan.",
      chips: [
        "Reply within 24h",
        "Custom roadmap after call",
        "No pressure - just clarity",
      ],
      info: {
        location: { label: "Location", value: "Algeria, Bouira, M'chedallah" },
        phone: { label: "Phone", value: "+213 775 86 88 21" },
        email: { label: "Email", value: "Mechenaneyoumene@gmail.com" },
      },
      processTitle: "What happens next",
      processSteps: [
        "You send your goals and current situation",
        "I review your profile and identify your best starting point",
        "We jump on a short strategy call and map your first 8 weeks",
      ],
      form: {
        introTitle: "Tell me where you are now",
        introHint:
          "The more details you share, the more precise your first plan will be.",
        firstName: "First Name",
        lastName: "Last Name",
        goal: "Primary Goal",
        level: "Current Level",
        email: "Email",
        phone: "Phone",
        message: "Message",
        goalOptions: [
          "Lose fat and get defined",
          "Build strength and muscle",
          "Improve speed and agility",
          "Get fitter and more athletic",
        ],
        levelOptions: ["Beginner", "Intermediate", "Advanced"],
        placeholder: {
          firstName: "John",
          lastName: "Doe",
          goal: "Choose your main goal",
          level: "Choose your current level",
          email: "john@example.com",
          phone: "+213 000 00 00 00",
          message: "Tell us about your goals...",
        },
        submit: "Send Message",
        sending: "Sending...",
        responseNote: "Usually answered in less than one business day.",
        successMsg: "Message sent successfully! We'll get back to you soon.",
        errorMsg: "Something went wrong. Please try again.",
      },
    },

    // Footer
    footer: {
      ctaTitle1: "Train hard.",
      ctaAccent: "Get real results.",
      ctaBtn: "Start your journey",
      brandDesc:
        "Transform your body and mind with personalized coaching. Your journey, your pace, your results.",
      quickLinks: "Quick Links",
      programs: "Programs",
      contactTitle: "Contact",
      copy: "© 2026 Youmene Training. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      quickLinkItems: [
        { label: "About", href: "#about" },
        { label: "Programs", href: "#services" },
        { label: "Results", href: "#transformations" },
        { label: "For You?", href: "#qualification" },
        { label: "Contact", href: "#contact" },
      ],
      programItems: [
        "Speed & Agility",
        "Strength Training",
        "Conditioning",
        "Sprint Mechanics",
        "Fat Loss Programs",
      ],
    },
  },

  fr: {
    // Navbar
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Programmes",
      qualification: "Pour Vous ?",
      contact: "Contact",
      cta: "Réserver",
    },

    // Hero
    hero: {
      greeting: "Salut, moi c'est Youmene",
      headline1: "Entraine-toi avec un plan.",
      headlineAccent: "Progresse chaque semaine.",
      headline2: "Sans hasard.",
      description:
        "On construit ton entrainement selon ton corps, tes objectifs et ton rythme de vie pour progresser sans t'epuiser.",
      cta: "Commencer le coaching",
      ctaSecondary: "Voir des resultats reels",
      availability: "Coaching 1:1 - places limitees",
      humanTitle: "Je coache des personnes reelles, avec de vraies contraintes.",
      humanText:
        "On ajuste les seances selon ton planning, ton energie et ta recuperation.",
      coachNote:
        "Les petites victoires repetees chaque semaine creent une vraie transformation.",
      watermark: "PLUS FORT",
      statYears: "Ans d'exp.",
      statClients: "Clients",
      statSessions: "Seances",
    },

    // Tagline
    tagline: {
      eyebrow: "Pourquoi nous choisir ?",
      headline1: "Une méthode",
      headline2: "qui produit des ",
      headlineAccent: "résultats",
      description:
        "Vous avancez avec un plan clair, un coaching exigeant et des indicateurs concrets. Chaque séance a un objectif, chaque semaine est suivie, et chaque ajustement est justifié par vos données.",
      proofs: [
        "Plan personnalisé en 72 h",
        "Suivi hebdomadaire des progrès",
        "Corrections techniques à chaque séance",
      ],
      scrollBtn: "Voir la méthode",
      stats: [
        { value: "500+", label: "Athlètes entraînés" },
        { value: "98%", label: "Taux de réussite" },
        { value: "15+", label: "Années de terrain" },
        { value: "10K+", label: "Séances encadrées" },
      ],
      pillars: [
        {
          title: "Programmation précise",
          desc: "Cycles d'entraînement périodisés selon vos objectifs, votre emploi du temps et votre récupération.",
        },
        {
          title: "Coaching évolutif",
          desc: "Charges, intensité et exercices sont ajustés en continu selon vos performances hebdomadaires.",
        },
        {
          title: "Résultats mesurables",
          desc: "Force, composition corporelle et condition physique sont suivies pour prouver votre progression.",
        },
      ],
    },

    // Coach (Community)
    coach: {
      divider: "RENCONTREZ VOTRE COACH",
      eyebrow: "A propos du coach",
      headline1: "Un coaching avec",
      headlineAccent: "une vraie relation",
      bio: "Depuis plus de 15 ans, j'accompagne des athletes et des personnes actives. Mon approche est simple: je vous ecoute d'abord, je comprends votre realite, puis je construis un entrainement adapte a votre corps et a votre vie.",
      noteLabel: "Ma promesse",
      note: "Vous saurez toujours pourquoi vous faites chaque exercice et comment il vous fait progresser.",
      highlights: [
        "Des retours honnetes a chaque seance",
        "Des ajustements intelligents quand le planning change",
        "Une progression que vous ressentez et mesurez",
      ],
      edgeTitle: "Ce qui rend ce coaching different",
      edgeItems: [
        {
          metric: "24h",
          title: "Feedback rapide",
          desc: "Apres vos bilans, vous recevez un retour clair rapidement pour mieux attaquer la suite.",
        },
        {
          metric: "Hebdo",
          title: "Revue de progression reelle",
          desc: "Chaque semaine on analyse ce qui marche, ce qui bloque, et ce qu'on ajuste.",
        },
        {
          metric: "Data + Ressenti",
          title: "Ajustements intelligents",
          desc: "Le programme evolue selon vos performances et vos sensations reelles sur le terrain.",
        },
      ],
      cta: "Travailler avec moi",
      expNumber: "15+",
      expLabel: "Ans de\ncoaching",
      placeholder: "Photo du coach",
    },

    // About (How it works)
    about: {
      eyebrow: "Comment ça marche",
      headline1: "Votre parcours du",
      headline2: "premier jour aux ",
      headlineAccent: "résultats",
      subtitle:
        "Un processus en 4 étapes éprouvé qui a transformé des centaines d'athlètes.",
      steps: [
        {
          num: "01",
          title: "Évaluation",
          desc: "Analyse complète de la composition corporelle, bilan de mobilité et conversation approfondie sur vos objectifs pour construire votre feuille de route.",
        },
        {
          num: "02",
          title: "Conception du programme",
          desc: "Plans périodisés basés sur la science du sport — force, vitesse, conditionnement, nutrition — tous adaptés exclusivement à vous.",
        },
        {
          num: "03",
          title: "Coaching individuel",
          desc: "Guidage personnalisé à chaque séance. Corrections de forme, gestion des charges et feedback en temps réel pour maximiser chaque répétition.",
        },
        {
          num: "04",
          title: "Suivi & Évolution",
          desc: "Bilans bi-hebdomadaires, métriques de progression et ajustements du plan pour ne jamais stagner. On évolue ensemble.",
        },
        {
          num: "05",
          title: "Résultats Pro",
          desc: "Vous avez fait le travail — admirez la transformation. Des gains de force mesurables, un physique plus affûté et la confiance de savoir que chaque résultat a été mérité.",
          isFinal: true,
        },
      ],
    },

    // Services
    services: {
      eyebrow: "Programmes",
      headline1: "L'equipe derriere",
      headline2: "Votre ",
      headlineAccent: "Progression",
      subtitle:
        "Six parcours d'entrainement precis pour developper vitesse, force et confiance avec une methode claire.",
      proofs: [
        "Planification selon vos objectifs",
        "Ajustements hebdomadaires",
        "Resultats mesurables",
      ],
      metaFocus: "Focus",
      metaResult: "Resultat",
      bottomTitle: "Vous ne savez pas par ou commencer ?",
      bottomText:
        "Je vous oriente vers le bon programme selon votre niveau, votre objectif et votre rythme hebdomadaire.",
      bottomCta: "Recevoir ma recommandation",
      items: [
        {
          title: "Vitesse & Agilite",
          desc: "Travail explosif, mecanique d'acceleration et coaching du mouvement reactif.",
          focus: "vitesse sur les premiers appuis + controle du deplacement",
          result: "appuis plus nets et changements de direction plus rapides",
          tag: "Populaire",
        },
        {
          title: "Musculation",
          desc: "Cycles de force progressifs construits autour des mouvements fondamentaux.",
          focus: "production de force globale",
          result: "PR hebdomadaires mesurables",
        },
        {
          title: "Conditionnement",
          desc: "Blocs cardio cibles pour gagner en endurance sans nuire a la recuperation.",
          focus: "capacite aerobie + anaerobie",
          result: "meilleure tenue d'effort en seance",
        },
        {
          title: "Mecanique de Sprint",
          desc: "Seances techniques avec corrections de foulée et optimisation de la course.",
          focus: "efficacite de course",
          result: "sprint plus propre et plus rapide",
        },
        {
          title: "Perte de Gras",
          desc: "Strategie entrainement + nutrition pour une transformation durable.",
          focus: "regularite metabolique",
          result: "silhouette plus affinee sans epuisement",
        },
        {
          title: "Prevention des Blessures",
          desc: "Prehab, mobilite et gestion de charge pour rester performant toute l'annee.",
          focus: "resilience articulaire",
          result: "moins d'arrets et de regressions",
        },
      ],
    },

    // Standout Tools
    standout: {
      eyebrow: "Outils Coach",
      headline1: "Des outils malins pour",
      headlineAccent: "progresser plus vite",
      subtitle:
        "Utilisez le meme systeme que j'applique en coaching 1:1 pour planifier vos seances et ajuster l'intensite.",
      estimatorTitle: "Estimateur de progression",
      goalLabel: "Objectif principal",
      goals: {
        fatLoss: "Perte de gras",
        strength: "Force",
        speed: "Vitesse",
      },
      levelLabel: "Niveau actuel",
      levels: {
        beginner: "Debutant",
        intermediate: "Intermediaire",
        advanced: "Avance",
      },
      sessionsLabel: "Seances par semaine",
      week: "semaine",
      weeks: "semaines",
      recommendedLabel: "Programme ideal",
      focusLabel: "Focus principal",
      splitLabel: "Repartition hebdo",
      winLabel: "Gain attendu",
      programs: {
        fatLoss: "Programme Perte de Gras",
        strength: "Programme Force",
        speed: "Programme Vitesse & Agilite",
      },
      focuses: {
        fatLoss: "regularite metabolique + adherence",
        strength: "qualite des mouvements + progression de charge",
        speed: "acceleration initiale + mecanique propre",
      },
      wins: {
        fatLoss: "silhouette plus affinee avec plus d'energie",
        strength: "charges plus hautes avec meilleure technique",
        speed: "reactions plus rapides et deplacements plus nets",
      },
      splits: {
        two: "2 seances full-body ciblees",
        three: "3 seances: force + vitesse + conditionnement",
        four: "4 seances avec progression equilibree",
        five: "5 seances avec travail technique frequent",
      },
      readinessTitle: "Check readiness du jour",
      sleepLabel: "Sommeil de la nuit",
      stressLabel: "Stress actuel",
      sorenessLabel: "Courbatures",
      readinessScoreLabel: "Score de readiness",
      plateauTitle: "Protocole Anti Plateau",
      stallWeeksLabel: "Semaines sans progression",
      trendLabel: "Tendance des perfs",
      trendOptions: {
        down: "En baisse",
        flat: "Stable",
        up: "Toujours en hausse",
      },
      motivationLabel: "Motivation du moment",
      sleepQualityLabel: "Qualite du sommeil",
      days: "jours",
      coachPlanLabel: "Plan d'action coach",
      protocols: {
        deload: {
          title: "Deload Strategique",
          desc: "Le systeme est surcharge. On recupere d'abord, puis on remonte.",
          actions: [
            "Baisser les charges a 65-70% pendant 7 jours",
            "Garder une technique propre sur les mouvements cles",
            "Renforcer sommeil et hydratation cette semaine",
          ],
        },
        variation: {
          title: "Reset Variation",
          desc: "Il faut un nouveau stimulus sans perdre le suivi de progression.",
          actions: [
            "Changer 1-2 exercices principaux par des variantes proches",
            "Garder un volume modere avec tempo controle",
            "Re-tester les top sets apres la fenetre de reset",
          ],
        },
        adherence: {
          title: "Rescue Regularite",
          desc: "Le frein principal est la regularite. On simplifie pour relancer le rythme.",
          actions: [
            "Valider 3 seances minimum non negociables",
            "Prioriser un mouvement principal et un bloc accessoire",
            "Logger chaque seance et faire un bilan coach fin de semaine",
          ],
        },
        progression: {
          title: "Push Progression",
          desc: "La dynamique est bonne. On garde la structure et on pousse proprement.",
          actions: [
            "Monter un mouvement principal par petits paliers",
            "Conserver un bloc vitesse/conditionnement net",
            "Garder un jour de recuperation pour eviter la fatigue cachee",
          ],
        },
      },
      statuses: {
        push: {
          title: "Jour d'intensite",
          desc: "Votre etat est solide aujourd'hui. Vous pouvez pousser avec une execution propre.",
          tips: [
            "Placez le travail lourd ou explosif en debut de seance",
            "Respectez les temps de repos et suivez vos series cle",
            "Terminez par du volume technique, pas de fatigue inutile",
          ],
        },
        build: {
          title: "Jour de construction",
          desc: "Bonne journee pour progresser avec des repetitions de qualite et une charge controlee.",
          tips: [
            "Travaillez en intensite moderee avec technique stricte",
            "Ajoutez une serie utile au lieu de forcer la charge max",
            "Gardez un bloc mobilite en fin de seance",
          ],
        },
        recover: {
          title: "Jour de recuperation",
          desc: "Votre corps demande moins de stress aujourd'hui pour proteger la progression long terme.",
          tips: [
            "Baissez la charge et privilegiez la qualite de mouvement",
            "Utilisez des series plus courtes avec un echauffement plus long",
            "Priorisez sommeil et hydratation avant la prochaine seance dure",
          ],
        },
      },
      bottomTitle: "Vous voulez cette strategie adaptee a votre profil ?",
      bottomText:
        "Reservez un appel strategie et je vous trace vos priorites d'entrainement sur 8 a 12 semaines.",
      bottomCta: "Recevoir votre feuille de route",
    },

    // Transformations (Testimonials)
    testimonials: {
      eyebrow: "Témoignages",
      headline1: "Ce que nos athlètes ",
      headlineAccent: "disent",
      items: [
        {
          name: "Alex Rivera",
          role: "Coureur de marathon",
          quote:
            "Youmene a complètement transformé mon approche de l'entraînement. Mes temps ont chuté de 12% en seulement 3 mois. Sa compréhension de la biomécanique est inégalée.",
        },
        {
          name: "Jordan Mitchell",
          role: "Athlète CrossFit",
          quote:
            "La programmation personnalisée est d'un autre niveau. Chaque séance s'appuie sur la précédente. Je ne me suis jamais senti aussi fort et confiant.",
        },
        {
          name: "Sarah Chen",
          role: "Joueuse de football",
          quote:
            "Après avoir travaillé avec Youmene, ma vitesse de sprint et mon agilité se sont améliorées de façon spectaculaire. Je suis passée de remplaçante à capitaine d'équipe en une saison.",
        },
      ],
    },

    // Qualification
    qualification: {
      eyebrow: "À qui s'adresse ce programme",
      headline1: "Est-ce",
      headlineAccent: "fait",
      headline2: "pour vous ?",
      subtitle: "Je travaille avec des personnes déterminées, sérieuses dans leur volonté de transformer leur corps et leur mentalité. Voici comment savoir si nous sommes compatibles.",
      rightTitle: "C'est pour vous si…",
      wrongTitle: "Ce n'est PAS pour vous si…",
      rightFit: [
        "Vous êtes prêt(e) à vous engager et à fournir les efforts nécessaires",
        "Vous voulez un programme structuré et basé sur la science",
        "Vous êtes prêt(e) à investir dans votre santé à long terme, pas des solutions rapides",
        "Vous valorisez la responsabilité et le coaching expert",
        "Vous êtes ouvert(e) à sortir de votre zone de confort",
      ],
      wrongFit: [
        "Vous cherchez une solution miracle ou des résultats du jour au lendemain",
        "Vous n'êtes pas prêt(e) à suivre une routine régulière",
        "Vous attendez des résultats sans effort ni discipline",
        "Vous n'êtes pas prêt(e) à faire de votre santé une priorité",
        "Vous voulez juste quelqu'un pour compter vos répétitions",
      ],
      cta: "Réservez votre appel stratégique gratuit",
      ctaNote: "Sans engagement — discutons simplement.",
    },
    // Contact
    contact: {
      eyebrow: "Nous contacter",
      headline1: "Prêt à commencer",
      headlineAccent: "l'entraînement ?",
      subtitle:
        "Réservez votre consultation gratuite aujourd'hui. Parlez-nous de vos objectifs et nous créerons le plan parfait.",
      chips: [
        "Réponse sous 24h",
        "Plan de départ après l'appel",
        "Sans pression, juste du concret",
      ],
      info: {
        location: { label: "Lieu", value: "Algérie, Bouira, M'chedallah" },
        phone: { label: "Téléphone", value: "+213 775 86 88 21" },
        email: { label: "Email", value: "Mechenaneyoumene@gmail.com" },
      },
      processTitle: "Comment ça se passe",
      processSteps: [
        "Vous envoyez vos objectifs et votre situation actuelle",
        "J'analyse votre profil pour définir le meilleur point de départ",
        "On fait un court appel stratégie pour tracer vos 8 premières semaines",
      ],
      form: {
        introTitle: "Décrivez votre point de départ",
        introHint:
          "Plus vous donnez de détails, plus votre plan initial sera précis.",
        firstName: "Prénom",
        lastName: "Nom",
        goal: "Objectif principal",
        level: "Niveau actuel",
        email: "Email",
        phone: "Téléphone",
        message: "Message",
        goalOptions: [
          "Perdre du gras et se dessiner",
          "Prendre de la force et du muscle",
          "Améliorer vitesse et agilité",
          "Devenir plus fit et athlétique",
        ],
        levelOptions: ["Débutant", "Intermédiaire", "Avancé"],
        placeholder: {
          firstName: "Jean",
          lastName: "Dupont",
          goal: "Choisissez votre objectif",
          level: "Choisissez votre niveau",
          email: "jean@exemple.com",
          phone: "+213 000 00 00 00",
          message: "Parlez-nous de vos objectifs...",
        },
        submit: "Envoyer le message",
        sending: "Envoi en cours...",
        responseNote: "Réponse en général sous un jour ouvré.",
        successMsg: "Message envoyé avec succès ! Nous vous répondrons bientôt.",
        errorMsg: "Une erreur est survenue. Veuillez réessayer.",
      },
    },

    // Footer
    footer: {
      ctaTitle1: "Tu t'entraines dur.",
      ctaAccent: "Tu obtiens de vrais resultats.",
      ctaBtn: "Commencer votre parcours",
      brandDesc:
        "Transformez votre corps et votre esprit avec un coaching personnalisé. Votre parcours, votre rythme, vos résultats.",
      quickLinks: "Liens rapides",
      programs: "Programmes",
      contactTitle: "Contact",
      copy: "© 2026 Youmene Training. Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      quickLinkItems: [
        { label: "À propos", href: "#about" },
        { label: "Programmes", href: "#services" },
        { label: "Résultats", href: "#transformations" },
        { label: "Pour Vous ?", href: "#qualification" },
        { label: "Contact", href: "#contact" },
      ],
      programItems: [
        "Vitesse & Agilité",
        "Musculation",
        "Conditionnement",
        "Mécanique de Sprint",
        "Programmes Perte de Gras",
      ],
    },
  },
};

export default translations;
