import './App.css';
import Search from '../src/Components/Search';
import Cards from '../src/Components/Cards';

function App() {
  return (
    <div className="grid min-h-screen px-12 md:px-32 place-items-center App bg-slate-900">
      <main className="flex flex-col items-center justify-center w-full py-10">
        <div className="flex items-center">
          <img src="firefox_logo.svg" alt="logo" />
          <h1 className="pl-2 text-5xl font-bold text-white">Firefox</h1>
        </div>
          <Search />
          <Cards />
      </main>
    </div>
  );
}

export default App;
