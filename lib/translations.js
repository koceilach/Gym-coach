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
      headline1: "Your",
      headlineAccent: "fitness",
      headline2: "trainer",
      description:
        "Transform your body and mind with personalized workout plans tailored to your goals. Reach new heights in your fitness journey with tailored training programs.",
      cta: "Book a class",
      watermark: "GET STRONGER",
      statYears: "Years Exp.",
      statClients: "Clients",
      statSessions: "Sessions",
    },

    // Tagline
    tagline: {
      eyebrow: "Why choose us",
      headline1: "Focus on Science",
      headline2: "& ",
      headlineAccent: "Structure",
      description:
        "Every training plan is built on sport-science principles, biomechanics research, and years of coaching athletes at every level. No guesswork — just results that speak.",
      scrollBtn: "Explore more",
      stats: [
        { value: "500+", label: "Athletes Trained" },
        { value: "98%", label: "Success Rate" },
        { value: "15+", label: "Years Experience" },
        { value: "10K+", label: "Sessions Completed" },
      ],
    },

    // Coach (Community)
    coach: {
      divider: "MEET YOUR COACH",
      eyebrow: "About the coach",
      headline1: "Dedicated to your",
      headlineAccent: "transformation",
      bio: "With over 15 years of experience training professional athletes and everyday individuals, I bring a science-backed approach to every session. My philosophy is simple: understand your body, respect the process, and the results will follow.",
      highlights: [
        "Certified NSCA Coach",
        "Biomechanics Expert",
        "15+ Years Active",
      ],
      cta: "Work with me",
      expNumber: "15+",
      expLabel: "Years of\nExperience",
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
        "Six core programs designed to transform your body, speed, and strength — no matter where you start.",
      items: [
        {
          title: "Speed & Agility",
          desc: "Explosive drills, sprint mechanics, and reaction training to unlock peak athletic speed.",
          tag: "Popular",
        },
        {
          title: "Strength Training",
          desc: "Progressive overload programs targeting compound movements for maximum functional strength.",
        },
        {
          title: "Conditioning",
          desc: "Heart-rate-zone training to build endurance, stamina, and cardiovascular health.",
        },
        {
          title: "Sprint Mechanics",
          desc: "High-speed video analysis and drill coaching to improve your stride efficiency.",
        },
        {
          title: "Fat Loss Programs",
          desc: "Science-backed nutrition plans paired with metabolic training for sustainable results.",
        },
        {
          title: "Injury Prevention",
          desc: "Prehab, mobility work, and movement screening to keep you performing at your best.",
        },
      ],
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
      info: {
        location: { label: "Location", value: "Algeria, Bouira, M'chedallah" },
        phone: { label: "Phone", value: "+213 775 86 88 21" },
        email: { label: "Email", value: "coach@youmene.com" },
      },
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        placeholder: {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phone: "+213 000 00 00 00",
          message: "Tell us about your goals...",
        },
        submit: "Send Message",
        sending: "Sending...",
        successMsg: "Message sent successfully! We'll get back to you soon.",
        errorMsg: "Something went wrong. Please try again.",
      },
    },

    // Footer
    footer: {
      ctaTitle1: "Turning effort into",
      ctaAccent: "excellence.",
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
      greeting: "Salut, je suis Youmene",
      headline1: "Votre",
      headlineAccent: "coach",
      headline2: "sportif",
      description:
        "Transformez votre corps et votre esprit avec des programmes d'entraînement personnalisés adaptés à vos objectifs. Atteignez de nouveaux sommets dans votre parcours fitness.",
      cta: "Réserver un cours",
      watermark: "PLUS FORT",
      statYears: "Ans d'exp.",
      statClients: "Clients",
      statSessions: "Séances",
    },

    // Tagline
    tagline: {
      eyebrow: "Pourquoi nous choisir",
      headline1: "Basé sur la Science",
      headline2: "& la ",
      headlineAccent: "Structure",
      description:
        "Chaque programme est construit sur des principes scientifiques du sport, la recherche en biomécanique et des années d'accompagnement d'athlètes à tous les niveaux. Pas de hasard — que des résultats.",
      scrollBtn: "En savoir plus",
      stats: [
        { value: "500+", label: "Athlètes entraînés" },
        { value: "98%", label: "Taux de réussite" },
        { value: "15+", label: "Ans d'expérience" },
        { value: "10K+", label: "Séances réalisées" },
      ],
    },

    // Coach (Community)
    coach: {
      divider: "RENCONTREZ VOTRE COACH",
      eyebrow: "À propos du coach",
      headline1: "Dédié à votre",
      headlineAccent: "transformation",
      bio: "Avec plus de 15 ans d'expérience dans l'entraînement d'athlètes professionnels et de particuliers, j'apporte une approche scientifique à chaque séance. Ma philosophie est simple : comprendre votre corps, respecter le processus, et les résultats suivront.",
      highlights: [
        "Coach certifié NSCA",
        "Expert en biomécanique",
        "15+ ans d'expérience",
      ],
      cta: "Travailler avec moi",
      expNumber: "15+",
      expLabel: "Ans\nd'expérience",
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
      headline1: "L'équipe derrière",
      headline2: "Votre ",
      headlineAccent: "Progression",
      subtitle:
        "Six programmes conçus pour transformer votre corps, votre vitesse et votre force — peu importe votre niveau de départ.",
      items: [
        {
          title: "Vitesse & Agilité",
          desc: "Exercices explosifs, mécanique de sprint et entraînement réactif pour libérer votre vitesse maximale.",
          tag: "Populaire",
        },
        {
          title: "Musculation",
          desc: "Programmes de surcharge progressive ciblant les mouvements composés pour une force fonctionnelle maximale.",
        },
        {
          title: "Conditionnement",
          desc: "Entraînement par zones de fréquence cardiaque pour développer l'endurance et la santé cardiovasculaire.",
        },
        {
          title: "Mécanique de Sprint",
          desc: "Analyse vidéo haute vitesse et coaching par exercices pour améliorer l'efficacité de votre foulée.",
        },
        {
          title: "Programmes Perte de Gras",
          desc: "Plans nutritionnels scientifiques combinés à un entraînement métabolique pour des résultats durables.",
        },
        {
          title: "Prévention des Blessures",
          desc: "Préhabilitation, mobilité et bilan de mouvement pour rester performant à votre meilleur niveau.",
        },
      ],
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
      info: {
        location: { label: "Lieu", value: "Algérie, Bouira, M'chedallah" },
        phone: { label: "Téléphone", value: "+213 775 86 88 21" },
        email: { label: "Email", value: "coach@youmene.com" },
      },
      form: {
        firstName: "Prénom",
        lastName: "Nom",
        email: "Email",
        phone: "Téléphone",
        message: "Message",
        placeholder: {
          firstName: "Jean",
          lastName: "Dupont",
          email: "jean@exemple.com",
          phone: "+213 000 00 00 00",
          message: "Parlez-nous de vos objectifs...",
        },
        submit: "Envoyer le message",
        sending: "Envoi en cours...",
        successMsg: "Message envoyé avec succès ! Nous vous répondrons bientôt.",
        errorMsg: "Une erreur est survenue. Veuillez réessayer.",
      },
    },

    // Footer
    footer: {
      ctaTitle1: "Transformer l'effort en",
      ctaAccent: "excellence.",
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
