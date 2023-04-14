import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Who } from "./components/Who";
import { What } from "./components/What";
import { Work } from "./components/Work";
import { Homepage } from "./sections/Homepage";
import { Skills } from "./sections/Skills";
import { Loader } from "./components/Loader";
import { useEffect, useState } from "react";
import Plant from "./spline/Plant";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <Header />
      <Homepage />
      <Skills />
    </Router>
  );
}

export default App;
