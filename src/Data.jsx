// Projects
// import Project1 from './assets/project1.gif';
import pta from './assets/pta.gif';
import rottenpopcorn from './assets/rottenpopcorn.gif';
// import wportfolio from './assets/wportfolio.gif';
import oceansok from './assets/oceansok.gif';
import bookbt from './assets/bookbt.gif';
import lakbayne from './assets/lakbayne.gif';
import gos from './assets/gos.gif';
import devtools from './assets/devtools.gif';

// Testimonials
// import Testimonial1 from './assets/testimonial1.gif';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Journey',
    path: 'resume',
  },
  // {
  //   name: 'About',
  //   path: 'about',
  // },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Portfolio',
    path: 'work',
  },
 
  // {
  //   name: 'Testimonials',
  //   path: 'testimonial',
  // },
  // {
  //   name: 'Pricing',
  //   path: 'pricing',
  // },
  // {
  //   name: 'Blog',
  //   path: 'blog',
  // },
  {
    name: 'Contact',
    path: 'contact',
  },
];

// export const services = [
//   {
//     id: 1,
//     name: 'Web Development',
//     title: 'Web Design & Logo',
//     description:
//       'Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.',
//   },
//   {
//     id: 2,
//     name: ' Apps Development ',
//     title: ' iOS & Android ',
//     description:
//       'Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.',
//   },
//   {
//     id: 3,
//     name: ' Game Development ',
//     title: ' Unity & Unreal Engine ',
//     description:
//       ' Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ',
//   },
//   {
//     id: 4,
//     name: ' Advertising ',
//     title: ' Google Ads ',
//     description:
//       ' Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ',
//   },
//   {
//     id: 5,
//     name: ' Content Creation ',
//     title: ' Targeted Content for Audience ',
//     description:
//       'Crafting engaging content tailored to your audience. From blog posts and social media updates to stunning visuals and captivating videos.',
//   },
// ];

export const skills = [
  {
    id: 1,
    name: 'HTML, CSS, JavaScript',
    percentage: 70,
    description:
      'Proficient in using HTML, CSS, and JavaScript to develop and style responsive web pages. I can effectively build structured layouts, apply CSS for design and add interactivity with JavaScript. Comfortable with standard practices and tools (e.g., Bootstrap and Tailwind) for front-end development.',
  },

  {
    id: 2,
    name: 'React',
    percentage: 65,
    description:
      'This portfolio website was originally developed as part of a subject requirement, and it showcases my proficiency in creating dynamic and responsive web applications using React. The site emphasizes component-based architecture and efficient state management, leveraging advanced React features to deliver a seamless user experience.',
  },

  {
    id: 3,
    name: 'PHP, Laravel',
    percentage: 65,
    description:
      "Capable of developing dynamic web applications, managing form submissions, and interacting with databases (MySQL). During my OJT, I leveraged Laravel to develop a system that efficiently manages and stores data related to PhilRice's training programs and generates insightful reports, enhancing the ability to improve training initiatives.",
  },

  {
    id: 4,
    name: 'Java',
    percentage: 40,
    description:
      'Developed practical applications using Apache NetBeans including a book borrowing tracker, a calculator, a phone book, and a cake ordering system. Demonstrates a foundational understanding of its application in real-world projects. Basic experience with Java through the development of simple applications in Android Studio. ',
  },

  {
    id: 5,
    name: 'Python',
    percentage: 65,
    description:
      'I have developed a Discord Bot titled "Game of Shots" using Replit, and online IDE, which includes features like automated responses and interactive commands. Additionally, my capstone project involved using OpenCV and YOLOv8 to detect gasping catfishes, an indicator of poor water quality within a pond.',
  },

  {
    id: 6,
    name: 'C++',
    percentage: 40,
    description:
      'I have written basic codes using Turbo C and Code::Blocks during my first year in college. I utilized this language to develop simple employee and bank management systems, demonstrating my ability to implement core programming concepts and design practical applications which requires problem-solving and understanding requirements.',
  },

  // {
  //   id: 6,
  //   name: 'React',
  //   percentage: 71,
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  // },

];

export const projects = [
  {
    id: 1,
    img: pta,
    category: 'Website',
    title: 'PhilRice Training Analytics',
    description:
      "A dynamic report generating system for PhilRice's training initiatives.",
    githubURL: "https://github.com/jaynevernice/philrice-pta-public.git" ,  
  },

  // {
  //   id: 2,
  //   img: Project5,
  //   category: 'Application',
  //   title: 'ONLYFINS',
  //   description:
  //     "A capstone project",
  //   githubURL: "https://github.com/jaynevernice/philrice-pta-public.git" ,  
  // },

  {
    id: 2,
    img: rottenpopcorn,
    category: 'Website',
    title: 'Rotten Popcorn',
    description:
      'A movie review platform enabling movie discovery, ratings, and user reviews.',
    githubURL: "https://github.com/jaynevernice/rottenpopcorn-laravel-public.git",  
  },
  // {
  //   id: 4,
  //   img: wportfolio,
  //   // category: 'UI UX Design',
  //   category: 'Design',
  //   title: 'WordPress Portfolio',
  //   description:
  //     'Designed a portfolio website utilizing WordPress.',
  // },
  {
    id: 3,
    img: oceansok,
    category: 'Website',
    title: 'Oceans of Knowledge',
    description:
      'A vaccination management system for Oceans of Knowledge High School that streamlines vaccination records',
    githubURL: "https://github.com/jaynevernice/oceans-of-knowledge-public.git",
  },
  {
    id: 4,
    img: bookbt,
    category: 'Application',
    title: 'Book Borrowing Tracker',
    description:
      'Developed a Java-based book borrowing tracker system, facilitating efficient management of book lending and returns.',
    githubURL: "https://github.com/jaynevernice/book-borrowing-tracker-preview.git",
  },
  {
    id: 5,
    img: lakbayne,
    category: 'Website',
    title: 'Lakbay Nueva Ecija',
    description:
      'A travel management website I developed, encourages local tourism by offering users a platform to discover, and book visits to popular destinations.',
    githubURL: "https://github.com/jaynevernice/lakbay-nueva-ecija-preview.git",
  },
  {
    id: 8,
    img: gos,
    category: 'Application',
    title: 'Game of Shots',
    description:
      'A discord bot that combines all adult party games into a single application for free developed in Replit.com',
  },
  {
    id: 9,
    img: devtools,
    category: 'Website',
    title: 'DevTools',
    description:
      'Thid is your go-to hub for web development tools. Discover, compare, and master the latest resources to enhance your coding and design workflow.',
    githubURL: "https://github.com/jaynevernice/devtools-public.git",
  },
];

export const cv = [
  {
    id: 1,
    title: 'Central Luzon State University',
    subtitle: 'College',
    date: '2020 - 2024',
    description:
      'Graduated Magna Cum Laude with a GPA of 1.37. Specialized in Systems Development, where I gained hands-on experience in a variety of programming languages and technologies such as C++, Java, PHP, HTML, CSS, JavaScript, Laravel, ReactJS, and Python.',
    category: 'education',
  },

  {
    id: 2,
    title: 'PHINMA Araullo University',
    subtitle: 'Senior High School',
    date: '2018 - 2020',
    description:
      'Embarking on the Senior High School journey at PHINMA Araullo University, a chapter filled with academic exploration and personal growth. Two years marked by discovery, challenges, and forging pathways toward future endeavors.',
    category: 'education',
  },

  {
    id: 3,
    title: 'San Sebastian School',
    subtitle: 'Preparatory - Grade 10',
    date: '2007 - 2018',
    description:
      'A journey from preparatory through Grade 10 at San Sebastian School, marked by growth, learning, and memorable experiences.',
    category: 'education',
  },

  {
    id: 4,
    title: 'Front-end Developer (OJT)',
    subtitle: 'Philippine Rice Research Institute',
    date: 'February 2024 - May 2024',
    description:
      "Designed and developed a dynamic reporting website for PhilRice's training initiatives. The site includes interfaces for guests to view post-survey reports and authenticated staff (encoder, admin, super admin) with role-based access across all PhilRice stations. I collaborated on back-end development, ensuring robust user role and profile management, including functionalities for encoders, admins, and real-time page visit monitoring. Technologies used include Flowbite, Laravel, ApexCharts, AJAX, and SweetAlert, delivering a seamless and interactive web application.",
    category: 'experience',
  },

  {
    id: 5,
    title: 'Data Encoding',
    subtitle: 'CLSU - Office of Admissions',
    date: 'August 2023',
    description:
      'Contributed to the Office of Admissions at Central Luzon State University by managing student subject enrollment, performing precise data entry, and facilitating seamless updates. Tasked with efficiently adding, removing, and enrolling subjects for students, ensuring accuracy and completeness in academic records.',
    category: 'experience',
  },

  // {
  //   id: 5,
  //   title: 'Full Stack Developer',
  //   subtitle: 'Global Brainforce Inc.',
  //   date: '2026 - 2030',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   category: 'experience',
  // },
];

// export const testimonials = [
//   {
//     id: 1,
//     img: Testimonial1,
//     name: 'Aaron Jay',
//     author: 'Web Developer',
//     description:
//       'Jayne Vernice seamlessly blends technical expertise with creative flair, producing software and content that consistently wow our audience.',
//   },
//   {
//     id: 2,
//     img: Testimonial2,
//     name: 'John Paul Mikko',
//     author: 'Weeaboo',
//     description:
//       'A developer who can code and tell a joke? That is Jayne Vernice, and our software is impeccable and incredibly funny!',
//   },
//   {
//     id: 3,
//     img: Testimonial3,
//     name: 'Ivan Aldrich',
//     author: 'CEO & Founder',
//     description:
//       'Jayne Vernice is a true all-rounder, effortlessly balancing coding mastery and content creation prowess, making them an invaluable asset to our team.',
//   },
//   {
//     id: 4,
//     img: Testimonial4,
//     name: 'Arjay',
//     author: 'Gamer',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
// ];
