import React from "react";
//import { AnalyticsEvent } from '../../utils/constants';
//import { analytics } from '../../utils/mixpanel';

import googlePlayImage from "../../public/images/google-play.png";
import Image from "next/image";
import { analytics } from "@/app/mixpanel";
import { AnalyticsEvent } from "@/utils/constants";
function GooglePlayButton() {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.mobiletarotandroid"
      onClick={() => analytics.event(AnalyticsEvent.google_play_pressed)}
    >
      <Image
        src={googlePlayImage}
        alt="Get on Google Play"
        height={80}
        width={206.7}
      ></Image>
    </a>
  );
}

export default GooglePlayButton;
