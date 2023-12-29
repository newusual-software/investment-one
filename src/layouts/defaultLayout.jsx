import Footer from "../components/common/footer/footer";
import Header from "../components/common/header";
import { Sidebar } from "../components/common/navigations/sidebar";
import StockRecomendation from "../components/news/stockRecomendation";
import { useLocation } from "react-router-dom";

export default function DefaultLayout({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full overflow-hidden">
          <div>
            <StockRecomendation />
          </div>
          <div className={`bg-${isHomePage ? "white" : "gray-300"} px-11 py-8`}>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
