import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "",
  timeout: 5000,
  timeoutErrorMessage: "Timeout! try after some time",
});

export default axiosInstance;
