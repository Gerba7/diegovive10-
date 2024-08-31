import Image from "next/image";
import styles from "./page.module.css";
import Cover from "./ui/components/Home/Cover/Cover";

export default function Home() {
  return (
    <main className={styles.main}>
      <Cover />
    </main>
  );
}
