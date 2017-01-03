'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = Schema({
  title: {type: String, require: true},
  genre: {type: String, require: true},
  songID: {type: Schema.Types.ObjectId, requird: true},
});

module.exports = mongoose.model('movie', movieSchema);
