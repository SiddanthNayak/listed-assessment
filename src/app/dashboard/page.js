"use client";
import React, { use } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import style from "./page.module.css";
import Cards from "./components/cards";
import Chart from "./components/chart";
import ProductCard from "./components/productsCard";

async function getChartsData() {
  const res = await fetch(
    `https://my-json-server.typicode.com/SiddanthNayak/demo/db`
  );
  return res.json();
}

const chartPromise = getChartsData();

export default function Dashboard() {
  const chartsData = use(chartPromise);
  const colorClass = ["green", "yellow", "red"];
  const scheduleColorClass = ["lightGreen", "lightBlue"];
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  return (
    <div className={style.dashboardContainer}>
      <Cards />
      <div className={style.chartContainer}>
        <div className={style.labelContainer}>
          <div>
            <p className={style.label}>Activities</p>
            <select defaultValue="May-June 2021">
              <option value="May-June 2021">May - June 2021</option>
            </select>
          </div>
          <div className={style.chartElementsContainer}>
            <div className={style.guestElement}>
              <div> </div>
              <p>Guest</p>
            </div>
            <div className={style.userElement}>
              <div> </div>
              <p>User</p>
            </div>
          </div>
        </div>
        <Chart data={chartsData.line} />
      </div>
      <div className={style.renameContainer}>
        <div className={style.productsCard}>
          <div className={style.labelContainer}>
            <p className={style.label}>Top products</p>
            <select defaultValue="May-June 2021">
              <option value="May-June 2021">May - June 2021</option>
            </select>
          </div>
          <div className={style.pieChartContainer}>
            <ProductCard data={chartsData.pie} />
            <div>
              {chartsData.pie &&
                chartsData.pie.map((item, index) => {
                  return (
                    <div key={index} className={style.productsData}>
                      <div
                        className={`${style[colorClass[index]]} ${
                          style.element
                        }`}
                      ></div>
                      <div>
                        <p className={style.productName}>{item.name}</p>
                        <p className={style.productValue}>{item.value}%</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className={style.scheduleCard}>
          <div className={style.labelContainer}>
            <p className={style.label}>Today&apos;s Schedule</p>
            <p className={style.labelNav}>See all &gt;</p>
          </div>
          <div>
            {chartsData.schedule &&
              chartsData.schedule.map((item, index) => {
                return (
                  <div key={index} className={style.schedule}>
                    <div
                      className={`${style[scheduleColorClass[index]]} ${
                        style.line
                      }`}
                    ></div>
                    <div className={style.scheduleDetails}>
                      <p className={style.scheduleTitle}>{item.title}</p>
                      <p>{item.time}</p>
                      <p>{item.venue}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
