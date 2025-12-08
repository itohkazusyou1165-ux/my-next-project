import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.LogoLink}>
        <Image
          src="/Logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </a>
    </header>
  );
}
