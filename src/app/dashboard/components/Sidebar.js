"use client";

import React from "react";
import style from "./sidebar.module.css";
import DashboardSVG from "/public/dashboard_icon.svg";
import TransactionSVG from "/public/transaction_icon.svg";
import ScheduleSVG from "/public/schedule_icon.svg";
import UserSVG from "/public/user_nav.svg";
import SettingSVG from "/public/setting_icon.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className={style.container}>
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
              <li className={`${pathname === "/transactions" && style.active}`}>
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
                <Image className={style.svg} src={SettingSVG} alt="settings" />
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
  );
};
