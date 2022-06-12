import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from './components/About';
import { Projects } from './components/Projects';
import What from './components/What';



function App() {
  return (
  <Router>
     <Navbar/>
     <Routes>
     <Route path="/who" element={<About/>} />
     <Route path="/work" element={<Projects/>} />
     <Route path="/what" element={<What/>} />
     </Routes>
  </Router>
  );
}

export default App;
