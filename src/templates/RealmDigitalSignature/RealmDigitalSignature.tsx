import React from "react";
import styles from "./RealmDigitalSignature.module.scss";
import { realmCard } from "@/constants/text";

interface Props {}

export const RealmDigitalSignature: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <p>In the realm of digital solutions, we offer expertise in</p>
      <div className={styles.realmCards}>
        {realmCard.map((card) => {
          return (
            <div key={card.id} className={styles.card}>
              <p> {card.text}</p>
            </div>
          );
        })}
      </div>
      <p>
        showcasing our proficiency across various facets of the digital platform{" "}
      </p>
    </div>
  );
};
