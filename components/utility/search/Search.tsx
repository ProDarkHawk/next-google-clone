import { useState } from "react";

export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const [searchTerm, setSearchTerm] = useState<string>();

  return (
    <form
      className="flex flex-col items-center justify-center space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert(searchTerm);
      }}
    >
      <input
        type="text"
        className="rounded-full border w-5/6 sm:w-96 h-12 p-3 hover:shadow-xl focus:ring-0 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="space-x-3">
        <button type="submit" className="btn-primary">
          Google Search
        </button>
        <button type="submit" className="btn-primary">
          I'm feeling lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
