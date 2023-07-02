import React, { FC } from "react";
import styles from "./card.module.css";
import Link from "next/link";
import { Attribute } from "components/attribute";

export interface CardProps {
  name: string;
  index: string;
  image: string | null;
  type: string;
  size: string;
  hit_points: number;
  armor_class_value: number;
}

export const Card: FC<CardProps> = ({
  name,
  index,
  image,
  type,
  size,
  hit_points,
  armor_class_value,
}) => {
  return (
    <div key={name} className={styles.layout}>
      <div
        className={
          image === null ? styles.imageContainerGrey : styles.imageContainer
        }
      >
        {image && image.length > 0 && (
          <img src={image} alt={name} className={styles.image} />
        )}
      </div>

      <h2 className={styles.monsterName}>{name}</h2>

      <div className={styles.attributeWrapper}>
        <Attribute
          icon={
            <svg
              role="img"
              viewBox="0 0 1280.000000 1189.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M2980 11763 c-848 -26 -1656 -457 -2177 -1163 -739 -1002 -839 -2418
-277 -3927 742 -1992 2563 -4072 5324 -6084 234 -171 529 -379 545 -385 18 -7
441 293 890 630 1976 1483 3442 3004 4339 4499 570 950 892 1837 993 2742 21
188 24 685 5 855 -52 462 -163 855 -343 1214 -166 330 -337 565 -602 823 -215
209 -424 359 -687 492 -449 228 -892 322 -1410 299 -991 -43 -1937 -632 -2597
-1618 -171 -255 -391 -672 -513 -972 -35 -87 -67 -155 -71 -150 -4 4 -35 77
-70 162 -82 201 -255 547 -362 727 -626 1046 -1484 1677 -2483 1828 -114 17
-375 32 -504 28z"
                />
              </g>
              <title>Hit points</title>
            </svg>
          }
          copy={hit_points}
        />

        <Attribute
          icon={
            <svg
              role="img"
              viewBox="0 0 1165.000000 1280.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M3 10033 c2 -2056 6 -2794 15 -2868 6 -55 16 -149 22 -210 21 -216
53 -428 106 -695 28 -142 117 -504 144 -588 10 -32 30 -97 45 -147 182 -599
518 -1295 908 -1879 317 -477 643 -872 1082 -1312 720 -722 1546 -1337 2500
-1862 302 -166 951 -472 1000 -472 49 0 698 306 1000 472 954 525 1780 1140
2500 1862 439 440 765 835 1082 1312 390 584 726 1280 908 1879 15 50 35 115
45 147 27 84 116 446 144 588 53 267 85 479 106 695 6 61 16 155 22 210 9 74
13 812 15 2868 l4 2767 -5826 0 -5826 0 4 -2767z"
                />
              </g>
              <title>Armour class value</title>
            </svg>
          }
          copy={armor_class_value}
        />
      </div>

      <p>Type: {type}</p>
      <p>Size: {size}</p>
      <br />
      {
        <Link
          href="/monster/[index]"
          as={`/monster/${index}`}
          className={styles.button}
        >
          More
        </Link>
      }
    </div>
  );
};
