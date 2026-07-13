import axios from "axios";

const api = axios.create({
  baseURL: "https://ap-eamcet.onrender.com/api",
});

export default api;