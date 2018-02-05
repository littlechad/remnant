'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _fastRedux = require('fast-redux');

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_STATE = {
  name: '',
  open: false,
  title: 'Index title',
  description: 'Index description'
};

var _namespaceConfig = (0, _fastRedux.namespaceConfig)('index', DEFAULT_STATE),
    action = _namespaceConfig.action,
    getIndexState = _namespaceConfig.getState;

var setState = action('setState', function (state, data) {
  console.log(data);
  return (0, _extends3.default)({}, state, {
    open: data
  });
});

var mapStateToProps = function mapStateToProps(state) {
  console.log('state', state);
  return {
    open: getIndexState(state, 'open'),
    title: getIndexState(state, 'title'),
    description: getIndexState(state, 'description')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    handleOpen: function handleOpen() {
      dispatch(setState(true));
    },
    handleClose: function handleClose() {
      dispatch(setState(false));
    }
  }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_component2.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCIsIm5hbWVzcGFjZUNvbmZpZyIsIkluZGV4IiwiREVGQVVMVF9TVEFURSIsIm5hbWUiLCJvcGVuIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImdldEluZGV4U3RhdGUiLCJnZXRTdGF0ZSIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImhhbmRsZU9wZW4iLCJkaXNwYXRjaCIsImhhbmRsZUNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBTyxBQUFXOzs7Ozs7QUFFbEIsSUFBTTtRQUFnQixBQUNkLEFBQ047UUFGb0IsQUFFZCxBQUNOO1NBSG9CLEFBR2IsQUFDUDtlQUpGLEFBQXNCLEFBSVA7QUFKTyxBQUNwQjs7dUJBU0UsZ0NBQUEsQUFBZ0IsU0FBaEIsQUFBeUIsQTtJQUYzQixBLDBCQUFBLEE7SSxBQUNVLGlDLEFBQVY7O0FBR0YsSUFBTSxrQkFBVyxBQUFPLFlBQVksVUFBQSxBQUFDLE9BQUQsQUFBUSxNQUFTLEFBQ25EO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtvQ0FBQSxBQUNLO1VBREwsQUFFUSxBQUVUO0FBRkc7QUFKSixBQUFpQixDQUFBOztBQVFqQixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDakM7VUFBQSxBQUFRLElBQVIsQUFBWSxTQUFaLEFBQXFCLEFBQ3JCOztVQUNRLGNBQUEsQUFBYyxPQURmLEFBQ0MsQUFBcUIsQUFDM0I7V0FBTyxjQUFBLEFBQWMsT0FGaEIsQUFFRSxBQUFxQixBQUM1QjtpQkFBYSxjQUFBLEFBQWMsT0FIN0IsQUFBTyxBQUdRLEFBQXFCLEFBRXJDO0FBTFEsQUFDTDtBQUhKOztBQVNBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFBOztBQUErQixzQ0FDM0MsQUFDWDtlQUFTLFNBQVQsQUFBUyxBQUFTLEFBQ25CO0FBSHVELEFBSXhEO0FBSndELHdDQUkxQyxBQUNaO2VBQVMsU0FBVCxBQUFTLEFBQVMsQUFDbkI7QUFOb0MsQUFBbUI7QUFBQSxBQUN4RCxHQURxQyxFQUFaLEFBQVksQUFPcEM7QUFQSCxBQVNBOztrQkFBZSx5QkFBQSxBQUFRLGlCQUF2QixBQUFlLEFBQXlCLEFBQW9CIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9maWFua3Vybmlhd2FuL1Byb2plY3RzL21hdGFsZW50YS9uZXh0L3JlbW5hbnQifQ==