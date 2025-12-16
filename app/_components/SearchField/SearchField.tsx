import styles from "./SearchField.module.css";
import React from "react";
import Image from "next/image";

export default function SearchField() {
  return (
    <form className={styles.form}>
      <label className={styles.search}>
        <Image
          src="/search.svg"
          alt="検索"
          width={16}
          height={16}
          loading="eager"
        />
        <input
          type="text"
          name="q"
          placeholder="キーワードを入力"
          className={styles.searchInput}
        />
      </label>
    </form>
  );
}
