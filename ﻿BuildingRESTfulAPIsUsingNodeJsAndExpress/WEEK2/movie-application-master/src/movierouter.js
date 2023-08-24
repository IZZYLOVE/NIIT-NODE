const express = require('express');
const movieController = require('./moviecontroller');

const router = express.Router();

router.get('/', (req, res) => {
  movieController.getMovies((err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json(results);
  });
});

router.get('/:movieId', (req, res) => {
  const movieId = req.params.movieId;
  movieController.getMovieById(movieId, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json(results);
  });
});

router.post('/', (req, res) => {
  const movieDetails = req.body;
  movieController.saveMovieDetails(movieDetails, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(201).json(results);
  });
});

router.patch('/:movieId', (req, res) => {
  const movieId = req.params.movieId;
  const movieDetails = req.body;
  movieController.updateMovieDetails(movieId, movieDetails, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json(results);
  });
});

router.delete('/:movieId', (req, res) => {
  const movieId = req.params.movieId;
  movieController.deleteMovieById(movieId, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(204).json({});
  });
});

module.exports = router;
