import About from "./screens/About";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Support from "./screens/Support";
import OurMetals from "./screens/OurMetals";
import Locations from "./screens/Locations";
import RegForm from "./screens/registration/RegForm";
import Verification from "./screens/registration/Verification";
import Login from "./screens/Login";
import SelectRole from "./screens/SelectRole";

function App() {
  return (
    <Router>
         <Routes>
            <Route path="/" Component={Home} />
            <Route path="/our-metals" Component={OurMetals} />
            <Route path="/locations" Component={Locations} />
            <Route path="/about" Component={About} />
            <Route path="/support" Component={Support} />
            <Route path="/register" Component={RegForm} />
            <Route path="/verification" Component={Verification} />
            <Route path="/login" Component={Login} />
            <Route path="/select-role" Component={SelectRole} />
         </Routes>
    </Router>
  );
}

export default App;
