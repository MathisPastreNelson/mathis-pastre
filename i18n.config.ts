// i18n.config.js
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      // Section 1
      title: "Front-end Developer",
      switchLocaleButton: "EN",
      hoverImgText: "Hover me",
      presentationTexte: `Passionate about web development and fueled by creativity, I have
  acquired a solid expertise through the completion of numerous projects.
  My journey has allowed me to strengthen my knowledge in the field
  of web design and put into practice the concepts and methodologies
  I have learned over time. My portfolio proudly showcases my past
  accomplishments.`,

      // Section 2
      section2title: "My services",
      IntegrationWebTitle: "Web Integration",
      IntegrationWebDescribe:
        "HTML/CSS/JavaScript integrations that adhere to web standards.",

      customDevTitle: "Custom Development",
      customDevDescribe:
        "Customized website development to meet the specific needs of each client.",

      dynamicPagesTitle: "Dynamic Pages",
      dynamicPagesDescribe:
        "Non-intrusive content animations to enhance your project.",

      SEOTitle: "Search Engine Optimization",
      SEODescribe:
        "Semantic display of information, clean pages for optimal SEO.",

      responsiveDesignTitle: "Responsive Design",
      responsiveDesignDescribe:
        "Compatible with all devices, tablets, and mobile applications.",

      // Section 3
      improvizeDescribe:
        "Here is my project developed for Improvize company. The objective was to integrate a design created on Figma using Nuxt, a framework based on Vue.js. I worked on creating a dynamic front-end by connecting it to a backend that handles user authentication and product display.",
      aigenerationDescribe:
        "Welcome to my gallery website showcasing photos generated by Stable Diffusion, an artificial intelligence specialized in creating visual art. This site provides a demonstration of the AI's ability to generate drawings in all imaginable styles based on prompts.",
      teslaDescribe:
        "This is a clone of the Tesla website homepage, with a focus on maintaining the original design and utilizing various packages.",
      mouffetteDescribe:
        "Here is a project created for a comic book artist. I used various integration packages to enhance the aesthetics and smoothness of the website.",
      franceentranseDescribe:
        "A project I created with React, it is a website about French music. I worked with the Deezer API to fetch data and allow users to listen to audio previews.",
      cinemathisDescribe:
        "This is a movie information search website. I worked with the TMDB API to fetch data and allow users to search for information about one or multiple movies.",
      mairieDescribe:
        "I would like to present a project I completed using WordPress. It involved a complete redesign of an existing website using tools such as Elementor and other plugins.",
      rpgroubiDescribe:
        "This project allowed me to put my logical skills to the test, especially in designing a combat system and character progression throughout the adventure.",
      kasaDescribe: `I present to you my project "Kasa," a housing rental application that I developed using React. The objective of this application is to meet the increasing demand for easily finding accommodation that fits within one's budget.`,
      piquanteDescribe:
        "I am proud to present the project I completed for Piiiquante, a brand specializing in chili-based condiments. I was tasked with creating an API for a web application, focusing on the backend aspect of the project while leaving the existing frontend untouched.",
      kanapDescribe:
        "I was tasked with dynamically implementing the API data on the website that was already created in HTML and CSS. I also provided the acceptance test plan that listed my entire code and described each function of my scripts one by one.",
      panthereDescribe:
        "The instruction I received was to conduct an analysis of the current SEO status of a provided website, identify areas that are not optimized for SEO and accessibility, and provide recommendations to improve the site.",
      ohmyfoodDescribe:
        "I created a website using HTML/CSS based on a design mockup provided by the designer. I followed all the requirements specified in the specifications document, including using only HTML/CSS without JavaScript or frameworks, and organizing properties using SASS with sub-folders.",
      bookiDescribe:
        "I was tasked with creating a prototype by integrating a design mockup using HTML/CSS. The website allows users to find accommodations and activities in a chosen city.",
      visitButton: "Visit",

      // Section 4
      contactTitle: "A web project ?",
      contactSubTitle: "Contact me",
      contactSend: "Send",
    },
    fr: {
      // Section 1

      hoverImgText: "Survolez moi",
      title: "Développeur front-end",
      switchLocaleButton: "FR",
      presentationTexte: `Passionné par le développement web et animé par la créativité, j'ai
acquis une expertise solide grâce à la réalisation de nombreux projets.
Mon parcours m'a permis de renforcer mes connaissances dans le domaine
de la création web et de mettre en pratique les concepts et
méthodologies appris au fil du temps. Mon portfolio présente fièrement mes
réalisations passées.
`,

      // Section 2
      section2title: "Mes services",
      IntegrationWebTitle: "Intégration web",
      IntegrationWebDescribe:
        "Des intégrations HTML / CSS / JAVASCRIPT respectueuses des standards du Web.",
      customDevTitle: "Développement sur mesure",
      customDevDescribe:
        "Des sites web développés sur mesure pour répondre aux besoins spécifiques de chaque client.",
      dynamicPagesTitle: "Dynamisme des pages",
      dynamicPagesDescribe:
        "Des animations de contenu non intrusives pour embellir votre projet.",
      SEOTitle: "Référencement naturel",
      SEODescribe:
        "Affichage sémantique des informations, des pages propres pour un référencement optimal.",
      responsiveDesignTitle: `Compatibilité`,
      responsiveDesignDescribe:
        "Compatible tous supports, tablette & application mobile.",

      // Section 3
      improvizeDescribe:
        "Voici mon projet réalisé pour la société Improvize. L'objectif était d'intégrer une maquette créée sur Figma en utilisant Nuxt, un framework basé sur Vue.js. J'ai travaillé sur la création d'un front-end dynamique en reliant ce dernier à un backend qui gère la connexion des utilisateurs et l'affichage des produits.",
      aigenerationDescribe:
        "Bienvenue sur mon site de galerie de photos générées par Stable Diffusion, une intelligence artificielle spécialisée dans la création d'art visuel. Ce site offre une démonstration de l'IA à créer des dessins dans tous les styles imaginables, à partir de prompts.",
      teslaDescribe:
        "Il s'agit d'un clone de la page d'accueil du site de Tesla, avec un accent mis sur le respect du design original ainsi que l'utilisation de différents packages.",
      mouffetteDescribe:
        "Voici un projet réalisé pour une dessinatrice de BD. J'ai utilisé différents packages d'intégration pour améliorer l'esthétique et la fluidité du site.",
      franceentranseDescribe:
        "Un projet que j'ai réalisé avec React, il s'agit d'un site sur la musique francophone. J'ai travaillé avec l'API de Deezer pour importer les données et permettre aux utilisateurs d'écouter des extraits audio.",
      cinemathisDescribe:
        "Il s'agit d'un site de recherche d'informations sur le cinéma. J'ai travaillé avec l'API de TMDB pour importer les données et permettre aux utilisateurs de rechercher des informations sur un ou plusieurs films.",
      mairieDescribe:
        "Je vous présente un projet que j'ai réalisé avec WordPress. Il s'agit d'une refonte complète d'un site web existant en utilisant des outils tels que Elementor et d'autres plugins.",
      rpgroubiDescribe:
        "Ce projet m'a permis de mettre mes compétences en logique à l'épreuve, notamment pour la conception d'un système de combat et de progression du personnage tout au long de l'aventure.",
      kasaDescribe: `Je vous présente mon projet Kasa, une application de location de logement que j'ai développée avec React. L'objectif de cette application est de répondre à la demande croissante de trouver facilement un logement adapté à son budget.`,
      piquanteDescribe:
        "Je suis fier de vous présenter le projet que j'ai réalisé pour Piiiquante, une marque de condiments à base de piment. J'ai été chargé de créer une API pour une application web, en m'occupant de la partie Backend du projet, sans toucher au Frontend déjà existant.",
      kanapDescribe:
        "On m'a chargé d'implémenter dynamiquement les données de l’API sur le site qui était déjà créé en HTML et CSS. J'ai également fourni le plan de test d’acceptation qui répertorie l’intégralité de mon code en décrivant une à une les fonctions de mes scripts.",
      panthereDescribe:
        "La consigne que j'ai reçue était de réaliser une analyse de l'état actuel de SEO d'un site web fourni, d'identifier les parties non optimisées pour le SEO et l'accessibilité, et de proposer des recommandations pour améliorer le site.",
      ohmyfoodDescribe:
        "Un site en HTML/CSS, à partir d'une maquette envoyée par le designer. J'ai respecté toutes les consignes du cahier des charges, notamment en utilisant uniquement HTML/CSS sans JavaScript ni Framework, en utilisant SASS pour ranger les propriétés dans des sous-dossiers.",
      bookiDescribe:
        "J'ai été chargé de créer un prototype en intégrant une maquette en HTML/CSS. Le site permet à l'utilisateur de trouver des hébergements et des activités dans une ville choisie.",

      visitButton: "Visiter",
      // Section 4
      contactTitle: "Un projet web ?",
      contactSubTitle: "Contactez moi",

      contactSend: "Envoyer",
    },
  },
}));
