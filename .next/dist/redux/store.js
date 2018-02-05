'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.initStore = undefined;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _fastRedux = require('fast-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _redux.createStore)(_fastRedux.rootReducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};

var store = exports.store = function store(comp) {
  return (0, _nextReduxWrapper2.default)(initStore)(comp);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L3N0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwiaW5pdFN0b3JlIiwiaW5pdGlhbFN0YXRlIiwic3RvcmUiLCJjb21wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBUyxBQUFULEFBQXNCLEFBQXRCOztBQUNBLEFBQVMsQUFBVDs7QUFDQSxBQUFPLEFBQVA7Ozs7QUFDQSxBQUFPLEFBQVA7Ozs7QUFDQSxBQUFTLEFBQVQsQUFFQTs7OztBQUFPLElBQU0sZ0NBQVksU0FBWixBQUFZLFlBQUE7TUFBQyxBQUFELG1GQUFnQixBQUFoQjtTQUF1QixBQUM5QyxBQUQ4QyxnREFFOUMsQUFGOEMsY0FHOUMsaURBQW9CLEFBQWdCLEFBQWhCLEFBQXBCLEFBSDhDLEFBQXZCO0FBQWxCLEFBTVA7O0FBQU8sSUFBTSx3QkFBUSxTQUFSLEFBQVEsWUFBQTtTQUFRLGdDQUFVLEFBQVYsV0FBcUIsQUFBckIsQUFBUjtBQUFkIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9maWFua3Vybmlhd2FuL1Byb2plY3RzL21hdGFsZW50YS9uZXh0L3JlbW5hbnQifQ==