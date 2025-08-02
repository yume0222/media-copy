import Sheet from "../_components/Sheet";
import stylesSheet from "../_components/Sheet/index.module.css";

export const metadata = {
  title: 'お問い合わせ',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Sheet className={stylesSheet.containerSmall}>{children}</Sheet>
    </>
  );
}
