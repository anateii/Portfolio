import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Homepage } from "./sections/Homepage";
import { Skills } from "./sections/Skills";
import { Loader } from "./components/Loader";
import { useEffect, useState } from "react";
import { Projects } from "./sections/Projects";

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
      <Projects />
    </Router>
  );
}

export default App;
