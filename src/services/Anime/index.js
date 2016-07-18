'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'Animes.db'),
    autoload: true
  });

  let options = {
    Model: db,
    paginate: {
      default: 15,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/Animes', service(options));

  // Get our initialize service to that we can bind hooks
  const AnimeService = app.service('/Animes');

  // Set up our before hooks
  AnimeService.before(hooks.before);

  // Set up our after hooks
  AnimeService.after(hooks.after);
};
