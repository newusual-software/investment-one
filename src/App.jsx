import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing.jsx";
import Insights from "./pages/insights.jsx";
import PriceList from "./pages/pricelist.jsx";
import DailyReport from "./pages/dailyReport.jsx";
import WeeklyReport from "./pages/weeklyReport.jsx";
import MonthlyReport from "./pages/monthlyReport.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* landing route */}
          <Route path="/" element={<Landing />} />
          <Route path="/insight" element={<Insights />} />
          <Route path="/equity-price-list" element={<PriceList />} />
          <Route path="/daily-market-report" element={<DailyReport />} />
          <Route path="/weekly-market-report" element={<WeeklyReport />} />
          <Route path="/monthly" element={<MonthlyReport />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
