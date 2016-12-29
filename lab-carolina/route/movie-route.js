'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const createError = require('http-errors');

const Movie = require('../model/movie.js');

const movieRouter = module.exports = new Router();

movieRouter.post('/api/movie', jsonParser, function(req, res, next){
  new Movie(req.body).save()
  .then(movie => res.json(movie))
  .catch(next);
});

movieRouter.get('/api/movie/:id', function(req, res, next){
  Movie.findById(req.params.id)
  .populate('song')
  .then(movie => res.json(movie))
  .catch(err => next(createError(404, err.message)));
});

movieRouter.put('/api/movie/:id', jsonParser, function(req, res, next){
  Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then( movie => res.json(movie))
  .catch(err => {
    if(err.name === 'ValidationError') return next(err);
    next(createError(404, err.message));
  });
});

movieRouter.delete('/api/movie/:id', function(req, res, next){
  Movie.findByIdAndRemove(req.params.id)
  .then( () => res.status(204).send())
  .catch(err => next(createError(404, err.message)));
});
