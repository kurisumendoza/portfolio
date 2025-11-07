import { useEffect, useState } from 'react';
import { HERO_ANIMATION } from './constants';
import Hero from './components/page/Hero';
import Overview from './components/page/Overview';
import NavBar from './components/page/NavBar';
import ActivePage from './components/page/ActivePage';
import SkillsDock from './components/dock/SkillsDock';
import './App.css';

function App() {
  const [isHomepage, setIsHomepage] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (!isHomepage && !hasInteracted) setHasInteracted(true);
  }, [isHomepage, hasInteracted]);

  return (
    <div className="h-screen w-screen">
      {isHomepage && (
        <Hero
          animation={hasInteracted ? HERO_ANIMATION.EXPAND : ''}
          isHomepage={isHomepage}
          setIsHomepage={setIsHomepage}
        />
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
                <Hero
                  animation={HERO_ANIMATION.SHRINK}
                  isHomepage={isHomepage}
                  setIsHomepage={setIsHomepage}
                />
              </ActivePage>
            </div>
          </main>
          <SkillsDock />
        </Overview>
      )}
    </div>
  );
}

export default App;
