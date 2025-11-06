import { useState } from 'react';
import './App.css';
import Hero from './components/page/Hero';
import Overview from './components/page/Overview';
import NavBar from './components/page/NavBar';
import ActivePage from './components/page/ActivePage';

function App() {
  const [isHomepage, setIsHomepage] = useState(true);

  return (
    <div className="h-screen w-screen">
      {isHomepage && (
        <Hero isHomepage={isHomepage} setIsHomepage={setIsHomepage} />
      )}

      {!isHomepage && (
        <Overview>
          <NavBar setIsHomepage={setIsHomepage} />
          <main className="grid h-4/5 grid-cols-[25%_1fr] grid-rows-3 gap-10 px-5">
            <div className="h-full bg-blue-200"></div>
            <div className="h-full bg-blue-200"></div>
            <div className="h-full bg-blue-200"></div>
            <div className="col-start-2 row-span-3 row-start-1 w-full">
              <ActivePage>
                <Hero isHomepage={isHomepage} setIsHomepage={setIsHomepage} />
              </ActivePage>
            </div>
          </main>
          <footer className="h-30 bg-amber-300"></footer>
        </Overview>
      )}
    </div>
  );
}

export default App;
