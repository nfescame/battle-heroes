import axios from "axios";

const api = axios.create({
  // api fornecida pela azapfy
  // http://cors-anywhere.herokuapp.com/http://homologacao3.azapfy.com.br/api/ps/metahumans

  //api original
  // https://akabab.github.io/superhero-api/api/all.json

  baseURL: "https://akabab.github.io/superhero-api/api/all.json",
});

export default api;
