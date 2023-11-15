import ErnestoGarSa from "../public/IMG_6793.jpg";
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
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="bg-cyan-950 flex flex-wrap h-screen w-screen">
      <div className=" max-w-[60%] my-auto mx-auto">
        <p className="text-lg text-green-400 mt-28 lg:mt-6 ms-20 ">
          Hi, my name is
        </p>
        <h1 className="text-7xl font-semibold text-slate-200 mt-1 ms-20">
          Ernesto García.
        </h1>
        <h2 className="text-6xl font-semibold text-slate-400 mt-1 ms-20">
          I create things for the web.
        </h2>
        <p className="ms-20 mt-5 text-xl text-slate-500 ">
          I´m a FullStack developer with a background in biomedical engineering
          and a passion for software development, I believe I can bring a unique
          perspective and skill set to your products.
        </p>
        <div className="icons flex flex-wrap gap-4 max-w-[55%] mx-auto mt-6 ">
          <FaHtml5 className="icon w-14 h-14 " />
          <FaCss3Alt className="icon w-14 h-14" />
          <FaSass className="icon w-14 h-14" />
          <FaBootstrap className="icon w-14 h-14" />
          <SiTailwindcss className="icon w-14 h-14" />
          <FaJsSquare className="icon w-14 h-14" />
          <FaReact className="icon w-14 h-14" />
          <SiNextdotjs className="icon w-14 h-14" />
          <SiMongodb className="icon w-14 h-14" />
          <SiMongoosedotws className="icon w-14 h-14 color-text-slate-200" />
          <SiExpress className="icon w-14 h-14" />
          <SiPostman className="icon w-14 h-14" />
          <FaNodeJs className="icon w-14 h-14" />
          <FaJava className="icon w-14 h-14" />
        </div>
      </div>
      <div className="my-auto mx-auto">
        <h2 className="text-4xl text-white">Projects</h2>
        <Card
          title="Interactive website"
          description="Website built based on JavaScript exercises"
          image={ErnestoGarSa}
          link="https://www.google.com"
        />
      </div>
    </main>
  );
}
