import React from 'react'
import type { Metadata } from 'next'
import { TarotRoutesReversed } from "../../../data/ReversedTarotCardsFullDescriptionData";
import { ReversedCardsMetaTagsData } from '@/app/data/CardsMetaTagsData';
import { ReversedTarotCardsAllFullDescriptionData } from '@/app/data/ReversedTarotCardsFullDescriptionData';
import styles from "../../../App.module.css"
//import TarotCardsComparisionsData from '@/app/data/TarotCardsComparisionsData';
import Article from '@/components/Article';
import Card from '@/components/Card';
import Separator from '@/components/Separator';
import TarotMeaningsExpositionContainer from '@/components/TarotMeaningsExpositionContainer';
import { TarotCardsPhotosAll } from '@/public/images/cards/TarotCardPhotos';
import { TarotRoutes } from '@/app/data/TarotRoutesData';
import { TarotCardNamesCard } from '@/app/data/TarotCardsData';
import Link from 'next/link';

function TarotCardFullDescription({ params }: { params:{card:string} }) {
    //console.log(params.card, TarotRoutesReversed.indexOf("/"+params.card))
    //console.log(params)
  const TarotIndex = TarotRoutesReversed.indexOf("/"+params.card)>=0? TarotRoutesReversed.indexOf("/"+params.card):0;
console.log("TarotIndex",TarotIndex)
 const metadata: Metadata = {
    title: ReversedTarotCardsAllFullDescriptionData[TarotIndex].tooltip + " " + "Meaning",
    description: ReversedCardsMetaTagsData[TarotIndex],
    } 
     //console.log(metadata.title)
     //console.log(metadata.description)
   return (
    <main className={styles.main}>
      <div className={styles.article_container}>
         <Article title={ReversedTarotCardsAllFullDescriptionData[TarotIndex].CardName}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom:"60px",
              
            }}
          >
            <Card img={TarotCardsPhotosAll[TarotIndex]} flipped={true}/>
          </div>
          {ReversedTarotCardsAllFullDescriptionData[TarotIndex].SubTitle}
          {ReversedTarotCardsAllFullDescriptionData[TarotIndex].Introduction}
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          {ReversedTarotCardsAllFullDescriptionData[TarotIndex].SymbolismTitle}
          {ReversedTarotCardsAllFullDescriptionData[TarotIndex].Symbolism}
        </Article>

        <Article title={ReversedTarotCardsAllFullDescriptionData[TarotIndex].CardMeaning}>
          {ReversedTarotCardsAllFullDescriptionData[TarotIndex].CardMeaningArticle}
          <h2 className={styles.title} style={{textAlign:"center"}}>Upright position
            </h2>
            <p className={styles.paragraph} style={{textAlign:"center"}}>
        Explore the world of <Link
    href={TarotRoutes[TarotIndex]}
    className={styles.Link}
    title={TarotCardNamesCard[TarotIndex]}
  >
    {TarotCardNamesCard[TarotIndex]+" "}
  </Link>in its upright position. Discover the profound meanings encapsulated in this card's symbolism </p>  
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>
       
      </div>
    </main>
  );
}

export default TarotCardFullDescription;
