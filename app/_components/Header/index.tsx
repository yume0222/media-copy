import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import SnsIcon from "../SnsIcon";

export default function Header() {
  return (
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.inner}>
            <h1>
              <Link href="/article">
                <Image
                  className={styles.image}
                  src="/logo.png"
                  alt="武者への道"
                  width="640"
                  height="84"
                />
              </Link>
            </h1>
            <SnsIcon />
          </div>{/* .headerInner */}
        </div>{/* .container */}
      </header>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                HTML/CSS
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                JavaScript
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                WordPress
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                webデザイン
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                web制作
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
