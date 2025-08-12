import ButtonLink from "../ButtonLink";
import styles from "./index.module.css";
import Image from "next/image";
import buttonLinkStyles from "../ButtonLink/index.module.css";

export default function Cta() {
  return (
    <div className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.ctaImage}>
            <Image
              src="/img-cta-screenshot.png"
              alt=""
              width="640"
              height="362"
            />
          </div>
          <div className={styles.body}>
            <div>
              <Image
                className={styles.logoImage}
                src="/logo-moshashugyo.png"
                alt=""
                width="850"
                height="102"
              />
            </div>
            <p className={styles.text}>
              駆け出しエンジニアのためのコーディング練習教材
            </p>
            <div className={styles.buttonLink}>
              <ButtonLink
                href="https://www.google.com/"
                className={`${buttonLinkStyles.buttonMidium} ${buttonLinkStyles.buttonWhite}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                詳しくはこちら
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
