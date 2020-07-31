import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: `Ion's Personal Website`, // e.g: 'Name | Developer'
  lang: 'EN, RU, RO', // e.g: en, es, fr, jp
  description: 'Welcome to my Personal Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: `Ion (Johny)`,
  subtitle: 'Junior Web Developer',
  cta: 'know me..',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a simple web developer who finds happiness by helping others, I want to be working on things that matter with people smarter than me. Traveled a small part of the world, and still looking forward to discovering another part of it!',
  paragraphTwo:
    'My favorite tools for 2020: React.Js, Redux-Sagas, React Native, Node.Js, Express.js, GraphQl, PostgreSQL, Firebase, Server-less Architecture, Progressive Web Apps, Jest, Webpack2 ',
  paragraphThree: '..there is more about me in my',
  resume: 'https://www.resumemaker.online/es.php',
  coverLetter: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'adn_portfolio.jpg',
    title: 'TRUCK DRIVER JOBS IN AMERICA',
    info:
      'I worked as a Frontend Developer and QA using WordPress, CSS, MeteorJS, and NodeJS. I was part of the development team from the beginning until the end, participating in developing the architecture of the app to visual design features.',
    info2: 'Tuscaloosa | Alabama, United States',
    url: 'https://truckdriverjobsinamerica.com/',
    repo: 'https://github.com/johny2433/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bshop.jpg',
    title: 'BEAUTY SHOP - PERSONAL PORTFOLIO PROJECT',
    info:
      'Developed an application using SASS/Design Patterns, Javascript, ReactJS, Redux-Sagas, Firebase, and NodeJS. An online shop with a Home Page, Shop Page, with SignIn and SignUp Page. Users can add the products into the cart, then proceed to the purchase phase through the Stripe payment platform.',
    info2: 'London, United Kingdom',
    url: 'https://beautyshop-live.herokuapp.com/',
    repo: 'https://github.com/johny2433/beauty-shop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'personal_website.jpg',
    title: 'PERSONAL PORTFOLIO WEBSITE',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/johny2433/personal-website', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'johny.codmw3@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/johny2458',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/johny2458/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/johny2433',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/johny2458/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
