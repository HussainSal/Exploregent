import React from "react";
import styles from "./ButtonPrimary.module.scss";

const ButtonPrimary: React.FC<{
  children: React.ReactNode;
  padding?: string;
  className?: string;
}> = ({ children, padding, className }) => {
  const classes = className;
  return (
    <button
      style={{ padding: padding ? padding : "12px 20px 12px 12px" }}
      className={`${styles.btn} ${classes ? classes : ""}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
