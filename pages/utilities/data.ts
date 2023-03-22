import {
  chatappapp,
  meetapp,
  myFlix,
  myMovies,
  pokedex,
  postman,
  docker,
  html,
  javascript,
  mongodb,
  node,
  nodejs,
  reactjs,
  tailwind,
  threejs,
  typescript,
  angular,
  leaflet,
  bootstrap,
  rxjs,
  jasmine,
  blender,
  inkscape,
  krita,
} from "../assets/index-assets";

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

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS/SCSS",
    icon: docker,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
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
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "Leaflet.js",
    icon: leaflet,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "RxJS",
    icon: rxjs,
  },
  {
    name: "Jasmine",
    icon: jasmine,
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
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Krita",
    icon: krita,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Junior Frontend Developer",
    company_name: "NODE Robotics GmbH",
    icon: node,
    iconBg: "#383E56",
    date: "September 2022 - Present (Remote)",
    points: [
      "Development of a Fleet Management Robotic Software Application with Angular, Leaflet.js,and Three.js.",
      "Writing unit test for the application with Jasmine.",
      "Creation of 2D and 3D screen design with Inkscape and Blender.",
      "Reviewing code of other developers (students).",
    ],
  },
  {
    title: "Chef de Partie",
    company_name: "TheNOname",
    icon: node,
    iconBg: "#383E56",
    date: "June 2020 - September 2021",
    points: [
      "Cold, hot, and pastry section management.",
      "Responsible to create and develop new dishes and menus.",
      "Manage and guiding teams",
    ],
  },
  {
    title: "Chef de Partie",
    company_name: "Cell Restaurant",
    icon: node,
    iconBg: "#383E56",
    date: "July 2019 - May 2020",
    points: [
      "Cold, hot, and pastry section management.",
      "Responsible to create and develop new dishes and menus.",
      "Manage and guiding teams",
    ],
  },
  {
    title: "Chef de Partie",
    company_name: "5-Cinco by Paco ",
    icon: node,
    iconBg: "#383E56",
    date: "September 2018 - June 2019",
    points: [
      "Cold, hot, and pastry section management.",
      "Responsible to create and develop new dishes and menus.",
      "Manage and guiding teams",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "João was very borring and annoying. If I asked black he made white, if I said left he went back. Jesus...",
    name: "Christopher Zündorf",
    designation: "Lead Frontend",
    company: "NODE Robotics Gmbh",
  },
  {
    testimonial:
      "Biggest funckin cunt I ever saw. He talks shit all the time and annoys everyone around. With him I had an horrifying relation",
    name: "Liam Valentine.",
    designation: "Executive Chef",
    company: "Cell Restaurant",
  },
  {
    testimonial:
      "What João needs is some kicks in the but and work until he can't anymore!",
    name: "Miquel Villacrosa",
    designation: "Executive Chef",
    company: "5-Cinco by Paco Perez",
  },
];

const projects = [
  {
    name: "Pokédex",
    description:
      "Created a small web page using an external API to fetch information. Details can be displayed in a modal by clicking on a pokemon's name",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "JQuery",
        color: "pink-text-gradient",
      },
    ],
    image: pokedex,
    source_code_link: "https://github.com/JonsMendi/Pokedex-app",
  },
  {
    name: "Movie API (Back-End)",
    description:
      "Created an API and a Database that allow and generates information for the Movie front-end projects. In this project Authentication is controlled with passport. The login request will bear a JWToken to be used in each endpoint.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
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
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
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
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "AWS Lambda",
        color: "pink-text-gradient",
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
        color: "blue-text-gradient",
      },
      {
        name: "React Native",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Firestore",
        color: "pink-text-gradient",
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
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: myFlix,
    source_code_link: "https://github.com/JonsMendi/myFlix-Angular-client",
  },
];

export { technologies, experiences, testimonials, projects };
