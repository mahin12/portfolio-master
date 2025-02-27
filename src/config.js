module.exports = {
  siteTitle: 'Md Mahin Arafat | Software Engineer',
  siteDescription:
    'Md Mahin Arafat is a software engineer  who specializes in building and designing exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Md Mahin Arafat, Meiem, Mahin, Arafat, software engineer, front-end engineer, web developer, javascript, northeastern',
  siteUrl: 'https://mdmahinarafat.netlify.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Md Mahin Arafat',
  location: 'Toronto, Canada',
  email: 'mahinarafatmeem@gmail.com',
  github: 'https://github.com/mahin12',
  twitterHandle: '@mahinarafat12',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/mahin12',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mahin-arafat/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/mahin12',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/meiem12/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mahinarafat12',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
