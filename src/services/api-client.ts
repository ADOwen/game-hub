import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: 'e62237836211468ea1a203161c93a905'
  }
});

