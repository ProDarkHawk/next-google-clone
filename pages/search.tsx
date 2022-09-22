import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import SearchResult from "../components/utility/search-result/SearchResult";
import { mockSearchResultProps } from "../components/utility/search-result/SearchResult.mocks";
import { NextPageWithLayout } from "./page";
const Home: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-start gap-y-5 w-full">
      <div className="flex flex-col space-y-8 w-full">
        {[...new Array(12)].map((_, idx) => (
          <SearchResult key={idx} {...mockSearchResultProps.base} />
        ))}
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => (
  <PrimaryLayout title="Search Results" justify="items-start">
    {page}
  </PrimaryLayout>
);
