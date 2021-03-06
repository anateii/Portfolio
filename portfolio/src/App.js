import { Header } from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Who } from './sections/Who'
import {What} from './sections/What'
import {Work} from './sections/Work'
import {Home} from './sections/Home'


function App() {
  return (
    <Router>
     <Header/>
     <Routes>
     <Route path="/home" element={<Home/>}/>
     <Route path="/section-who" element={<Who/>}/>
     <Route path="/section-what" element={<What/>}/>
     <Route path="/section-work" element={<Work/>}/>
     </Routes>
    </Router>
  );
}

export default App;
