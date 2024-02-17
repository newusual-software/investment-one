import Footer from "../components/common/footer/footer";
import LandingHeaderInfo from "../components/common/header/landingHeaderInfo";

export default function LandingLayout({ children }) {
  return (
    <div>
      <LandingHeaderInfo />
      <div className="bg-[#F4F4F4] pb-10">{children}</div>
      <Footer />
    </div>
  );
}
