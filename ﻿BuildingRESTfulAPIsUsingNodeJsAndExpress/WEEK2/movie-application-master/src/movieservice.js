const axios = require('axios');

const getMovies = (done) => {
  axios.get('http://localhost:3000/movies')
    .then(response => done(null, response.data))
    .catch(error => done(error));
};

const getMovieById = (movieId, done) => {
  axios.get(`http://localhost:3000/movies/${movieId}`)
    .then(response => done(null, response.data))
    .catch(error => done(error));
};

const saveMovieDetails = (movieDetails, done) => {
  axios.post('http://localhost:3000/movies', movieDetails)
    .then(response => done(null, response.data))
    .catch(error => done(error));
};

const updateMovieDetails = (movieId, movieDetails, done) => {
  axios.patch(`http://localhost:3000/movies/${movieId}`, movieDetails)
    .then(response => done(null, response.data))
    .catch(error => done(error));
};

const deleteMovieById = (movieId, done) => {
  axios.delete(`http://localhost:3000/movies/${movieId}`)
    .then(response => done(null, response.data))
    .catch(error => done(error));
};

module.exports = {
  getMovies, getMovieById, saveMovieDetails, deleteMovieById, updateMovieDetails
};
