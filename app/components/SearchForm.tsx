import React from 'react'
import SearchFormReset from './SearchFormReset'

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <form action="/" className="flex items-center gap-2">
      <input
        name="query"
        defaultValue={query}
        placeholder="Search..."
        className="w-full rounded-full border border-gray-300 bg-white px-6 py-2 text-left text-sm font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:w-auto"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button
          type="submit"
          className="cursor-pointer rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition"
        >
          🔍
        </button>
      </div>
    </form>
  )
}

export default SearchForm
