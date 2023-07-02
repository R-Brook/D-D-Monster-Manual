import React, { FC } from "react";
import styles from "./Attribute.module.css";

export interface AttributeProps {
  icon: any; //update
  copy: string | number;
}

export const Attribute: FC<AttributeProps> = ({ icon, copy }) => {
  return (
    <div className={styles.attributeContainer}>
      <div className={styles.iconSpan}>{icon}</div>
      <span className={styles.copy}>{copy}</span>
    </div>
  );
};
