import React from "react";
import { CiCloudSun } from "react-icons/ci";

export default function TodayForecast() {
  return (
    <div className="p-8">
      <h1 className="flex justify-center items-center font-bold text-xl">
        Today Forecast
      </h1>
      <div className=" flex justify-start mt-5">
        <div className=" border-[1px] border-gray-500 rounded-lg flex flex-col items-center py-4 px-8">
          <span>09:00</span>
          <span>
            <CiCloudSun className="size-16" />
          </span>
        </div>
        <div className=" border-[1px] border-gray-500 rounded-lg flex flex-col items-center py-4 px-8">
          <span>10:00</span>
          <span>
            <CiCloudSun className="size-16" />
          </span>
        </div>
      </div>
    </div>
  );
}
