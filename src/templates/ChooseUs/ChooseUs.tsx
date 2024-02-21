import React from "react";
import styles from "./Choose.module.scss";
import { chooseUsCard } from "@/constants/text";
import ChooseCard from "@/components/ChooseCard/ChooseCard";

export const ChooseUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingSection}>
        <h1 className={`heading2`}>Why Choose Us?</h1>
        <p className={styles.innerText}>
          We excel with reliability, innovation and customer-centric approach
          for our quality products. Our dedicated team ensures that the
          solutions provided are dependable and long-term
        </p>
      </div>

      <div className={styles.cardSection}>
        {chooseUsCard.map((card) => {
          return (
            <ChooseCard key={card.id} heading={card.text} img={card.img} />
          );
        })}
      </div>
    </div>
  );
};
