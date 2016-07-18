'use strict';

// message-model.js - A just a generic object literal model

const messageModel = {
  text: {type: String, required: true, index: true}
};

module.exports = messageModel;
