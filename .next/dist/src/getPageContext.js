'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPageContext;

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _jss = require('jss');

var _styles = require('material-ui/styles');

var _purple = require('material-ui/colors/purple');

var _purple2 = _interopRequireDefault(_purple);

var _green = require('material-ui/colors/green');

var _green2 = _interopRequireDefault(_green);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle */
var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      light: _purple2.default[300],
      main: _purple2.default[500],
      dark: _purple2.default[700]
    },
    secondary: {
      light: _green2.default[300],
      main: _green2.default[500],
      dark: _green2.default[700]
    }
  }
});

function createPageContext() {
  return {
    theme: theme,
    sheetsManager: new _map2.default(),
    sheetsRegistry: new _jss.SheetsRegistry(),
    generateClassName: (0, _styles.createGenerateClassName)()
  };
}

function getPageContext() {
  if (!process.browser) {
    return createPageContext();
  }
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nZXRQYWdlQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJTaGVldHNSZWdpc3RyeSIsImNyZWF0ZU11aVRoZW1lIiwiY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUiLCJwdXJwbGUiLCJncmVlbiIsInRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJsaWdodCIsIm1haW4iLCJkYXJrIiwic2Vjb25kYXJ5IiwiY3JlYXRlUGFnZUNvbnRleHQiLCJzaGVldHNNYW5hZ2VyIiwic2hlZXRzUmVnaXN0cnkiLCJnZW5lcmF0ZUNsYXNzTmFtZSIsImdldFBhZ2VDb250ZXh0IiwicHJvY2VzcyIsImJyb3dzZXIiLCJnbG9iYWwiLCJfX0lOSVRfTUFURVJJQUxfVUlfXyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxBQUFTOztBQUNULEFBQVMsQUFBZ0I7O0FBQ3pCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7QUFKUDtBQU1BLElBQU07OzthQUdPLGlCQURBLEFBQ0EsQUFBTyxBQUNkO1lBQU0saUJBRkMsQUFFRCxBQUFPLEFBQ2I7WUFBTSxpQkFKRCxBQUNFLEFBR0QsQUFBTyxBQUVmO0FBTFMsQUFDUDs7YUFLTyxnQkFERSxBQUNGLEFBQU0sQUFDYjtZQUFNLGdCQUZHLEFBRUgsQUFBTSxBQUNaO1lBQU0sZ0JBVlosQUFBYyxBQUFlLEFBQ2xCLEFBTUksQUFHSCxBQUFNO0FBSEgsQUFDVDtBQVBLLEFBQ1A7QUFGeUIsQUFDM0IsQ0FEWTs7QUFlZCxTQUFBLEFBQVMsb0JBQW9CLEFBQzNCOztXQUFPLEFBRUw7bUJBRkssQUFFVSxBQUNmO29CQUhLLEFBR1csQUFBSSxBQUNwQjt1QkFKRixBQUFPLEFBSWMsQUFFdEI7QUFOUSxBQUNMO0FBT0o7O0FBQWUsU0FBQSxBQUFTLGlCQUFpQixBQUN2QztNQUFJLENBQUMsUUFBTCxBQUFhLFNBQVMsQUFDcEI7V0FBQSxBQUFPLEFBQ1I7QUFDRDtNQUFJLENBQUMsT0FBTCxBQUFZLHNCQUFzQixBQUNoQztXQUFBLEFBQU8sdUJBQVAsQUFBOEIsQUFDL0I7QUFFRDs7U0FBTyxPQUFQLEFBQWMsQUFDZiIsImZpbGUiOiJnZXRQYWdlQ29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmlhbmt1cm5pYXdhbi9Qcm9qZWN0cy9tYXRhbGVudGEvbmV4dC9yZW1uYW50In0=