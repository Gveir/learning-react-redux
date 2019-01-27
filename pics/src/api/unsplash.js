import axios from "axios";

// const unsplashCredentials = {
//   clientId: "Access Key from unsplash.com dev app here"
// };
import unsplashCredentials from "../unsplashCredentials";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${unsplashCredentials.clientId}`
  }
});
