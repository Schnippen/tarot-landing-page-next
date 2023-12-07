"use client";
import React, { useEffect, useState } from "react";
import CardBackSide from "../../public/images/CardBack.webp";
import { TarotRoutes } from "../../app/data/TarotRoutesData";
import styles from "./PickACard.module.css";
import SmallCard from "./SmallCard";
import Link from "next/link";
function PickACard() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [cardQuantity, setCardQuantity] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 600 && windowWidth >= 340) {
      setCardQuantity(8);
    } else if (windowWidth < 340) {
      setCardQuantity(6);
    } else {
      setCardQuantity(16);
    }
  }, [windowWidth]);

  const CardList = () => {
    return (
      <ul className={styles.CardListWrapper}>
        {TarotRoutes.map((card, index) => (
          <Link href={card} key={card}>
            <SmallCard
              alt="Backside of Tarot Card"
              tooltip="Pick a Card"
              img={CardBackSide}
            />
          </Link>
        ))
          .sort((a, b) =>
            Math.floor(
              Math.random() * TarotRoutes.length -
                Math.floor(Math.random() * TarotRoutes.length)
            )
          )
          .slice(0, cardQuantity)}
      </ul>
    );
  }; //map random / slice TarotRoutes

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <CardList />
    </div>
  );
}

export default PickACard;
