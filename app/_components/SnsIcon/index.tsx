import styles from "./index.module.css";
import Image from "next/image";

export default function SnsIcon() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a
          href="https://www.google.com/"
          className={styles.link}
          target="_blank"
        >
          <Image
            className={styles.image}
            src="/icon-sns-twitter.svg"
            alt="twitter"
            width="400"
            height="400"
          />
        </a>
      </li>
      <li className={styles.item}>
        <a
          href="https://www.google.com/"
          className={styles.link}
          target="_blank"
        >
          <Image
            className={styles.image}
            src="/icon-sns-facebook.svg"
            alt="facebook"
            width="1024"
            height="1024"
          />
        </a>
      </li>
    </ul>
  );
}
