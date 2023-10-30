import React from "react";
//import { Link } from "react-router-dom";
import Article from "../../../components/Article";
import CardDisplayItem from "../../../components/CardDisplayItem";
import Footer from "../../../components/Footer";
import Separator from "../../../components/Separator";
import TarotMeaningsExpositionContainer from "../../../components/TarotMeaningsExpositionContainer";
import { SuitOfAllCards } from "../../data/TarotCardsData";
import styles from "../../App.module.css";
import { RoutesSuitMinorArcana, TarotDecks } from "../../data/TarotRoutesData";
import { SuitOfArticlesData } from "../../data/SuitOfCardsArticlesData";
//import { Helmet } from "react-helmet-async";
import {
  SuitsMetaTagsData,
  SuitsNamesMetaTagsData,
} from "../../data/CardsMetaTagsData";
import Link from "next/link";
import { TarotRoutes } from "@/app/data/TarotRoutesData";
/* 
export async function generateStaticParams() {
  return TarotRoutes.map((post: string) => ({
    slug: post,
  }));
} */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: SuitsNamesMetaTagsData[3],
    description: SuitsMetaTagsData[3],
  };
}
function SuitOf({ params }: { params: { slug: string } }) {
  /* console.log(params.slug); */
  /* let link = "/suit-of-cards/" + params.slug;
  const SuitNumber = 0; */

  return (
    <main className={styles.main}>
      <div className={styles.article_container}>
        <Article title={SuitOfArticlesData[3].SuitName}>
          {SuitOfArticlesData[3].SuitFirstTitle}
          {SuitOfArticlesData[3].SuitFirstArticle}
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          {SuitOfArticlesData[3].SuitSecondTitle}
          {SuitOfArticlesData[3].SuitSecondArticle}
          <Separator marginHeight={48} />
          {SuitOfArticlesData[3].SuitThirdTitle}
          {SuitOfArticlesData[3].SuitThirdArticle}
          <Separator marginHeight={48} />
          {SuitOfArticlesData[3].SuitFourthTitle}
          {SuitOfArticlesData[3].SuitFourthArticle}
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>

        <Article title={SuitOfArticlesData[3].SuitName}>
          <ul style={{ padding: "0px" }}>
            {SuitOfAllCards[3].slice(0, 7).map((item, index) => (
              <>
                <CardDisplayItem
                  alt={item.alt}
                  tooltip={item.tooltip}
                  paragraphElement={item.description}
                  img={item.image}
                  index={item.number}
                  name={item.name}
                  href={item.href}
                />
                {SuitOfAllCards[3].length / 2 === index + 1 ? (
                  <></>
                ) : (
                  <Separator marginHeight={48} />
                )}
              </>
            ))}
          </ul>
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>
        <Article title="">
          <ul style={{ padding: "0px" }}>
            {SuitOfAllCards[3].slice(7, 14).map((item, index) => (
              <>
                <CardDisplayItem
                  alt={item.alt}
                  tooltip={item.tooltip}
                  paragraphElement={item.description}
                  img={item.image}
                  index={item.number}
                  name={item.name}
                  href={item.href}
                />
                {SuitOfAllCards[3].length === index + 1 ? (
                  <></>
                ) : (
                  <Separator marginHeight={48} />
                )}
              </>
            ))}
            <p className={styles.paragraph} style={{ textAlign: "center" }}>
              The end of the This Suit of Cards marks the beginning of another
              journey -{" "}
              <Link
                href={TarotDecks[0]}
                className={styles.Link}
                title="Major Arcana Cards List"
              >
                The Major Arcana
              </Link>{" "}
              &{" "}
              <Link
                href={TarotDecks[1]}
                className={styles.Link}
                title="Minor Arcana Cards List"
              >
                The Minor Arcana
              </Link>
              .
            </p>
          </ul>
        </Article>
      </div>
    </main>
  );
}

export default SuitOf;
