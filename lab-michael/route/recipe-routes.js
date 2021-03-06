const Router = require('express').Router;
const jsonParser = require('body-parser').json();

let Recipe = require('../model/recipe');
let recipeRouter = module.exports = new Router();

recipeRouter.post('/recipe', jsonParser, (req, res, next) => {
  req.body.createDate = new Date();
  new Recipe(req.body).save()
    .then(recipe => res.json(recipe))
    .catch(next);
});

recipeRouter.get('/recipe/:id', (req, res, next) => {
  Recipe.findById(req.params.id)
  .populate('ingredients')
    .then(recipe => res.json(recipe))
    .catch(next);
});
recipeRouter.get('/recipe', (req, res, next) => {
  Recipe.find().exists('_id')
    .then(recipe => res.json(recipe))
    .catch(next);
});

recipeRouter.put('/recipe/:id', jsonParser, (req, res, next) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body)
    .then(recipe => res.json(recipe))
    .catch(next);
});

recipeRouter.delete('recipe/:id',(req, res, next) => {
  Recipe.remove(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(next);
});

