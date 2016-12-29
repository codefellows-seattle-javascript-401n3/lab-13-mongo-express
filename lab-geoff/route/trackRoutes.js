'use strict';

let jsonParser = require('body-parser').json();
let Router = require('express').Router;

let Album = require('../model/model.js');
let Track = require('../model/track.js');
let router = new Router();

router.post('/api/albums/:id/tracks', jsonParser, (req, res, next) => {
  Album.findById(req.params.id)
  .then(album => {
    let title = req.body.title;
    new Track({_album: album._id, title: title}).save()
    .then(track => {
      res.json(track);
    })
    .catch(next);
  })
  .catch(next);
});
router.get('/api/tracks/:id', jsonParser, (req, res, next) => {
  Track.findById(req.params.id)
  .populate('_album')
  .exec((err, track) => {
    if(err) return console.Error(err);
    console.log(track);
    res.json(track);
  });
});

module.exports = router;