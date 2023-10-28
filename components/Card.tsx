import React from "react";
import styles from "./Card.module.css";
import { StaticImageData } from "next/image";
import Image from "next/image";
function Card({
  alt = "Tarot Card Image",
  tooltip,
  img,
}: {
  alt?: string;
  tooltip?: string;
  img: StaticImageData;
}) {
  return (
    <div className={styles.card_container}>
      <Image src={img} alt={alt} title={tooltip} loading="lazy" />
    </div>
  );
}

export default Card;
