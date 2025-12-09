import styles from "./Sheet.module.css";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
