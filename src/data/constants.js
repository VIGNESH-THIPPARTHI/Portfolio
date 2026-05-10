import Deep from '../images/DeepfakeDetection.jpg';
import Todos from '../images/Todos.png';
import Weather from '../images/Weather.png';
import quiz from '../images/Quizapp.png';
import logo from '../images/nexlogo.png'
import visaLogo from '../images/visalogo.png';

export const Bio = {
  name: "VIGNESH THIPPARTHI",
  shortName: "Vignesh Thipparthi",
  initials: "VT",
  /** One calm line under your name — who you are */
  tagline: "Software engineer · payments scale · ships with taste",
  roles: [
    "backend & platform APIs",
    "secure, observable delivery",
    "developer tooling · CI/CD",
  ],
  headline:
    "I’m an engineer who cares how software feels—not only that it runs. I’ve gone from owning features at an early‑stage startup to building at global payments scale.",
  description:
    "My path has been steady growth—Java and Spring ecosystems, React when the UI needs it, auth, telemetry, and CI/CD hygiene. Learning when to optimise and when to ship is a muscle I exercise every sprint.",
  currentTitle: "Software Engineer",
  currentCompany: "Visa",
  story:
    "I like problems that sit between people and systems—dashboards admins live in, APIs teams trust, flows that quietly work. Nexzap is where I learned end‑to‑end ownership; Visa is where I’m learning durability and discipline at planetary scale.",
  engineeringEthos:
    "Clarity beats cleverness—typed contracts, observable services, UX that earns trust.",
  beyondWork:
    "Beyond the sprint I stay interested in secure systems, API craftsmanship, and product UX that holds up in production—not demos.",
  collaborationLine:
    "Open to the right collaborations on serious software products—platform work, tooling, or features where craftsmanship matters.",
  github: "https://github.com/VIGNESH-THIPPARTHI",
  resume:
    "https://drive.google.com/file/d/1V68t0qyxQLv7Ck5VFMZILwmQCsFV2jnT/view?usp=drivesdk",
  linkedin: " https://www.linkedin.com/in/vignesh-thipparthi/",
  Leetcode: "https://leetcode.com/VIGNESH_12B2/",
  insta: "https://www.instagram.com/t.vignesh_3004?igsh=MXd3OHkyczV5N25kdQ==",
  email: "thipparthivignesh3004@gmail.com",
};

/** Quick facts — about you, not sales */
export const heroStats = [
  { label: "Now", value: "Visa" },
  { label: "Title", value: "Software Engineer" },
  { label: "Earlier", value: "Nexzap · full‑stack" },
];

/** Infinite marquee — edit order anytime */
export const marqueeTech = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "REST & OpenAPI",
  "Docker",
  "Telemetry",
  "Tailwind",
  "Framer Motion",
  "Spring Boot",
  "Java",
  "Python",
];

/** Stable skill icons via jsDelivr — pinned devicon release v2.17.0 (avoid expired hotlinks) */
const SKILL_ICON =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons";

export const skills = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "HTML",
          image: `${SKILL_ICON}/html5/html5-original.svg`,
        },
        {
          name: "CSS",
          image: `${SKILL_ICON}/css3/css3-original.svg`,
        },
        {
          name: "Bootstrap",
          image: `${SKILL_ICON}/bootstrap/bootstrap-original.svg`,
        },
        {
          name: "Tailwind",
          image: `${SKILL_ICON}/tailwindcss/tailwindcss-original.svg`,
        },
        {
          name: "JavaScript",
          image: `${SKILL_ICON}/javascript/javascript-original.svg`,
        },
        {
          name: "React.Js",
          image: `${SKILL_ICON}/react/react-original.svg`,
        },
        {
          name: "Next.Js",
          image: `${SKILL_ICON}/nextjs/nextjs-original.svg`,
        }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          image: `${SKILL_ICON}/nodejs/nodejs-original.svg`,
        },
        {
          name: "Spring Boot",
          image: `${SKILL_ICON}/spring/spring-original.svg`,
        },
        {
          name: "Express.js",
          image: `${SKILL_ICON}/express/express-original.svg`,
        },
        {
          name: "MongoDB",
          image: `${SKILL_ICON}/mongodb/mongodb-original.svg`,
        },
        {
          name: "PostgreSQL",
          image: `${SKILL_ICON}/postgresql/postgresql-original.svg`,
        },
        {
          name: "MySQL",
          image: `${SKILL_ICON}/mysql/mysql-original-wordmark.svg`,
        },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Python",
          image: `${SKILL_ICON}/python/python-original.svg`,
        },
        {
          name: "Java",
          image: `${SKILL_ICON}/java/java-original.svg`,
        },
        {
          name: "Kotlin",
          image: `${SKILL_ICON}/kotlin/kotlin-original.svg`,
        },
        {
          name: "SQL",
          image: `${SKILL_ICON}/mysql/mysql-original.svg`,
        },
        {
          name: "JavaScript",
          image: `${SKILL_ICON}/javascript/javascript-original.svg`,
        }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        {
          name: "Git",
          image: `${SKILL_ICON}/git/git-original.svg`,
        },
        {
          name: "GitHub",
          image: `${SKILL_ICON}/github/github-original.svg`,
        },
        {
          name: "Docker",
          image: `${SKILL_ICON}/docker/docker-original.svg`,
        },
        {
          name: "New Relic",
          image: "https://images.seeklogo.com/logo-png/44/1/new-relic-logo-png_seeklogo-441431.png",
        },
        {
          name: "Postman",
          image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg",
        },
        {
          name: "Arcjet",
          image: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tdvgk6r6zuyjlrrba9ni",
        },
        {
          name: "VS Code",
          image: `${SKILL_ICON}/vscode/vscode-original.svg`,
        },
        {
          name: "Android Studio",
          image: `${SKILL_ICON}/androidstudio/androidstudio-original.svg`,
        },
        {
          name: "Vercel",
          image: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
        },
      ]
    },
    {
      title: "Additional Skills",
      skills: [
        {
          name: "CSS",
          image: `${SKILL_ICON}/css3/css3-original.svg`,
        },
        {
          name: "JavaScript",
          image: `${SKILL_ICON}/javascript/javascript-original.svg`,
        },
        {
          name: "Spring Boot",
          image: `${SKILL_ICON}/spring/spring-original.svg`,
        },
        {
          name: "Android Studio",
          image: `${SKILL_ICON}/androidstudio/androidstudio-original.svg`,
        },
        {
          name: "Linux",
          image: `${SKILL_ICON}/linux/linux-original.svg`,
        },
      ]
    },
  ];


  export const experiences = [
    {
      id: "visa",
      img: visaLogo,
      role: "Software Engineer",
      company: "Visa",
      date: "2026 - Present",
      desc:
        "Building enterprise-grade backend services and AI-assisted developer tooling for fraud prevention and intelligent risk—production APIs, hardened pipelines, and audit-ready systems at global payments scale.",
      projects: [
        {
          title: "Dependency Guardian",
          desc:
            "AI-powered developer tool that scans project dependencies, detects vulnerabilities, proposes intelligent fixes, applies them safely, and opens pull requests in one seamless workflow—cutting friction between security hygiene and everyday shipping.",
          points: [
            "Scans dependencies end-to-end; surfaces risk, suggests fixes, applies changes, and raises PRs so teams stay secure without losing velocity",
            "Targets a seamless loop from detection to merge-ready updates for real engineering workflows",
          ],
        },
        {
          title: "Rule Optimization API · Integrated Risk Platform (IRP)",
          desc:
            "Designed and built a Rule Optimization REST API so fraud-detection rules can be tuned using ML-driven recommendations—covering analytics, optimization suggestions, action management, and deep rule investigations with full audit trails for compliance.",
          points: [
            "Architected Spring Boot 4.0.3 on Java 21 with optimization flows for cleanup, threshold tuning, consolidation, and new-rule suggestions",
            "Shipped four core API areas: rule analytics, optimization proposals, actionable controls, and detailed investigations",
            "Implemented action management and comprehensive audit histories aligned with regulatory and operational scrutiny",
            "Owned Jenkins CI/CD: automated testing, SonarQube analysis, Checkmarx security scanning, Docker images, multi-stage pipelines, and deployment via AWS ECR",
            "Drove quality to 95%+ code coverage (JaCoCo) alongside PostgreSQL + JPA/Hibernate for optimization metadata and audit persistence",
            "Delivered OpenAPI 3 specification and Swagger UI so teams integrate and evolve the surface area with confidence",
          ],
        },
      ],
      skills: [
        "Java 21",
        "Spring Boot",
        "REST & OpenAPI 3",
        "PostgreSQL",
        "JPA / Hibernate",
        "Jenkins",
        "Docker",
        "AWS ECR",
        "SonarQube",
        "Checkmarx",
        "JaCoCo",
        "Fraud / risk domains",
        "AI-assisted tooling",
      ],
    },
    {
      id: 0,
      img: logo,
      role: "Software Engineer",
      company: "Nexzap",
      date: "Feb 2025 - early 2026",
      desc: "Spearheading development of Tagflo’s full-stack Admin Panel and driving scalable API infrastructure with a focus on observability, security, and performance.",
      projects: [
        {
          title: "Admin Panel & Full-Stack Management",
          desc: "Built a robust, scalable admin dashboard with employee, inventory, and site management features.",
          points: [
            "Developed and maintained modules for stock management, employee PIN actions, site selection, tag scanning, and email reporting using modular React components and API integration",
            "Enabled multi-tenant site management and token-based authentication using custom JWT middleware",
            "Improved internal workflows by integrating OpenTelemetry for tracing, and Swagger/OpenAPI for complete API documentation"
          ]
        },
        {
          title: "API Design & Authentication",
          desc: "Led end-to-end API architecture and secure authentication flows.",
          points: [
            "Designed RESTful APIs with Swagger/OpenAPI, improving documentation coverage to 100% and reducing onboarding time by 40%",
            "Implemented robust Clerk + JWT-based auth middleware using `jsonwebtoken` and `jose`, supporting secure access for both web and mobile"
          ]
        },
        {
          title: "Email Automation & Observability",
          desc: "Introduced systems to monitor and automate internal operations.",
          points: [
            "Built automated inventory email alerts using Resend.js, reducing manual reporting hours",
            "Instrumented backend services using OpenTelemetry SDKs and integrated with New Relic APM",
            "Improved MTTR by 60% via custom metrics and distributed tracing"
          ]
        }
      ],
      skills: [
        "Admin Dashboard",
        "Full-Stack Development",
        "Multi-Tenant Architecture",
        "JWT Authentication",
        "Swagger/OpenAPI",
        "OpenTelemetry",
        "New Relic",
        "Resend.js",
        "Next.js",
        "Docker"
      ]
    },
    {
      id: 1,
      img: logo,
      role: "Software Engineering Intern",
      company: "Nexzap",
      date: "Nov 2024 - Feb 2025",
      desc: "Transitioned into an active engineering role, focusing on customer-facing features, wallet UI, and backend integrations.",
      projects: [
        {
          title: "Customer Feedback & Wallet Security",
          desc: "Enhanced product security and developed core wallet features.",
          points: [
            "Built customer voucher management UI and integrated backend APIs for real-time voucher redemption",
            "Contributed to debugging and reviewing PRs during critical product development cycles",
            "Integrated Arcjet for live email validation, improving voucher transaction security by 50%"
          ]
        },
        {
          title: "Nexzap Website Enhancements",
          desc: "Optimized and extended the company website for better UX and performance.",
          points: [
            "Added lazy loading and code-splitting to boost initial load speed and SEO",
            "Developed responsive layouts and animation effects using React and Tailwind CSS"
          ]
        }
      ],
      skills: [
        "React",
        "UI Development",
        "Voucher Systems",
        "Arcjet Security",
        "Performance Optimization",
        "Backend Integration",
        "Code Review"
      ]
    },
    {
      id: 2,
      img: logo,
      role: "Software Consultant",
      company: "Nexzap",
      date: "Apr 2024 - Nov 2024",
      desc: "Contributed to Nexzap's early-stage startup setup—laying foundational development systems and kickstarting product development.",
      projects: [
        {
          title: "Initial Platform & Environment Setup",
          desc: "Helped establish the development pipeline and contributed to foundational codebase decisions.",
          points: [
            "Set up Git version control, environment configurations, and CI/CD pipeline to enable smooth dev-to-prod workflows",
            "Collaborated with the founding team to decide on core tech stack, coding standards, and API-first architecture",
            "Bootstrapped reusable React components and backend folders to ensure scalability from the start"
          ]
        },
        {
          title: "Nexzap Company Website",
          desc: "Built the MVP website for brand presence and investor/demo pitches.",
          points: [
            "Implemented a modern, mobile-responsive React website with animations and performance enhancements",
            "Reduced load time by 30% via lazy loading and code-splitting techniques"
          ]
        }
      ],
      skills: [
        "Startup Engineering",
        "React",
        "Project Bootstrapping",
        "Version Control",
        "Environment Configuration",
        "Team Collaboration"
      ]
    }
  ];
  
  



  export const education = [
    {
      id: 1,
      img: "https://images.shiksha.com/mediadata/images/1595846059phpNWbCy3.jpeg",
      school: "BV Raju Institute of Technology, Narsapur, Medak",
      date: "Oct 2020 - Jun 2024",
      grade: "8.93 CGPA",
      desc: "I earned my Bachelor's degree in Information Technology from B V Raju Institute of Technology with a commendable CGPA of 8.96. My coursework includes key subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
      degree: "Bachelor of Technology - BTech, Information Technology and Engineering",
    },
    {
      id: 2,
      img: "https://content.jdmagicbox.com/comp/hyderabad/h7/040pxx40.xx40.161118011529.v1h7/catalogue/narayana-junior-college-ecil-hyderabad-junior-colleges-1kjuim2bmp.jpg",
      school: "Narayana Junior College, Hyderabad",
      date: "Jun 2017 - Apr 2019",
      grade: "93.5%",
      desc: "I completed my Class 12 education at Narayana Junior College, Hyderabad, with a focus on Mathematics, Physics, and Chemistry.",
      degree: "TSBIE(XII), MPC",
    },
    {
      id: 3,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis2-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple114%2Fv4%2Ff9%2Fde%2Fd6%2Ff9ded6cd-721e-d672-4e7c-a9a88a869281%2Fsource%2F512x512bb.jpg&f=1&nofb=1&ipt=ef2e0a2712947421592dc21f4218efc0957a6e0cb2b85f89a0b75b62153dd2b4&ipo=images",
      school: "Krishnaveni High School, Metpally",
      date: "Apr 2017",
      grade: "97.0%",
      desc: "I completed my class 10 education at Krishnaveni High School, Metpally.",
      degree: "SSC(X)",
    },
  ];
  
  export const projects = [

    {
      id: 1,
      title: "Deep Fake Face Detection",
      date: "Jan 2024 - Apr 2024",
      description: 
        ["Implemented a robust Deepfake Face Detection System using Long Short-Term Memory (LSTM) networks and Xception architecture. The project aimed to address the rising concerns related to deepfake technologies, specifically targeting facial manipulation. The combination of LSTM, known for its sequential data handling capabilities, and Xception, a powerful convolutional neural network (CNN), enabled accurate and real-time detection of manipulated facial images.",
        "Utilized LSTM networks for handling sequential data.",
        "Implemented the Xception architecture for powerful feature extraction.",
        "Addressed concerns related to deepfake technologies.",
        "Targeted facial manipulation scenarios."],
      
      image: Deep,
      tags: ["LSTM", "Xception","TensorFlow", "Keras","OpenCV", "Precision", "Recall", "F1-score"],
      category: "machine learning",
      github: "https://github.com/VIGNESH-THIPPARTHI/DeepFake-Face-Detection",
      webapp: "https://shorturl.at/1Pxvm",
    },
    {
      
      id: 2,
      title: "Todos Web App",
      date: "Feb 2024",
      description:
        "Todos - Task Management Application, your ultimate productivity hub for effortless organization and focus. Seamlessly create, categorize, and prioritize tasks with an intuitive interface designed for efficiency. With built-in features like a focus timer, task filtering, and bulk actions, managing your to-do list has never been easier. Enjoy a distraction-free experience while staying on top of deadlines, all without the need for sign-ups or password management. Customize your workflow, set reminders, and stay productive with a system built to enhance your efficiency. Take control of your tasks and maximize your productivity with Todos today! 🚀",
      image: Todos,
      tags: ["HTML", "Javascript","CSS","Bootstrap","Anime.js","Local Storage" ],
      category: "web app",
      github: "https://github.com/VIGNESH-THIPPARTHI/Todos",
      webapp: "https://ourtodos.vercel.app/",
    },
    {
      id: 3,
      title: "Weather Web App",
      date: "Mar 2024",
      description:
        "A React JS weather web app offering real-time weather data retrieval. Users can search by city or use automatic location detection. Integrated with the OpenWeatherMap API, it displays temperature in Celsius/Fahrenheit, humidity, and wind speed. The background image changes with weather conditions, enhancing visual appeal.",
      image: Weather,
      tags: ["React JS", "Axios", "Bootstrap", "Tailwind","React Icons","React Toastify"],
      category: "web app",
      github: "https://github.com/VIGNESH-THIPPARTHI/Nimbus-Now",
      webapp: "https://our-weather-app.vercel.app/",

    },    
    {
      id: 4,
      title: "Quiz Web App",
      date: "Mar 2024",
      description:
        "An interactive quiz application built using React. Users can choose the number of questions they want to answer and start the quiz. It fetches questions from the Open Trivia Database API and presents them to the user. Users can select their answers and receive instant feedback. After completing the quiz, users can view their score and a summary of their answers.",
      image:quiz,
      tags: ["React JS", "JavaScript", "HTML", "CSS"],
      category: "web app",
      github: "https://github.com/VIGNESH-THIPPARTHI/React-project-Quizapp",
      webapp: "https://our-quizapp.vercel.app/",
    },
    
    {
      id: 5,
      title: "Smart Blind Stick",
      date: "Sept 2020 - Oct 2022",
      description:
        "This innovative assistive technology, crafted for individuals with visual impairments, employs advanced ultrasonic sensors and the Arduino UNO platform. It provides precise obstacle detection within a 5-meter radius, accompanied by an audible buzzer signal and the added feature of creating vibrations. This dual-alert system enhances user safety and confidence in navigating their surroundings, offering a comprehensive solution for individuals with visual challenges.",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F711An0gDgHL._SL1500_.jpg&f=1&nofb=1&ipt=a63a28e26bb2e3379e25a14c382530d403cb709a6b11c8a898da243c85df0eca&ipo=images",
      tags: ["Arduino UNO", "Ultrasonic Sensor","Buzzer", "Code in C++"],
      category: "Iot",
    },
    {
      id: 6,
      title: "Smart Wrist Band for Women",
      date: "Oct 2020 - Nov 2022",
      description:
        "Engineered an IoT-powered Smart Wrist Band with an exclusive dedication to fortifying women's safety. This innovative device not only promptly dispatches certified alarm notifications but also facilitates real-time location sharing, thereby enhancing security during critical moments.The device constitute of Arduino Uno and a gsm module enabling to send messages and a geo locater that detects the user location and together helps to send the information.",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcircuitdigest.com%2Fsites%2Fdefault%2Ffiles%2Fprojectimage_mic%2FWomen-Safety-Device.jpg&f=1&nofb=1&ipt=f2710e687c11ed135d2ba93448d21fac19768437618caeaf49ab8475907b4d33&ipo=images",
      tags: ["Gsm", "Arduino","Geo locater"],
      category: "Iot",
    },
    
  ];
  
  