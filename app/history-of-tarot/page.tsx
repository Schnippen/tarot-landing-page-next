import React from "react";
import Article from "@/components/Article";
import styles from "../App.module.css";
import TarotMeaningsExpositionContainer from "@/components/TarotMeaningsExpositionContainer";

import { PageMetaData, PageDataTitles, PageData } from "../data/PageData";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: PageMetaData[1].title,
    description: PageMetaData[1].description,
  };
}
function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.article_container}>
        <Article title={PageDataTitles[1]}>
          {Object.values(PageData[1])}
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
      </div>
    </main>
  );
}

export default Page;
