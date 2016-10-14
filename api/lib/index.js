'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {Type}
 * @return {Type}
 */
exports.default = function (event, context) {
  return _bluebird2.default.resolve({
    event: event,
    context: context
  });
};