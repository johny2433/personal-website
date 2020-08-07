import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: `Ion's Personal Website`, // e.g: 'Name | Developer'
  lang: 'EN, RU, RO', // e.g: en, es, fr, jp
  description: `Welcome to Ion Popa's Personal Website`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: `Ion (Johny)`,
  subtitle: 'Junior Web Developer',
  cta: 'know me..',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `As a web developer with over 4 years of experience in Frontend Development, I am now specializing in UX, React.JS, Backend Development, and Software Architecture. I want to be working on things that matter with people smarter than me. Traveled a small part of the world, and still looking forward to new adventures and experiences.`,
  paragraphTwo: '',
  resume: `https://cvws.icloud-content.com/B/Afxm3mAqlHvLDFmQPedKpzAWdisPAY2WE-XeHFJiFHQroA2NyxULRpmz/Ion+Popa+-+CV+with+Details.pdf?o=AgGzxyCX13h0t0If8Pn-DqZ45molWTSSGCmSMzlVm-1h&v=1&x=3&a=CAogMYxX26FPFZ2Nr2FVsvjVRIvxs_AnAq-B8LMkzadtcoQSbRDe8P7JvC4Y_ue1yrwuIgEAUgQWdisPWgQLRpmzaiZNq-CH3mVWWiQT5yr9uKzZ0QNYyaSrweiBUAL1FR5g-Mh6EVS2nnImFDSE1Oa5P3ostExBgmS0isUEHhZZ4OhtV8UxdxHDRnQQJGtCOF4&e=1596810163&fl=&r=4f5092ef-fe58-42d6-9d58-cbab27fa94d2-1&k=hV2H6Gx1MbjjtMRpvcmGvw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=63&s=sLcvgjhJMaO-dGmw2ixjYYo4_jM&cd=i`,
  coverLetter:
    'https://cvws.icloud-content.com/B/ASN8pKsp_hpGbQcCVIBQFUL7o8BEAdDlx1ovZBx0y7e5-MemjYDz_Uj0/Ion+Popa+-+Cover+Letter+.pdf?o=AqSXOd6qvd8H5DEdSfSbqDO0-qfiwzCowR5slW4Nuz_L&v=1&x=3&a=CAogt84wPLVbftHSISBK9pw3Ar6ULTOw33hpHB7juwnC2dQSbRD87bTTvC4YnOXr07wuIgEAUgT7o8BEWgTz_Uj0aiaLOOEhIvvnwKcA4fZKlrwzjpHP0N1808jV2D9IRxormaHv8OnVF3Imiys4s3GaXn1QLFOl4NgIuvFNDkX9zL0WLs3u9fwW0L6XJ7DyhQo&e=1596829921&fl=&r=98b571db-9e63-437f-90b4-efae91f49822-1&k=p6rPb3CbMACaRHVzkEQScA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=63&s=xqoYucg8CBvx4kzWHqFWF8Ih2sQ&cd=i', // if no resume, the button will not show up
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
      'Application is developed using JavaScript, React.JS, Redux-Sagas, SASS/Design Patterns, Firebase, and NodeJS. An online shop with a Home Page, Shop Page, with SignIn and SignUp Page. Users can add the products into the cart, then proceed to the purchase phase through the Stripe payment platform.',
    info2: 'London, United Kingdom',
    url: 'https://beautyshop-live.herokuapp.com/',
    repo: 'https://github.com/johny2433/beauty-shop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'personal_website.jpg',
    title: 'PERSONAL PORTFOLIO WEBSITE',
    info:
      'Website is developed using GatsbyJS, React, Bootsrap and custom SASS, Fully Responsive. Modern UI Design with Reveal Animations, One Page Layout built with React, Image optimization with Gatsby.',
    info2: 'London, United Kingdom',
    url: '',
    repo: 'https://github.com/johny2433/personal-website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'more_tocome.png',
    title: 'MORE PROJECTS COMING SOON',
    info:
      'At the moment working on improving my skills in working with TypeScript, DevOps AWS, K8, Microservices Architecture, and more..',
    info2: 'London, United Kingdom',
    url: 'https://github.com/johny2433/',
    repo: 'https://github.com/johny2433/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: `Let's Talk`,
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
