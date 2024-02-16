import Interactive from "../public/Interactive.png";
import Encrypter from "../public/Encrypter.png";
import DrCarlos from "../public/DrCarlos.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaGithub,
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
import Card from "./components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-cyan-950 md:h-min-screen lg:flex lg:flex-wrap lg:min-h-screen  lg:w-screen ">
      <div className="pt-28 lg:max-w-[55%] lg:my-auto lg:mx-auto ">
        <p className="text-xl text-green-400 mx-14 mt-6 md:mx-24 lg:mt-auto lg:ms-20 ">
          Hi, my name is
        </p>
        <h1 className=" text-6xl mt-1 mx-14 md:mx-24 md:text-7xl lg:text-7xl lg:mt-1 lg:ms-20  font-semibold text-slate-200  ">
          Ernesto García.
        </h1>
        <h2 className="text-5xl mt-1 mx-14 md:mx-24 md:text-6xl lg:text-6xl lg:mt-1 lg:ms-20 font-semibold text-slate-400 ">
          I create things for the web.
        </h2>
        <p className="mt-5 text-xl px-5 text-center md:mx-24 lg:text-left lg:ms-14 text-slate-500 ">
          I´m a FullStack developer with a background in biomedical engineering
          and a passion for software development, I believe I can bring a unique
          perspective and skill set to your products.
        </p>
        <div className="icons flex flex-wrap mt-6 gap-4 ps-4 pe-3 md:px-28  lg:px-28  ">
          <FaHtml5 className="icon hover:text-lime-400 w-14 h-14 " />
          <FaCss3Alt className="icon hover:text-lime-400 w-14 h-14" />
          <FaSass className="icon hover:text-lime-400 w-14 h-14" />
          <FaBootstrap className="icon hover:text-lime-400 w-14 h-14" />
          <SiTailwindcss className="icon hover:text-lime-400 w-14 h-14" />
          <FaJsSquare className="icon hover:text-lime-400 w-14 h-14" />
          <FaReact className="icon hover:text-lime-400 w-14 h-14" />
          <SiNextdotjs className="icon hover:text-lime-400 w-14 h-14" />
          <SiMongodb className="icon hover:text-lime-400 w-14 h-14" />
          <SiMongoosedotws className="icon hover:text-lime-400 w-14 h-14 color-text-slate-200" />
          <SiExpress className="icon hover:text-lime-400 w-14 h-14" />
          <SiPostman className="icon hover:text-lime-400 w-14 h-14" />
          <FaNodeJs className="icon hover:text-lime-400 w-14 h-14" />
          <FaJava className="icon hover:text-lime-400 w-14 h-14" />
        </div>
      </div>
      <div className="py-5 px-3 xl:my-auto xl:mx-auto flex flex-col gap-3 justify-center align-start min-[1024px]:align-middle max-[2290px]:mx-auto">
        <h2 className="text-4xl text-center mb-3 xl:text-4xl text-white">
          Projects
        </h2>
        <Card
          title="Interactive website"
          description="Website built based on JavaScript exercises"
          image={Interactive}
          link="https://interactive-website-pearl.vercel.app"
        />
        <Card
          title="Text encrypter"
          description="Website built for Oracle ONE challenge"
          image={Encrypter}
          link="https://ernestogarsa.github.io/Challenge_Oracle_One/"
        ></Card>
        <Card
          title="Dr. Carlos García main website (in progress)"
          description="Plastic Surgeon main website"
          image={DrCarlos}
          link="https://www.drcarlosgsantana.com"
        ></Card>
        <Link href="https://www.github.com/ErnestoGarSa" target="_blank">
          <p
            className="text-xl text-slate-300 text-center hover:text-lime-400"
            target="_blank"
          >
            If your want to see these and others repositories, click here!
          </p>
        </Link>
      </div>
    </main>
  );
}
