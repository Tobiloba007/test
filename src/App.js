import About from "./screens/About";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Support from "./screens/Support";
import OurMetals from "./screens/OurMetals";
import Locations from "./screens/Locations";

function App() {
  return (
    <Router>
         <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/support" Component={Support} />
            <Route path="/our-metals" Component={OurMetals} />
            <Route path="/locations" Component={Locations} />
         </Routes>
    </Router>
  );
}

export default App;
