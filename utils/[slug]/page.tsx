import React from "react";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import Separator from "../../components/Separator";
import TarotMeaningsExpositionContainer from "../../components/TarotMeaningsExpositionContainer";
import styles from "../../App.module.css";
import { TarotCardsAllFullDescriptionData } from "../../app/data/TarotCardsFullDescriptionData";
import { TarotCardsPhotosAll } from "../../public/images/cards/TarotCardPhotos";
import Card from "../../components/Card";
import TarotCardsComparisionsData from "../../app/data/TarotCardsComparisionsData";
import { CardsMetaTagsData } from "../../app/data/CardsMetaTagsData";
import { TarotRoutes } from "../../app/data/TarotRoutesData";

export async function generateStaticParams() {
  return TarotRoutes.map((post: string) => ({
    slug: post,
  }));
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const link = "/blog/" + params.slug;
  const CardNumber = TarotRoutes.indexOf(link);

  const ArticleTitle = TarotCardsAllFullDescriptionData[CardNumber].CardName;
  const Photo = TarotCardsPhotosAll[CardNumber];
  const SubTitle = TarotCardsAllFullDescriptionData[CardNumber].SubTitle;
  const Introduction =
    TarotCardsAllFullDescriptionData[CardNumber].Introduction;
  const SymbolismTitle =
    TarotCardsAllFullDescriptionData[CardNumber].SymbolismTitle;
  const Symbolism = TarotCardsAllFullDescriptionData[CardNumber].Symbolism;
  const CardMeaningTitle =
    TarotCardsAllFullDescriptionData[CardNumber].CardMeaning;
  const CardMeaningArticle =
    TarotCardsAllFullDescriptionData[CardNumber].CardMeaningArticle;
  const ComparisionData = TarotCardsComparisionsData[CardNumber]();

  return {
    props: {
      CardNumber,
      ArticleTitle,
      Photo,
      SubTitle,
      Introduction,
      SymbolismTitle,
      Symbolism,
      CardMeaningTitle,
      CardMeaningArticle,
      ComparisionData,
    },
  };
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
  //let link = "/blog/" + params.slug;
  //const CardNumber = TarotRoutes.indexOf(link);
  /*  console.log(
    CardNumber,
    ArticleTitle,
    Photo,
    SubTitle,
    Introduction,
    SymbolismTitle,
    Symbolism,
    CardMeaningTitle,
    CardMeaningArticle,
    ComparisionData
  );
 */
  return (
    <main className={styles.main}>
      <div className={styles.article_container}>
        sample text
        {/*          <Article title={ArticleTitle}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
             <Card img={Photo} /> 
          </div>
          {SubTitle}
          {Introduction}
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          {SymbolismTitle}
          {Symbolism}
        </Article>

        <Article title={CardMeaningTitle}>{CardMeaningArticle}</Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>
        <Article title="Card comparisons">{ComparisionData}</Article>  */}
      </div>
    </main>
  );
}

export default TarotCardFullDescription;
