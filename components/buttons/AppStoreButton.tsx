//import { Link } from "react-router-dom";
//import { AnalyticsEvent } from "../../utils/constants";
//import { analytics } from "../../utils/mixpanel";
import Link from "next/link";
import appStore from "../../public/images/app-store.svg";
import React from "react";
import Image from "next/image";
import { analytics } from "@/app/mixpanel";
import { AnalyticsEvent } from "@/utils/constants";
function AppStoreButton() {
  return (
    <Link
      href="/available-soon"
      onClick={() => analytics.event(AnalyticsEvent.apple_store_pressed)}
    >
      <Image src={appStore} alt="Get on App Store" width={161.5} height={54} />
    </Link>
  );
}

export default AppStoreButton;
