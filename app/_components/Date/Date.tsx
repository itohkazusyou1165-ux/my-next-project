import Image from "next/image";
import styles from "./Date.module.css"

type Props ={
    date:string;
};

export default function Date({date}: Props) {
    return (
        <span className={styles.date}>
            <Image
                src="/clock.svg"
                alt="時刻を表示する画像"
                width={16}
                height={16}
                priority
            />
            {date}
        </span>
    )
}
