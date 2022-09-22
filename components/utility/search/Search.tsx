import { useRouter } from "next/router";
import { useState } from "react";

export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const router = useRouter();
  return (
    <form
      className="flex flex-col items-center justify-center space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search?search=${searchTerm}`);
      }}
    >
      <input
        type="text"
        className="rounded-full border w-5/6 sm:w-128 h-12 p-3 hover:shadow-xl focus:ring-0 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="space-x-3">
        <button type="submit" className="btn-primary">
          Google Search
        </button>
        <button type="submit" className="btn-primary">
          I &apos; m feeling lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
