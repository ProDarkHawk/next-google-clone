import Head from "next/head";
import Footer from "../../navigation/footer/Footer";
import Header from "../../navigation/header/Header";

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
  justify?: "items-center" | "items-start";
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = "items-center",
  title,
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>{title ? `${title}--NEXT-GOOGLE` : "GOOGLE CLONE"}</title>
      </Head>
      <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
        <Header />
        <main className="px-5 w-full"> {children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
