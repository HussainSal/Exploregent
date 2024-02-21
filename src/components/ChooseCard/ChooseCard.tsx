import React from "react";
import styles from "./ChooseCard.module.scss";
import Image from "next/image";

interface Props {
  img: string;
  heading: string;
}

const ChooseCard: React.FC<Props> = ({ img, heading }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={img}
          width={45}
          height={50}
          className={styles.imageInner}
          alt="user"
        />
      </div>
      <div className={styles.textContainer}>
        <p>{heading}</p>
      </div>
    </div>
  );
};

export default ChooseCard;
