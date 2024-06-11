import React from "react";

import { LiaTemperatureLowSolid } from "react-icons/lia";
import { CiCloudSun } from "react-icons/ci";

export default function AirConditions() {
  return (
    <div className="p-8">
      <h1 className="flex justify-center items-center font-bold text-xl">
        Air Conditions
      </h1>
      <div className="flex justify-between mt-5 items-center">
        <div className="flex flex-col space-y-2">
          <span className="font-bold flex items-center">
            <LiaTemperatureLowSolid className="size-7" />
            <span>Real Feel</span>
          </span>
          <span>15.85</span>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="font-bold flex items-center">
            <LiaTemperatureLowSolid className="size-7" />
            <span>Wind</span>
          </span>
          <span>6.2 m/s</span>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="font-bold flex items-center">
            <LiaTemperatureLowSolid className="size-7" />
            <span>Clouds</span>
          </span>
          <span>75</span>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="font-bold flex items-center">
            <LiaTemperatureLowSolid className="size-7" />
            <span>Humidity</span>
          </span>
          <span>78</span>
        </div>
      </div>
    </div>
  );
}
