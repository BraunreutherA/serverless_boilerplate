'use strict'; // eslint-disable-line strict

const handle = require('./lib').default;

module.exports.hello = (event, context, callback) => {
  handle(event, context)
    .then(response => callback(null, response))
    .catch(error => callback(error));
};
