import React, { useEffect } from "react";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { CiCloudSun } from "react-icons/ci";

export default function CurrentWeather() {
  useEffect(() => {
    console.log("gehkvb");
  }, []);
  return (
    <div className="p-8">
      <h1 className="flex justify-center items-center font-bold text-xl">
        Current Weather
      </h1>
      <div className="flex justify-between mt-5 items-center">
        <div className="flex flex-col space-y-2">
          <span className="font-bold">Kathmandu NP</span>
          <span>Today June 11, 2024</span>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="font-bold flex items-center">
            <LiaTemperatureLowSolid className="size-7" />
            <span>16.14 C</span>
          </span>
          <span>light rain</span>
        </div>
        <div>
          <CiCloudSun className="size-16" />
        </div>
      </div>
    </div>
  );
}
