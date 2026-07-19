export const SKILL_CATEGORIES = [
  {
    title: "Flutter & Dart",
    skills: ["Flutter SDK", "Dart Language", "OOP", "SOLID Principles", "Theming & Custom Widgets", "State Management (Cubit)"]
  },
  {
    title: "API & Backend",
    skills: ["RESTful APIs (CRUD)", "GraphQL", "Dio / HTTP", "Firebase (Auth, Firestore, FCM, Crashlytics)", "Postman / Swagger", "Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "Mapping & Location",
    skills: ["Google Maps SDK", "Real-time Tracking", "Polyline Routing & Drawing", "Custom Markers", "Geolocator & Geocoding"]
  },
  {
    title: "Local Storage & More",
    skills: ["Localization (Multi-language)", "Shared Preferences", "Hive"]
  },
  {
    title: "Payment Integration",
    skills: ["Stripe", "Paymob", "Fawrypay", "PayPal"]
  },
  {
    title: "CI/CD & Release",
    skills: ["GitHub Actions", "Codemagic", "Appetize", "Google Play Publishing", "App Flavors"]
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"]
  }
];

export const PROJECTS = [
  {
    title: "Kemet Vision",
    overview: "AI-powered tourism application that helps users explore Egyptian landmarks through interactive maps and smart exploration tools.",
    problem: "Tourists need intelligent guidance to explore landmarks without getting overwhelmed or relying on outdated information.",
    solution: "Developed a smart travel guide with real-time geolocation, interactive maps, and an AI-powered chatbot for intelligent tourist assistance and personalized travel recommendations.",
    architecture: "Applied Clean Architecture, Cubit (BLoC), and GoRouter to build a scalable and maintainable application.",
    challenges: "Architecting a seamless state synchronization bridge between the interactive map and the contextual AI chatbot using Cubit, ensuring natural language queries reliably trigger real-time map updates without blocking the UI thread.",
    features: ["Interactive Maps", "AI Chatbot", "Real-time Geolocation", "Firebase Auth", "Wishlist & History", "Crashlytics"],
    technologies: ["Flutter", "Clean Architecture", "Cubit", "GoRouter", "Google Maps", "Firebase", "AI APIs"],
    playStore: "https://play.google.com/store/apps/details?id=com.saifyasser.kemetvision",
    linkedinPost: "https://www.linkedin.com/posts/saif-yasser-166035265_flutter-mobileapp-ai-share-7450004477601935361-tBIG/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAED3ZZ4B-tjo43vL7lLbmQ6lCk3JFrq2F-o",
    thumbnail: "/projects/kemet/1.png",
    images: [
      "/projects/kemet/1.png",
      "/projects/kemet/2.jpg",
      "/projects/kemet/3.jpg",
      "/projects/kemet/4.jpg",
      "/projects/kemet/11.jpg",
      "/projects/kemet/12.jpg",
      "/projects/kemet/13.jpg",
      "/projects/kemet/5.jpg",
      "/projects/kemet/6.jpg",
      "/projects/kemet/7.jpg",
      "/projects/kemet/8.jpg",
      "/projects/kemet/9.jpg",
      "/projects/kemet/10.jpg",
      "/projects/kemet/14.jpg"
    ]
  },
  {
    title: "Cinema Immersive",
    overview: "Full-stack cinema booking platform consisting of a Flutter mobile application and a Node.js admin dashboard.",
    problem: "Users require a seamless end-to-end booking experience that handles concurrency, while administrators need scalable management tools.",
    solution: "Implemented an end-to-end booking system featuring movie discovery, real-time seat selection, secure online payments, and digital tickets.",
    architecture: "Followed Clean Architecture with Cubit for the mobile app, and designed scalable RESTful APIs using Node.js, Express.js, and MongoDB.",
    challenges: "Centralized error handling for network failures with contextual user feedback, and optimizing widget rendering to reduce unnecessary UI rebuilds.",
    features: ["Real-time Seat Selection", "Digital Tickets", "Paymob Gateway", "FCM Notifications", "Admin Dashboard"],
    technologies: ["Flutter", "Node.js", "Express.js", "MongoDB", "Paymob", "Firebase", "Cubit"],
    github: "https://github.com/seifyaser/cinema-app",
    demo: "#",
    linkedinPost: "https://www.linkedin.com/posts/saif-yasser-166035265_application-showcase-user-journey-presentation-ugcPost-7483606267559718912-Yci1/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAED3ZZ4B-tjo43vL7lLbmQ6lCk3JFrq2F-o",
    thumbnail: "/projects/cinema/1.png",
    images: [
      "/projects/cinema/1.png",
      "/projects/cinema/2.png",
      "/projects/cinema/4.png",
      "/projects/cinema/5.png",
      "/projects/cinema/6.png",
      "/projects/cinema/7.png",
      "/projects/cinema/8.png",
      "/projects/cinema/9.png",
      "/projects/cinema/10.png",
      "/projects/cinema/11.png",
      "/projects/cinema/12.png"
    ]
  },
  {
    title: "AI Food Analyzer",
    overview: "AI-powered food analysis application offering real-time nutritional insights from user images.",
    problem: "Users struggle to track their nutritional intake accurately from complex meals manually.",
    solution: "Integrated AI vision APIs to instantly identify food items and estimate calories, fats, carbohydrates, protein, and sugar directly from camera or uploaded images.",
    architecture: "Built the application using Cubit state management with a responsive and intuitive user interface.",
    challenges: "Processing high-resolution images rapidly to provide instant analysis and accurate health scoring.",
    features: ["AI Image Recognition", "Nutritional Estimation", "Health Scoring", "Camera Integration"],
    technologies: ["Flutter", "AI Vision API", "Cubit"],
    github: "https://github.com/seifyaser/foodAnalysis",
    demo: "#",
    linkedinPost: "https://www.linkedin.com/posts/saif-yasser-166035265_flutter-ai-geminiapi-ugcPost-7337817129032781824-ama5/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAED3ZZ4B-tjo43vL7lLbmQ6lCk3JFrq2F-o",
    thumbnail: "/projects/food/1.jpg",
    images: [
      "/projects/food/1.jpg",
      "/projects/food/2.jpg"
    ]
  },
  {
    title: "Live Location Tracker",
    overview: "Real-time user location tracking application using device GPS and Google Maps.",
    problem: "Apps often lack smooth and dynamic location navigation and real-time tracking updates.",
    solution: "Calculated dynamic distances and generated navigation routes using map polylines. Implemented interactive destination selection with live marker movement.",
    architecture: "Direct integration with Google Maps and GPS sensors with optimized state management.",
    challenges: "Maintaining battery efficiency during continuous real-time GPS tracking.",
    features: ["Real-time GPS Tracking", "Polyline Routing", "Live Marker Movement", "Styled Maps"],
    technologies: ["Flutter", "Google Maps API", "GPS Sensors"],
    github: "https://github.com/seifyaser/Live-Location-Tracking-App-Flutter-Google-Maps",
    demo: "#",
    linkedinPost: "https://www.linkedin.com/posts/saif-yasser-166035265_flutter-googlemaps-livetracking-ugcPost-7346654190720405505-xbmd/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAED3ZZ4B-tjo43vL7lLbmQ6lCk3JFrq2F-o"
  },
  {
    title: "NewsRead",
    overview: "Modern news aggregation platform with real-time updates, customizable theming, and notifications.",
    problem: "Readers need a customized news feed that supports real-time breaking alerts and multi-language support.",
    solution: "Integrated news APIs to fetch articles from multiple sources, coupled with FCM for real-time breaking news. Built settings for country/language and light/dark modes.",
    architecture: "Clean state management using Cubit, with modular UI components including reusable news cards and interactive navigation.",
    challenges: "Handling massive API payloads and efficiently caching articles for smooth scrolling.",
    features: ["Real-time News Fetching", "Push Notifications (FCM)", "Light/Dark Themes", "Country/Language Selection"],
    technologies: ["Flutter", "News APIs", "Firebase", "Cubit"],
    github: "https://github.com/seifyaser/NewsRead",
    demo: "#",
    thumbnail: "/projects/newsread/1.png",
    images: [
      "/projects/newsread/1.png",
      "/projects/newsread/2.png",
      "/projects/newsread/3.png",
      "/projects/newsread/4.png",
      "/projects/newsread/5.png"
    ]
  }
];

export const TIMELINE = [
  {
    year: "2025",
    role: "Flutter Intern",
    company: "Transport Information Technology (TransIT)",
    description: "Developed a BRT (Bus Rapid Transit) application for booking tickets."
  },
  {
    year: "2024",
    role: "Core Team Member",
    company: "Google Developer Groups (GDG BNU)",
    description: "Mentored beginners and delivered technical sessions on Flutter, Dart, Firebase, and state management."
  },
  {
    year: "2022",
    role: "Computer Science Student",
    company: "Benha National University",
    description: "Started Bachelor of Computer Science. Expected graduation 2026."
  }
];
