const http = require('http');
const moviesService = require('./moviesService');
const getRequestData = require('./utils');

const PORT = 5000;

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/movies') {
    moviesService.getMovies((err, results) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(results));
      }
    });
  } else if (req.method === 'GET' && req.url.match(/\/movies\/(\d+)/)) {
    const movieId = parseInt(req.url.split('/')[2]);
    moviesService.getMoviesById(movieId, (err, results) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(results));
      }
    });
  } else if (req.method === 'POST' && req.url === '/movies') {
    getRequestData(req)
      .then((requestData) => {
        const newMovie = JSON.parse(requestData);
        moviesService.saveMovie(newMovie, (err, results) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
          } else {
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(results));
          }
        });
      })
      .catch((error) => {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Bad Request' }));
      });
  } else if (req.method === 'PUT' && req.url.match(/\/movies\/(\d+)/)) {
    const movieId = parseInt(req.url.split('/')[2]);
    getRequestData(req)
      .then((requestData) => {
        const updateData = JSON.parse(requestData);
        moviesService.updateMovie(movieId, updateData, (err, results) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
          } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(results));
          }
        });
      })
      .catch((error) => {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Bad Request' }));
      });
  } else if (req.method === 'DELETE' && req.url.match(/\/movies\/(\d+)/)) {
    const movieId = parseInt(req.url.split('/')[2]);
    moviesService.deleteMovieById(movieId, (err, results) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(results));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log('Port already in use');
  }
});
