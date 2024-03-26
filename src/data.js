import { IoCodeWorking, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import img1 from "./img/projects/fresh-resume.png";
import img2 from "./img/projects/newsvenger.png";
import img3 from "./img/projects/sip-calc.png";
import img4 from "./img/projects/fetch-weather.png";
import img5 from "./img/projects/ngo.png";
import img6 from "./img/projects/covid-dashboard.png";
import img7 from './img/projects/ecommerce.png'
import img8 from './img/projects/food-vegas.png'
import img9 from './img/projects/skillup.png';

export const Experience = [
  {
    id: 1,
    date: "May 2022 - Feb 2023",
    iconsSrc: <IoCodeWorking />,
    title: "Frontend Intern @Medbikri",
    location: "Remote",
    description:
      "Add features like Add & Search customer, fix countless bugs, develop a graph to display sales of chemist in last week, last 3 months and in lifetime and some ui components. ",
  },
  {
    id: 2,
    date: "2020 - 2023",
    iconsSrc: <IoCodeWorking />,
    title: "B.C.A",
    location: "Bareilly,Uttar Pradesh",
    description: "Bareilly College | GPA - 7.2 | UP Scholarship",
  },
  {
    id: 3,
    date: "2019-2020",
    iconsSrc: <IoCodeWorking />,
    title: "CBSE - 12th",
    location: "Pilibhit, Uttar Pradesh",
    description: "Kendriya Vidyalaya | Percentage - 84",
  },
];

export const Projects = [
  {
    id: 0,
    name: "SkillUp- EdTech Platform",
    imageSrc: img9,
    techs: "MERN Stack",
    github: "https://github.com/suryansh-bhatnagar/SkillUpFrontend",
  },
  {
    id: 1,
    name: "Food Vegas",
    imageSrc: img8,
    techs: "React Js,Tailwind CSS",
    github: "https://github.com/suryansh-bhatnagar/food-vegas",
  },
  {
    id: 2,
    name: "Ecommerce Shop",
    imageSrc: img7,
    techs: "React Js,Tailwind CSS",
    github: "https://github.com/suryansh-bhatnagar/ecommerce-shop",
  },
  {
    id: 3,
    name: "Fresh Resume",
    imageSrc: img1,
    techs: "React Js",
    github: "https://github.com/suryansh-bhatnagar/fresh-resume",
  },
  {
    id: 4,
    name: "NewsVenger",
    imageSrc: img2,
    techs: "React Js",
    github: "https://github.com/suryansh-bhatnagar/newsvenger",
  },
  {
    id: 5,
    name: "SIP Calculator",
    imageSrc: img3,
    techs: "Html Css Js Bootstrap",
    github: "https://github.com/suryansh-bhatnagar/sip-calculator",
  },
  {
    id: 6,
    name: "Fetch weather",
    imageSrc: img4,
    techs: "React Js",
    github: "https://github.com/suryansh-bhatnagar/weather-app",
  },
  {
    id: 7,
    name: "NGO website UI",
    imageSrc: img5,
    techs: "Html Css Js Bootstrap",
    github: "https://github.com/suryansh-bhatnagar/ngo-website",
  },
  {
    id: 8,
    name: "Covid Dashboard",
    imageSrc: img6,
    techs: "React Js Axios Chart Js",
    github: "https://github.com/suryansh-bhatnagar/coviddashboard",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/suryansh-bhatnagar",
  },

  {
    id: 2,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/suryansh-bhatnagar/",
  },
];
