import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* landing route */}
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
