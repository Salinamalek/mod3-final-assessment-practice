import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Main from "./Main";
import Nav from "./Nav";
// import "./App.css";

// import BroswerRouter, Routes, and Route
// create a route inside our JSX
// create Home page component

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
