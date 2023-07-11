import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://api.stlouisfed.org/fred",
  params: { api_key: import.meta.env.VITE_API_KEY, file_type: "json" },
});
