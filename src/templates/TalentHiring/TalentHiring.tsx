import React from "react";
import styles from "./TalentHiring.module.scss";
import { talentCard } from "@/constants/text";
import TalentHiringCard from "@/components/TalentHiringCard/TalentHiringCard";

export const TalentHiring = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingSection}>
        <h1 className={`heading2`}>
          Stackkaroo’s Talent Hiring & Job Placement Services
        </h1>
        <p className={styles.innerText}>
          We are a talent searching platform that redesigns how companies hire
          talents. It is a cost-effective solution for industries. We also
          provide global job opportunities with good salaries, support, and
          professional development.
        </p>
      </div>
      <div className={styles.talenCardSection}>
        {talentCard.map((card) => {
          return (
            <TalentHiringCard
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
