import Header from "../components/common/header";
import { Sidebar } from "../components/common/navigations/sidebar";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex gap-4 flex-row">
        <div >
          <nav>
            <Sidebar />
          </nav>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
