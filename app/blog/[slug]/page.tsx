import React from "react";
import Article from "../../../components/Article";
import Footer from "../../../components/Footer";
import Separator from "../../../components/Separator";
import TarotMeaningsExpositionContainer from "../../../components/TarotMeaningsExpositionContainer";
import styles from "../../App.module.css";
import { TarotCardsAllFullDescriptionData } from "../../data/TarotCardsFullDescriptionData";
import { TarotCardsPhotosAll } from "../../../public/images/cards/TarotCardPhotos";
import Card from "../../../components/Card";
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
  let link = "/blog/" + params.slug;
  const CardNumber = TarotRoutes.indexOf(link);
  return {
    title:
      TarotCardsAllFullDescriptionData[CardNumber].tooltip + " " + "Meaning",
    description: CardsMetaTagsData[CardNumber],
  };
}

function TarotCardFullDescription({ params }: { params: { slug: string } }) {
  let link = "/blog/" + params.slug;
  const CardNumber = TarotRoutes.indexOf(link);

  return (
    <main className={styles.main}>
      <div className={styles.article_container}>
        <Article title={TarotCardsAllFullDescriptionData[CardNumber].CardName}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card img={TarotCardsPhotosAll[CardNumber]} />
          </div>
          {TarotCardsAllFullDescriptionData[CardNumber].SubTitle}
          {TarotCardsAllFullDescriptionData[CardNumber].Introduction}
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          {TarotCardsAllFullDescriptionData[CardNumber].SymbolismTitle}
          {TarotCardsAllFullDescriptionData[CardNumber].Symbolism}
        </Article>

        <Article
          title={TarotCardsAllFullDescriptionData[CardNumber].CardMeaning}
        >
          {TarotCardsAllFullDescriptionData[CardNumber].CardMeaningArticle}
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>
        <Article title="Card comparisons">
          {TarotCardsComparisionsData[CardNumber]()}
        </Article>
      </div>
    </main>
  );
}

export default TarotCardFullDescription;
