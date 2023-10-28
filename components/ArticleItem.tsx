import React from "react";
import styles from "../app/App.module.css";

type ArticleItemTypes = {
  headerTitle?: string;
  paragraphText?: string;
};

function ArticleItem({ paragraphText, headerTitle }: ArticleItemTypes) {
  return (
    <>
      <ul className={styles.ArticleItem_list}>
        <h3 className={styles.ArticleItem_title}>{headerTitle}</h3>
        <li className={styles.ArticleItem_paragraph}>{paragraphText}</li>
      </ul>
    </>
  );
}

export default ArticleItem;
