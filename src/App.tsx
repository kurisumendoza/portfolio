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
import About from './components/pages/About';
import Projects from './components/pages/Projects';

function App() {
  const defaultSide = [PAGE.ABOUT, PAGE.PROJECTS, PAGE.CONTACT];

  const [isHomepage, setIsHomepage] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [fromSidePage, setFromSidePage] = useState(false);
  const [activePage, setActivePage] = useState<PageType>(PAGE.HOME);
  const [inactivePages, setInactivePages] = useState<PageType[]>(defaultSide);

  useEffect(() => {
    if (!isHomepage && !hasInteracted) setHasInteracted(true);
  }, [isHomepage, hasInteracted]);

  useEffect(() => {
    if (isHomepage) {
      setFromSidePage(false);
      setActivePage(PAGE.HOME);
      setInactivePages(defaultSide);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <main className="flex flex-1 gap-10 px-10">
            <SidePages
              activePage={activePage}
              inactivePages={inactivePages}
              setActivePage={setActivePage}
              setInactivePages={setInactivePages}
              setFromSidePage={setFromSidePage}
            />
            <div className="size-full">
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

                {activePage === PAGE.ABOUT && (
                  <About animation={SIDE_ANIMATION.EXPAND} />
                )}

                {activePage === PAGE.PROJECTS && (
                  <Projects animation={SIDE_ANIMATION.EXPAND} />
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
