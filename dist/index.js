'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = classify;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function classify() {
  return (0, _lodash2.default)(arguments).map(function (arg) {
    if (_lodash2.default.isPlainObject(arg)) {
      arg = _lodash2.default.map(arg, function (test, name) {
        return test ? name : null;
      });
    }
    return arg;
  }).flatten().without(null).join(' ');
}
