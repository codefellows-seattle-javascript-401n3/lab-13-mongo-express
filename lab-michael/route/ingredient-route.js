'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();

const Recipe = require('../model/recipe.js');
const Ingredient = require('../model/ingredients.js');

const ingredientsRouter = module.exports = new Router();

ingredientsRouter.post('/recipe/:id/ingredients', jsonParser, function(req, res, next){
  let newIngredient;
  new Ingredient(req.body).save()
  .then(ingredients => {
    newIngredient = ingredients;
    return Recipe.findById(req.params.id);
  })
  .then(recipe => {
    recipe._ingredients.push(newIngredient._id);
    return recipe.save();
  })
  .then(newIngredient => res.send(newIngredient))
  .catch(err => next(err));
});

ingredientsRouter.get('/ingredients/:id', function(req, res, next){
  Ingredient.findById(req.params.id)
  .then(ingredient => res.send(ingredient))
     .catch(err => next(err));
});

ingredientsRouter.get('/ingredients', function(req, res, next){
  Ingredient.find().exists('_id')
    .then(recipe => res.json(recipe))
    .catch(err => next(err));
});
ingredientsRouter.put('/ingredients/:id', jsonParser, function(req, res, next){
  Ingredient.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then( recipe => res.json(recipe))
  .catch(err => next(err));
});