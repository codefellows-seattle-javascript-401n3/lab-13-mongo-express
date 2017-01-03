'use strict';

// const uuid = require('node-uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createError = require('http-errors');

const Movie = require('./movie.js');

const songSchema = Schema({
  title: {type: String, required: true},
  artist: {type: String, required: true},
  movieID: [{type: Schema.Types.ObjectId, ref: 'movie'}],
});

const Song = module.exports = mongoose.model('song', songSchema);

Song.findByIdAndAddMovie = function(id, movie){
  return Song.findById(id)
  .catch(err => Promise.reject(createError(404, err.message)))
  .then(song => {
    movie.songID = song._id;
    this.tempSong = song;
    return new Movie(movie).save();
  })
  .then( movie => {
    this.tempSong.movieID.push(movie._id);
    this.tempMovie = movie;
    return this.tempSong.save();
  })
  .then ( () => {
    return this.tempMovie;
  });
};
