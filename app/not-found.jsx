import React from "react";
import Link from "next/link";
import styles from "./App.module.css";

function NotFound() {
  return (
    <main
      style={{
        paddingTop: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        textAlign: "center",
        fontFamily: "var(--Cinzel)",
        fontSize: "2em",
        textShadow: "var(--textShadowOpacity)",
        userSelect: "none",
      }}
    >
      <div>
        <h1 style={{ cursor: "pointer" }}>
          <Link href="/" className={styles.headerLink}>
            Page Not Found
          </Link>
        </h1>
      </div>
    </main>
  );
}

export default NotFound;
