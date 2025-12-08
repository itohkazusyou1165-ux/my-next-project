import type { Category } from "@/app/_libs/microcms";
import styles from "./Category.module.css";
import { Freckle_Face } from "next/font/google";

type Props = {
  category: Category;
};

export default function Category({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}
