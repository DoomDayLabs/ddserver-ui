webpackJsonp([0],{

/***/ 100:
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./src/device/device-manager.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _deviceConf = __webpack_require__(/*! ./device-conf */ 52);

var _deviceConf2 = _interopRequireDefault(_deviceConf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Trigger = function Trigger(def, UID) {
    _classCallCheck(this, Trigger);

    var stateSubs = [];
    var adef = _extends({ UID: UID }, def);
    var state = {
        enabled: true
    };
    var notify = function notify() {
        stateSubs.forEach(function (s) {
            return s(state);
        });
    };

    this.def = function () {
        return _extends({}, adef);
    };
    this.call = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        console.log('Call ' + adef.name + ' with', args);
    };
    this.onState = function (callback) {
        stateSubs.push(callback);
    };
    this.enable = function () {
        state.enabled = true;
        notify();
    };
    this.disable = function () {
        state.enabled = false;
        notify();
    };
};

var Sensor = function () {
    function Sensor(sensorDef, value, UID) {
        _classCallCheck(this, Sensor);

        this.sensorDef = _extends({ UID: UID }, sensorDef);
        this.value = value;
        this.subs = [];
    }

    _createClass(Sensor, [{
        key: 'sub',
        value: function sub(fn) {
            this.subs.push(fn);
        }
    }, {
        key: 'def',
        value: function def() {
            return _extends({}, this.sensorDef);
        }
    }, {
        key: 'put',
        value: function put(value) {
            var _this = this;

            this.value = value;
            this.subs.forEach(function (s) {
                return s(value, _this.sensorDef.UID);
            });
        }
    }]);

    return Sensor;
}();

var sensors = new Map();
var triggers = new Map();

_deviceConf2.default.devices.forEach(function (d) {
    return addDevice(d);
});

var val = 0;
var inc = 1;
setInterval(function () {
    sensors.get('device1.sensor1').put(val += inc);
    if (val == 100) {
        inc = -1;
    }
    if (val == 0) {
        inc = 1;
    }
}, 100);

function addDevice(device) {
    (device.sensors || []).forEach(function (s) {
        var UID = device.name + '.' + s.name;
        sensors.set(UID, new Sensor(s, 0, UID));
    });
    (device.triggers || []).forEach(function (t) {
        var UID = device.name + '.' + t.name;
        triggers.set(UID, new Trigger(t, UID));
    });
}

function getSensor(name) {
    return sensors.get(name) || null;
}

function getTrigger(name) {
    return triggers.get(name) || null;
}

exports.default = {
    addDevice: addDevice,
    getSensor: getSensor,
    getTrigger: getTrigger
};

/***/ }),

/***/ 101:
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./~/classnames/index.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 102:
/* no static exports found */
/* all exports used */
/*!***************************************!*\
  !*** ./~/create-react-class/index.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var React = __webpack_require__(/*! react */ 10);
var factory = __webpack_require__(/*! ./factory */ 53);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),

/***/ 103:
/* no static exports found */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/css-loader!./src/css/default-widget.css ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 54)(undefined);
// imports


// module
exports.push([module.i, ".widget .content{\n    position: relative;\n}\n.sensor.sensor-val .options{\n    display:flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-content: stretch;\n}\n.sensor.sensor-val .options .option{\n    border-radius: 100px;\n    \n    padding: 0.1em 0.5em;\n    border:1px dotted black;    \n}\n\n.sensor.sensor-val .options .option:before{\n    content: '\\25FB\\FE0E'\n}\n\n.sensor.sensor-val .options .option.active{\n    border-color:green;\n    background-color: aquamarine;\n}\n\n.sensor.sensor-val .options .option.active:before{\n    content: '\\2611\\FE0E'\n}\n\n.sensor.sensor-flag .flags{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-content: stretch;\n}\n\n.sensor.sensor-flag .flags .flag{\n    border-radius: 100px;\n    \n    padding: 0.1em 0.5em;\n    border:1px dotted black;\n}\n\n.sensor.sensor-flag .flags .flag:before{\n    content:'\\25FB\\FE0E';\n}\n\n.sensor.sensor-flag .flags .flag.active{\n    border-color:green;\n    background-color: aquamarine;\n}\n\n.sensor.sensor-flag .flags .flag.active:before{\n    content:'\\2611\\FE0E';\n}\n\n.widget .content .trigger-param-pane{\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    background-color: cornflowerblue;\n    height: 0%;\n    transition:height 100ms 100ms linear;\n    overflow: hidden;\n}\n\n.widget .content .trigger-param-pane.active{\n    height: 100%;\n}\n.trigger-parampane-view{\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n}\n\n.trigger-parampane-view>.content{\n    flex-grow: 1;\n}\n.trigger-parampane-view>.actions{\n    display: inline-flex;\n    justify-content: space-around;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 104:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/css-loader!./src/css/layout.css ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 54)(undefined);
// imports


// module
exports.push([module.i, "html,body,root{\n    margin: 0px;\n    padding: 0px;\n}\n\n.appbar{\n    padding: 0px 1em;\n    background-color: cornflowerblue;\n}\n.appbar h1{\n    padding: 0px;\n    margin: 0px;\n}\n.dashboard{\n    display: flex;\n}\n\n.dashboard .widget{\n    display: inline-block;\n    width: 300px;\n    min-height: 10px;\n    border: 1px dashed black;\n    margin:5px;\n}\n\n.widget .header .btnConfig{\n    float:right;\n}\n\n\n.progress{\n    display: block;\n    height: 10px;\n    position: relative;\n    border:1px solid gray;\n    margin: 0px 0px;\n}\n\n.progress>.bar{\n    display: block;\n    position: absolute;\n    top:0px;\n    left: 0px;\n    height: 100%;\n    background-color: orangered;\n    transition:width 90ms 0ms ease;\n}\n\n.widget .actions{\n    display: flex;\n    justify-content: space-around;\n    align-items: stretch;\n}", ""]);

// exports


/***/ }),

/***/ 120:
/* no static exports found */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/prop-types/factoryWithThrowingShims.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ 8);
var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 1);
var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 35);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 121:
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./~/prop-types/index.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ 59)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ 120)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../process/browser.js */ 0)))

/***/ }),

/***/ 192:
/* no static exports found */
/* all exports used */
/*!****************************************!*\
  !*** ./~/react-slider/react-slider.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ 10),__webpack_require__(/*! prop-types */ 121),__webpack_require__(/*! create-react-class */ 102)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory(require('react'),require('prop-types'),require('create-react-class'));
  } else {
    root.ReactSlider = factory(root.React,root.PropTypes,root.createReactClass);
  }
}(this, function (React, PropTypes, createReactClass) {

  /**
   * To prevent text selection while dragging.
   * http://stackoverflow.com/questions/5429827/how-can-i-prevent-text-element-selection-with-cursor-drag
   */
  function pauseEvent(e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    return false;
  }

  function stopPropagation(e) {
    if (e.stopPropagation) e.stopPropagation();
  }

  /**
   * Spreads `count` values equally between `min` and `max`.
   */
  function linspace(min, max, count) {
    var range = (max - min) / (count - 1);
    var res = [];
    for (var i = 0; i < count; i++) {
      res.push(min + range * i);
    }
    return res;
  }

  function ensureArray(x) {
    return x == null ? [] : Array.isArray(x) ? x : [x];
  }

  function undoEnsureArray(x) {
    return x != null && x.length === 1 ? x[0] : x;
  }

  // undoEnsureArray(ensureArray(x)) === x

  var ReactSlider = createReactClass({
    displayName: 'ReactSlider',

    propTypes: {

      /**
       * The minimum value of the slider.
       */
      min: PropTypes.number,

      /**
       * The maximum value of the slider.
       */
      max: PropTypes.number,

      /**
       * Value to be added or subtracted on each step the slider makes.
       * Must be greater than zero.
       * `max - min` should be evenly divisible by the step value.
       */
      step: PropTypes.number,

      /**
       * The minimal distance between any pair of handles.
       * Must be positive, but zero means they can sit on top of each other.
       */
      minDistance: PropTypes.number,

      /**
       * Determines the initial positions of the handles and the number of handles if the component has no children.
       *
       * If a number is passed a slider with one handle will be rendered.
       * If an array is passed each value will determine the position of one handle.
       * The values in the array must be sorted.
       * If the component has children, the length of the array must match the number of children.
       */
      defaultValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
      ]),

      /**
       * Like `defaultValue` but for [controlled components](http://facebook.github.io/react/docs/forms.html#controlled-components).
       */
      value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
      ]),

      /**
       * Determines whether the slider moves horizontally (from left to right) or vertically (from top to bottom).
       */
      orientation: PropTypes.oneOf(['horizontal', 'vertical']),

      /**
       * The css class set on the slider node.
       */
      className: PropTypes.string,

      /**
       * The css class set on each handle node.
       *
       * In addition each handle will receive a numbered css class of the form `${handleClassName}-${i}`,
       * e.g. `handle-0`, `handle-1`, ...
       */
      handleClassName: PropTypes.string,

      /**
       * The css class set on the handle that is currently being moved.
       */
      handleActiveClassName: PropTypes.string,

      /**
       * If `true` bars between the handles will be rendered.
       */
      withBars: PropTypes.bool,

      /**
       * The css class set on the bars between the handles.
       * In addition bar fragment will receive a numbered css class of the form `${barClassName}-${i}`,
       * e.g. `bar-0`, `bar-1`, ...
       */
      barClassName: PropTypes.string,

      /**
       * If `true` the active handle will push other handles
       * within the constraints of `min`, `max`, `step` and `minDistance`.
       */
      pearling: PropTypes.bool,

      /**
       * If `true` the handles can't be moved.
       */
      disabled: PropTypes.bool,

      /**
       * Disables handle move when clicking the slider bar
       */
      snapDragDisabled: PropTypes.bool,

      /**
       * Inverts the slider.
       */
      invert: PropTypes.bool,

      /**
       * Callback called before starting to move a handle.
       */
      onBeforeChange: PropTypes.func,

      /**
       * Callback called on every value change.
       */
      onChange: PropTypes.func,

      /**
       * Callback called only after moving a handle has ended.
       */
      onAfterChange: PropTypes.func,

      /**
       *  Callback called when the the slider is clicked (handle or bars).
       *  Receives the value at the clicked position as argument.
       */
      onSliderClick: PropTypes.func
    },

    getDefaultProps: function () {
      return {
        min: 0,
        max: 100,
        step: 1,
        minDistance: 0,
        defaultValue: 0,
        orientation: 'horizontal',
        className: 'slider',
        handleClassName: 'handle',
        handleActiveClassName: 'active',
        barClassName: 'bar',
        withBars: false,
        pearling: false,
        disabled: false,
        snapDragDisabled: false,
        invert: false
      };
    },

    getInitialState: function () {
      var value = this._or(ensureArray(this.props.value), ensureArray(this.props.defaultValue));

      // reused throughout the component to store results of iterations over `value`
      this.tempArray = value.slice();

      // array for storing resize timeouts ids
      this.pendingResizeTimeouts = [];

      var zIndices = [];
      for (var i = 0; i < value.length; i++) {
        value[i] = this._trimAlignValue(value[i], this.props);
        zIndices.push(i);
      }

      return {
        index: -1,
        upperBound: 0,
        sliderLength: 0,
        value: value,
        zIndices: zIndices
      };
    },

    // Keep the internal `value` consistent with an outside `value` if present.
    // This basically allows the slider to be a controlled component.
    componentWillReceiveProps: function (newProps) {
      var value = this._or(ensureArray(newProps.value), this.state.value);

      // ensure the array keeps the same size as `value`
      this.tempArray = value.slice();

      for (var i = 0; i < value.length; i++) {
        this.state.value[i] = this._trimAlignValue(value[i], newProps);
      }
      if (this.state.value.length > value.length)
        this.state.value.length = value.length;

      // If an upperBound has not yet been determined (due to the component being hidden
      // during the mount event, or during the last resize), then calculate it now
      if (this.state.upperBound === 0) {
        this._handleResize();
      }
    },

    // Check if the arity of `value` or `defaultValue` matches the number of children (= number of custom handles).
    // If no custom handles are provided, just returns `value` if present and `defaultValue` otherwise.
    // If custom handles are present but neither `value` nor `defaultValue` are applicable the handles are spread out
    // equally.
    // TODO: better name? better solution?
    _or: function (value, defaultValue) {
      var count = React.Children.count(this.props.children);
      switch (count) {
        case 0:
          return value.length > 0 ? value : defaultValue;
        case value.length:
          return value;
        case defaultValue.length:
          return defaultValue;
        default:
          if (value.length !== count || defaultValue.length !== count) {
            console.warn(this.constructor.displayName + ": Number of values does not match number of children.");
          }
          return linspace(this.props.min, this.props.max, count);
      }
    },

    componentDidMount: function () {
      window.addEventListener('resize', this._handleResize);
      this._handleResize();
    },

    componentWillUnmount: function () {
      this._clearPendingResizeTimeouts();
      window.removeEventListener('resize', this._handleResize);
    },

    getValue: function () {
      return undoEnsureArray(this.state.value);
    },

    _handleResize: function () {
      // setTimeout of 0 gives element enough time to have assumed its new size if it is being resized
      var resizeTimeout = window.setTimeout(function() {
        // drop this timeout from pendingResizeTimeouts to reduce memory usage
        this.pendingResizeTimeouts.shift();

        var slider = this.refs.slider;
        var handle = this.refs.handle0;
        var rect = slider.getBoundingClientRect();

        var size = this._sizeKey();

        var sliderMax = rect[this._posMaxKey()];
        var sliderMin = rect[this._posMinKey()];

        this.setState({
          upperBound: slider[size] - handle[size],
          sliderLength: Math.abs(sliderMax - sliderMin),
          handleSize: handle[size],
          sliderStart: this.props.invert ? sliderMax : sliderMin
        });
      }.bind(this), 0);

      this.pendingResizeTimeouts.push(resizeTimeout);
    },

    // clear all pending timeouts to avoid error messages after unmounting
    _clearPendingResizeTimeouts: function() {
      do {
        var nextTimeout = this.pendingResizeTimeouts.shift();

        clearTimeout(nextTimeout);
      } while (this.pendingResizeTimeouts.length);
    },

    // calculates the offset of a handle in pixels based on its value.
    _calcOffset: function (value) {
      var range = this.props.max - this.props.min;
      if (range === 0) {
        return 0;
      }
      var ratio = (value - this.props.min) / range;
      return ratio * this.state.upperBound;
    },

    // calculates the value corresponding to a given pixel offset, i.e. the inverse of `_calcOffset`.
    _calcValue: function (offset) {
      var ratio = offset / this.state.upperBound;
      return ratio * (this.props.max - this.props.min) + this.props.min;
    },

    _buildHandleStyle: function (offset, i) {
      var style = {
        position: 'absolute',
        willChange: this.state.index >= 0 ? this._posMinKey() : '',
        zIndex: this.state.zIndices.indexOf(i) + 1
      };
      style[this._posMinKey()] = offset + 'px';
      return style;
    },

    _buildBarStyle: function (min, max) {
      var obj = {
        position: 'absolute',
        willChange: this.state.index >= 0 ? this._posMinKey() + ',' + this._posMaxKey() : ''
      };
      obj[this._posMinKey()] = min;
      obj[this._posMaxKey()] = max;
      return obj;
    },

    _getClosestIndex: function (pixelOffset) {
      var minDist = Number.MAX_VALUE;
      var closestIndex = -1;

      var value = this.state.value;
      var l = value.length;

      for (var i = 0; i < l; i++) {
        var offset = this._calcOffset(value[i]);
        var dist = Math.abs(pixelOffset - offset);
        if (dist < minDist) {
          minDist = dist;
          closestIndex = i;
        }
      }

      return closestIndex;
    },

    _calcOffsetFromPosition: function (position) {
      var pixelOffset = position - this.state.sliderStart;
      if (this.props.invert) pixelOffset = this.state.sliderLength - pixelOffset;
      pixelOffset -= (this.state.handleSize / 2);
      return pixelOffset;
    },

    // Snaps the nearest handle to the value corresponding to `position` and calls `callback` with that handle's index.
    _forceValueFromPosition: function (position, callback) {
      var pixelOffset = this._calcOffsetFromPosition(position);
      var closestIndex = this._getClosestIndex(pixelOffset);
      var nextValue = this._trimAlignValue(this._calcValue(pixelOffset));

      var value = this.state.value.slice(); // Clone this.state.value since we'll modify it temporarily
      value[closestIndex] = nextValue;

      // Prevents the slider from shrinking below `props.minDistance`
      for (var i = 0; i < value.length - 1; i += 1) {
        if (value[i + 1] - value[i] < this.props.minDistance) return;
      }

      this.setState({value: value}, callback.bind(this, closestIndex));
    },

    _getMousePosition: function (e) {
      return [
        e['page' + this._axisKey()],
        e['page' + this._orthogonalAxisKey()]
      ];
    },

    _getTouchPosition: function (e) {
      var touch = e.touches[0];
      return [
        touch['page' + this._axisKey()],
        touch['page' + this._orthogonalAxisKey()]
      ];
    },

    _getMouseEventMap: function () {
      return {
        'mousemove': this._onMouseMove,
        'mouseup': this._onMouseUp
      }
    },

    _getTouchEventMap: function () {
      return {
        'touchmove': this._onTouchMove,
        'touchend': this._onTouchEnd
      }
    },

    // create the `mousedown` handler for the i-th handle
    _createOnMouseDown: function (i) {
      return function (e) {
        if (this.props.disabled) return;
        var position = this._getMousePosition(e);
        this._start(i, position[0]);
        this._addHandlers(this._getMouseEventMap());
        pauseEvent(e);
      }.bind(this);
    },

    // create the `touchstart` handler for the i-th handle
    _createOnTouchStart: function (i) {
      return function (e) {
        if (this.props.disabled || e.touches.length > 1) return;
        var position = this._getTouchPosition(e);
        this.startPosition = position;
        this.isScrolling = undefined; // don't know yet if the user is trying to scroll
        this._start(i, position[0]);
        this._addHandlers(this._getTouchEventMap());
        stopPropagation(e);
      }.bind(this);
    },

    _addHandlers: function (eventMap) {
      for (var key in eventMap) {
        document.addEventListener(key, eventMap[key], false);
      }
    },

    _removeHandlers: function (eventMap) {
      for (var key in eventMap) {
        document.removeEventListener(key, eventMap[key], false);
      }
    },

    _start: function (i, position) {
      // if activeElement is body window will lost focus in IE9
      if (document.activeElement && document.activeElement != document.body) {
        document.activeElement.blur && document.activeElement.blur();
      }

      this.hasMoved = false;

      this._fireChangeEvent('onBeforeChange');

      var zIndices = this.state.zIndices;
      zIndices.splice(zIndices.indexOf(i), 1); // remove wherever the element is
      zIndices.push(i); // add to end

      this.setState({
        startValue: this.state.value[i],
        startPosition: position,
        index: i,
        zIndices: zIndices
      });
    },

    _onMouseUp: function () {
      this._onEnd(this._getMouseEventMap());
    },

    _onTouchEnd: function () {
      this._onEnd(this._getTouchEventMap());
    },

    _onEnd: function (eventMap) {
      this._removeHandlers(eventMap);
      this.setState({index: -1}, this._fireChangeEvent.bind(this, 'onAfterChange'));
    },

    _onMouseMove: function (e) {
      var position = this._getMousePosition(e);
      this._move(position[0]);
    },

    _onTouchMove: function (e) {
      if (e.touches.length > 1) return;

      var position = this._getTouchPosition(e);

      if (typeof this.isScrolling === 'undefined') {
        var diffMainDir = position[0] - this.startPosition[0];
        var diffScrollDir = position[1] - this.startPosition[1];
        this.isScrolling = Math.abs(diffScrollDir) > Math.abs(diffMainDir);
      }

      if (this.isScrolling) {
        this.setState({index: -1});
        return;
      }

      pauseEvent(e);

      this._move(position[0]);
    },

    _move: function (position) {
      this.hasMoved = true;

      var props = this.props;
      var state = this.state;
      var index = state.index;

      var value = state.value;
      var length = value.length;
      var oldValue = value[index];

      var diffPosition = position - state.startPosition;
      if (props.invert) diffPosition *= -1;

      var diffValue = diffPosition / (state.sliderLength - state.handleSize) * (props.max - props.min);
      var newValue = this._trimAlignValue(state.startValue + diffValue);

      var minDistance = props.minDistance;

      // if "pearling" (= handles pushing each other) is disabled,
      // prevent the handle from getting closer than `minDistance` to the previous or next handle.
      if (!props.pearling) {
        if (index > 0) {
          var valueBefore = value[index - 1];
          if (newValue < valueBefore + minDistance) {
            newValue = valueBefore + minDistance;
          }
        }

        if (index < length - 1) {
          var valueAfter = value[index + 1];
          if (newValue > valueAfter - minDistance) {
            newValue = valueAfter - minDistance;
          }
        }
      }

      value[index] = newValue;

      // if "pearling" is enabled, let the current handle push the pre- and succeeding handles.
      if (props.pearling && length > 1) {
        if (newValue > oldValue) {
          this._pushSucceeding(value, minDistance, index);
          this._trimSucceeding(length, value, minDistance, props.max);
        }
        else if (newValue < oldValue) {
          this._pushPreceding(value, minDistance, index);
          this._trimPreceding(length, value, minDistance, props.min);
        }
      }

      // Normally you would use `shouldComponentUpdate`, but since the slider is a low-level component,
      // the extra complexity might be worth the extra performance.
      if (newValue !== oldValue) {
        this.setState({value: value}, this._fireChangeEvent.bind(this, 'onChange'));
      }
    },

    _pushSucceeding: function (value, minDistance, index) {
      var i, padding;
      for (i = index, padding = value[i] + minDistance;
           value[i + 1] != null && padding > value[i + 1];
           i++, padding = value[i] + minDistance) {
        value[i + 1] = this._alignValue(padding);
      }
    },

    _trimSucceeding: function (length, nextValue, minDistance, max) {
      for (var i = 0; i < length; i++) {
        var padding = max - i * minDistance;
        if (nextValue[length - 1 - i] > padding) {
          nextValue[length - 1 - i] = padding;
        }
      }
    },

    _pushPreceding: function (value, minDistance, index) {
      var i, padding;
      for (i = index, padding = value[i] - minDistance;
           value[i - 1] != null && padding < value[i - 1];
           i--, padding = value[i] - minDistance) {
        value[i - 1] = this._alignValue(padding);
      }
    },

    _trimPreceding: function (length, nextValue, minDistance, min) {
      for (var i = 0; i < length; i++) {
        var padding = min + i * minDistance;
        if (nextValue[i] < padding) {
          nextValue[i] = padding;
        }
      }
    },

    _axisKey: function () {
      var orientation = this.props.orientation;
      if (orientation === 'horizontal') return 'X';
      if (orientation === 'vertical') return 'Y';
    },

    _orthogonalAxisKey: function () {
      var orientation = this.props.orientation;
      if (orientation === 'horizontal') return 'Y';
      if (orientation === 'vertical') return 'X';
    },

    _posMinKey: function () {
      var orientation = this.props.orientation;
      if (orientation === 'horizontal') return this.props.invert ? 'right' : 'left';
      if (orientation === 'vertical') return this.props.invert ? 'bottom' : 'top';
    },

    _posMaxKey: function () {
      var orientation = this.props.orientation;
      if (orientation === 'horizontal') return this.props.invert ? 'left' : 'right';
      if (orientation === 'vertical') return this.props.invert ? 'top' : 'bottom';
    },

    _sizeKey: function () {
      var orientation = this.props.orientation;
      if (orientation === 'horizontal') return 'clientWidth';
      if (orientation === 'vertical') return 'clientHeight';
    },

    _trimAlignValue: function (val, props) {
      return this._alignValue(this._trimValue(val, props), props);
    },

    _trimValue: function (val, props) {
      props = props || this.props;

      if (val <= props.min) val = props.min;
      if (val >= props.max) val = props.max;

      return val;
    },

    _alignValue: function (val, props) {
      props = props || this.props;

      var valModStep = (val - props.min) % props.step;
      var alignValue = val - valModStep;

      if (Math.abs(valModStep) * 2 >= props.step) {
        alignValue += (valModStep > 0) ? props.step : (-props.step);
      }

      return parseFloat(alignValue.toFixed(5));
    },

    _renderHandle: function (style, child, i) {
      var className = this.props.handleClassName + ' ' +
        (this.props.handleClassName + '-' + i) + ' ' +
        (this.state.index === i ? this.props.handleActiveClassName : '');

      return (
        React.createElement('div', {
            ref: 'handle' + i,
            key: 'handle' + i,
            className: className,
            style: style,
            onMouseDown: this._createOnMouseDown(i),
            onTouchStart: this._createOnTouchStart(i)
          },
          child
        )
      );
    },

    _renderHandles: function (offset) {
      var length = offset.length;

      var styles = this.tempArray;
      for (var i = 0; i < length; i++) {
        styles[i] = this._buildHandleStyle(offset[i], i);
      }

      var res = this.tempArray;
      var renderHandle = this._renderHandle;
      if (React.Children.count(this.props.children) > 0) {
        React.Children.forEach(this.props.children, function (child, i) {
          res[i] = renderHandle(styles[i], child, i);
        });
      } else {
        for (i = 0; i < length; i++) {
          res[i] = renderHandle(styles[i], null, i);
        }
      }
      return res;
    },

    _renderBar: function (i, offsetFrom, offsetTo) {
      return (
        React.createElement('div', {
          key: 'bar' + i,
          ref: 'bar' + i,
          className: this.props.barClassName + ' ' + this.props.barClassName + '-' + i,
          style: this._buildBarStyle(offsetFrom, this.state.upperBound - offsetTo)
        })
      );
    },

    _renderBars: function (offset) {
      var bars = [];
      var lastIndex = offset.length - 1;

      bars.push(this._renderBar(0, 0, offset[0]));

      for (var i = 0; i < lastIndex; i++) {
        bars.push(this._renderBar(i + 1, offset[i], offset[i + 1]));
      }

      bars.push(this._renderBar(lastIndex + 1, offset[lastIndex], this.state.upperBound));

      return bars;
    },

    _onSliderMouseDown: function (e) {
      if (this.props.disabled) return;
      this.hasMoved = false;
      if (!this.props.snapDragDisabled) {
        var position = this._getMousePosition(e);
        this._forceValueFromPosition(position[0], function (i) {
          this._fireChangeEvent('onChange');
          this._start(i, position[0]);
          this._addHandlers(this._getMouseEventMap());
        }.bind(this));
      }

      pauseEvent(e);
    },

    _onSliderClick: function (e) {
      if (this.props.disabled) return;

      if (this.props.onSliderClick && !this.hasMoved) {
        var position = this._getMousePosition(e);
        var valueAtPos = this._trimAlignValue(this._calcValue(this._calcOffsetFromPosition(position[0])));
        this.props.onSliderClick(valueAtPos);
      }
    },

    _fireChangeEvent: function (event) {
      if (this.props[event]) {
        this.props[event](undoEnsureArray(this.state.value));
      }
    },

    render: function () {
      var state = this.state;
      var props = this.props;

      var offset = this.tempArray;
      var value = state.value;
      var l = value.length;
      for (var i = 0; i < l; i++) {
        offset[i] = this._calcOffset(value[i], i);
      }

      var bars = props.withBars ? this._renderBars(offset) : null;
      var handles = this._renderHandles(offset);

      return (
        React.createElement('div', {
            ref: 'slider',
            style: {position: 'relative'},
            className: props.className + (props.disabled ? ' disabled' : ''),
            onMouseDown: this._onSliderMouseDown,
            onClick: this._onSliderClick
          },
          bars,
          handles
        )
      );
    }
  });

  return ReactSlider;
}));


/***/ }),

/***/ 206:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./~/style-loader/lib/urls.js ***!
  \************************************/
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 52:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./src/device/device-conf.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    devices: [{
        name: 'device1',
        caption: 'Device 1',
        sensors: [{
            name: 'sensor1',
            type: 'int',
            min: 0,
            max: 100
        }, {
            name: 'sensor2',
            type: 'float',
            min: 0,
            max: 10
        }, {
            name: 'state',
            type: 'val',
            options: ['STANDBY', 'HEAT', 'BOIL']
        }, {
            name: 'flagsensor',
            type: 'flag',
            flags: ['FLAG_1', 'FLAG_2', 'FLAG_3']
        }],
        triggers: [{
            name: 'boil'
        }, {
            name: 'heat',
            params: [{
                name: 'TARGET',
                type: 'int',
                min: 20,
                max: 95
            }]

        }]
    }]
};

/***/ }),

/***/ 54:
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 87:
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/style-loader/lib/addStyles.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ 206);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 88:
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./src/dashboard/dashboard-conf.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    widgets: [{
        label: 'Чайник',
        description: 'Чайник на кухне',
        class: 'default',
        config: {
            sensors: [{
                view: 'main',
                title: 'Temperature',
                sensor: 'device1.sensor1'
            }, {
                view: 'main',
                title: 'Level',
                sensor: 'device1.sensor2'
            }, {
                view: 'main',
                title: 'State',
                sensor: 'device1.state'
            }, {
                view: 'main',
                title: 'Flags',
                sensor: 'device1.flagsensor'
            }],
            triggers: [{
                title: 'Heat',
                trigger: 'device1.heat'
            }, {
                title: 'Boil',
                trigger: 'device1.boil'
            }]
        }
    }, {
        label: 'CUSTOM1',
        class: 'custom'
    }, {
        label: 'CUSTOM2',
        class: 'custom'
    }]
};

/***/ }),

/***/ 89:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./src/dashboard/dashboard.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dashboard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 10);

var _react2 = _interopRequireDefault(_react);

var _widget = __webpack_require__(/*! ./widget */ 99);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = exports.Dashboard = function (_React$Component) {
    _inherits(Dashboard, _React$Component);

    function Dashboard(props) {
        _classCallCheck(this, Dashboard);

        return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this));
    }

    _createClass(Dashboard, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'dashboard' },
                this.props.config.widgets.map(function (widgetConf, k) {
                    return _react2.default.createElement(_widget.Widget, { key: k, config: widgetConf });
                })
            );
        }
    }]);

    return Dashboard;
}(_react2.default.Component);

/***/ }),

/***/ 91:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./src/css/default-widget.css ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader!./default-widget.css */ 103);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/style-loader/lib/addStyles.js */ 87)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./default-widget.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./default-widget.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 92:
/* no static exports found */
/* all exports used */
/*!****************************!*\
  !*** ./src/css/layout.css ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader!./layout.css */ 104);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/style-loader/lib/addStyles.js */ 87)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./layout.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./layout.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 93:
/* no static exports found */
/* all exports used */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ 33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dashboard = __webpack_require__(/*! ./dashboard/dashboard */ 89);

__webpack_require__(/*! ./css/layout */ 92);

__webpack_require__(/*! ./css/default-widget */ 91);

__webpack_require__(/*! ./device/device-conf */ 52);

var _dashboardConf = __webpack_require__(/*! ./dashboard/dashboard-conf */ 88);

var _dashboardConf2 = _interopRequireDefault(_dashboardConf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'appbar' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Doomsday Laboratories'
                    )
                ),
                _react2.default.createElement(_dashboard.Dashboard, { config: _dashboardConf2.default })
            );
        }
    }]);

    return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("root"));

/***/ }),

/***/ 94:
/* no static exports found */
/* all exports used */
/*!*************************************************!*\
  !*** ./src/dashboard/default-widget/sensors.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FlagSensor = exports.ValSensor = exports.StrSensor = exports.IntSensor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntSensor = exports.IntSensor = function (_React$Component) {
    _inherits(IntSensor, _React$Component);

    function IntSensor(props) {
        _classCallCheck(this, IntSensor);

        var _this = _possibleConstructorReturn(this, (IntSensor.__proto__ || Object.getPrototypeOf(IntSensor)).call(this));

        _this.min = props.def.min;
        _this.max = props.def.max - props.def.min;

        return _this;
    }

    _createClass(IntSensor, [{
        key: "render",
        value: function render() {
            var v = (this.props.value - this.min) / this.max * 100;
            return _react2.default.createElement(
                "div",
                { className: "sensor sensor-number" },
                _react2.default.createElement(
                    "h4",
                    null,
                    this.props.config.title
                ),
                _react2.default.createElement(
                    "div",
                    { className: "progress" },
                    _react2.default.createElement("div", { className: "bar", style: { width: v + '%' } })
                )
            );
        }
    }]);

    return IntSensor;
}(_react2.default.Component);

var StrSensor = exports.StrSensor = function (_React$Component2) {
    _inherits(StrSensor, _React$Component2);

    function StrSensor() {
        _classCallCheck(this, StrSensor);

        return _possibleConstructorReturn(this, (StrSensor.__proto__ || Object.getPrototypeOf(StrSensor)).apply(this, arguments));
    }

    _createClass(StrSensor, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "sensor sensor-str" },
                _react2.default.createElement(
                    "h4",
                    null,
                    this.props.config.title
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    "this.props.value"
                )
            );
        }
    }]);

    return StrSensor;
}(_react2.default.Component);

var ValSensor = exports.ValSensor = function (_React$Component3) {
    _inherits(ValSensor, _React$Component3);

    function ValSensor(props) {
        _classCallCheck(this, ValSensor);

        var _this3 = _possibleConstructorReturn(this, (ValSensor.__proto__ || Object.getPrototypeOf(ValSensor)).call(this));

        _this3.options = props.def.options;
        return _this3;
    }

    _createClass(ValSensor, [{
        key: "render",
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                "div",
                { className: "sensor sensor-val" },
                _react2.default.createElement(
                    "h4",
                    null,
                    this.props.config.title
                ),
                _react2.default.createElement(
                    "div",
                    { className: "options" },
                    this.options.map(function (o, i) {
                        return _react2.default.createElement(
                            "span",
                            { key: i, className: function () {
                                    return i == _this4.props.value ? 'option active' : 'option';
                                }() },
                            o
                        );
                    })
                )
            );
        }
    }]);

    return ValSensor;
}(_react2.default.Component);

var FlagSensor = exports.FlagSensor = function (_React$Component4) {
    _inherits(FlagSensor, _React$Component4);

    function FlagSensor(props) {
        _classCallCheck(this, FlagSensor);

        var _this5 = _possibleConstructorReturn(this, (FlagSensor.__proto__ || Object.getPrototypeOf(FlagSensor)).call(this));

        _this5.flags = props.def.flags;
        return _this5;
    }

    _createClass(FlagSensor, [{
        key: "render",
        value: function render() {
            var _this6 = this;

            return _react2.default.createElement(
                "div",
                { className: "sensor sensor-flag" },
                _react2.default.createElement(
                    "h4",
                    null,
                    this.props.config.title
                ),
                _react2.default.createElement(
                    "div",
                    { className: "flags" },
                    this.flags.map(function (f, i) {
                        return _react2.default.createElement(
                            "span",
                            { key: i, className: function () {
                                    return (1 << i & _this6.props.value) > 0 ? 'flag active' : 'flag';
                                }() },
                            f
                        );
                    })
                )
            );
        }
    }]);

    return FlagSensor;
}(_react2.default.Component);

/***/ }),

/***/ 95:
/* no static exports found */
/* all exports used */
/*!********************************************************!*\
  !*** ./src/dashboard/default-widget/triggerargpane.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TriggerArgPane = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 10);

var _react2 = _interopRequireDefault(_react);

var _reactSlider = __webpack_require__(/*! react-slider */ 192);

var _reactSlider2 = _interopRequireDefault(_reactSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParamSetter = function (_React$Component) {
    _inherits(ParamSetter, _React$Component);

    function ParamSetter(props) {
        _classCallCheck(this, ParamSetter);

        var _this = _possibleConstructorReturn(this, (ParamSetter.__proto__ || Object.getPrototypeOf(ParamSetter)).call(this));

        console.log(props);
        _this.def = props.param;
        _this.component = _react2.default.createElement(
            'div',
            null,
            'PARAMSETTER'
        );
        _this.component = _react2.default.createElement(_reactSlider2.default, null);
        return _this;
    }

    _createClass(ParamSetter, [{
        key: 'render',
        value: function render() {
            return this.component;
        }
    }]);

    return ParamSetter;
}(_react2.default.Component);

var TriggerArgPane = exports.TriggerArgPane = function (_React$Component2) {
    _inherits(TriggerArgPane, _React$Component2);

    function TriggerArgPane(props) {
        _classCallCheck(this, TriggerArgPane);

        return _possibleConstructorReturn(this, (TriggerArgPane.__proto__ || Object.getPrototypeOf(TriggerArgPane)).call(this));
    }

    _createClass(TriggerArgPane, [{
        key: 'handleCall',
        value: function handleCall() {
            console.log(this.props);
            if (this.props.onCall) {
                this.props.onCall();
            }
        }
    }, {
        key: 'handleCancel',
        value: function handleCancel() {
            if (this.props.onCancel) {
                this.props.onCancel();
            }
        }
    }, {
        key: 'handleParamValueSet',
        value: function handleParamValueSet(index, value) {}
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return this.props.trigger != null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            if (this.props.trigger == null) return _react2.default.createElement('span', null);

            var params = this.props.trigger.def.params || [];

            return _react2.default.createElement(
                'div',
                { className: 'trigger-parampane-view' },
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    params.map(function (p, i) {
                        return _react2.default.createElement(
                            'div',
                            { key: i, className: 'param-contailer' },
                            _react2.default.createElement(
                                'h4',
                                null,
                                p.name
                            ),
                            _react2.default.createElement(ParamSetter, { param: p, onValue: function onValue(value) {
                                    return _this3.handleParamValueSet(i, value);
                                } })
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'actions' },
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                return _this3.handleCancel();
                            } },
                        'Cancel'
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                return _this3.handleCall();
                            } },
                        this.props.trigger.trigger.title
                    )
                )
            );
        }
    }]);

    return TriggerArgPane;
}(_react2.default.Component);

/***/ }),

/***/ 96:
/* no static exports found */
/* all exports used */
/*!************************************************!*\
  !*** ./src/dashboard/default-widget/widget.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DefaultWidget = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 10);

var _react2 = _interopRequireDefault(_react);

var _deviceManager = __webpack_require__(/*! ../../device/device-manager */ 100);

var _deviceManager2 = _interopRequireDefault(_deviceManager);

var _classnames = __webpack_require__(/*! classnames */ 101);

var _classnames2 = _interopRequireDefault(_classnames);

var _sensors = __webpack_require__(/*! ./sensors */ 94);

var _triggerargpane = __webpack_require__(/*! ./triggerargpane */ 95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultWidget = exports.DefaultWidget = function (_React$Component) {
    _inherits(DefaultWidget, _React$Component);

    _createClass(DefaultWidget, [{
        key: 'refreshSensor',
        value: function refreshSensor(val, name) {
            var state = {};
            state[name] = val;
            this.setState(state);
        }
    }]);

    function DefaultWidget(props) {
        _classCallCheck(this, DefaultWidget);

        //console.log(props);
        var _this = _possibleConstructorReturn(this, (DefaultWidget.__proto__ || Object.getPrototypeOf(DefaultWidget)).call(this));

        _this.sensorsMain = [];
        _this.sensorsExtend = [];
        _this.sensors = new Map();
        _this.triggers = [].concat(_toConsumableArray(props.config.triggers));

        var state = { activeTrigger: null };
        (props.config.sensors || []).forEach(function (s) {
            var sensor = _deviceManager2.default.getSensor(s.sensor);
            state[sensor.def().UID] = 0;
            sensor.sub(function (val, UID) {
                return _this.refreshSensor(val, UID);
            });
            _this.sensors.set(s, sensor);

            if (s.view === 'main') {
                _this.sensorsMain.push(s);
            } else {
                _this.sensorsExtend.push(s);
            }
        });
        _this.state = state;
        return _this;
    }

    _createClass(DefaultWidget, [{
        key: 'handleActionClick',
        value: function handleActionClick(t) {

            var trigger = _deviceManager2.default.getTrigger(t.trigger);

            var def = trigger.def();
            if ((def.params || []).length == 0) {
                trigger.call();
            } else {
                var state = {
                    activeTrigger: {
                        def: def,
                        trigger: t
                    }
                };
                this.setState(state);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.mode === 'widget') return _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                    'div',
                    { className: 'sensors-main' },
                    this.sensorsMain.map(function (s, k) {
                        var def = _this2.sensors.get(s).def();
                        switch (def.type) {
                            case 'int':
                                return _react2.default.createElement(_sensors.IntSensor, { key: k, config: s, def: def, value: _this2.state[def.UID] });
                            case 'float':
                                return _react2.default.createElement(_sensors.IntSensor, { key: k, config: s, def: def, value: _this2.state[def.UID] });
                            case 'str':
                                return _react2.default.createElement(_sensors.StrSensor, { key: k, config: s, def: def, value: _this2.state[def.UID] });
                            case 'val':
                                return _react2.default.createElement(_sensors.ValSensor, { key: k, config: s, def: def, value: _this2.state[def.UID] });
                            case 'flag':
                                return _react2.default.createElement(_sensors.FlagSensor, { key: k, config: s, def: def, value: _this2.state[def.UID] });
                        }
                    })
                ),
                _react2.default.createElement('div', { className: 'sensors-extend' }),
                _react2.default.createElement(
                    'div',
                    { className: 'actions' },
                    this.triggers.map(function (t, k) {
                        return _react2.default.createElement(
                            'button',
                            { key: k, onClick: function onClick() {
                                    _this2.handleActionClick(t);
                                } },
                            t.title
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)({ 'trigger-param-pane': true, 'active': this.state.activeTrigger != null }) },
                    _react2.default.createElement(_triggerargpane.TriggerArgPane, { onCancel: function onCancel() {
                            return _this2.setState({ activeTrigger: null });
                        }, trigger: this.state.activeTrigger })
                )
            );else return _react2.default.createElement(
                'div',
                { className: 'configPane' },
                'CONFIG_PANE'
            );
        }
    }]);

    return DefaultWidget;
}(_react2.default.Component);

/***/ }),

/***/ 97:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./src/dashboard/injector.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var globals = {};

var Injector = function () {
    function Injector(locals) {
        _classCallCheck(this, Injector);

        this.locals = locals || {};
    }

    _createClass(Injector, [{
        key: "require",
        value: function require(name) {
            return this.locals[name] || globals[name] || undefined;
        }
    }]);

    return Injector;
}();

function makeInjector(locals) {
    return new Injector(locals);
}

function append(objects) {
    globals = _extends({}, globals, objects);
}

exports.default = {
    get: makeInjector,
    append: append
};

/***/ }),

/***/ 98:
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./src/dashboard/widget-factory.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var src = '\nvar React = require(\'react\');\n\nthis.renderView = function(){\nreturn React.createElement(\'div\',null,\'SCRIPT_VIEW\');\n}\nthis.renderPrefpane = function(){\nreturn React.createElement(\'div\',null,\'SCRIPT PREF PANE\');\n}\n';

function getWidget(className) {
    return new Function('require,config', src);
}

exports.default = {
    getWidget: getWidget
};

/***/ }),

/***/ 99:
/* no static exports found */
/* all exports used */
/*!*********************************!*\
  !*** ./src/dashboard/widget.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Widget = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 10);

var _react2 = _interopRequireDefault(_react);

var _injector = __webpack_require__(/*! ./injector */ 97);

var _injector2 = _interopRequireDefault(_injector);

var _widgetFactory = __webpack_require__(/*! ./widget-factory */ 98);

var _widgetFactory2 = _interopRequireDefault(_widgetFactory);

var _widget = __webpack_require__(/*! ./default-widget/widget */ 96);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_injector2.default.append({ 'react': _react2.default });

var Widget = exports.Widget = function (_React$Component) {
    _inherits(Widget, _React$Component);

    function Widget(props) {
        _classCallCheck(this, Widget);

        var _this = _possibleConstructorReturn(this, (Widget.__proto__ || Object.getPrototypeOf(Widget)).call(this));

        _this.state = {
            mode: 'widget'
        };
        _this.header = props.config.label;
        _this.subheader = props.config.description;
        var className = props.config.class || 'default';
        if (className === 'default') {
            _this.widget = _widget.DefaultWidget;
        } else {
            var widgetFn = _widgetFactory2.default.getWidget(_this.class);
            var injector = _injector2.default.get();

            _this.widget = function (_React$Component2) {
                _inherits(_class, _React$Component2);

                function _class(props) {
                    _classCallCheck(this, _class);

                    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

                    var _render = _this2.render;
                    var _componentWillMount = _this2.componentnWillMount;
                    var _componentDidMount = _this2.componentDidMount;
                    widgetFn.apply(_this2, [function (name) {
                        return injector.require(name);
                    }, props.config]);
                    _this2.componentDidMount = _componentDidMount;
                    _this2.componentWillMount = _componentWillMount;
                    _this2.render = _render;
                    return _this2;
                }

                _createClass(_class, [{
                    key: 'render',
                    value: function render() {
                        if (this.props.mode === 'widget') {
                            if (this.renderView) return this.renderView();else return _react2.default.createElement(
                                'div',
                                null,
                                'VIEW_NOT_FOUND'
                            );
                        } else {
                            if (this.renderPrefpane) return this.renderPrefpane();else return _react2.default.createElement(
                                'div',
                                null,
                                'PREFPANE_NOT_FOUND'
                            );
                        }
                    }
                }]);

                return _class;
            }(_react2.default.Component);
        }
        return _this;
    }

    _createClass(Widget, [{
        key: 'handlePrefClick',
        value: function handlePrefClick() {

            this.setState(this.state.mode === 'pref' ? { mode: 'widget' } : { mode: 'pref' });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'widget' },
                _react2.default.createElement(
                    'div',
                    { className: 'header' },
                    _react2.default.createElement(
                        'i',
                        { className: 'btnConfig', onClick: function onClick() {
                                return _this3.handlePrefClick();
                            } },
                        '*'
                    ),
                    _react2.default.createElement(
                        'h2',
                        null,
                        this.header
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        this.subheader
                    )
                ),
                _react2.default.createElement(this.widget, { mode: this.state.mode, config: this.props.config.config })
            );
        }
    }]);

    return Widget;
}(_react2.default.Component);

/***/ })

},[93]);