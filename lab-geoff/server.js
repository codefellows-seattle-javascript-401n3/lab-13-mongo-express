'use strict';

let express = require('express');
let mongoose = require('mongoose');

let MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/labTest'; //was albums
mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);

let app = express();

let albumRouter = require('./route/albumRoutes.js');
let trackRouter = require('./route/trackRoutes.js');
app.use(albumRouter);
app.use(trackRouter);

module.exports = app;

// app.listen(PORT, () => {
//   console.log(`Server on ${PORT}`);
// });