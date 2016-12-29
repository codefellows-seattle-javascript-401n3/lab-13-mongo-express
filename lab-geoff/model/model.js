'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let albumSchema = Schema({
  title: { type : String, required: true},
  _tracks: [{type: mongoose.Schema.ObjectId, ref: 'Track'}]
});

module.exports = mongoose.model('Album', albumSchema);