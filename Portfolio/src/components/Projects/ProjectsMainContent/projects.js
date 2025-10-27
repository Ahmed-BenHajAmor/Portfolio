import nikeCloneHome from '../../../assets/nike-clone-home.webp'

import SAGA from '../../../assets/SAGA.png'
import InfoAcademy from '../../../assets/InfoAcademy.png'


export const projects = [
    {
        title: 'Info Academy',
        image: InfoAcademy,
        githubLink: 'https://github.com/Ahmed-BenHajAmor/infoacademy',
        description: "A comprehensive educational platform designed to connect high school teachers offering private paid courses with students seeking additional learning opportunities outside traditional classrooms.",
    overview: "Info Academy is a full-featured web platform where professors can create and manage course offers, while students can browse, register, and purchase these offers. Once enrolled, students gain access to a dedicated learning space containing online sessions, a course calendar, recorded videos, homework, documents, and other essential learning materials. Professors have full control over managing sessions, materials, and student participation through an intuitive back-office system.",
    features: [
        "Teacher account management and course offer creation",
        "Student registration and offer purchase system",
        "Secure payment and access control for purchased offers",
        "Dedicated student dashboard with course materials and session calendar",
        "Online session management and video recording access",
        "Homework and document sharing functionalities",
        "Administrative management for users, offers, and sessions"
    ],
    technologies: [
        "Spring Boot",
        "Spring Data JPA",
        "Spring Security",
        "Spring Web",
        "MySQL"
    ],
    backendArchitecture: [
        "Layered architecture (Controller, Service, Repository)",
        "Spring Dependency Injection for modular components",
        "RESTful API design following clean and scalable patterns",
        "Entity relationship management via JPA and Hibernate"
    ],
    frontendStatus: "Not yet developed (planned for future phase)",
    timeline: {
        duration: "Still working on it",
        phases: "Backend development (in progress), Frontend design (upcoming), Integration & deployment (future)"
    },
    expectedOutcomes: "Info Academy aims to streamline private education beyond school boundaries, offering a professional environment for teachers to manage their courses and for students to access structured, high-quality learning materials online. The system will enhance learning flexibility, simplify course management, and create a trusted marketplace for academic services."
    },
    {
        title: 'SAGA',
        image: SAGA,
        githubLink: 'https://github.com/Ahmed-BenHajAmor/pfa',
        
        description: "A digital attendance management system designed to automate and streamline the tracking of student absences within educational institutions.",
        overview: "SAGA (Système Automatisé de Gestion des Absences) is a full-stack web application that replaces inefficient manual attendance tracking with a modern automated solution. It enables professors to record attendance digitally, allows students to justify absences online, and provides administrators with tools to verify and manage justifications efficiently.",
        features: [
            "Automated attendance tracking for professors",
            "Real-time absence monitoring dashboard",
            "Digital absence justification by students",
            "Centralized admin dashboard for verification and management",
            "Responsive design optimized for all devices",
            "Visual analytics with charts and graphs"
        ],
        technologies: [
            "React.js",
            "Express.js",
            "MySQL",
            "Recharts",
            "FullCalendar",
            "Axios"
        ],
        designPatterns: [
            "MVC (Model-View-Controller) for backend architecture",
            "Modular Design for frontend components",
            "Service Pattern for API interactions",
            "Middleware Pattern for backend logic"
        ],
        uiUxHighlights: [
            "Dark blue and white color palette for professional aesthetics",
            "Sidebar navigation for quick access to key modules",
            "Pie charts and line graphs for attendance visualization",
            "Responsive design ensuring accessibility on mobile and desktop",
            "Simplified forms for fast data entry and justification submission"
        ],
        timeline: {
            duration: "8 weeks",
            phases: "Planning & Design (2 weeks), Development (6 weeks)"
        },
        potentialImprovements: [
            "Real-time notifications for absences and updates",
            "Mobile application version",
            "AI-based predictive insights for attendance behavior",
            "Enhanced reporting and analytics for administrators"
        ],
        expectedOutcomes: "The SAGA system improves attendance tracking accuracy, reduces unjustified absences, and saves time for professors and administrators while offering a more transparent process for students."
    
        
    },
    {
        title: 'Nike shoes clone',
        image: nikeCloneHome,
        githubLink: 'https://github.com/Ahmed-BenHajAmor/NIKE_CLONE',
        demoLink: 'https://nike-clone-reactjs.vercel.app/',
        description: "A minimalist Nike e-commerce clone showcasing a selection of products with basic cart functionality built for frontend development practice.",
    overview: "This project replicates the core layout of a Nike shopping experience using React.js. It includes three static landing pages designed for navigation and branding, and a main product page displaying Nike shoes with descriptions and an 'Add to Cart' feature. The cart dynamically updates the total purchase amount, with a non-functional payment button serving as a placeholder for future integration.",
    features: [
        "Multiple static landing pages for navigation and brand presentation",
        "Product page displaying Nike shoes with descriptions",
        "Interactive 'Add to Cart' functionality",
        "Dynamic total price calculation in the cart",
        "Placeholder payment button (no backend integration)"
    ],
    technologies: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)"
    ],
    timeline: {
        duration: "2 weeks",
        phases: "Layout design (1 week), Functionality implementation (1 week)"
    },
    expectedOutcomes: "This project demonstrates core React concepts such as component-based architecture, state management, and dynamic rendering while recreating a clean, responsive Nike-style shopping interface."
    },
    // {
    //     title: 'simple weather web app',
    //     image: weatherApp,
    //     githubLink: 'https://github.com/Ahmed-BenHajAmor/Weather-application',
    //     demoLink: 'https://weather-application-reactjs.vercel.app/'
    // },
    // {
    //     title: 'Taw9it salat',
    //     image: taw9itSalat,
    //     githubLink: 'https://github.com/Ahmed-BenHajAmor/Taw9it_salat',
    //     demoLink: 'https://taw9it-salat.vercel.app/'
    // },
]