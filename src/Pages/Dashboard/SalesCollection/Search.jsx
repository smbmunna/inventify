import { useState } from "react";

const Search = ({ data, onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        const results = data.filter(item =>
            item._id.toLowerCase().includes(query.toLowerCase())
        );
        onSearch(results);
    }
    return (
        <div>
            <input 
            type="text" 
            placeholder="Search by Product Id"
            className="textarea textarea-bordered w-full max-w-xs"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            />

            <button className="btn text-white rounded-none bg-[#6f42c1] w-40 my-4" onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;