'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const createError = require('http-errors');

const Song = require('../model/song.js');
const Movie = require('../model/movie.js');

const movieRouter = module.exports = new Router();


movieRouter.post('/api/song/:songID/movie', jsonParser, function(req, res, next){
  Song.findByIdAndAddMovie(req.params.songID, req.body)
  .then( movie => res.json(movie))
  .catch(next);
});

movieRouter.get('/api/movie/:id', function(req, res, next){
  Movie.findById(req.params.id)
  .populate('_song')
  .then(movie => res.json(movie))
  .catch(err => next(createError(404, err.message)));
});

movieRouter.delete('/api/movie/:movieID', function(req, res, next){
  Movie.remove(req.params.id)
  .then(movie => res.json(movie))
  .catch(err => next(createError(404, err.message)));
});
