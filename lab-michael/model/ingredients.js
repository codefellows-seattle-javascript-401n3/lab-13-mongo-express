'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ingredientsSchema = Schema ({
  _recipeID: {type:Schema.Types.ObjectId, ref: 'recipe'},
  mealType: {type: String},
  directions: {type: String},
  origin: {type: String},
});

module.exports = mongoose.model('ingredients', ingredientsSchema);
