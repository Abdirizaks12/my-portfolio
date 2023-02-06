const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'AS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Abdirizak Sigat',
  role: 'Front End developer',
  description:
    'i am a frontend developer with a passion for creating dynamic and engaging user experiences. With a solid understanding of HTML, CSS, JavaScript, and React, my experience also extends to working with REST APIs, implementing responsive design principles, and utilizing version control systems such as Git. I am always striving to learn and stay up to date with the latest frontend technologies and techniques, as well as promoting accessibility and usability best practices in my work.',
  resume:
    'https://drive.google.com/file/d/1FkEWXyQpvlBM7-eDeMdWLjUkGQ7JkD5R/view?usp=drivesdk',
  social: {
    linkedin: 'https://www.linkedin.com/in/abdirizaksigat',
    github: 'https://github.com/Abdirizaks12',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'METABNB SITE',
    description: 'NFT Marketplace website made with React JS',
    stack: ['Javascript', 'CSS', 'HTML', 'React'],
    sourceCode: 'https://github.com/Abdirizaks12/Metabnb-NftSite',
    livePreview: 'http://metabnb-nft-site.vercel.app/',
  },
  {
    name: 'LINKTREE CLONE',
    description:
      'Linktree Clone made during my HNG internship with React JS utilising react router and has a CONTACT PAGE',
    stack: ['JavaScript', 'CSS', 'HTML', 'React'],
    sourceCode: 'https://github.com/Abdirizaks12/Hng-task-1 ',
    livePreview: 'https://linktreeapp1.vercel.app/',
  },
  {
    name: 'My Travel Journal',
    description: 'Built a travel journal using React JS',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    sourceCode:
      'https://github.com/Abdirizaks12/REACT-PROJECT--my-travel-journalhttps://github.com',
    livePreview:
      'https://abdirizaks12.github.io/REACT-PROJECT--my-travel-journal/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  // 'TypeScript',
  'React',
  'Redux',
  'NODE JS',
  'Express JS',
  'Mongo DB',
  // 'SASS',
  'Material UI',
  'Tailwind CSS',
  'Bootstrap',
  'Git',
  // 'CI/CD',
  // 'Jest',
  // 'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'abdirizaksigat99@mail.com',
}

export { header, about, projects, skills, contact }
