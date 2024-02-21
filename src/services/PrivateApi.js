import axios from "axios";

const privateApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default privateApi;
