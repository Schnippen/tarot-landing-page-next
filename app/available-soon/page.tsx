import React from "react";

//import { Link } from "react-router-dom";
import styles from "../App.module.css";
//import { analytics } from "../utils/mixpanel";
//import { AnalyticsEvent } from "../utils/constants";
import googlePlayImage from "../../public/images/google-play.png";
import Link from "next/link";
import Image from "next/image";
import LinkMixpanel from "@/components/LinksMixpanel/LinkMixpanel";
import { AnalyticsEvent } from "@/utils/constants";
import GooglePlayButton from "@/components/buttons/GooglePlayButton";

function AvailableSoon() {
  /*   useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    scrollToTop();
  }, []); */

  return (
    <main
      className={styles.main}
      style={{ height: "100vh", display: "flex", justifyContent: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px 0",
        }}
      >
        <div className={styles.terms_of_service_div_container}>
          <article className={styles.terms_of_service_div}>
            <LinkMixpanel
              href="/"
              text="Go to Home Page"
              title="Go to home page"
              event={AnalyticsEvent.go_to_home_page_pressed}
            />
            <h1
              style={{
                fontFamily: "var(--Cinzel)",
                fontSize: "1.8em",
                textAlign: "center",
              }}
            >
              Tarot Reader soon available on the App Store
            </h1>
            <div className={styles.available_soon_container}>
              <p>Check out the Android version of this app</p>
              <GooglePlayButton />
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default AvailableSoon;
