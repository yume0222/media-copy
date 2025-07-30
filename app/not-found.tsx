import ButtonLink from "./_components/ButtonLink";
import KeyVisual from "./_components/KeyVisual";
import titleStyles from "./_components/Title/index.module.css";
import buttonLinkStyles from "./_components/ButtonLink/index.module.css";
import styles from "./not-found.module.css";
import Cta from "./_components/Cta";
import Sheet from "./_components/Sheet";
import stylesSheet from "./_components/Sheet/index.module.css";

export default function NotFound() {
  return (
    <>
      <KeyVisual className={titleStyles.titleCenter}>404 エラー</KeyVisual>
      <Sheet className={stylesSheet.containerSmall}>
        <p className={styles.text}>
          <span>
            申し訳ございません。お探しのページは見つかりませんでした。
          </span>
          <span>
            入力したアドレスが間違っているか、ページが移動・削除された可能性があります
          </span>
        </p>
        <div className={styles.buttonLink}>
          <ButtonLink href="/" className={buttonLinkStyles.buttonMedium}>
            トップへ
          </ButtonLink>
        </div>
      </Sheet>
      <Cta />
    </>
  );
}
