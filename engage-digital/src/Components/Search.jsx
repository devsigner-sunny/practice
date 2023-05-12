

function Search() {

  return (
    <button className="flex items-center md:min-w-[40vw] md:max-w-[80vw] p-4 my-10 rounded-lg bg-slate-700 md:mx-32">
      <img className="w-10 pr-4" src="/firefox_logo.svg" alt="logo" />
      <input type="text" placeholder="Search with Google or enter address" className="flex-1 bg-slate-700 focus-visible:outline-none"/>      
    </button>
  )
}

export default Search