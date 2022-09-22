import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import Search from "../components/utility/search/Search";
import { NextPageWithLayout } from "./page";
const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image src={"/Google.png"} width={272} height={92} priority />
      <Search />
      <p>
        Google offered in:
        <Link href={"/"} locale={locale === "en" ? "en" : "np"}>
          <a className="underline text-blue-500">Nepali</a>
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
