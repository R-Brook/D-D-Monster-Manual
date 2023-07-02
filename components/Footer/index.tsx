import React, { FC } from "react";
import styles from "./Footer.module.css";

export const Footer = ({}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a
              href="https://github.com/R-Brook/D-and-D-Monster-Manual"
              className={styles.link}
            >
              GitHub repository
            </a>
          </li>
          <li className={styles.item}>
            Data from{" "}
            <a
              href="https://www.dnd5eapi.co/docs/#overview--graphql"
              className={styles.link}
            >
              D&D 5e API
            </a>{" "}
            using GraphQL
          </li>
        </ul>
      </div>
    </div>
  );
};
