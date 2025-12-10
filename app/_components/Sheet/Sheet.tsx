import React from 'react'
import styles from "./Sheet.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Sheet({children} : Props) {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}
