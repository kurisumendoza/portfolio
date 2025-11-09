import { useEffect, useState } from 'react';
import { HERO_ANIMATION } from './constants';
import Hero from './components/pages/Hero';
import Overview from './components/layout/Overview';
import NavBar from './components/layout/NavBar';
import ActivePage from './components/pages/ActivePage';
import SkillsDock from './components/dock/SkillsDock';
import './App.css';
import SidePages from './components/pages/SidePages';

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
          <main className="flex h-4/5 gap-10 px-10">
            <SidePages />
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
