import React, { FC } from "react";
import styles from "./selectedFilter.module.css";

export interface SelectedFilterProps {
  label: string;
  selected_value: string;
  onClick: (event: any) => void;
}

export const SelectedFilter: FC<SelectedFilterProps> = ({
  label,
  selected_value,
  onClick,
}) => {
  return (
    <div className={styles.container}>
      {label}: {selected_value}
      <button className={styles.remove} onClick={onClick}>
        X
      </button>
    </div>
  );
};
