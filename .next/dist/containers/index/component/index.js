'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('material-ui/styles');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _withRoot = require('../../../src/withRoot');

var _withRoot2 = _interopRequireDefault(_withRoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fiankurniawan/Projects/matalenta/next/remnant/containers/index/component/index.js';


var styles = function styles(theme) {
  return {
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 20
    }
  };
};

var Index = function Index(props) {
  console.log(props);
  var title = props.title,
      description = props.description,
      classes = props.classes,
      open = props.open;

  return _react2.default.createElement('div', { className: classes.root, __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_reactHelmet2.default, {
    title: title.title + ' | Hello next.js!',
    meta: [{ property: 'og:title', content: title.title }, { property: 'og:description', content: description.description }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement(_Dialog2.default, { open: open.open, onClose: function onClose() {
      return props.handleClose();
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement(_Dialog.DialogTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, 'Super Secret Password'), _react2.default.createElement(_Dialog.DialogContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement(_Dialog.DialogContentText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, '1-2-3-4-5')), _react2.default.createElement(_Dialog.DialogActions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement(_Button2.default, { color: 'primary', onClick: function onClick() {
      return props.handleClose();
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, 'OK'))), _react2.default.createElement(_Typography2.default, { variant: 'display1', gutterBottom: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, 'Material-UI'), _react2.default.createElement(_Typography2.default, { variant: 'subheading', gutterBottom: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, 'example project'), _react2.default.createElement(_Button2.default, { variant: 'raised', color: 'secondary', onClick: function onClick() {
      return props.handleOpen();
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, 'Super Secret Password'), _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }), _react2.default.createElement(_link2.default, { href: { pathname: '/about' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, 'About')));
};

Index.propTypes = {
  classes: _propTypes2.default.shape({}).isRequired,
  open: _propTypes2.default.shape({
    open: _propTypes2.default.bool.isRequired
  }).isRequired,
  description: _propTypes2.default.shape({
    description: _propTypes2.default.string.isRequired
  }).isRequired,
  title: _propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired
  }).isRequired,
  handleOpen: _propTypes2.default.func.isRequired,
  handleClose: _propTypes2.default.func.isRequired
};

exports.default = (0, _withRoot2.default)((0, _styles.withStyles)(styles)(Index));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvaW5kZXgvY29tcG9uZW50L2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQnV0dG9uIiwiRGlhbG9nIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nQ29udGVudFRleHQiLCJEaWFsb2dBY3Rpb25zIiwiVHlwb2dyYXBoeSIsIndpdGhTdHlsZXMiLCJMaW5rIiwiSGVsbWV0Iiwid2l0aFJvb3QiLCJzdHlsZXMiLCJyb290IiwidGV4dEFsaWduIiwicGFkZGluZ1RvcCIsInRoZW1lIiwic3BhY2luZyIsInVuaXQiLCJJbmRleCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjbGFzc2VzIiwib3BlbiIsInByb3BlcnR5IiwiY29udGVudCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3BlbiIsInBhdGhuYW1lIiwicHJvcFR5cGVzIiwic2hhcGUiLCJpc1JlcXVpcmVkIiwiYm9vbCIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFDTCxBQUNBLEFBQ0EsQUFDQTs7OztBQUVGLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFjOzs7Ozs7Ozs7QUFFckIsSUFBTSxTQUFTLFNBQVQsQUFBUyxjQUFBOzs7aUJBQ1AsQUFDTyxBQUNYO2tCQUFZLE1BQUEsQUFBTSxRQUFOLEFBQWMsT0FIZixBQUFVLEFBQ2pCLEFBRTZCO0FBRjdCLEFBQ0o7QUFGcUIsQUFDdkI7QUFERjs7QUFPQSxJQUFNLFFBQVEsU0FBUixBQUFRLE1BQUEsQUFBQyxPQUFVLEFBQ3ZCO1VBQUEsQUFBUSxJQURlLEFBQ3ZCLEFBQVk7TUFEVyxBQUdyQixRQUhxQixBQUluQixNQUptQixBQUdyQjtNQUhxQixBQUdkLGNBSGMsQUFJbkIsTUFKbUIsQUFHZDtNQUhjLEFBR0QsVUFIQyxBQUluQixNQUptQixBQUdEO01BSEMsQUFHUSxPQUhSLEFBSW5CLE1BSm1CLEFBR1EsQUFFL0I7O3lCQUNFLGNBQUEsU0FBSyxXQUFXLFFBQWhCLEFBQXdCO2dCQUF4QjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDO1dBQ1csTUFBVixBQUFnQixRQURsQixBQUVFO1VBQU0sQ0FDSixFQUFFLFVBQUYsQUFBWSxZQUFZLFNBQVMsTUFEN0IsQUFDSixBQUF1QyxTQUN2QyxFQUFFLFVBQUYsQUFBWSxrQkFBa0IsU0FBUyxZQUozQyxBQUVRLEFBRUosQUFBbUQ7O2dCQUp2RDtrQkFERixBQUNFLEFBT0E7QUFQQTtBQUNFLHNCQU1GLEFBQUMsa0NBQU8sTUFBTSxLQUFkLEFBQW1CLE1BQU0sU0FBUyxtQkFBQTthQUFNLE1BQU4sQUFBTSxBQUFNO0FBQTlDO2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDOztnQkFBRDtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0EsMENBQUEsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUE7QUFBQTtBQUFBLEtBSEosQUFFRSxBQUNFLEFBRUYsK0JBQUEsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyxrQ0FBTyxPQUFSLEFBQWMsV0FBVSxTQUFTLG1CQUFBO2FBQU0sTUFBTixBQUFNLEFBQU07QUFBN0M7Z0JBQUE7a0JBQUE7QUFBQTtLQWROLEFBUUUsQUFLRSxBQUNFLEFBS0oseUJBQUEsQUFBQyxzQ0FBVyxTQUFaLEFBQW9CLFlBQVcsY0FBL0I7Z0JBQUE7a0JBQUE7QUFBQTtLQW5CRixBQW1CRSxBQUdBLGdDQUFBLEFBQUMsc0NBQVcsU0FBWixBQUFvQixjQUFhLGNBQWpDO2dCQUFBO2tCQUFBO0FBQUE7S0F0QkYsQUFzQkUsQUFHQSxvQ0FBQSxBQUFDLGtDQUFPLFNBQVIsQUFBZ0IsVUFBUyxPQUF6QixBQUErQixhQUFZLFNBQVMsbUJBQUE7YUFBTSxNQUFOLEFBQU0sQUFBTTtBQUFoRTtnQkFBQTtrQkFBQTtBQUFBO0tBekJGLEFBeUJFLEFBRVM7O2dCQUFBO2tCQTNCWCxBQTJCVyxBQUNUO0FBRFM7QUFBQSxzQkFDVCxBQUFDLGdDQUFLLE1BQU0sRUFBRSxVQUFkLEFBQVksQUFBWTtnQkFBeEI7a0JBQUEsQUFBb0M7QUFBcEM7cUJBQW9DLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQTdCeEMsQUFDRSxBQTRCRSxBQUFvQyxBQUd6QztBQXJDRDs7QUF1Q0EsTUFBQSxBQUFNO1dBQ0ssb0JBQUEsQUFBVSxNQUFWLEFBQWdCLElBRFQsQUFDYSxBQUM3Qjs0QkFBTSxBQUFVO1VBQ1Isb0JBQUEsQUFBVSxLQURaLEFBQWdCLEFBQ0M7QUFERCxBQUNwQixHQURJLEVBRlUsQUFJYixBQUNIO21DQUFhLEFBQVU7aUJBQ1Isb0JBQUEsQUFBVSxPQURaLEFBQWdCLEFBQ0c7QUFESCxBQUMzQixHQURXLEVBTEcsQUFPYixBQUNIOzZCQUFPLEFBQVU7V0FDUixvQkFBQSxBQUFVLE9BRFosQUFBZ0IsQUFDRztBQURILEFBQ3JCLEdBREssRUFSUyxBQVViLEFBQ0g7Y0FBWSxvQkFBQSxBQUFVLEtBWE4sQUFXVyxBQUMzQjtlQUFhLG9CQUFBLEFBQVUsS0FaekIsQUFBa0IsQUFZWSxBQUc5QjtBQWZrQixBQUNoQjs7a0JBY2Esd0JBQVMsd0JBQUEsQUFBVyxRQUFuQyxBQUFlLEFBQVMsQUFBbUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZpYW5rdXJuaWF3YW4vUHJvamVjdHMvbWF0YWxlbnRhL25leHQvcmVtbmFudCJ9