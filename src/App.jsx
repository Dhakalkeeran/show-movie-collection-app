
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home.jsx"
import CardDetails from "./CardDetails.jsx";
import AddMovie from './AddMovie.jsx';

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card-details" element={<CardDetails />} />
          <Route path="/add-movie" element={<AddMovie />} />
      </Routes>
    </Router>
  )
}

export default App

