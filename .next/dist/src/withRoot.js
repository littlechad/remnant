'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _Reboot = require('material-ui/Reboot');

var _Reboot2 = _interopRequireDefault(_Reboot);

var _getPageContext = require('./getPageContext');

var _getPageContext2 = _interopRequireDefault(_getPageContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fiankurniawan/Projects/matalenta/next/remnant/src/withRoot.js';


function withRoot(Component) {
  var WithRoot = function (_React$Component) {
    (0, _inherits3.default)(WithRoot, _React$Component);

    function WithRoot() {
      (0, _classCallCheck3.default)(this, WithRoot);

      return (0, _possibleConstructorReturn3.default)(this, (WithRoot.__proto__ || (0, _getPrototypeOf2.default)(WithRoot)).apply(this, arguments));
    }

    (0, _createClass3.default)(WithRoot, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.pageContext = this.props.pageContext || (0, _getPageContext2.default)();
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _pageContext = this.pageContext,
            theme = _pageContext.theme,
            sheetsManager = _pageContext.sheetsManager;

        return _react2.default.createElement(_styles.MuiThemeProvider, {
          theme: theme,
          sheetsManager: sheetsManager,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, _react2.default.createElement(_Reboot2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }), _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        })));
      }
    }]);

    return WithRoot;
  }(_react2.default.Component);

  WithRoot.defaultProps = {
    pageContext: {}
  };

  WithRoot.propTypes = {
    pageContext: _propTypes2.default.shape({})
  };

  WithRoot.getInitialProps = function (ctx) {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

exports.default = withRoot;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy93aXRoUm9vdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIk11aVRoZW1lUHJvdmlkZXIiLCJSZWJvb3QiLCJnZXRQYWdlQ29udGV4dCIsIndpdGhSb290IiwiQ29tcG9uZW50IiwiV2l0aFJvb3QiLCJwYWdlQ29udGV4dCIsInByb3BzIiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidGhlbWUiLCJzaGVldHNNYW5hZ2VyIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic2hhcGUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFvQjs7Ozs7Ozs7O0FBRTNCLFNBQUEsQUFBUyxTQUFULEFBQWtCLFdBQVc7TUFBQSxBQUNyQix1Q0FEcUI7c0NBQUE7O3dCQUFBOzBDQUFBOzt3SUFBQTtBQUFBOzs7V0FBQTsyQ0FFSixBQUNuQjthQUFBLEFBQUssY0FBYyxLQUFBLEFBQUssTUFBTCxBQUFXLGVBQTlCLEFBQTZDLEFBQzlDO0FBSndCO0FBQUE7V0FBQTswQ0FNTCxBQUNsQjtZQUFNLFlBQVksU0FBQSxBQUFTLGNBQTNCLEFBQWtCLEFBQXVCLEFBQ3pDO1lBQUksYUFBYSxVQUFqQixBQUEyQixZQUFZLEFBQ3JDO29CQUFBLEFBQVUsV0FBVixBQUFxQixZQUFyQixBQUFpQyxBQUNsQztBQUNGO0FBWHdCO0FBQUE7V0FBQTsrQkFhaEI7MkJBQzBCLEtBRDFCLEFBQytCO1lBRC9CLEFBQ0MscUJBREQsQUFDQztZQURELEFBQ1EsNkJBRFIsQUFDUSxBQUNmOzsrQkFDRSxBQUFDO2lCQUFELEFBQ1MsQUFDUDt5QkFGRixBQUVpQjs7c0JBRmpCO3dCQUFBLEFBSUU7QUFKRjtBQUNFLFNBREYsa0JBSUUsQUFBQzs7c0JBQUQ7d0JBSkYsQUFJRSxBQUNBO0FBREE7QUFBQSwwQ0FDQSxBQUFDLHNDQUFjLEtBQWYsQUFBb0I7O3NCQUFwQjt3QkFOSixBQUNFLEFBS0UsQUFHTDtBQUhLO0FBQUE7QUFyQm1CO0FBQUE7O1dBQUE7SUFDSixnQkFESSxBQUNFLEFBMEI3Qjs7V0FBQSxBQUFTO2lCQUFULEFBQXdCLEFBQ1QsQUFHZjtBQUp3QixBQUN0Qjs7V0FHRixBQUFTO2lCQUNNLG9CQUFBLEFBQVUsTUFEekIsQUFBcUIsQUFDTixBQUFnQixBQUcvQjtBQUpxQixBQUNuQjs7V0FHRixBQUFTLGtCQUFrQixVQUFBLEFBQUMsS0FBUSxBQUNsQztRQUFJLFVBQUosQUFBYyxpQkFBaUIsQUFDN0I7YUFBTyxVQUFBLEFBQVUsZ0JBQWpCLEFBQU8sQUFBMEIsQUFDbEM7QUFFRDs7V0FBQSxBQUFPLEFBQ1I7QUFORCxBQVFBOztTQUFBLEFBQU8sQUFDUjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndpdGhSb290LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9maWFua3Vybmlhd2FuL1Byb2plY3RzL21hdGFsZW50YS9uZXh0L3JlbW5hbnQifQ==