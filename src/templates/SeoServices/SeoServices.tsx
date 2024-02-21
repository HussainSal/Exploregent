import React from "react";
import styles from "./SeoServices.module.scss";
import SeoCard from "@/components/SeoCard/SeoCard";
import { seoCard } from "@/constants/text";

export const SeoServices = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.heading} heading2`}> SEO Services</h1>
      <div className={styles.seoCardSection}>
        {seoCard.map((card) => {
          return (
            <SeoCard
              img={card.img}
              description={card.description}
              heading={card.text}
              key={card.id}
            />
          );
        })}
      </div>
    </div>
  );
};
