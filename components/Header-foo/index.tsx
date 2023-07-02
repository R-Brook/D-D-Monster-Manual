import React, { FC } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export const Header = ({}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Link href={"/"} className={styles.link}>
          <h1 className={styles.title}>D&D 5e Monster Manual</h1>
        </Link>
      </div>
    </div>
  );
};
