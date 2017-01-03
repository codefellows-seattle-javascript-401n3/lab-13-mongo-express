'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();

const Song = require('../model/song.js');

const movieRouter = module.exports = new Router();


movieRouter.post('/api/song/:songID/movie', jsonParser, function(req, res, next){
  Song.findByIdAndAddMovie(req.params.songID, req.body)
  .then( movie => res.json(movie))
  .catch(next);
});
