import React, { FC } from "react";
import styles from "./Select.module.css";

export interface SelectProps {
  required: boolean;
  label: string;
  name: string;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  id: string;
  children: any;
  value: any;
}

export const Select: FC<SelectProps> = ({
  required,
  label,
  name,
  id,
  children,
  value,
  onBlur = () => null,
  onChange = () => null,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}: </label>
      <select
        id={id}
        value={value}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        className={styles.select}
      >
        {children}
      </select>
    </div>
  );
};
