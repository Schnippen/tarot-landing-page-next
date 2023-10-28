"use client";

import Link from "next/link";
import React from "react";
import styles from "../../app/App.module.css";
import { analytics } from "@/app/mixpanel";
function LinkMixpanel({
  href,
  text,
  title,
  event,
}: {
  href: string;
  text: string;
  title: string;
  event: string;
}) {
  return (
    <Link
      href={href}
      className={styles.Link}
      onClick={() => analytics.event(event)}
      title={title}
    >
      {text}
    </Link>
  );
}

export default LinkMixpanel;
