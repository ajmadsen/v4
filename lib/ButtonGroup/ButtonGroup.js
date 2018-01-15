'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _buttonGroup = require('bootstrap-styled-mixins/lib/buttonGroup');

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ButtonGroup
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ButtonGroupUnstyled = function (_React$Component) {
  _inherits(ButtonGroupUnstyled, _React$Component);

  function ButtonGroupUnstyled() {
    _classCallCheck(this, ButtonGroupUnstyled);

    return _possibleConstructorReturn(this, (ButtonGroupUnstyled.__proto__ || Object.getPrototypeOf(ButtonGroupUnstyled)).apply(this, arguments));
  }

  _createClass(ButtonGroupUnstyled, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          size = _omit.size,
          vertical = _omit.vertical,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'size', 'vertical', 'tag']);

      return _react2.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, vertical ? 'btn-group-vertical' : 'btn-group', _defineProperty({}, 'btn-group-' + size, size)), cssModule)
      }, attributes));
    }
  }]);

  return ButtonGroupUnstyled;
}(_react2.default.Component);

ButtonGroupUnstyled.defaultProps = {
  role: 'group',
  tag: 'div',
  theme: (0, _theme.makeTheme)()
};
ButtonGroupUnstyled.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  size: _propTypes2.default.string,
  vertical: _propTypes2.default.bool,
  theme: _propTypes2.default.object
  /* eslint-enable react/no-unused-prop-types */
};


var ButtonGroup = (0, _styledComponents2.default)(ButtonGroupUnstyled).withConfig({
  displayName: 'ButtonGroup'
})(['', '  '], function (props) {
  return '\n    ' + (0, _buttonGroup.buttonGroup)(props.theme['$enable-shadows'], props.theme['$enable-rounded'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-active-box-shadow'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm']) + '\n  ';
});

exports.default = ButtonGroup;
module.exports = exports['default'];