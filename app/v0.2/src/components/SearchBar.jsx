import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

import ChainsFilters from './filters/chains/index';
import AdaptersFilters from './filters/adapters/index';
import TypeFilters from './filters/types';

function SearchBar({ filter, setFilter }) {
  const [reset, setReset] = useState(false);
  const handleFilterChange = filteredData => {
    setFilter(filteredData);
  };

  const handleReset = () => {
    setFilter(null);
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 2000);
  };
  return (
    <div className="flex flex-column w-full justify-center p-4">
      <form className="w-[1024px] p-4 border-gray-50">
        <div className="relative">
          <input
            type="search"
            placeholder="Search your transaction, block number"
            className="w-full p-3 bg-transparent text-white"
            onChange={e => setFilter(e.target.value)}
          />
          <button className="absolute right-1 p-4">
            <AiOutlineSearch color="white" />
          </button>
        </div>
      </form>

      <ChainsFilters
        name="From"
        onFilterChange={handleFilterChange}
        isReset={reset}
      />
      <ChainsFilters
        name="To"
        onFilterChange={handleFilterChange}
        isReset={reset}
      />
      <TypeFilters
        name="Type"
        onFilterChange={handleFilterChange}
        isReset={reset}
      />
      <AdaptersFilters
        name="Adapter"
        onFilterChange={handleFilterChange}
        isReset={reset}
      />
      <button
        onClick={handleReset}
        className="text-white bg-[#1d2429] border-gray-100 rounded-md h-9 w-16 self-center hover:bg-[#205239]"
      >
        Reset
      </button>
      <div></div>
    </div>
  );
}

export default SearchBar;
