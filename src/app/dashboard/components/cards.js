import React from "react";
import style from "./cards.module.css";
import RevenueSVG from "/public/revenue.svg";
import TransactionSVG from "/public/total_transactions_icon.svg";
import LikeSVG from "/public/like_icon.svg";
import UserSVG from "/public/user_icon.svg";
import Image from "next/image";

export default function Cards() {
  return (
    <div className={style.cardContainer}>
      <div className={`${style.revenue} ${style.card}`}>
        <div className={style.image}>
          <Image src={RevenueSVG} alt="Revenue Tag" />
        </div>
        <p>Total Revenues</p>
        <h3>$2,129,430</h3>
      </div>
      <div className={`${style.transaction} ${style.card}`}>
        <div className={style.image}>
          <Image src={TransactionSVG} alt="Transaction Tag" />
        </div>
        <p>Total Transaction</p>
        <h3>1,520</h3>
      </div>
      <div className={`${style.likes} ${style.card}`}>
        <div className={style.image}>
          <Image src={LikeSVG} alt="Like Tag" />
        </div>
        <p>Total Likes</p>
        <h3>9,721</h3>
      </div>
      <div className={`${style.user} ${style.card}`}>
        <div className={style.image}>
          <Image src={UserSVG} alt="User Tag" />
        </div>
        <p>Total Users</p>
        <h3>892</h3>
      </div>
    </div>
  );
}
