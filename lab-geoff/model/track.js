'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let trackSchema = new Schema({
  title: String,
  _album: {type: mongoose.Schema.ObjectId, ref: 'Album'}
});

module.exports = mongoose.model('track', trackSchema);