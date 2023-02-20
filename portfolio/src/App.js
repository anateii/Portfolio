import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Who } from "./components/Who";
import { What } from "./components/What";
import { Work } from "./components/Work";
import { Home } from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Who />
      <What />
      <Work />
    </Router>
  );
}

export default App;
