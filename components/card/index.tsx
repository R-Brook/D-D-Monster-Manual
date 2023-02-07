import React, { FC } from "react";
import Image from "next/image";

export interface CardProps {
  name: string;
  image: string;
  type: string;
  size: string;
  hit_points: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export const Card: FC<CardProps> = ({
  name,
  image,
  type,
  size,
  hit_points,
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
}) => {
  return (
    <div key={name} style={{ marginBottom: 2 + "rem" }}>
      <h3>{name}</h3>
      <br />
      {image && image.length > 0 && (
        <div
          style={{
            width: "300px",
            height: "200px",
            position: "relative",
          }}
        >
          <Image
            src={`https://www.dnd5eapi.co${image}`}
            alt={name}
            fill={true}
          />
        </div>
      )}
      <p>Type: {type}</p>
      <p>Size: {size}</p>
      <p>Hit points: {hit_points}</p>
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
