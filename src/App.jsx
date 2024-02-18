import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing.jsx";
import Insights from "./pages/insights.jsx";
import PriceList from "./pages/pricelist.jsx";
import DailyReport from "./pages/dailyReport.jsx";
import WeeklyReport from "./pages/weeklyReport.jsx";
import MonthlyReport from "./pages/monthlyReport.jsx";
import ResearchPortal from "./pages/researchPortal.jsx";
import InsightData from "./pages/insightData.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* landing route */}
          <Route path="/" element={<Landing />} />
          <Route path="/research-portal" element={<ResearchPortal />} />
          <Route path="/insight" element={<Insights />} />
          <Route path="/equity-price-list" element={<PriceList />} />
          <Route path="/daily-market-report" element={<DailyReport />} />
          <Route path="/weekly-market-report" element={<WeeklyReport />} />
          <Route path="/monthly" element={<MonthlyReport />} />
          <Route path="/insight-data/:id" element={<InsightData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
