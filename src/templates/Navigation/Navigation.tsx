"use client";
import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import Image from "next/image";
import hamburgerIcon from "../../../public/images/hamburger.svg";
import closeIcon from "../../../public/images/close-icon.svg";

const data = [
  { id: 1, title: "Home" },
  { id: 2, title: "About Us" },
  { id: 3, title: "Work" },
  { id: 4, title: "Services" },
  { id: 5, title: "Clients" },
  { id: 6, title: "Team" },
  { id: 7, title: "Contact Us" },
];

export const Navigation = () => {
  const [active, setActive] = useState<string>("Home");
  const [openDropdown, setOpenDropdown] = useState(false);

  const activeHandler = (e: string) => {
    setActive(e);
  };

  console.log(active, "ACTIVE");

  return (
    <nav className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.logo}>Logo here</div>

        <button
          className={styles.hamburgerBtn}
          onClick={() => {
            setOpenDropdown(!openDropdown);
          }}
        >
          <Image src={hamburgerIcon} alt="img" />
        </button>

        <div
          className={`${styles.overlay} ${
            openDropdown ? styles.activeOverlay : ""
          }`}
          onClick={() => {
            setOpenDropdown(false);
          }}
        />

        <div
          className={`${styles.linkContainer} ${
            openDropdown ? styles.activeDropdown : ""
          }`}
        >
          <button
            className={styles.closeIcon}
            onClick={() => {
              setOpenDropdown(!openDropdown);
            }}
          >
            <Image src={closeIcon} alt="img" />
          </button>

          {data.map((task) => {
            {
              console.log(active === task.title, active, task.title);
            }

            return (
              <Link
                href="#"
                key={task.id}
                className={`${styles.option} ${
                  active === task.title ? styles.activeNav : ""
                }`}
                onClick={() => {
                  activeHandler(task.title)
                  setOpenDropdown(false)
                }}
              >
                {task.title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
