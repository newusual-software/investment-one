import Header from "../components/common/header";
import { Sidebar } from "../components/common/navigations/sidebar";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <div >
          <nav>
            <Sidebar />
          </nav>
        </div>
        <div className="w-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
