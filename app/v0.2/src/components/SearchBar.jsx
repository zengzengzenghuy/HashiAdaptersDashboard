import { AiOutlineSearch } from 'react-icons/ai';

import ChainsFilters from './filters/chains/index';
import AdaptersFilters from './filters/adapters/index';
import TypeFilters from './filters/types';

function SearchBar() {
  return (
    <div className="flex flex-column w-full justify-center p-4">
      <form className="w-[1024px] p-4 border-gray-50">
        <div className="relative">
          <input
            type="search"
            placeholder="Search your transaction, block number"
            className="w-full p-3 bg-transparent"
          />
          <button className="absolute right-1 p-4">
            <AiOutlineSearch color="white" />
          </button>
        </div>
      </form>

      <ChainsFilters name="From" />
      <ChainsFilters name="To" />
      <TypeFilters name="Type" />
      <AdaptersFilters name="Adapter" />
      <div></div>
    </div>
  );
}

export default SearchBar;
