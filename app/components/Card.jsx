import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  const { image, title, description, link } = props;
  return (
    <div className=" card flex p-2 border-2 border-lime-500 rounded-xl gap-2 hover:ease-in-{300} duration-300">
      <div>
        <Image
          className="rounded-lg"
          src={image}
          width={100}
          height={100}
          alt="Web site photo"
        />
      </div>
      <div>
        <p className="text-xl font-bold text-green-500">{title}</p>
        <p className="text-lg font-medium text-slate-200">{description}</p>
        <Link href={link}>Visit now</Link>
      </div>
    </div>
  );
};

export default Card;
