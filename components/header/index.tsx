import React, { FC } from "react";
import styles from "./header.module.css";
import Link from "next/link";

export const Header = ({}) => {
  return (
    <div className={styles.layout}>
      <div className="container">
        <h1 className={styles.title}>D&D 5e Monster Manual</h1>
      </div>
    </div>
  );
};
