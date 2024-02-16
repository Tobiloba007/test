import About from "./screens/About";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
         <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
         </Routes>
    </Router>
  );
}

export default App;
