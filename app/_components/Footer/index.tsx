import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import SnsIcon from "../SnsIcon";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  className={styles.image}
                  src="/logo.png"
                  alt="武者への道"
                  width="640"
                  height="84"
                />
              </Link>
            </div>
            <p className={styles.desc}>
              <span>武者への道は駆け出しデザイナー・エンジニアを</span>
              <span>応援するメディアです</span>
            </p>
            <div className={styles.snsBox}>
              <SnsIcon />
            </div>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/" className={styles.navLink}>
                  武者への道とは
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/" className={styles.navLink}>
                  会社概要
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/" className={styles.navLink}>
                  プライバシーポリシー
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/" className={styles.navLink}>
                  お問い合わせ
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/" className={styles.navLink}>
                  web制作
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p>
          <small className={styles.copyright}>
            &copy; 2024 Road to MUSHA, inc.
          </small>
        </p>
      </div>
    </footer>
  );
}
