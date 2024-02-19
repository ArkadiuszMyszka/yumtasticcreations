import axios from "axios";

export const privateApi = axios.create({
  baseURL: process.env.DB_HOST,
});
