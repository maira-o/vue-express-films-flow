// client/src/services/FilmService.js

import axios from "axios"

export default {
  async getFilms() {
    let res = await axios.get("http://localhost:8000/films");
    return res.data;
  },
  async getFilmSingle(filmId) {
    let res = await axios.get("http://localhost:8000/films/" + filmId);
    return res.data;
  }
}
