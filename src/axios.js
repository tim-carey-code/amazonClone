import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-e302f/us-central1/api", //The API (cloud function) URL
});

export default instance;
