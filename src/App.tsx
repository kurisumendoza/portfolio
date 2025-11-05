import { useState } from "react";
import "./App.css";
import Hero from "./components/page/Hero";

function App() {
  const [isHomepage, setIsHomepage] = useState(true);

  return <div className="h-screen w-screen">{isHomepage && <Hero />}</div>;
}

export default App;
