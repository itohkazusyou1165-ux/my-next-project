import styles from "./not-found.module.css"
import React from 'react'

export default function Notfound() {
  return (
    <div className={styles.container}>
        <dl>
            <dt className={styles.title}>ページが見つかりません</dt>
            <dd className={styles.text}>
                あなたがアクセスしようとしたページは存在しません。
                <br />
                URLを確認してください。
            </dd>
        </dl>
        </div>
  )
}
