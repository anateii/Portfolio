import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Who } from "./components/Who";
import { What } from "./components/What";
import { Work } from "./components/Work";
import { Home } from "./components/Home";
import { LoadingPage } from "./components/LoadingPage";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <Router>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Header />
          <Home />
          <Who />
          <What />
          <Work />
        </>
      )}
    </Router>
  );
}

export default App;
