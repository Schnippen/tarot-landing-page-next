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
  let link = "/suit-of-cards/" + params.slug;
  const SuitNumber = RoutesSuitMinorArcana.indexOf(link);

  return {
    title: SuitsNamesMetaTagsData[RoutesSuitMinorArcana.indexOf(link)],
    description: SuitsMetaTagsData[RoutesSuitMinorArcana.indexOf(link)],
  };
}
function SuitOf({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  let link = "/suit-of-cards/" + params.slug;
  const SuitNumber = RoutesSuitMinorArcana.indexOf(link);

  return (
    <main className={styles.main}>
      <div className={styles.article_container}>
        <Article
          title={
            SuitOfArticlesData[RoutesSuitMinorArcana.indexOf(link)].SuitName
          }
        >
          {
            SuitOfArticlesData[RoutesSuitMinorArcana.indexOf(link)]
              .SuitFirstTitle
          }
          {
            SuitOfArticlesData[RoutesSuitMinorArcana.indexOf(link)]
              .SuitFirstArticle
          }
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          {
            SuitOfArticlesData[RoutesSuitMinorArcana.indexOf(link)]
              .SuitSecondTitle
          }
          {
            SuitOfArticlesData[RoutesSuitMinorArcana.indexOf(link)]
              .SuitSecondArticle
          }
          <Separator marginHeight={48} />
          {
            SuitOfArticlesData[RoutesSuitMinorArcana.indexOf(link)]
              .SuitThirdTitle
          }
          {
            SuitOfArticlesData[RoutesSuitMinorArcana.indexOf(link)]
              .SuitThirdArticle
          }
          <Separator marginHeight={48} />
          {
            SuitOfArticlesData[RoutesSuitMinorArcana.indexOf(link)]
              .SuitFourthTitle
          }
          {
            SuitOfArticlesData[RoutesSuitMinorArcana.indexOf(link)]
              .SuitFourthArticle
          }
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>

        <Article
          title={
            SuitOfArticlesData[RoutesSuitMinorArcana.indexOf(link)].SuitName
          }
        >
          <ul style={{ padding: "0px" }}>
            {SuitOfAllCards[RoutesSuitMinorArcana.indexOf(link)]
              .slice(0, 7)
              .map((item, index) => (
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
                  {SuitOfAllCards[RoutesSuitMinorArcana.indexOf(link)].length /
                    2 ===
                  index + 1 ? (
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
            {SuitOfAllCards[RoutesSuitMinorArcana.indexOf(link)]
              .slice(7, 14)
              .map((item, index) => (
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
                  {SuitOfAllCards[RoutesSuitMinorArcana.indexOf(link)]
                    .length ===
                  index + 1 ? (
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
