import axios from "axios";

const entriesAppi = axios.create({
  baseURL: "/api",
});

export default entriesAppi;
