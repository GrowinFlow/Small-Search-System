import React, { useContext } from 'react'

// import SearchContext 
import { SearchContext } from '../context/SearchProvider'

function SearchInput() {
  // import values 
  const { query, SetQuery, search } = useContext(SearchContext);

  // user Search Input controls 
  const handleSearch = (e) => {
    const userInputSearch = e.target.value;
    const modifiedInput = userInputSearch.toLowerCase();
    SetQuery(modifiedInput);
    search(modifiedInput)
  }

  return (
    <>
      <div className="input relative top-4 block">
        <div className="max-w-md mx-auto">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>

            <input
             onChange={handleSearch}
              type="text"
              value={query}
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-100 border border-gray-300 rounded-lg  bg-slate-500 focus:ring-blue-500 placeholder-gray-200 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Product..." required />
          
          </div>
        </div>
      </div>

    </>
  )
}

export default SearchInput