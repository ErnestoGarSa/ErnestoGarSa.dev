import Image from "next/image";
import Link from "next/link";

import classes from "./Card.module.css";

const Card = (props) => {
  const { image, title, description, link } = props;
  return (
    <Link
      href={link}
      target="_blank"
      className={`text-decoration-none ${classes.body}`}
    >
      <div className={`${classes.card} d-flex p-2 gap-2`}>
        <div className={`${classes.image_container}`}>
          <Image
            className={`${classes.image}`}
            src={image}
            alt="Website photo"
          />
        </div>
        <div>
          <p className={`fs-4 fw-bold ${classes.title}`}>{title}</p>
          <p className="fs-5 text-light">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
