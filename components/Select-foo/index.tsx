import React, { FC } from "react";
import styles from "./Select.module.css";

export interface SelectProps {
  required: boolean;
  label: string;
  name: string;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  id: string;
  options: (string | number)[];
  value: any;
}

export const Select: FC<SelectProps> = ({
  required,
  label,
  name,
  id,
  options,
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
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
