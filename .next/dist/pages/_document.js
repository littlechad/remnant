'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _JssProvider = require('react-jss/lib/JssProvider');

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _getPageContext = require('../src/getPageContext');

var _getPageContext2 = _interopRequireDefault(_getPageContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fiankurniawan/Projects/matalenta/next/remnant/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      var pageContext = this.props.pageContext;

      return _react2.default.createElement('html', { lang: 'en', dir: 'ltr', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'My page'), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'user-scalable=0, initial-scale=1, ' + 'minimum-scale=1, width=device-width, height=device-height',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement('meta', { name: 'theme-color', content: pageContext.theme.palette.primary[500], __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })));
    }
  }, {
    key: 'helmetHtmlAttrComponents',
    get: function get() {
      return this.props.helmet.htmlAttributes.toComponent();
    }
  }, {
    key: 'helmetBodyAttrComponents',
    get: function get() {
      return this.props.helmet.bodyAttributes.toComponent();
    }

    // should render on <head>

  }, {
    key: 'helmetHeadComponents',
    get: function get() {
      var _this2 = this;

      return (0, _keys2.default)(this.props.helmet).filter(function (el) {
        return el !== 'htmlAttributes' && el !== 'bodyAttributes';
      }).map(function (el) {
        return _this2.props.helmet[el].toComponent();
      });
    }
  }]);

  return MyDocument;
}(_document2.default);

MyDocument.getInitialProps = function (ctx) {
  var pageContext = (0, _getPageContext2.default)();
  var page = ctx.renderPage(function (Component) {
    return function (props) {
      return _react2.default.createElement(_JssProvider2.default, {
        registry: pageContext.sheetsRegistry,
        generateClassName: pageContext.generateClassName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(Component, (0, _extends3.default)({ pageContext: pageContext }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })));
    };
  });

  return (0, _extends3.default)({}, page, {
    pageContext: pageContext,
    styles: _react2.default.createElement('style', {
      id: 'jss-server-side'
      // eslint-disable-next-line react/no-danger
      , dangerouslySetInnerHTML: { __html: pageContext.sheetsRegistry.toString() },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      }
    }),
    helmet: _reactHelmet2.default.renderStatic()
  });
};

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRvY3VtZW50IiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiSGVsbWV0IiwiSnNzUHJvdmlkZXIiLCJnZXRQYWdlQ29udGV4dCIsIk15RG9jdW1lbnQiLCJwYWdlQ29udGV4dCIsInByb3BzIiwidGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsImhlbG1ldCIsImh0bWxBdHRyaWJ1dGVzIiwidG9Db21wb25lbnQiLCJib2R5QXR0cmlidXRlcyIsImZpbHRlciIsImVsIiwibWFwIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicGFnZSIsInJlbmRlclBhZ2UiLCJzaGVldHNSZWdpc3RyeSIsImdlbmVyYXRlQ2xhc3NOYW1lIiwic3R5bGVzIiwiX19odG1sIiwidG9TdHJpbmciLCJyZW5kZXJTdGF0aWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZLEFBQU0sQUFBTTs7OztBQUMvQixBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU8sQUFBb0I7Ozs7Ozs7OztJQUdyQixBOzs7Ozs7Ozs7Ozs2QkFnQks7VUFBQSxBQUNDLGNBQWdCLEtBRGpCLEFBQ3NCLE1BRHRCLEFBQ0MsQUFFUjs7NkJBQ0UsY0FBQSxVQUFNLE1BQU4sQUFBVyxNQUFLLEtBQWhCLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esb0RBQU0sU0FBTixBQUFjO29CQUFkO3NCQUZGLEFBRUUsQUFFQTtBQUZBOztjQUVBLEFBQ08sQUFDTDtpQkFDRSx1Q0FISixBQUlJOztvQkFKSjtzQkFKRixBQUlFLEFBUUE7QUFSQTtBQUNFLGtEQU9JLE1BQU4sQUFBVyxlQUFjLFNBQVMsWUFBQSxBQUFZLE1BQVosQUFBa0IsUUFBbEIsQUFBMEIsUUFBNUQsQUFBa0MsQUFBa0M7b0JBQXBFO3NCQVpGLEFBWUUsQUFDQTtBQURBOzthQUNBLEFBQ00sQUFDSjtjQUZGLEFBRU87O29CQUZQO3NCQWRKLEFBQ0UsQUFhRSxBQUtGO0FBTEU7QUFDRSwyQkFJSixjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQXRCTixBQUNFLEFBbUJFLEFBRUUsQUFJUDtBQUpPO0FBQUE7Ozs7d0JBeEN1QixBQUM3QjthQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixlQUF6QixBQUFPLEFBQWlDLEFBQ3pDOzs7O3dCQUU4QixBQUM3QjthQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixlQUF6QixBQUFPLEFBQWlDLEFBQ3pDO0FBRUQ7Ozs7Ozt3QkFDMkI7bUJBQ3pCOztpQ0FBbUIsS0FBQSxBQUFLLE1BQWpCLEFBQXVCLFFBQXZCLEFBQ0osT0FBTyxjQUFBO2VBQU0sT0FBQSxBQUFPLG9CQUFvQixPQUFqQyxBQUF3QztBQUQzQyxPQUFBLEVBQUEsQUFFSixJQUFJLGNBQUE7ZUFBTSxPQUFBLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsSUFBeEIsQUFBTSxBQUFzQjtBQUZuQyxBQUFPLEFBR1I7Ozs7O0EsQUFkc0I7O0FBZ0R6QixXQUFBLEFBQVcsa0JBQWtCLFVBQUEsQUFBQyxLQUFRLEFBQ3BDO01BQU0sY0FBTixBQUFvQixBQUNwQjtNQUFNLFdBQU8sQUFBSSxXQUFXLHFCQUFBO1dBQWEsaUJBQUE7NkJBQ3ZDLEFBQUM7a0JBQ1csWUFEWixBQUN3QixBQUN0QjsyQkFBbUIsWUFGckIsQUFFaUM7O29CQUZqQztzQkFBQSxBQUlFO0FBSkY7QUFDRSxPQURGLGdDQUlFLEFBQUMsb0NBQVUsYUFBWCxBQUF3QixlQUF4QixBQUF5Qzs7b0JBQXpDO3NCQUxxQyxBQUN2QyxBQUlFO0FBQUE7QUFBQTtBQUx3QjtBQUE1QixBQUFhLEFBU2IsR0FUYTs7b0NBU2IsQUFDSztpQkFETCxBQUdFOztVQUVPLEFBQ0g7QUFGRjtBQUNFLFFBRUEseUJBQXlCLEVBQUUsUUFBUSxZQUFBLEFBQVksZUFIakQsQUFHMkIsQUFBVSxBQUEyQjs7a0JBSGhFO29CQUpKLEFBSUksQUFNRjtBQU5FO0tBQUE7WUFNTSxzQkFWVixBQVVVLEFBQU8sQUFFbEI7QUFWRztBQWJKLEFBeUJBOztrQkFBQSxBQUFlIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmlhbmt1cm5pYXdhbi9Qcm9qZWN0cy9tYXRhbGVudGEvbmV4dC9yZW1uYW50In0=