"use client";
import React from "react";
import { useSession } from "next-auth/react";
import style from "./header.module.css";
import Image from "next/image";
import NotificationIcon from "/public/notifaction.svg";
import SearchIcon from "/public/search_icon.svg";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <div className={style.container}>
      <div className={style.header}>
        <p>Dashboard</p>
        <div className={style.searchContainer}>
          <div className={style.search}>
            <input type="text" placeholder="Search..." />
            <Image src={SearchIcon} alt="search icon" />
          </div>
          <Image
            className={style.icon}
            src={NotificationIcon}
            alt="Notification"
          />
          <Image
            className={style.avatar}
            src={session?.user.image}
            width={30}
            height={30}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};
