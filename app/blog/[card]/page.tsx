import React from "react";
import type { Metadata } from "next";
import { TarotRoutes2 } from "../../data/TarotRoutesData";
import { CardsMetaTagsData } from "@/app/data/CardsMetaTagsData";
import { TarotCardsAllFullDescriptionData } from "@/app/data/TarotCardsFullDescriptionData";
import styles from "../../App.module.css";
import TarotCardsComparisionsData from "@/app/data/TarotCardsComparisionsData";
import Article from "@/components/Article";
import Card from "@/components/Card";
import Separator from "@/components/Separator";
import TarotMeaningsExpositionContainer from "@/components/TarotMeaningsExpositionContainer";
import { TarotCardsPhotosAll } from "@/public/images/cards/TarotCardPhotos";
import { TarotRoutesReversed2 } from "@/app/data/ReversedTarotCardsFullDescriptionData";
import Link from "next/link";
import { TarotCardNamesCard } from "@/app/data/TarotCardsData";

function TarotCardFullDescription({ params }: { params: { card: string } }) {
  //console.log(params.card, TarotRoutes2.indexOf("/"+params.card))
  //console.log(params)
  const TarotIndex =
    TarotRoutes2.indexOf("/" + params.card) >= 0
      ? TarotRoutes2.indexOf("/" + params.card)
      : 0;
  //console.log("TarotIndex",TarotIndex)
  const metadata: Metadata = {
    title:
      TarotCardsAllFullDescriptionData[TarotIndex].tooltip + " " + "Meaning",
    description: CardsMetaTagsData[TarotIndex],
  };
  //console.log(metadata.title)
  //console.log(metadata.description)
  return (
    <main className={styles.main}>
      <div className={styles.article_container}>
        <Article title={TarotCardsAllFullDescriptionData[TarotIndex].CardName}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "60px",
            }}
          >
            <Card img={TarotCardsPhotosAll[TarotIndex]} />
          </div>
          {TarotCardsAllFullDescriptionData[TarotIndex].SubTitle}
          {TarotCardsAllFullDescriptionData[TarotIndex].Introduction}
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          {TarotCardsAllFullDescriptionData[TarotIndex].SymbolismTitle}
          {TarotCardsAllFullDescriptionData[TarotIndex].Symbolism}
        </Article>

        <Article
          title={TarotCardsAllFullDescriptionData[TarotIndex].CardMeaning}
        >
          {TarotCardsAllFullDescriptionData[TarotIndex].CardMeaningArticle}
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>
        <Article title="Card comparisons">
          {TarotCardsComparisionsData[TarotIndex]()}
          <h2 className={styles.title} style={{ textAlign: "center" }}>
            Reversed position
          </h2>
          <p className={styles.paragraph} style={{ textAlign: "center" }}>
            Explore the world of{" "}
            <Link
              href={TarotRoutesReversed2[TarotIndex]}
              className={styles.Link}
              title={TarotCardNamesCard[TarotIndex]}
            >
              {TarotCardNamesCard[TarotIndex] + " "}
            </Link>
            in its reversed position. Discover the profound meanings
            encapsulated in this card's symbolism{" "}
          </p>
        </Article>
      </div>
    </main>
  );
}

export default TarotCardFullDescription;
