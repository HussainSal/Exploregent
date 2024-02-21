import React from "react";
import styles from "./Header.module.scss";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";
import Image, { StaticImageData } from "next/image";
import callIcon from "../../../public/images/call-icon.svg";

export const Header: React.FC<{
  heading: string;
  text: string[];
  btnText: string;
  innerContainerClasses?: string;
  img: StaticImageData;
  imgClasses?: string;
  buttonIcon?: string;
  textContainerClasses?: string;
}> = (props) => {
  return (
    <header className={styles.header}>
      <div
        className={`${styles.innerContainer} ${
          props.innerContainerClasses ? props.innerContainerClasses : ""
        }`}
      >
        <div
          className={`${styles.textContainer} ${
            props.textContainerClasses ? props.textContainerClasses : ""
          }`}
        >
          <h2 className={`${styles.heading} heading2`}>{props.heading}</h2>
          <div className={styles.descriptionContainer}>
            {props.text.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>

          <ButtonPrimary>
            <span className={styles.callIcon}>
              <Image
                src={props.buttonIcon ? props.buttonIcon : callIcon}
                alt="img"
              />
            </span>{" "}
            {props.btnText}
          </ButtonPrimary>
        </div>

        <div
          className={`${styles.image} ${
            props.imgClasses ? props.imgClasses : ""
          }`}
        >
          <Image src={props.img} alt="img" width={500} />
        </div>
      </div>
    </header>
  );
};
