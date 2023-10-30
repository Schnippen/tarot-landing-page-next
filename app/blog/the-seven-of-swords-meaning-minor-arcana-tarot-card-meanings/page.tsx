
import React from "react";
import Article from "@/components/Article";
import Separator from "@/components/Separator";
import TarotMeaningsExpositionContainer from "@/components/TarotMeaningsExpositionContainer";
import styles from "../../App.module.css";
import { TarotCardsAllFullDescriptionData } from "../../data/TarotCardsFullDescriptionData";
import { TarotCardsPhotosAll } from "../../../public/images/cards/TarotCardPhotos";
import Card from "@/components/Card";
import TarotCardsComparisionsData from "../../data/TarotCardsComparisionsData";
import { CardsMetaTagsData } from "../../data/CardsMetaTagsData";
import { TarotRoutes } from "../../data/TarotRoutesData";

export async function generateStaticParams() {
  return TarotRoutes.map((post: string) => ({
    slug: post,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: TarotCardsAllFullDescriptionData[56].tooltip + " " + "Meaning",
    description: CardsMetaTagsData[56],
  };
}

function TarotCardFullDescription({ params }: { params: { slug: string } }) {
  return (
    <main className={styles.main}>
      <div className={styles.article_container}>
        <Article title={TarotCardsAllFullDescriptionData[56].CardName}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card img={TarotCardsPhotosAll[56]} />
          </div>
          {TarotCardsAllFullDescriptionData[56].SubTitle}
          {TarotCardsAllFullDescriptionData[56].Introduction}
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          {TarotCardsAllFullDescriptionData[56].SymbolismTitle}
          {TarotCardsAllFullDescriptionData[56].Symbolism}
        </Article>

        <Article title={TarotCardsAllFullDescriptionData[56].CardMeaning}>
          {TarotCardsAllFullDescriptionData[56].CardMeaningArticle}
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>
        <Article title="Card comparisons">
          {TarotCardsComparisionsData[56]()}
        </Article>
      </div>
    </main>
  );
}

export default TarotCardFullDescription;
