import { useState } from "react";
import "./App.css";
import Hero from "./components/page/Hero";
import Overview from "./components/page/Overview";
import Button from "./components/shared/Button";
import EnterIcon from "./components/icons/EnterIcon";

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
        <p></p>
      </Overview>
    </div>
  );
}

export default App;
