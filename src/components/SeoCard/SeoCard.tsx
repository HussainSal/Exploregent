import React from "react";
import styles from "./SeoCard.module.scss";
import Image from "next/image";

interface Props {
  img: string;
  heading: string;
  description: string;
}

const SeoCard: React.FC<Props> = ({ description, heading, img }) => {
  return (
    <div className={styles.seoContainer}>
      <div className={styles.tick}>
        <Image src={"/images/ticks.svg"} width={34} height={34} alt="tick" />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.text}>{description}</p>
      </div>
    </div>
  );
};

export default SeoCard;
