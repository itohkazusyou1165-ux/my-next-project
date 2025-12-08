import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.LogoLink}>
        <Image
          src="/Logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      <nav>
        <ul className={styles.items}>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
