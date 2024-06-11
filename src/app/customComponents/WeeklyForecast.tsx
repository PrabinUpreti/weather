import React from "react";
import { CiCloudSun } from "react-icons/ci";

export default function WeeklyForecast() {
  return (
    <div className="border-[1px] border-gray-500 rounded-lg flex flex-col items-center py-4 px-8">
      <div className=" flex justify-between w-full">
        <div className="space-y-4">
          <span>Wednesday</span>
          <span className="flex items-center">
            <CiCloudSun className="size" />
            <p>Clear Sky</p>
          </span>
        </div>

        <div className="space-y-4">
          <span>Wednesday</span>
          <span className="flex items-center">
            <CiCloudSun className="size" />
            <p>Clear Sky</p>
          </span>
        </div>
        
        <div className="space-y-4">
          <span>Wednesday</span>
          <span className="flex items-center">
            <CiCloudSun className="size" />
            <p>Clear Sky</p>
          </span>
        </div>
      </div>
    </div>
  );
}
