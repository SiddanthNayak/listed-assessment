"use client";

import React, { useState } from "react";
import style from "./sidebar.module.css";
import DashboardSVG from "/public/dashboard_icon.svg";
import TransactionSVG from "/public/transaction_icon.svg";
import ScheduleSVG from "/public/schedule_icon.svg";
import UserSVG from "/public/user_nav.svg";
import SettingSVG from "/public/setting_icon.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
export const Sidebar = () => {
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log(sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className={style.hamburger} onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div
        className={`${sidebarOpen ? style.closeButton : style.close}`}
        onClick={toggleSidebar}
      >
        <AiOutlineClose />
      </div>
      <div className={`${style.container} ${sidebarOpen ? style.open : ""}`}>
        <div className={style.navContainer}>
          <p>Board.</p>

          <div className={style.navLinksContainer}>
            <div className={style.navLinks}>
              <ul>
                <li className={`${pathname === "/dashboard" && style.active}`}>
                  <Image
                    className={style.svg}
                    src={DashboardSVG}
                    alt="dashboard"
                  />
                  Dashboard
                </li>
                <li
                  className={`${pathname === "/transactions" && style.active}`}
                >
                  <Image
                    className={style.svg}
                    src={TransactionSVG}
                    alt="transaction"
                  />
                  Transactions
                </li>
                <li className={`${pathname === "/schedules" && style.active}`}>
                  <Image
                    className={style.svg}
                    src={ScheduleSVG}
                    alt="schedules"
                  />
                  Schedules
                </li>
                <li className={`${pathname === "/users" && style.active}`}>
                  <Image className={style.svg} src={UserSVG} alt="users" />
                  Users
                </li>
                <li className={`${pathname === "/settings" && style.active}`}>
                  <Image
                    className={style.svg}
                    src={SettingSVG}
                    alt="settings"
                  />
                  Settings
                </li>
              </ul>
            </div>
            <div className={style.supportLinks}>
              <ul>
                <li>Help</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
