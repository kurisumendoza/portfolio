import { useState } from "react";
import "./App.css";
import Hero from "./components/page/Hero";
import Overview from "./components/page/Overview";
import Button from "./components/shared/Button";
import EnterIcon from "./components/icons/EnterIcon";
import NavBar from "./components/page/NavBar";
import ActivePage from "./components/page/ActivePage";

function App() {
  const [isHomepage, setIsHomepage] = useState(true);

  return (
    <div className="h-screen w-screen">
      {isHomepage && (
        <Hero>
          <Button
            className="bg-secondary flex items-center gap-5 rounded-lg px-20 py-5 text-2xl font-medium shadow-md"
            onClick={() => setIsHomepage(false)}
          >
            <div className="text-nowrap">Explore my portfolio</div>
            <EnterIcon className="fill-text h-7" />
          </Button>
        </Hero>
      )}

      <Overview>
        <NavBar setIsHomepage={setIsHomepage} />
        <main className="grid h-4/5 grid-cols-[25%_1fr] grid-rows-3 gap-10 px-5">
          <div className="h-full bg-blue-200"></div>
          <div className="h-full bg-blue-200"></div>
          <div className="h-full bg-blue-200"></div>
          <div className="col-start-2 row-span-3 row-start-1 w-full">
            <ActivePage>
              <Hero>
                <Button
                  className="bg-secondary flex items-center gap-5 rounded-lg px-20 py-5 text-2xl font-medium shadow-md"
                  onClick={() => setIsHomepage(false)}
                >
                  <div className="text-nowrap">Back to homepage</div>
                  <EnterIcon className="fill-text h-7" />
                </Button>
              </Hero>
            </ActivePage>
          </div>
        </main>
        <footer className="h-30 bg-amber-300"></footer>
      </Overview>
    </div>
  );
}

export default App;
