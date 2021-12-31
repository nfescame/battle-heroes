import axios from "axios";

// https://akabab.github.io/superhero-api/api/id/2.json
const api = axios.create({
  baseURL: "https://akabab.github.io/superhero-api/api",
});

export { api };
