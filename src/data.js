import { IoCodeWorking, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import img1 from "./img/projects/fresh-resume.png";
import img2 from "./img/projects/newsvenger.png";
import img3 from "./img/projects/sip-calc.png";
import img4 from "./img/projects/fetch-weather.png";
import img5 from "./img/projects/ngo.png";
import img6 from "./img/projects/covid-dashboard.png";

export const Experience = [
  {
    id: 1,
    date: "May 2022 - Present",
    iconsSrc: <IoCodeWorking />,
    title: "Frontend Intern @Medbikri",
    location: "Remote",
    description:
      "Add feature like Add & search customer , fix countless bugs ,develop some ui components  ",
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
    id: 1,
    name: "Fresh Resume",
    imageSrc: img1,
    techs: "React Js",
    github: "https://github.com/suryansh-bhatnagar/fresh-resume",
  },
  {
    id: 2,
    name: "NewsVenger",
    imageSrc: img2,
    techs: "React Js",
    github: "https://github.com/suryansh-bhatnagar/newsvenger",
  },
  {
    id: 3,
    name: "SIP Calculator",
    imageSrc: img3,
    techs: "Html Css Js Bootstrap",
    github: "https://github.com/suryansh-bhatnagar/sip-calculator",
  },
  {
    id: 4,
    name: "Fetch weather",
    imageSrc: img4,
    techs: "React Js",
    github: "https://github.com/suryansh-bhatnagar/weather-app",
  },
  {
    id: 5,
    name: "NGO website UI",
    imageSrc: img5,
    techs: "Html Css Js Bootstrap",
    github: "https://github.com/suryansh-bhatnagar/ngo-website",
  },
  {
    id: 6,
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
