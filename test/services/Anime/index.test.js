'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('Anime service', function() {
  it('registered the Animes service', () => {
    assert.ok(app.service('Animes'));
  });
});
