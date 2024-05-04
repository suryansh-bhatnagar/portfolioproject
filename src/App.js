import Suryansh from "./profile.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, SocialLinks } from "./data";
import { IoLogoGithub, IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import img from "./img/img1.jpg";

function App() {
  const cv_link =
    "https://drive.google.com/file/d/1DBtiGdOt4ep4NIQdbAJXHFhVv_6M5DXS/view?usp=share_link";
  // Adding animation to the navbar buttons
  const elements = document.getElementsByClassName("item");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("animationend", function (e) {
      elements[i].classList.remove("animate");
    });
    elements[i].addEventListener("mouseover", function (e) {
      elements[i].classList.add("animate");
    });
  }

  //function to toggle the state of skills image
  const toggle = (e) => {
    let temp = Array.from(document.getElementsByClassName("hover-show"));
    temp[0].classList.toggle("active");
  };

  const [isActive, setIsActive] = useState(false);
  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center ">
          <div className=" w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className="text-lg text-slate-200 font-medium">Suryansh</p>

            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Home
              </a>

              <a
                href="#skill"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Projects
              </a>
              <a
                href="#contacts"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Contact
              </a>
              <a
                href={cv_link}
                target="_blank"
                rel="noreferrer"
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
              >
                Download CV
              </a>
            </div>

            <motion.div
              whileTap={{ scale: 0.6 }}
              className="block md:hidden  ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              {isActive === false ? (
                <IoMenu className="text-2xl text-textBase" />
              ) : (
                <IoClose className="text-2xl text-textBase" />
              )}
            </motion.div>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: "0.1s", type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#skill"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#contacts"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>
                <a
                  href={cv_link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Download CV
                </a>
              </motion.div>
            )}
          </div>
        </nav>

        <main className="w-[80%]">
          <div
            id="home"
            className="text-3xl flex items-center justify-center
           text-center text-slate-200 capitalize mt-8"
          ></div>
          <section className="w-full flex flex-col  md:flex-row-reverse gap-4 my-12">
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 relative bg-emerald-200 rounded-md">
                <img
                  src={Suryansh}
                  alt=""
                  className="suryanshProfile w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full h-420 flex flex-col items-center justify-center ">
              <p className="text-lg text-textBase text-center">
                Hey, I'm a CS student with keen interest in Web
                Development. I love to solve problems with my tech stacks. Open
                to all kind of learning and opportunities that may add to my
                skill set. Tech stacks & tools i work upon - HTML, CSS, JavaScript, TypeScript, Tailwind, React Js, React Native,Next Js, Node Js ,Express Js and MongoDB.
              </p>

              <button className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <a
                  href={cv_link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-grey-900 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Download CV
                </a>
              </button>
            </div>
          </section>
          <div
            className="text-3xl flex items-center justify-center
           text-center text-slate-200 capitalize mt-8"
          >
            <h1 className="item mr-1 " id="skill">
              SKILLS{" "}
            </h1>
          </div>
          <section>
            <div id="home" className="container relative home-container">
              <div className="logo">
                <div className="hover-show active" onClick={toggle}>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                </div>

                <img src={img} alt="" />
              </div>
              <div className="absolute bottom-10 w-full flex justify-center items-center">
                <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl ">
                  <p className="text-white">Click over the image</p>
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-3xl flex items-center justify-center
           text-center text-slate-200 capitalize my-8"
          >
            <h1 className="item mr-1"> EDUCATION & EXPERIANCE </h1>
          </div>

          <section className="w-full flex items-center justify-center">
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(21, 24, 31)",
                      color: "#888",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(21, 24, 31)",
                    }}
                    date={n.date}
                    iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.location}
                    </h4>
                    <p>{n.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>
          <div
            className="text-3xl flex items-center justify-center
           text-center text-slate-200 capitalize mt-16"
          >
            <h1 className="" id="projects">
              PROJECTS
            </h1>
          </div>

          <section className="flex flex-wrap items-center justify-evenly my-24 gap-4">
            {Projects &&
              Projects.map((n, i) => (
                <motion.div
                  key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-lg text-textBase font-medium uppercase">
                    {n.name.length > 20 ? `${n.name.slice(0, 20)}...` : n.name}
                  </p>

                  <img
                    src={n.imageSrc}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  />

                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">
                        {n.techs}
                      </span>
                    </p>
                    <a href={n.github} target="_blank" rel="noreferrer">
                      <motion.div whileTap={{ scale: 0.5 }}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </motion.div>
                    </a>
                  </div>
                </motion.div>
              ))}
          </section>

          <section
            id="contacts"
            className="flex flex-col items-center justify-evenly w-full my-24"
          >
            <p className="text-2xl text-gray-400 capitalize">Follow me on</p>
            <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href={n.link}
                    target="_blank"
                    rel="noreferrer"
                    key={n.id}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.iconSrc}
                    <p className="text-lg text-textBase">{n.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
