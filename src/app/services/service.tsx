// import axios from "axios";
// export const loginRequest = async (lat: number, lon: number, appid: string) => {
//   const result = {
//     status: "",
//     data: {},
//   };
//   try {
//     const response = await axios.get(`${process.env.VITE_ENDPOINT}`, {
//       lat,
//       lon,
//       appid,
//     });

//     return { ...result, status: response.status, data: response.data };
//   } catch (error: any) {
//     console.error("Login error:" + error.response.data);
//     return {
//       ...result,
//       status: error.response.status,
//       data: error.response.data,
//     };
//   }
// };
