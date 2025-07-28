import ContactForm from "../_components/ContactForm";
import Title from "../_components/Title";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <Title>お問い合わせ</Title>
      <p className={styles.text}>
        お問い合わせは下記のフォーム、もしくはお電話にて承ります。
      </p>
      <ContactForm />
    </>
  );
}
