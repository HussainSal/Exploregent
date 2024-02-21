"use client";
import React from "react";
import styles from "./DigitalService.module.scss";
import DigitalCard from "@/components/DigitalCard/DigitalCard";
import { digitalCard } from "@/constants/text";

export const DigitalService = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingSection}>
        <h1 className={`heading2`}>Stackkaroo’s Digital Services</h1>
        <p className={styles.innerText}>
          We excel with reliability, innovation and customer-centric approach
          for our quality products. Our dedicated team ensures that the
          solutions provided are dependable and long-term
        </p>
      </div>

      <div className={styles.cardSection}>
        {digitalCard.map((card) => {
          return (
            <DigitalCard
              key={card.id}
              heading={card.text}
              img={card.img}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
};
