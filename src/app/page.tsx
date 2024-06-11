"use client";
import { useEffect, useState } from "react";
import CurrentWeather from "./customComponents/CurrentWeather";
import AirConditions from "./customComponents/AirConditions";
import TodayForecast from "./customComponents/TodayForecast";
import WeeklyForecast from "./customComponents/WeeklyForecast";
import SearchBox from "./customComponents/SearchBox";

export default function Home() {
  const [data, setData] = useState<any>({});
  const [weather, setWeather] = useState();
  const [searchData, setSearchData] = useState<string | number>();
  const [city, setCity] = useState<any>([]);

  const citySearch = async (value: string) => {
    console.log(value);

    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${value}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "2ab26a0790msh809a6d78e583060p1c744fjsn6f4f59d18901",
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.data);
      setCity(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=ef16f2b1b2fd3b9c8f4e38946210a57c`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="py-5 px-5 xl:px-80 flex justify-center w-full h-screen bg-gradient-to-br from-blue-950 to-purple-600 text-white">
      <div className="w-full">
        <h1 className="text-3xl text-start">Weather App</h1>
        <input
          type="text"
          placeholder="Enter City Name"
          value={searchData}
          onChange={(e) => citySearch(e.target.value)}
          className="w-full p-2 rounded-full mt-5 block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
        {/* This is the main parent of showing forecast */}
        <div className=" flex justify-center md:justify-between md:space-x-10 flex-col md:flex-row md: items-center">
          <div className="border-[1px] border-gray-500 rounded-lg mt-5 divide-y-[1px] divide-gray-500 w-1/2">
            <CurrentWeather />
            <AirConditions />
            <TodayForecast />
          </div>
          <div className="mt-5 w-1/2 space-y-5">
            <WeeklyForecast />
            <WeeklyForecast />
            <WeeklyForecast />
            <WeeklyForecast />
            <WeeklyForecast />
          </div>

          {/* <SearchBox props={city} /> */}
          <p>
            {city ? city.latitude : ""} {city ? city.longitude : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
