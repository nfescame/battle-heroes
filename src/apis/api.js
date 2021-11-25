import axios from "axios";

const api = axios.create({
  // api original fornecida pela azapfy
  // https://cors-anywhere.herokuapp.com/http://homologacao3.azapfy.com.br/api/ps/metahumans

  baseURL: "https://akabab.github.io/superhero-api/api/all.json",
});

export default api;
