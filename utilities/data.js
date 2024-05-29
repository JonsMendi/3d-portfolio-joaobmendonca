import docker from "/pages/assets/techstack/docker.png";
import html from "/pages/assets/techstack/html.png";
import css from "/pages/assets/techstack/css.png";
import javascript from "/pages/assets/techstack/javascript.png";
import mongodb from "/pages/assets/techstack/mongodb.png";
import nodejs from "/pages/assets/techstack/nodejs.png";
import reactjs from "/pages/assets/techstack/reactjs.png";
import tailwind from "/pages/assets/techstack/tailwind.png";
import typescript from "/pages/assets/techstack/typescript.png";
import threejs from "/pages/assets/techstack/threejs.svg";
import angular from "/pages/assets/techstack/angular.svg";
import leaflet from "/pages/assets/techstack/leaflet.png";
import bootstrap from "/pages/assets/techstack/bootstrap.svg";
import rxjs from "/pages/assets/techstack/rxjs.svg";
import jasmine from "/pages/assets/techstack/jasmine.png";
import blender from "/pages/assets/techstack/blender.svg";
import inkscape from "/pages/assets/techstack/inkscape.png";
import krita from "/pages/assets/techstack/krita.svg";
import redis from "/pages/assets/techstack/redis.png";
import python from "/pages/assets/techstack/python.svg";
import mysql from "/pages/assets/techstack/mysql.png";
import jest from "/pages/assets/techstack/jest.png";
import express from "/pages/assets/techstack/express.png";
import ros from "/pages/assets/techstack/roswhite.png";
import websocket from "/pages/assets/techstack/websocket.svg";
import redux from "/pages/assets/techstack/redux.svg";
import swagger from "/pages/assets/techstack/swagger.svg";
import restful from "/pages/assets/techstack/restful.png";
import mui from "/pages/assets/techstack/mui.png";
import nextjs from "/pages/assets/techstack/nextjs.png";
import framermotion from "/pages/assets/techstack/framer-motion.svg";
import typeorm from "/pages/assets/techstack/typeorm.png";
import git from "/pages/assets/techstack/git.png";
import postmanlogo from "/pages/assets/techstack/postman.svg";
import terminal from "/pages/assets/techstack/terminal.png";
import axios from "/pages/assets/techstack/axios.png";

import nrobotics from "/pages/assets/experience/nrobotics.png";
import node from "/pages/assets/experience/node.jpeg";
import noname from "/pages/assets/experience/noname.png";
import cell from "/pages/assets/experience/cell.jpg";
import cinco from "/pages/assets/experience/cinco.jpg";
import architecure from "/pages/assets/experience/architecture.jpg";

import chatappapp from "/pages/assets/portfolio/chatappapp.png";
import meetapp from "/pages/assets/portfolio/meetapp.png";
import myFlix from "/pages/assets/portfolio/myFlix.png";
import pokedex from "/pages/assets/portfolio/ncubotics.png";
import postman from "/pages/assets/portfolio/postman.png";
import myMovies from "/pages/assets/portfolio/movie-lists.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const fronttechnologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS/SCSS",
    icon: css,
  },
  {
    name: "JavaScript*",
    icon: javascript,
  },
  {
    name: "TypeScript*",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "RxJS",
    icon: rxjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "ROS",
    icon: ros,
  },
  {
    name: "Jasmine",
    icon: jasmine,
  },
  {
    name: "Jest*",
    icon: jest,
  },
  {
    name: "Websocket",
    icon: websocket,
  },
  {
    name: "Axios",
    icon: axios,
  },
  {
    name: "Docker*",
    icon: docker,
  },
  
  {
    name: "Leaflet.js",
    icon: leaflet,
  },
  {
    name: "MaterialUI",
    icon: mui,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "FramerMotion",
    icon: framermotion,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Inkscape",
    icon: inkscape,
  },
  {
    name: "Krita",
    icon: krita,
  },
];

const backtechnologies = [
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Restful*",
    icon: restful,
  },
  {
    name: "Swagger*",
    icon: swagger,
  },
  {
    name: "Typeorm",
    icon: typeorm,
  },
  {
    name: "Postman",
    icon: postmanlogo,
  },
  {
    name: "Git*",
    icon: git,
  },
  {
    name: "Terminal*",
    icon: terminal,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "N Robotics GmbH - Berlin, Germany",
    icon: nrobotics,
    icon_background: "#000000",
    date: "June 2023 - Present (Hybrid)",
    description: "Working at N Robotics, a dynamic full-stack robotics company, has been a fantastic journey. As the sole Frontend Developer, I balance enhancing our existing Flask UI and creating a new 3D UI interface with React and Three.js. The small, talented team offers a unique blend of collaboration and innovation. Each day is a blend of challenges and learning, where my involvement in the full development lifecycle enriches my skills and perspective. This experience, in a supportive and creative environment, is not just shaping my technical abilities but also my approach to teamwork and innovation.",    
    tasks: [
      "Frontend Vite React App (Version 18): Fully developed from scratch and maintained a TypeScript-based Vite React app for robot fleet management, enhancing control and user interaction with Three.js.",
      "Backend Express.js App: Fully developed from scratch and managed a TypeScript, MySQL, and Redis-powered backend Express.js application, acting as the database hub for the React robot app.",
      "Fullstack Flask App: Development and maintenance of a Python-JavaScript-based Single Robot Flask application, focusing on efficiency and user experience."
    ],
    link: "https://node-robotics.com/en/",
  },
  {
    title: "Junior Frontend Developer",
    company_name: "NODE Robotics GmbH - Stuttgart, Germany",
    icon: node,
    icon_background: "#000000",
    date: "September 2022 - May 2023 (Remote)",
    description:
      "Working at NODE was an incredibly fulfilling experience. Being part of a small, tight-knit team fueled by ambition and a constant drive to improve meant that every day brought new challenges and opportunities for growth. The shared goal of pushing ourselves to be better than we were yesterday fostered a culture of innovation and collaboration, where everyone's contributions were valued and respected. I feel grateful to have been a part of such an inspiring team, and the lessons and memories I gained will stay with me for a lifetime.",
    tasks: [
      "Development of a Fleet Management Robotic Software Application with Angular, Leaflet.js,and Three.js.",
      "Writing unit test for the application with Jasmine.",
      "Creation of 2D and 3D screen design with Inkscape and Blender.",
      "Reviewing code of other developers (students).",
    ],
    link: "https://node-robotics.com/en/",
  },
  {
    title: "Chef de Partie",
    company_name: "TheNOname - 1 Michelin Star Restaurant",
    icon: noname,
    icon_background: "#000000",
    date: "June 2020 - September 2021, in Berlin",
    description:
      "Working at TheNOname restaurant was a rewarding experience that allowed me to focus on my passion for creating new dishes. The environment was supportive and provided me with ample opportunities to experiment and innovate in the kitchen. I am proud to say that some of the dishes I created during my time there were recognized in gastronomic magazines, which was a tremendous honor. However, as much as I enjoyed working in the culinary world, it was during my time at TheNOname that I realized I wanted to pursue a career in programming. Although I cherished the memories and experiences gained during my time at the restaurant, I knew it was time for a new chapter in my life.",
    tasks: [
      "Cold, hot, and pastry section management.",
      "Responsible to create and develop new dishes and menus.",
      "Manage and guiding teams",
    ],
    link: "https://the-noname.de/",
  },
  {
    title: "Chef de Partie",
    company_name: "Cell Restaurant - 16 Gault Millau",
    icon: cell,
    icon_background: "#FFFFFF",
    date: "July 2019 - May 2020, in Berlin",
    description:
      "Working at Cell Restaurant was a remarkable experience that broadened my horizons both professionally and culturally. As part of a smaller restaurant team, I had the opportunity to work alongside a truly exceptional and diverse group of international talent. Every member of the team came from a different country, and the knowledge-sharing that took place was simply incredible. The kitchen itself was an experimental take on French neo-classic cuisine, which made every day an adventure and a learning opportunity. The level of creativity and innovation demanded of us was challenging, but also incredibly rewarding. Looking back, my time at Cell Restaurant not only allowed me to develop my culinary skills but also taught me the importance of embracing diversity and sharing knowledge.",
    tasks: [
      "Cold, hot, and pastry section management.",
      "Responsible to create and develop new dishes and menus.",
      "Manage and guiding teams",
    ],
    link: "https://www.cremeguides.com/en/berlin/restaurant-cell/",
  },
  {
    title: "Chef de Partie",
    company_name: "5-Cinco by Paco - 1 Michelin Star Restaurant",
    icon: cinco,
    icon_background: "#FFFFFF",
    date: "September 2018 - June 2019, in Berlin",
    description:
      "Working at 5-Cinco was an exceptional experience that played a significant role in my personal and professional development. As my first restaurant job in a new country, being part of a spanish Michelin-starred team was a dream come true. The level of responsibility was enormous, but the support and camaraderie among my colleagues made it all possible. We were like family, always standing by each other and helping one another whenever needed. The attention to detail required in the kitchen was intense, pushing me to new heights of precision and accuracy, and every day was a new challenge that demanded constant creativity and flexibility. It was a dynamic and stimulating environment, and the skills and values that I gained during my time at 5-Cinco continue to impact me positively in all areas of my life.",
    tasks: [
      "Cold, hot, and pastry section management.",
      "Responsible to create and develop new dishes and menus.",
      "Manage and guiding teams",
    ],
    link: "https://www.cremeguides.com/en/berlin/cinco-by-pack-perez-at-hotel-stue/",
  },
  {
    title: "Architect",
    company_name: "Casa do Sr. Paulo",
    icon: architecure,
    icon_background: "#FFFFFF",
    date: "January 2013 - June 2014, in Azores",
    description:
      "My experience working on a real architecture project was an unforgettable opportunity that I thoroughly enjoyed. The project involved modernizing a historic house while preserving its unique integration with nature. I spent countless hours researching and studying the house's architecture to come up with innovative ideas that would blend seamlessly with its surroundings. Despite the challenges, I found the project stimulating, demanding creativity, resourcefulness, and attention to detail. In the end, the project was a success, and the skills and knowledge I gained continue to impact my professional career positively.",
    tasks: [
      "Rehabilitation of a house for rural tourism",
      "Project development and design of plans and sections.",
      "Design of Urbanistic surroundings.",
    ],
    link: "https://es-l.airbnb.com/rooms/36148785?source_impression_id=p3_1679949173_iQ0wTUJ9nWb6HOIX",
  },
];

const feedbacks = [
  {
    feedback:
      "João is kind and friendly person. It is a big pleasure to work with him. He is curious about new software technologies and learns fast. He has a good eye for details and a high ability to see things from a users perspective.",
    name: "Christopher Zündorf",
    designation: "Lead Frontend Developer",
    company: "NODE Robotics GmbH",
  },
  {
    feedback:
      "The greatest aspects about working with João is his willing to help and how cool he is to be around. When working on a task you can expect not only insight and analysis from a good developer, but also a great time and authenticity from his persona. Anyone would feel lucky to have João as a team member.",
    name: "Alejandro Mendoza",
    designation: "Software Developer",
    company: "NODE Robotics GmbH",
  },
  {
    feedback:
      "João is a dedicated Developer, who, besides programming skills, is an excellent communicator and team player, always willing to lend a hand and support others. All of this makes him a very healthy addition to any team. Also, he has the best music playlists in the office.",
    name: "Tom Moller",
    designation: "Robotic Software Engineer",
    company: "N Robotics GmbH",
  },
  {
    feedback:
      "João is a great friend. In professional environment, he takes initiative to make things better. He truly puts his efforts in work and work flexibly in team. He has a good humour and it's always fun working with him.",
    name: "Vishwas Jain",
    designation: "Robotic Software Engineer",
    company: "N Robotics GmbH",
  },
  {
    feedback:
      "It was a pleasure to be able to work with João. His attention to detail, professionalism, passion, and respect for his work was always second to none. Always courteous to his colleagues and willing to go the extra mile to lend a helping hand where needed. I love him",
    name: "Liam Valentine.",
    designation: "Executive Chef",
    company: "Cell Restaurant",
  },
  {
    feedback:
      "João is a very intelligent and emotional, empathetic, hard worker, and a very fast learner, I tried to rehire him many times after our experience together. His details, human values, and optimism make him a very very special employee.",
    name: "Miquel Villacrosa",
    designation: "Executive Chef",
    company: "5-Cinco by Paco Perez",
  },
];

const projects = [
  {
    name: "N Cubotics",
    description:
      "Created a small web application built with Next.js and Typescript that displays a 3D cube using Three.js. The cube can be connected to a device through a serial port, using the SerialPort library. A list of possible mock devices is provided, including Arduino, Raspberry Pi and ESP32. The connected device will emit values between 0 and 360 degrees, which will cause the cube to rotate accordingly.",
    tags: [
      {
        name: "TypeScript",
      },
      {
        name: "Next.js",
      },
      {
        name: "Three.js",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "SerialPort",
      },
      {
        name: "Tween.js",
      },
    ],
    image: pokedex,
    source_code_link: "https://github.com/JonsMendi/n-cubotics?tab=readme-ov-file",
  },
  {
    name: "Movie API (Back-End)",
    description:
      "Created an API and a Database that allow and generates information for the Movie front-end projects. In this project Authentication is controlled with passport. The login request will bear a JWToken to be used in each endpoint.",
    tags: [
      {
        name: "Node.js",
      },
      {
        name: "Express.js",
      },
      {
        name: "MongoDB",
      },
    ],
    image: postman,
    source_code_link: "https://github.com/JonsMendi/movie_api",
  },
  {
    name: "MyMovies(Front-End)",
    description:
      "Created a full stack web application that utilizes the MERN stack. The app allows users to create a profile, see a list of movies, click on them for genre and directors information. Users can change their user info as well as create and edit a list of their personal favorite movies.",
    tags: [
      {
        name: "JavaScript",
      },
      {
        name: "React",
      },
      {
        name: "CSS",
      },
      {
        name: "Bootstrap",
      },
    ],
    image: myMovies,
    source_code_link: "https://github.com/JonsMendi/myMovies-client/tree/dev",
  },
  {
    name: "MeetYour App",
    description:
      "Created a serverless, progressive Web Apllication (PWA) built with React using a test-driven development (TDD) technique. It uses the Google Calendar API to fetch upcoming events.",
    tags: [
      {
        name: "JavaScript",
      },
      {
        name: "React",
      },
      {
        name: "CSS",
      },
      {
        name: "AWS Lambda",
      },
    ],
    image: meetapp,
    source_code_link: "https://github.com/JonsMendi/meet",
  },
  {
    name: "ChatApp",
    description:
      "Created a React Native application with Gifted Chat. Users can read and send messages, share images and their location. The app uses React Native Async Storage to store messages when offline. Message data is stored in Cloud Firestore",
    tags: [
      {
        name: "JavaScript",
      },
      {
        name: "React Native",
      },
      {
        name: "CSS",
      },
      {
        name: "Firestore",
      },
    ],
    image: chatappapp,
    source_code_link: "https://github.com/JonsMendi/ChatApp",
  },
  {
    name: "MyFlix-Angular",
    description:
      "Created an Angular front-end version of myMovies. Built using Angular Material and Typescript and works with the myFlix API.",
    tags: [
      {
        name: "JavaScript",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Angular",
      },
      {
        name: "CSS",
      },
    ],
    image: myFlix,
    source_code_link: "https://github.com/JonsMendi/myFlix-Angular-client",
  },
];

export { fronttechnologies, backtechnologies, experiences, feedbacks, projects };
