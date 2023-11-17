import Image from "next/image";
import Link from "next/link";
import { TbWorldWww } from "react-icons/tb";

const Card = (props) => {
  const { image, title, description, link } = props;
  return (
    <div className=" card flex p-2 border-2 border-lime-500 rounded-xl gap-2 lg:w-auto">
      <div className="image-container">
        <Image
          className="rounded-lg"
          src={image}
          width={100}
          height={100}
          alt="Website photo"
        />
      </div>
      <div>
        <p className="text-xl font-bold text-green-500">{title}</p>
        <p className="text-lg font-medium text-slate-200">{description}</p>
        <Link href={link} target="_blank">
          <p className="text-slate-500 text-md hover:text-lime-400">
            <TbWorldWww className="h-8 w-8" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
