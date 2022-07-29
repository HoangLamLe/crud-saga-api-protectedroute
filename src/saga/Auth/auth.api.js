import axios from "axios";
import createAxios from "../../services";
const AUTH_API = {
  register: async (data) => {
    return await axios.post(
      " https://a4ad-118-69-77-229.ap.ngrok.io/v1/auth/register",
      data
    );
  },
  login: async (data) => {
    return await axios.post(
      " https://a4ad-118-69-77-229.ap.ngrok.io/v1/auth/login",
      data
    );
  },
  getMe: async (token) => {
    return await createAxios(token).get("/me");
  },
};
export default AUTH_API;
