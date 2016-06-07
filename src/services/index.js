'use strict';
const message = require('./message');
const anime = require('./Anime');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(anime);
  app.configure(message);
};
