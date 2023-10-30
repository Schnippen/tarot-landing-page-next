const fs = require("fs");
const path = require("path");

const foldersToCreate = [
  "the-fool-meaning-major-arcana-tarot-card-meanings",
  "the-magician-meaning-major-arcana-tarot-card-meanings",
  "the-high-priestess-meaning-major-arcana-tarot-card-meanings",
  "the-empress-meaning-major-arcana-tarot-card-meanings",
  "the-emperor-meaning-major-arcana-tarot-card-meanings",
  "the-hierophant-meaning-major-arcana-tarot-card-meanings",
  "the-lovers-meaning-major-arcana-tarot-card-meanings",
  "the-chariot-meaning-major-arcana-tarot-card-meanings",
  "the-strength-meaning-major-arcana-tarot-card-meanings",
  "the-hermit-meaning-major-arcana-tarot-card-meanings",
  "the-wheel-of-fortune-meaning-major-arcana-tarot-card-meanings",
  "the-justice-meaning-major-arcana-tarot-card-meanings",
  "the-hanged-man-meaning-major-arcana-tarot-card-meanings",
  "the-death-meaning-major-arcana-tarot-card-meanings",
  "the-temperance-meaning-major-arcana-tarot-card-meanings",
  "the-devil-meaning-major-arcana-tarot-card-meanings",
  "the-tower-meaning-major-arcana-tarot-card-meanings",
  "the-star-meaning-major-arcana-tarot-card-meanings",
  "the-moon-meaning-major-arcana-tarot-card-meanings",
  "the-sun-meaning-major-arcana-tarot-card-meanings",
  "the-judgment-meaning-major-arcana-tarot-card-meanings",
  "the-world-meaning-major-arcana-tarot-card-meanings",
  "the-ace-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "the-two-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "the-three-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "the-four-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "the-five-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "the-six-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "the-seven-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "the-eight-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "the-nine-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "the-ten-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "the-page-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "the-knight-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "the-queen-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "the-king-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "the-ace-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "the-two-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "the-three-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "the-four-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "the-five-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "the-six-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "the-seven-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "the-eight-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "the-nine-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "the-ten-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "the-page-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "the-knight-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "the-queen-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "the-king-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "the-ace-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "the-two-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "the-three-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "the-four-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "the-five-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "the-six-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "the-seven-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "the-eight-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "the-nine-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "the-ten-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "the-page-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "the-knight-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "the-queen-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "the-king-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "the-ace-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "the-two-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "the-three-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "the-four-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "the-five-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "the-six-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "the-seven-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "the-eight-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "the-nine-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "the-ten-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "the-page-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "the-knight-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "the-queen-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "the-king-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
];
const codeToInsert = `
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
    title: TarotCardsAllFullDescriptionData[INDEX].tooltip + " " + "Meaning",
    description: CardsMetaTagsData[INDEX],
  };
}

function TarotCardFullDescription({ params }: { params: { slug: string } }) {
  return (
    <main className={styles.main}>
      <div className={styles.article_container}>
        <Article title={TarotCardsAllFullDescriptionData[INDEX].CardName}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card img={TarotCardsPhotosAll[INDEX]} />
          </div>
          {TarotCardsAllFullDescriptionData[INDEX].SubTitle}
          {TarotCardsAllFullDescriptionData[INDEX].Introduction}
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          {TarotCardsAllFullDescriptionData[INDEX].SymbolismTitle}
          {TarotCardsAllFullDescriptionData[INDEX].Symbolism}
        </Article>

        <Article title={TarotCardsAllFullDescriptionData[INDEX].CardMeaning}>
          {TarotCardsAllFullDescriptionData[INDEX].CardMeaningArticle}
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>
        <Article title="Card comparisons">
          {TarotCardsComparisionsData[INDEX]()}
        </Article>
      </div>
    </main>
  );
}

export default TarotCardFullDescription;
`;

foldersToCreate.forEach((folderName, index) => {
  try {
    // Create the folder
    fs.mkdirSync(folderName);
    console.log(`Folder '${folderName}' created successfully.`);

    // Create a .tsx file in the folder
    const tsxFileName = "page.tsx";
    const folderPath = path.join(process.cwd(), folderName); // Get the full path to the folder
    const filePath = path.join(folderPath, tsxFileName);

    // Insert the code with the index incremented
    const modifiedCode = codeToInsert.replace(/INDEX/g, index);
    fs.writeFileSync(filePath, modifiedCode, "utf-8");

    console.log(`File '${tsxFileName}' created in '${folderName}'.`);
  } catch (error) {
    console.error(
      `Error creating folder or file in '${folderName}': ${error.message}`
    );
  }
});
