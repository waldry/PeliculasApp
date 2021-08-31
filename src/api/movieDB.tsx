import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'ae6589d258d7ef82ad91db6fd830f440',
    language: 'es-ES',
  },
});

export default movieDB;
