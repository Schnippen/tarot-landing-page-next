
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
    title: TarotCardsAllFullDescriptionData[3].tooltip + " " + "Meaning",
    description: CardsMetaTagsData[3],
  };
}

function TarotCardFullDescription({ params }: { params: { slug: string } }) {
  return (
    <main className={styles.main}>
      <div className={styles.article_container}>
        <Article title={TarotCardsAllFullDescriptionData[3].CardName}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card img={TarotCardsPhotosAll[3]} />
          </div>
          {TarotCardsAllFullDescriptionData[3].SubTitle}
          {TarotCardsAllFullDescriptionData[3].Introduction}
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          {TarotCardsAllFullDescriptionData[3].SymbolismTitle}
          {TarotCardsAllFullDescriptionData[3].Symbolism}
        </Article>

        <Article title={TarotCardsAllFullDescriptionData[3].CardMeaning}>
          {TarotCardsAllFullDescriptionData[3].CardMeaningArticle}
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>
        <Article title="Card comparisons">
          {TarotCardsComparisionsData[3]()}
        </Article>
      </div>
    </main>
  );
}

export default TarotCardFullDescription;
