import Hero from "../_components/Hero/Hero";
import Sheet from "../_components/Sheet/Sheet";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Member" sub="メンバー" />
      <Sheet>
        {children}
        </Sheet>
    </>
  );
}
