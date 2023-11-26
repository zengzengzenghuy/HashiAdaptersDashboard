
import { AiOutlineSearch } from "react-icons/ai";
const SearchBar = () => {
    return(
        <div className="flex flex-column w-full justify-center p-4">
        <form className="w-[1024px] p-4" >
            <div className="relative">
                <input type="search" placeholder="Search your transaction" className="w-full p-3"/>
                    <button className="absolute right-1 p-4">
                        <AiOutlineSearch/>
                    </button>
            </div>
        </form>
     
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 h-12 rounded">Filter</button>
        <div>
            
        </div>
        </div>
    )
       
}

export default SearchBar;