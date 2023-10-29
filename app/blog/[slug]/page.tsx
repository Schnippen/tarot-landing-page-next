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
      TarotCardsAllFullDescriptionData[TarotRoutes.indexOf(link)].tooltip +
      " " +
      "Meaning",
    description: CardsMetaTagsData[TarotRoutes.indexOf(link)],
  };
}

function TarotCardFullDescription({ params }: { params: { slug: string } }) {
  let link = "/blog/" + params.slug;
  //const CardNumber = TarotRoutes.indexOf(link);

  return (
    <main className={styles.main}>
      <div className={styles.article_container}>
        <Article
          title={
            TarotCardsAllFullDescriptionData[TarotRoutes.indexOf(link)].CardName
          }
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card img={TarotCardsPhotosAll[TarotRoutes.indexOf(link)]} />
          </div>
          {TarotCardsAllFullDescriptionData[TarotRoutes.indexOf(link)].SubTitle}
          {
            TarotCardsAllFullDescriptionData[TarotRoutes.indexOf(link)]
              .Introduction
          }
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          {
            TarotCardsAllFullDescriptionData[TarotRoutes.indexOf(link)]
              .SymbolismTitle
          }
          {
            TarotCardsAllFullDescriptionData[TarotRoutes.indexOf(link)]
              .Symbolism
          }
        </Article>

        <Article
          title={
            TarotCardsAllFullDescriptionData[TarotRoutes.indexOf(link)]
              .CardMeaning
          }
        >
          {
            TarotCardsAllFullDescriptionData[TarotRoutes.indexOf(link)]
              .CardMeaningArticle
          }
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>
        <Article title="Card comparisons">
          {TarotCardsComparisionsData[TarotRoutes.indexOf(link)]()}
        </Article>
      </div>
    </main>
  );
}

export default TarotCardFullDescription;
