import Button from "./_components/Button";
import KeyVisual from "./_components/KeyVisual";
import titleStyles from "./_components/Title/index.module.css";
import buttonStyles from "./_components/Button/index.module.css";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <KeyVisual className={titleStyles.titleCenter}>404 エラー</KeyVisual>
      <div className={styles.ptb}>
        <div className={styles.container}>
          <p className={styles.text}>
            <span>
              申し訳ございません。お探しのページは見つかりませんでした。
            </span>
            <span>
              入力したアドレスが間違っているか、ページが移動・削除された可能性があります
            </span>
          </p>
          <div className={styles.buttonBox}>
            <Button href="/" className={buttonStyles.buttonMedium}>
              トップへ
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
