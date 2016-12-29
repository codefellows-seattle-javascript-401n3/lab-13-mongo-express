'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let trackSchema = new Schema({
  _album: {type: Schema.Types.ObjectId, ref: 'Album'},
  title: String
});

module.exports = mongoose.model('Track', trackSchema);