import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import style from "./layout.module.css";

export default function DashboardLayout({ children }) {
  return (
    <div className={style.layoutContainer}>
      <Sidebar />
      <div className={style.rightContainer}>
        <Header />
        {children}
      </div>
    </div>
  );
}
