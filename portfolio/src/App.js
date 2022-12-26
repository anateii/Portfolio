import { Header } from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Who } from "./sections/Who";
import { What } from "./sections/What";
import { Work } from "./sections/Work";
import { Home } from "./sections/Home";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <Header />
        <Home />
        <Routes>
          <Route path="/who" element={<Who />} />
          <Route path="/what" element={<What />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
