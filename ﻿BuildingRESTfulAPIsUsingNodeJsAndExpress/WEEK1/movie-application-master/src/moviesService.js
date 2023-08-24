const axios = require('axios');

const BASE_URL = 'http://localhost:5000'; // Assuming your server is running locally

const getMovies = async (done) => {
  try {
    const response = await axios.get(`${BASE_URL}/movies`);
    done(null, response.data);
  } catch (error) {
    done(error);
  }
};

const getMoviesById = async (movieId, done) => {
  try {
    const response = await axios.get(`${BASE_URL}/movies/${movieId}`);
    done(null, response.data);
  } catch (error) {
    done(error);
  }
};

const saveMovie = async (newMovie, done) => {
  try {
    const response = await axios.post(`${BASE_URL}/movies`, newMovie);
    done(null, response.data);
  } catch (error) {
    done(error);
  }
};

const updateMovie = async (movieId, updateData, done) => {
  try {
    const response = await axios.put(`${BASE_URL}/movies/${movieId}`, updateData);
    done(null, response.data);
  } catch (error) {
    done(error);
  }
};

const deleteMovieById = async (movieId, done) => {
  try {
    const response = await axios.delete(`${BASE_URL}/movies/${movieId}`);
    done(null, response.data);
  } catch (error) {
    done(error);
  }
};

module.exports = {
  getMovies,
  getMoviesById,
  saveMovie,
  updateMovie,
  deleteMovieById
};
