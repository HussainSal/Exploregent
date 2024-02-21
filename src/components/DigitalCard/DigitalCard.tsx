import React from "react";
import styles from "./DigitalCard.module.scss";
import Image from "next/image";

interface Props {
  img: string;
  heading: string;
  description: string;
}

const DigitalCard: React.FC<Props> = ({ description, heading, img }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer} >
        <div className={styles.imageContainer}>
          <Image
            src={img}
            width={75}
            className={styles.image}
            height={75}
            alt="img"
          />
          <h2 className={styles.heading}>{heading}</h2>
        </div>

        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.rightArrow}>
        <Image
          src={"/images/rightArrow.svg"}
          width={50}
          height={50}
          alt="rightArrow"
        />
      </div>
    </div>
  );
};

export default DigitalCard;
