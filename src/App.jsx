import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing.jsx";
import Insights from "./pages/insights.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* landing route */}
          <Route path="/" element={<Landing />} />
          <Route path="/insight" element={<Insights />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
