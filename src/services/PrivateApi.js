import axios from "axios";

const privateApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default privateApi;

// import axios from "axios";

// export const api = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL });

// export const privateApi = (token) => {
//   try {
//     api.defaults.headers.common["Authorization"] = `Barer${token}`;
//     return api;
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default privateApi;
