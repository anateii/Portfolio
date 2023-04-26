import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Homepage } from "./sections/Homepage";
import { Skills } from "./sections/Skills";
import { Loader } from "./components/Loader";
import { useEffect, useState } from "react";
import { Projects } from "./sections/Projects";
import { Blog } from "./sections/Blog";

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
      <Blog />
    </Router>
  );
}

export default App;
