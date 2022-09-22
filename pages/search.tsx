import { GetServerSideProps } from "next";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import SearchResult from "../components/utility/search-result/SearchResult";
import { ISearchData } from "../lib/search/types";
import { IApiSearchResponseData } from "./api/search";
import { NextPageWithLayout } from "./page";

export interface ISearchResults {
  searchResults: ISearchData[];
}

export const getServerSideProps: GetServerSideProps<ISearchResults> = async ({
  query,
}) => {
  let searchResults: IApiSearchResponseData = [];
  const searchTerm = query.search;

  if (searchTerm && searchTerm.length > 0) {
    const response = await fetch(`http://localhost:3000/api/search`, {
      body: JSON.stringify({ searchTerm }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    searchResults = await response.json();
  }

  return {
    props: {
      searchResults,
    },
  };
};

const Home: NextPageWithLayout<ISearchResults> = ({ searchResults }) => {
  const hasResults = searchResults.length > 0;

  return (
    <section className="flex flex-col items-start gap-y-5 w-full">
      {hasResults ? (
        <div className="flex flex-col space-y-8 w-full">
          {searchResults.map((result, idx) => (
            <SearchResult key={idx} {...result} />
          ))}
        </div>
      ) : (
        <p>NO RESULTS FOUND</p>
      )}
    </section>
  );
};

export default Home;

Home.getLayout = (page) => (
  <PrimaryLayout title="Search Results" justify="items-start">
    {page}
  </PrimaryLayout>
);
