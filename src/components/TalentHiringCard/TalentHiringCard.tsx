import React from "react";
import styles from "./TalentHiringCard.module.scss";
import Image, { StaticImageData } from "next/image";

interface Props {
  img: StaticImageData;
  heading: string;
  description: string;
}

const TalentHiringCard: React.FC<Props> = ({ img, heading, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <Image src={img} className={styles.imageContainer} alt="logo" />
        </div>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description} </p>
      </div>
    </div>
  );
};

export default TalentHiringCard;
