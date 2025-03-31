import Interactive from "../public/Interactive.png";
import Encrypter from "../public/Encrypter.png";
import DrCarlos from "../public/DrCarlos.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiMongoosedotws,
  SiExpress,
  SiPostman,
} from "react-icons/si";

import Card from "../components/Card";
import Link from "next/link";

import classes from "./MainPage.module.css";

const MainPage = () => {
  return (
    <main className={`${classes.main} pt-5 px-3 d-lg-flex d-lg-100vh`}>
      <div
        className={`pt-5 ${classes.info} d-lg-flex flex-column justify-content-center ps-lg-5`}
      >
        <p className={`${classes.title} fs-3`}>Hi, my name is</p>
        <h1 className={`text-light fw-semibold ${classes.name}`}>
          Ernesto García.
        </h1>
        <h2 className={` ${classes.description1}`}>
          I create things for the web.
        </h2>
        <p className={`${classes.description2}`}>
          I´m a FullStack developer with a background in biomedical engineering
          and a passion for software development, I believe I can bring a unique
          perspective and skill set to your products.
        </p>
        <div
          className={`d-flex flex-wrap gap-4 justify-content-center align-items-center ${classes.iconsContainer} mx-md-auto my-md-3 mx-lg-auto my-lg-3 `}
        >
          <FaHtml5 className={`${classes.icon}`} />
          <FaCss3Alt className={`${classes.icon}`} />
          <FaSass className={`${classes.icon}`} />
          <FaBootstrap className={`${classes.icon}`} />
          <SiTailwindcss className={`${classes.icon}`} />
          <FaJsSquare className={`${classes.icon}`} />
          <FaReact className={`${classes.icon}`} />
          <SiNextdotjs className={`${classes.icon}`} />
          <SiMongodb className={`${classes.icon}`} />
          <SiMongoosedotws className={`${classes.icon}`} />
          <SiExpress className={`${classes.icon}`} />
          <SiPostman className={`${classes.icon}`} />
          <FaNodeJs className={`${classes.icon}`} />
          <FaJava className={`${classes.icon}`} />
        </div>
      </div>
      <div className="d-flex flex-column gap-2 justify-content-center align-items-center  my-xl-auto mx-xl-auto">
        <h2 className={`${classes.projects} text-light text-center pt-4`}>
          Projects
        </h2>
        <Card
          className={` mx-md-auto my-md-3`}
          title="Dr. Carlos García main website"
          description="Plastic Surgeon main website"
          image={DrCarlos}
          link="https://www.drcarlosgsantana.com"
        ></Card>
        <Card
          className={` mx-md-auto my-md-3`}
          title="Text encrypter"
          description="Website built for Oracle ONE challenge"
          image={Encrypter}
          link="https://ernestogarsa.github.io/Alura-challenge-1/"
        ></Card>
        <Card
          className={` mx-md-auto my-md-3`}
          title="Interactive website"
          description="Website built based on JavaScript exercises"
          image={Interactive}
          link="https://interactive-website-pearl.vercel.app"
        />
        <Link
          href="https://www.github.com/ErnestoGarSa"
          target="_blank"
          className={`text-decoration-none `}
        >
          <p className={`fs-5 text-light text-center py-2 `}>
            If you want to see these and others repositories, click here!
          </p>
        </Link>
      </div>
    </main>
  );
};

export default MainPage;
