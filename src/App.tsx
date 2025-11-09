import { useEffect, useState } from 'react';
import {
  HERO_ANIMATION,
  SIDE_ANIMATION,
  PAGE,
  type PageType,
} from './constants';
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
  const [fromSidePage, setFromSidePage] = useState(false);
  const [activePage, setActivePage] = useState<PageType>(PAGE.HOME);
  const [inactivePages, setInactivePages] = useState<PageType[]>([
    PAGE.ABOUT,
    PAGE.PROJECTS,
    PAGE.CONTACT,
  ]);

  useEffect(() => {
    if (!isHomepage && !hasInteracted) setHasInteracted(true);
  }, [isHomepage, hasInteracted]);

  useEffect(() => {
    if (isHomepage) setFromSidePage(false);
  }, [isHomepage]);

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
            <SidePages
              activePage={activePage}
              inactivePages={inactivePages}
              setActivePage={setActivePage}
              setInactivePages={setInactivePages}
              setFromSidePage={setFromSidePage}
            />
            <div className="col-start-2 row-span-3 row-start-1 w-full">
              <ActivePage>
                {activePage === PAGE.HOME && (
                  <Hero
                    animation={
                      fromSidePage
                        ? SIDE_ANIMATION.EXPAND
                        : HERO_ANIMATION.SHRINK
                    }
                    isHomepage={isHomepage}
                    setIsHomepage={setIsHomepage}
                  />
                )}
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
