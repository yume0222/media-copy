export const metadata = {
  title: '記事',
};

export const revalidate = 60;

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <>{children}</>;
}
