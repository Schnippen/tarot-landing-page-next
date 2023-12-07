import React from "react";
import { Metadata } from "next";
import Article from "@/components/Article";
import styles from "../App.module.css";
import Separator from "@/components/Separator";
import TarotMeaningsExpositionContainer from "@/components/TarotMeaningsExpositionContainer";
import PickACard from "@/components/PickACard/PickACard";
import Exposition from "@/components/Exposition";

export const metadata: Metadata = {
  title: "Pick a Random Tarot Card - Discover Its Meaning",
  description:
    "Experience the magic of tarot! Choose a random card and unveil its profound meaning. Use Tarot as a powerful tool to anchor yourself in the present, fostering deep awareness of the moment and your surroundings.One card Tarot reading, meditation, mindfulness, present moment, focus, awareness, daily practice, Tarot tool, self-reflection.",
};

function page() {
  return (
    <main className={styles.main}>
      <div className={styles.article_container}>
        <Article title="Pick a Card">
          <div style={{ margin: "100px 0px" }}></div>
          <PickACard />

          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          <h2 className={styles.title} style={{ textAlign: "center" }}>
            Discover the Rich Symbolism and Archetypes within Tarot Cards
          </h2>
          <p className={styles.paragraph}>
            The practice of picking a random card from a tarot deck has been a
            longstanding tradition in the world of tarot reading and divination.
            <br></br>
            <br></br>Tarot cards, adorned with intricate symbolism, archetypes,
            and metaphors, are believed to hold the key to unlocking insights
            into various aspects of life, emotions, and experiences.
            <br></br>
            <br></br> Whether you seek guidance, wish to foster self-reflection,
            or embark on a spiritual exploration, our Tarot Reader App is
            designed to be your trusted companion.
          </p>

          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          <h2 className={styles.title} style={{ textAlign: "center" }}>
            Use Our Tarot Reader App for Tailored Guidance
          </h2>
          <p className={styles.paragraph}>
            In the world of tarot, interpretations vary.<br></br>
            <br></br> That's why we encourage you to use our Tarot Reader App
            for personalized insights.<br></br>
            <br></br> Ask your questions, deepen your tarot knowledge, and
            unlock the mysteries within. Download now and let your tarot journey
            begin!
          </p>
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <Exposition />
      </div>
    </main>
  );
}

export default page;
