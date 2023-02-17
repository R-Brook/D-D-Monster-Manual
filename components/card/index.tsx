import React, { FC } from "react";
import Image from "next/image";
import styles from "./card.module.css";

export interface CardProps {
  name: string;
  image: string;
  type: string;
  size: string;
  hit_dice: string;
  hit_points: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  armor_class_type: string;
  armor_class_value: number;
}

export const Card: FC<CardProps> = ({
  name,
  image,
  type,
  size,
  hit_dice,
  hit_points,
  armor_class_type,
  armor_class_value,
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
}) => {
  return (
    <div key={name} className={styles.layout}>
      <h2>{name}</h2>
      <br />

      <div className={styles.imageContainer}>
        {image && image.length > 0 && (
          <img
            src={`https://www.dnd5eapi.co${image}`}
            alt={name}
            className={styles.cardImage}
          />
        )}
      </div>

      <p>Type: {type}</p>
      <p>Size: {size}</p>
      <p>Hit points: {hit_points}</p>
      <p>Hit dice: {hit_dice}</p>
      <p>
        Armour class: {armor_class_value} of type: {armor_class_type}
      </p>
      <br />
      <ul>
        <li>Strength: {strength}</li>
        <li>Dexterity: {dexterity}</li>
        <li>Constitution: {constitution}</li>
        <li>Intelligence: {intelligence}</li>
        <li>Wisdom: {wisdom}</li>
        <li>Charisma: {charisma}</li>
      </ul>
    </div>
  );
};
