import React from 'react'
import type { Metadata } from 'next'
import { TarotRoutes2 } from "../../data/TarotRoutesData";
import { CardsMetaTagsData } from '@/app/data/CardsMetaTagsData';
import { TarotCardsAllFullDescriptionData } from '@/app/data/TarotCardsFullDescriptionData';
import styles from "../../App.module.css"
import TarotCardsComparisionsData from '@/app/data/TarotCardsComparisionsData';
import Article from '@/components/Article';
import Card from '@/components/Card';
import Separator from '@/components/Separator';
import TarotMeaningsExpositionContainer from '@/components/TarotMeaningsExpositionContainer';
import { TarotCardsPhotosAll } from '@/public/images/cards/TarotCardPhotos';

function TarotCardFullDescription({ params }: { params:{card:string} }) {
    //console.log(params.card, TarotRoutes2.indexOf("/"+params.card))

 const TarotIndex = TarotRoutes2.indexOf("/"+params.card)>=0? TarotRoutes2.indexOf("/"+params.card):0;
//console.log("TarotIndex",TarotIndex)
 const metadata: Metadata = {
    title: TarotCardsAllFullDescriptionData[TarotIndex].tooltip + " " + "Meaning",
    description: CardsMetaTagsData[TarotIndex],
    }
     
   return (
    <main className={styles.main}>
      <div className={styles.article_container}>
        <Article title={TarotCardsAllFullDescriptionData[TarotIndex].CardName}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom:"60px"
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

        <Article title={TarotCardsAllFullDescriptionData[TarotIndex].CardMeaning}>
          {TarotCardsAllFullDescriptionData[TarotIndex].CardMeaningArticle}
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>
        <Article title="Card comparisons">
          {TarotCardsComparisionsData[TarotIndex]()}
        </Article>
      </div>
    </main>
  );
}

export default TarotCardFullDescription;
