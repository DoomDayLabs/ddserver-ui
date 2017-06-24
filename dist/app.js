webpackJsonp([0],{

/***/ "./node_modules/classnames/index.js":
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

/***/ "./node_modules/create-react-class/index.js":
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



var React = __webpack_require__(/*! react */ "./node_modules/react/react.js");
var factory = __webpack_require__(/*! ./factory */ "./node_modules/create-react-class/factory.js");

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

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./node_modules/material-design-icons/iconfont/material-icons.css":
/* no static exports found */
/* all exports used */
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"modules":true,"sourceMap":true,"localIdentName":"[name]__[local]--[hash:base64:8]"}!./~/postcss-loader/lib!./~/material-design-icons/iconfont/material-icons.css ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + __webpack_require__(/*! ./MaterialIcons-Regular.eot */ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.eot") + "); /* For IE6-8 */\n  src: local('Material Icons'),\n       local('MaterialIcons-Regular'),\n       url(" + __webpack_require__(/*! ./MaterialIcons-Regular.woff2 */ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2") + ") format('woff2'),\n       url(" + __webpack_require__(/*! ./MaterialIcons-Regular.woff */ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff") + ") format('woff'),\n       url(" + __webpack_require__(/*! ./MaterialIcons-Regular.ttf */ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.ttf") + ") format('truetype');\n}\n\n.material-icons__material-icons--1Hh7Wad- {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  -webkit-font-feature-settings: 'liga';\n          font-feature-settings: 'liga';\n}\n", "", {"version":3,"sources":["/Volumes/WORK/doom-day-device/ddserver-ui/node_modules/material-design-icons/iconfont/material-icons.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,mCAAsC,CAAC,eAAe;EACtD;;;;wDAIyD;CAC1D;;AAED;EACE,8BAA8B;EAC9B,oBAAoB;EACpB,mBAAmB;EACnB,gBAAgB,EAAE,yBAAyB;EAC3C,sBAAsB;EACtB,eAAe;EACf,qBAAqB;EACrB,uBAAuB;EACvB,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;;EAEf,sCAAsC;EACtC,oCAAoC;EACpC,oCAAoC;EACpC,mCAAmC;;EAEnC,0BAA0B;EAC1B,mCAAmC;;EAEnC,qBAAqB;EACrB,sCAAsC;UAC9B,8BAA8B;CACvC","file":"material-icons.css","sourcesContent":["@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(./MaterialIcons-Regular.eot); /* For IE6-8 */\n  src: local('Material Icons'),\n       local('MaterialIcons-Regular'),\n       url(./MaterialIcons-Regular.woff2) format('woff2'),\n       url(./MaterialIcons-Regular.woff) format('woff'),\n       url(./MaterialIcons-Regular.ttf) format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  -webkit-font-feature-settings: 'liga';\n          font-feature-settings: 'liga';\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"material-icons": "material-icons__material-icons--1Hh7Wad-"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./node_modules/react-toolbox/lib/app_bar/theme.css":
/* no static exports found */
/* all exports used */
/*!***************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"modules":true,"sourceMap":true,"localIdentName":"[name]__[local]--[hash:base64:8]"}!./~/postcss-loader/lib!./~/react-toolbox/lib/app_bar/theme.css ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* Orientation */\n/* Devices (defined by max width) */\n/* Devices (defined by min-width) */\n.theme__appBar--3Py1Z7Yt {\n  background: rgb(48, 63, 159);\n  color: rgb(255, 255, 255);\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  height: 64px;\n  padding: 0 24px;\n  transition-duration: 0.5s;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  box-sizing: border-box;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%\n}\n.theme__appBar--3Py1Z7Yt *, .theme__appBar--3Py1Z7Yt *::after, .theme__appBar--3Py1Z7Yt *::before {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n  -webkit-touch-callout: none;\n}\n.theme__appBar--3Py1Z7Yt.theme__scrollHide--PyOfnGXo {\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n.theme__appBar--3Py1Z7Yt:not(.theme__flat--1J9he0FF) {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14),\n    0 1px 10px 0 rgba(0, 0, 0, .12),\n    0 2px 4px -1px rgba(0, 0, 0, .2);\n}\n.theme__appBar--3Py1Z7Yt.theme__fixed--2dwFxCIA {\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 300;\n}\n.theme__appBar--3Py1Z7Yt .theme__inner--lGWLJvyn {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n.theme__appBar--3Py1Z7Yt a {\n  color: rgb(255, 255, 255);\n}\n@media screen and (max-width: 480px) and (orientation: portrait) {\n  .theme__appBar--3Py1Z7Yt {\n    height: 56px;\n  }\n}\n@media screen and (max-width: 600px) and (orientation: landscape) {\n  .theme__appBar--3Py1Z7Yt {\n    height: 48px;\n  }\n}\n.theme__title--37vttlwJ {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  font-size: 18px;\n  font-weight: bold;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap\n}\n.theme__title--37vttlwJ > small {\n  font-size: 18px;\n  font-weight: normal;\n}\n.theme__leftIcon--30BcY3V7 {\n  margin-left: -12px;\n}\n.theme__rightIcon--1hv3PN3j {\n  margin-left: auto;\n  margin-right: -12px;\n}\n", "", {"version":3,"sources":["/Volumes/WORK/doom-day-device/ddserver-ui/node_modules/react-toolbox/lib/app_bar/theme.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB,oCAAoC;AACpC,oCAAoC;AACpC;EACE,6BAA6B;EAC7B,0BAA0B;EAC1B,wDAAwD;EACxD,aAAa;EACb,gBAAgB;EAChB,0BAA0B;EAC1B,uCAAuC;EACvC,+BAA+B;EAC/B,kDAAkD;EAClD,gEAAgE;EAChE,uBAAuB;EACvB,wDAAwD;EACxD,oCAAoC;EACpC,4BAA4B;EAC5B,+BAA+B;MAC3B,2BAA2B;UACvB,sBAAsB;CAC/B;AACD;EACE,uBAAuB;EACvB,oCAAoC;EACpC,4BAA4B;EAC5B,+BAA+B;MAC3B,2BAA2B;UACvB,uBAAuB;EAC/B,4BAA4B;CAC7B;AACD;EACE,qCAAqC;UAC7B,6BAA6B;CACtC;AACD;EACE;;qCAEmC;CACpC;AACD;EACE,QAAQ;EACR,gBAAgB;EAChB,SAAS;EACT,OAAO;EACP,aAAa;CACd;AACD;EACE,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,0BAA0B;CAC3B;AACD;EACE;IACE,aAAa;GACd;CACF;AACD;EACE;IACE,aAAa;GACd;CACF;AACD;EACE,oBAAoB;MAChB,qBAAqB;UACjB,aAAa;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,wBAAwB;EACxB,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,oBAAoB;CACrB","file":"theme.css","sourcesContent":["/* Orientation */\n/* Devices (defined by max width) */\n/* Devices (defined by min-width) */\n.appBar {\n  background: rgb(48, 63, 159);\n  color: rgb(255, 255, 255);\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  height: 64px;\n  padding: 0 24px;\n  transition-duration: 0.5s;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  box-sizing: border-box;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%\n}\n.appBar *, .appBar *::after, .appBar *::before {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n  -webkit-touch-callout: none;\n}\n.appBar.scrollHide {\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n.appBar:not(.flat) {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14),\n    0 1px 10px 0 rgba(0, 0, 0, .12),\n    0 2px 4px -1px rgba(0, 0, 0, .2);\n}\n.appBar.fixed {\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 300;\n}\n.appBar .inner {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n.appBar a {\n  color: rgb(255, 255, 255);\n}\n@media screen and (max-width: 480px) and (orientation: portrait) {\n  .appBar {\n    height: 56px;\n  }\n}\n@media screen and (max-width: 600px) and (orientation: landscape) {\n  .appBar {\n    height: 48px;\n  }\n}\n.title {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  font-size: 18px;\n  font-weight: bold;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap\n}\n.title > small {\n  font-size: 18px;\n  font-weight: normal;\n}\n.leftIcon {\n  margin-left: -12px;\n}\n.rightIcon {\n  margin-left: auto;\n  margin-right: -12px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"appBar": "theme__appBar--3Py1Z7Yt",
	"scrollHide": "theme__scrollHide--PyOfnGXo",
	"flat": "theme__flat--1J9he0FF",
	"fixed": "theme__fixed--2dwFxCIA",
	"inner": "theme__inner--lGWLJvyn",
	"title": "theme__title--37vttlwJ",
	"leftIcon": "theme__leftIcon--30BcY3V7",
	"rightIcon": "theme__rightIcon--1hv3PN3j"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./node_modules/react-toolbox/lib/button/theme.css":
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"modules":true,"sourceMap":true,"localIdentName":"[name]__[local]--[hash:base64:8]"}!./~/postcss-loader/lib!./~/react-toolbox/lib/button/theme.css ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".theme__button--2AgdxWh4 {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  font-size: 14px;\n  font-weight: 500;\n  height: 36px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  letter-spacing: 0;\n  line-height: 36px;\n  outline: none;\n  padding: 0;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition:\n    box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),\n    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),\n    color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  white-space: nowrap;\n  box-sizing: border-box;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%\n}\n.theme__button--2AgdxWh4 *, .theme__button--2AgdxWh4 *::after, .theme__button--2AgdxWh4 *::before {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n  -webkit-touch-callout: none;\n}\n.theme__button--2AgdxWh4 > input {\n  height: 0.1px;\n  margin: 0;\n  opacity: 0;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 0.1px;\n  z-index: 0;\n}\n.theme__button--2AgdxWh4::-moz-focus-inner {\n  border: 0;\n}\n.theme__button--2AgdxWh4 > span:not([data-react-toolbox='tooltip']) {\n  display: inline-block;\n  line-height: 36px;\n  vertical-align: middle;\n}\n.theme__button--2AgdxWh4 > svg {\n  display: inline-block;\n  fill: currentColor;\n  font-size: 120%;\n  height: 36px;\n  vertical-align: top;\n  width: 1em;\n}\n.theme__button--2AgdxWh4 > * {\n  pointer-events: none;\n}\n.theme__button--2AgdxWh4 > .theme__rippleWrapper--3AVBixZJ {\n  overflow: hidden;\n}\n.theme__button--2AgdxWh4[disabled] {\n  color: rgba(0, 0, 0, 0.26);\n  cursor: auto;\n  pointer-events: none;\n}\n.theme__squared--2GH_LI4r {\n  border-radius: 2px;\n  min-width: 90px;\n  padding: 0 12px\n}\n.theme__squared--2GH_LI4r .theme__icon--3aBSXDLw {\n  font-size: 120%;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.theme__squared--2GH_LI4r > svg {\n  margin-right: 5px;\n}\n.theme__solid--1ZxqC96o[disabled] {\n  background-color: rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),\n    0 3px 1px -2px rgba(0, 0, 0, .2),\n    0 1px 5px 0 rgba(0, 0, 0, .12);\n}\n.theme__solid--1ZxqC96o:active {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),\n    0 3px 1px -2px rgba(0, 0, 0, .2),\n    0 1px 5px 0 rgba(0, 0, 0, .12);\n}\n.theme__solid--1ZxqC96o:focus:not(:active) {\n  box-shadow:\n      0 0 8px rgba(0, 0, 0, .18),\n      0 8px 16px rgba(0, 0, 0, .36);\n}\n.theme__raised--221icDvl {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),\n    0 3px 1px -2px rgba(0, 0, 0, .2),\n    0 1px 5px 0 rgba(0, 0, 0, .12);\n}\n.theme__flat--1jWAQA6f {\n  background: transparent;\n}\n.theme__floating--3IRMZ7-n {\n  border-radius: 50%;\n  box-shadow:\n    0 1px 1.5px 0 rgba(0, 0, 0, .12),\n    0 1px 1px 0 rgba(0, 0, 0, .24);\n  font-size: 24px;\n  height: 56px;\n  width: 56px\n}\n.theme__floating--3IRMZ7-n .theme__icon--3aBSXDLw:not([data-react-toolbox='tooltip']) {\n  line-height: 56px;\n}\n.theme__floating--3IRMZ7-n > .theme__rippleWrapper--3AVBixZJ {\n  border-radius: 50%;\n}\n.theme__floating--3IRMZ7-n.theme__mini--2DCN-0B2 {\n  font-size: 17.77778px;\n  height: 40px;\n  width: 40px;\n}\n.theme__floating--3IRMZ7-n.theme__mini--2DCN-0B2 .theme__icon--3aBSXDLw {\n  font-size: 17.77778px;\n  line-height: 40px;\n}\n.theme__toggle--hC5Z2BVI {\n  background: transparent;\n  border-radius: 50%;\n  vertical-align: middle;\n  width: 36px\n}\n.theme__toggle--hC5Z2BVI > .theme__icon--3aBSXDLw, .theme__toggle--hC5Z2BVI svg {\n  font-size: 20px;\n  line-height: 36px;\n  vertical-align: top;\n}\n.theme__toggle--hC5Z2BVI > .theme__rippleWrapper--3AVBixZJ {\n  border-radius: 50%;\n}\n.theme__primary--3tTAWEo9:not([disabled]).theme__raised--221icDvl, .theme__primary--3tTAWEo9:not([disabled]).theme__floating--3IRMZ7-n {\n  background: rgb(63, 81, 181);\n  color: rgb(255, 255, 255);\n}\n.theme__primary--3tTAWEo9:not([disabled]).theme__flat--1jWAQA6f, .theme__primary--3tTAWEo9:not([disabled]).theme__toggle--hC5Z2BVI {\n  color: rgb(63, 81, 181);\n}\n.theme__primary--3tTAWEo9:not([disabled]).theme__flat--1jWAQA6f:focus:not(:active), .theme__primary--3tTAWEo9:not([disabled]).theme__toggle--hC5Z2BVI:focus:not(:active) {\n  background: rgba(63, 81, 181, 0.2);\n}\n.theme__primary--3tTAWEo9:not([disabled]).theme__flat--1jWAQA6f:hover {\n  background: rgba(63, 81, 181, 0.2);\n}\n.theme__accent--2wp6F0vq:not([disabled]).theme__raised--221icDvl, .theme__accent--2wp6F0vq:not([disabled]).theme__floating--3IRMZ7-n {\n  background: rgb(255, 64, 129);\n  color: rgb(255, 255, 255);\n}\n.theme__accent--2wp6F0vq:not([disabled]).theme__flat--1jWAQA6f, .theme__accent--2wp6F0vq:not([disabled]).theme__toggle--hC5Z2BVI {\n  color: rgb(255, 64, 129);\n}\n.theme__accent--2wp6F0vq:not([disabled]).theme__flat--1jWAQA6f:focus:not(:active), .theme__accent--2wp6F0vq:not([disabled]).theme__toggle--hC5Z2BVI:focus:not(:active) {\n  background: rgba(255, 64, 129, 0.2);\n}\n.theme__accent--2wp6F0vq:not([disabled]).theme__flat--1jWAQA6f:hover {\n  background: rgba(255, 64, 129, 0.2);\n}\n.theme__neutral--2CPs4al7:not([disabled]).theme__raised--221icDvl, .theme__neutral--2CPs4al7:not([disabled]).theme__floating--3IRMZ7-n {\n  background-color: rgb(255, 255, 255);\n  color: rgb(33, 33, 33);\n}\n.theme__neutral--2CPs4al7:not([disabled]).theme__flat--1jWAQA6f, .theme__neutral--2CPs4al7:not([disabled]).theme__toggle--hC5Z2BVI {\n  color: rgb(33, 33, 33);\n}\n.theme__neutral--2CPs4al7:not([disabled]).theme__flat--1jWAQA6f:focus:not(:active), .theme__neutral--2CPs4al7:not([disabled]).theme__toggle--hC5Z2BVI:focus:not(:active) {\n  background: rgba(33, 33, 33, 0.2);\n}\n.theme__neutral--2CPs4al7:not([disabled]).theme__flat--1jWAQA6f:hover {\n  background: rgba(33, 33, 33, 0.2);\n}\n.theme__neutral--2CPs4al7:not([disabled]).theme__inverse--2SPZrzR1.theme__raised--221icDvl, .theme__neutral--2CPs4al7:not([disabled]).theme__inverse--2SPZrzR1.theme__floating--3IRMZ7-n {\n  background-color: rgb(33, 33, 33);\n  color: rgb(255, 255, 255);\n}\n.theme__neutral--2CPs4al7:not([disabled]).theme__inverse--2SPZrzR1.theme__flat--1jWAQA6f, .theme__neutral--2CPs4al7:not([disabled]).theme__inverse--2SPZrzR1.theme__toggle--hC5Z2BVI {\n  color: rgb(255, 255, 255);\n}\n.theme__neutral--2CPs4al7:not([disabled]).theme__inverse--2SPZrzR1.theme__flat--1jWAQA6f:focus:not(:active), .theme__neutral--2CPs4al7:not([disabled]).theme__inverse--2SPZrzR1.theme__toggle--hC5Z2BVI:focus:not(:active) {\n  background: rgba(33, 33, 33, 0.2);\n}\n.theme__neutral--2CPs4al7:not([disabled]).theme__inverse--2SPZrzR1.theme__flat--1jWAQA6f:hover {\n  background: rgba(33, 33, 33, 0.2);\n}\n.theme__neutral--2CPs4al7.theme__inverse--2SPZrzR1[disabled] {\n  background-color: rgba(0, 0, 0, 0.08);\n  color: rgba(0, 0, 0, 0.54);\n}\n", "", {"version":3,"sources":["/Volumes/WORK/doom-day-device/ddserver-ui/node_modules/react-toolbox/lib/button/theme.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;MACvB,sBAAsB;EAC1B,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,UAAU;EACV,gBAAgB;EAChB,sBAAsB;EACtB,+BAA+B;EAC/B,8BAA8B;MAC1B,wBAAwB;UACpB,oBAAoB;EAC5B,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,kBAAkB;EAClB,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,sBAAsB;EACtB,0BAA0B;EAC1B;;;4CAG0C;EAC1C,oBAAoB;EACpB,uBAAuB;EACvB,wDAAwD;EACxD,oCAAoC;EACpC,4BAA4B;EAC5B,+BAA+B;MAC3B,2BAA2B;UACvB,sBAAsB;CAC/B;AACD;EACE,uBAAuB;EACvB,oCAAoC;EACpC,4BAA4B;EAC5B,+BAA+B;MAC3B,2BAA2B;UACvB,uBAAuB;EAC/B,4BAA4B;CAC7B;AACD;EACE,cAAc;EACd,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,WAAW;CACZ;AACD;EACE,UAAU;CACX;AACD;EACE,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;CACxB;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,oBAAoB;EACpB,WAAW;CACZ;AACD;EACE,qBAAqB;CACtB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,2BAA2B;EAC3B,aAAa;EACb,qBAAqB;CACtB;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;CACxB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,sCAAsC;EACtC;;mCAEiC;CAClC;AACD;EACE;;mCAEiC;CAClC;AACD;EACE;;oCAEkC;CACnC;AACD;EACE;;mCAEiC;CAIlC;AACD;EACE,wBAAwB;CAGzB;AACD;EACE,mBAAmB;EACnB;;mCAEiC;EAGjC,gBAAgB;EAChB,aAAa;EACb,WAAW;CACZ;AACD;EACE,kBAAkB;CACnB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,aAAa;EACb,YAAY;CACb;AACD;EACE,sBAAsB;EACtB,kBAAkB;CACnB;AACD;EACE,wBAAwB;EACxB,mBAAmB;EAEnB,uBAAuB;EACvB,WAAW;CACZ;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,6BAA6B;EAC7B,0BAA0B;CAC3B;AACD;EACE,wBAAwB;CACzB;AACD;EACE,mCAAmC;CACpC;AACD;EACE,mCAAmC;CACpC;AACD;EACE,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,yBAAyB;CAC1B;AACD;EACE,oCAAoC;CACrC;AACD;EACE,oCAAoC;CACrC;AACD;EACE,qCAAqC;EACrC,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,kCAAkC;CACnC;AACD;EACE,kCAAkC;CACnC;AACD;EACE,kCAAkC;EAClC,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,kCAAkC;CACnC;AACD;EACE,kCAAkC;CACnC;AACD;EACE,sCAAsC;EACtC,2BAA2B;CAC5B","file":"theme.css","sourcesContent":[".button {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  font-size: 14px;\n  font-weight: 500;\n  height: 36px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  letter-spacing: 0;\n  line-height: 36px;\n  outline: none;\n  padding: 0;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition:\n    box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),\n    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),\n    color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  white-space: nowrap;\n  box-sizing: border-box;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%\n}\n.button *, .button *::after, .button *::before {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n  -webkit-touch-callout: none;\n}\n.button > input {\n  height: 0.1px;\n  margin: 0;\n  opacity: 0;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 0.1px;\n  z-index: 0;\n}\n.button::-moz-focus-inner {\n  border: 0;\n}\n.button > span:not([data-react-toolbox='tooltip']) {\n  display: inline-block;\n  line-height: 36px;\n  vertical-align: middle;\n}\n.button > svg {\n  display: inline-block;\n  fill: currentColor;\n  font-size: 120%;\n  height: 36px;\n  vertical-align: top;\n  width: 1em;\n}\n.button > * {\n  pointer-events: none;\n}\n.button > .rippleWrapper {\n  overflow: hidden;\n}\n.button[disabled] {\n  color: rgba(0, 0, 0, 0.26);\n  cursor: auto;\n  pointer-events: none;\n}\n.squared {\n  border-radius: 2px;\n  min-width: 90px;\n  padding: 0 12px\n}\n.squared .icon {\n  font-size: 120%;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.squared > svg {\n  margin-right: 5px;\n}\n.solid[disabled] {\n  background-color: rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),\n    0 3px 1px -2px rgba(0, 0, 0, .2),\n    0 1px 5px 0 rgba(0, 0, 0, .12);\n}\n.solid:active {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),\n    0 3px 1px -2px rgba(0, 0, 0, .2),\n    0 1px 5px 0 rgba(0, 0, 0, .12);\n}\n.solid:focus:not(:active) {\n  box-shadow:\n      0 0 8px rgba(0, 0, 0, .18),\n      0 8px 16px rgba(0, 0, 0, .36);\n}\n.raised {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),\n    0 3px 1px -2px rgba(0, 0, 0, .2),\n    0 1px 5px 0 rgba(0, 0, 0, .12);\n  composes: button;\n  composes: squared;\n  composes: solid;\n}\n.flat {\n  background: transparent;\n  composes: button;\n  composes: squared;\n}\n.floating {\n  border-radius: 50%;\n  box-shadow:\n    0 1px 1.5px 0 rgba(0, 0, 0, .12),\n    0 1px 1px 0 rgba(0, 0, 0, .24);\n  composes: button;\n  composes: solid;\n  font-size: 24px;\n  height: 56px;\n  width: 56px\n}\n.floating .icon:not([data-react-toolbox='tooltip']) {\n  line-height: 56px;\n}\n.floating > .rippleWrapper {\n  border-radius: 50%;\n}\n.floating.mini {\n  font-size: 17.77778px;\n  height: 40px;\n  width: 40px;\n}\n.floating.mini .icon {\n  font-size: 17.77778px;\n  line-height: 40px;\n}\n.toggle {\n  background: transparent;\n  border-radius: 50%;\n  composes: button;\n  vertical-align: middle;\n  width: 36px\n}\n.toggle > .icon, .toggle svg {\n  font-size: 20px;\n  line-height: 36px;\n  vertical-align: top;\n}\n.toggle > .rippleWrapper {\n  border-radius: 50%;\n}\n.primary:not([disabled]).raised, .primary:not([disabled]).floating {\n  background: rgb(63, 81, 181);\n  color: rgb(255, 255, 255);\n}\n.primary:not([disabled]).flat, .primary:not([disabled]).toggle {\n  color: rgb(63, 81, 181);\n}\n.primary:not([disabled]).flat:focus:not(:active), .primary:not([disabled]).toggle:focus:not(:active) {\n  background: rgba(63, 81, 181, 0.2);\n}\n.primary:not([disabled]).flat:hover {\n  background: rgba(63, 81, 181, 0.2);\n}\n.accent:not([disabled]).raised, .accent:not([disabled]).floating {\n  background: rgb(255, 64, 129);\n  color: rgb(255, 255, 255);\n}\n.accent:not([disabled]).flat, .accent:not([disabled]).toggle {\n  color: rgb(255, 64, 129);\n}\n.accent:not([disabled]).flat:focus:not(:active), .accent:not([disabled]).toggle:focus:not(:active) {\n  background: rgba(255, 64, 129, 0.2);\n}\n.accent:not([disabled]).flat:hover {\n  background: rgba(255, 64, 129, 0.2);\n}\n.neutral:not([disabled]).raised, .neutral:not([disabled]).floating {\n  background-color: rgb(255, 255, 255);\n  color: rgb(33, 33, 33);\n}\n.neutral:not([disabled]).flat, .neutral:not([disabled]).toggle {\n  color: rgb(33, 33, 33);\n}\n.neutral:not([disabled]).flat:focus:not(:active), .neutral:not([disabled]).toggle:focus:not(:active) {\n  background: rgba(33, 33, 33, 0.2);\n}\n.neutral:not([disabled]).flat:hover {\n  background: rgba(33, 33, 33, 0.2);\n}\n.neutral:not([disabled]).inverse.raised, .neutral:not([disabled]).inverse.floating {\n  background-color: rgb(33, 33, 33);\n  color: rgb(255, 255, 255);\n}\n.neutral:not([disabled]).inverse.flat, .neutral:not([disabled]).inverse.toggle {\n  color: rgb(255, 255, 255);\n}\n.neutral:not([disabled]).inverse.flat:focus:not(:active), .neutral:not([disabled]).inverse.toggle:focus:not(:active) {\n  background: rgba(33, 33, 33, 0.2);\n}\n.neutral:not([disabled]).inverse.flat:hover {\n  background: rgba(33, 33, 33, 0.2);\n}\n.neutral.inverse[disabled] {\n  background-color: rgba(0, 0, 0, 0.08);\n  color: rgba(0, 0, 0, 0.54);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"button": "theme__button--2AgdxWh4",
	"rippleWrapper": "theme__rippleWrapper--3AVBixZJ",
	"squared": "theme__squared--2GH_LI4r",
	"icon": "theme__icon--3aBSXDLw",
	"solid": "theme__solid--1ZxqC96o",
	"raised": "theme__raised--221icDvl theme__button--2AgdxWh4 theme__squared--2GH_LI4r theme__solid--1ZxqC96o",
	"flat": "theme__flat--1jWAQA6f theme__button--2AgdxWh4 theme__squared--2GH_LI4r",
	"floating": "theme__floating--3IRMZ7-n theme__button--2AgdxWh4 theme__solid--1ZxqC96o",
	"mini": "theme__mini--2DCN-0B2",
	"toggle": "theme__toggle--hC5Z2BVI theme__button--2AgdxWh4",
	"primary": "theme__primary--3tTAWEo9",
	"accent": "theme__accent--2wp6F0vq",
	"neutral": "theme__neutral--2CPs4al7",
	"inverse": "theme__inverse--2SPZrzR1"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./node_modules/react-toolbox/lib/ripple/theme.css":
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"modules":true,"sourceMap":true,"localIdentName":"[name]__[local]--[hash:base64:8]"}!./~/postcss-loader/lib!./~/react-toolbox/lib/ripple/theme.css ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".theme__rippleWrapper--16N7otiF {\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n.theme__ripple--3SV_uZxJ {\n  background-color: currentColor;\n  border-radius: 50%;\n  left: 50%;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  transition-duration: 800ms;\n  z-index: 100\n}\n.theme__ripple--3SV_uZxJ.theme__rippleRestarting--2OZWaagQ {\n  opacity: 0.3;\n  transition-property: none;\n}\n.theme__ripple--3SV_uZxJ.theme__rippleActive--3O2Ue7k9 {\n  opacity: 0.3;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.theme__ripple--3SV_uZxJ:not(.theme__rippleActive--3O2Ue7k9):not(.theme__rippleRestarting--2OZWaagQ) {\n  opacity: 0;\n  transition-property: opacity, -webkit-transform;\n  transition-property: opacity, transform;\n  transition-property: opacity, transform, -webkit-transform;\n}\n", "", {"version":3,"sources":["/Volumes/WORK/doom-day-device/ddserver-ui/node_modules/react-toolbox/lib/ripple/theme.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,QAAQ;EACR,qBAAqB;EACrB,mBAAmB;EACnB,SAAS;EACT,OAAO;EACP,WAAW;CACZ;AACD;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,UAAU;EACV,qBAAqB;EACrB,mBAAmB;EACnB,SAAS;EACT,kCAAkC;UAC1B,0BAA0B;EAClC,2BAA2B;EAC3B,YAAY;CACb;AACD;EACE,aAAa;EACb,0BAA0B;CAC3B;AACD;EACE,aAAa;EACb,uCAAuC;EACvC,+BAA+B;EAC/B,kDAAkD;CACnD;AACD;EACE,WAAW;EACX,gDAAgD;EAChD,wCAAwC;EACxC,2DAA2D;CAC5D","file":"theme.css","sourcesContent":[".rippleWrapper {\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n.ripple {\n  background-color: currentColor;\n  border-radius: 50%;\n  left: 50%;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  transition-duration: 800ms;\n  z-index: 100\n}\n.ripple.rippleRestarting {\n  opacity: 0.3;\n  transition-property: none;\n}\n.ripple.rippleActive {\n  opacity: 0.3;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.ripple:not(.rippleActive):not(.rippleRestarting) {\n  opacity: 0;\n  transition-property: opacity, -webkit-transform;\n  transition-property: opacity, transform;\n  transition-property: opacity, transform, -webkit-transform;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"rippleWrapper": "theme__rippleWrapper--16N7otiF",
	"ripple": "theme__ripple--3SV_uZxJ",
	"rippleRestarting": "theme__rippleRestarting--2OZWaagQ",
	"rippleActive": "theme__rippleActive--3O2Ue7k9"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./src/css/layout.css":
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"modules":true,"sourceMap":true,"localIdentName":"[name]__[local]--[hash:base64:8]"}!./~/postcss-loader/lib!./src/css/layout.css ***!
  \********************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "html, body, root{\n    margin: 0px;\n    padding: 0px;\n}\n/*\n.appbar{\n    padding: 0px 1em;\n    background-color: cornflowerblue;\n}\n.appbar h1{\n    padding: 0px;\n    margin: 0px;\n}\n\n\n.dashboard .widget{\n    display: inline-block;\n    width: 300px;\n    min-height: 10px;\n    border: 1px dashed black;\n    margin:5px;\n}\n\n.widget .header .btnConfig{\n    float:right;\n}\n\n\n\n\n\n.widget .actions{\n    display: flex;\n    justify-content: space-around;\n    align-items: stretch;\n}\n*/", "", {"version":3,"sources":["/Volumes/WORK/doom-day-device/ddserver-ui/src/css/layout.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;CAChB;AACD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAgCE","file":"layout.css","sourcesContent":["html, body, root{\n    margin: 0px;\n    padding: 0px;\n}\n/*\n.appbar{\n    padding: 0px 1em;\n    background-color: cornflowerblue;\n}\n.appbar h1{\n    padding: 0px;\n    margin: 0px;\n}\n\n\n.dashboard .widget{\n    display: inline-block;\n    width: 300px;\n    min-height: 10px;\n    border: 1px dashed black;\n    margin:5px;\n}\n\n.widget .header .btnConfig{\n    float:right;\n}\n\n\n\n\n\n.widget .actions{\n    display: flex;\n    justify-content: space-around;\n    align-items: stretch;\n}\n*/"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./src/dashboard/dashboard-styles.css":
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"modules":true,"sourceMap":true,"localIdentName":"[name]__[local]--[hash:base64:8]"}!./~/postcss-loader/lib!./src/dashboard/dashboard-styles.css ***!
  \************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".dashboard-styles__dashboard--2ODfQtsi{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;    \n}\n\n.dashboard-styles__dashboard--2ODfQtsi .dashboard-styles__widget--1kQWfgtr{\n    display: inline-block;\n    width: 300px;\n    min-height: 10px;\n    border: 1px dashed black;\n    margin:5px;\n}", "", {"version":3,"sources":["/Volumes/WORK/doom-day-device/ddserver-ui/src/dashboard/dashboard-styles.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,oBAAoB;QAChB,gBAAgB;CACvB;;AAED;IACI,sBAAsB;IACtB,aAAa;IACb,iBAAiB;IACjB,yBAAyB;IACzB,WAAW;CACd","file":"dashboard-styles.css","sourcesContent":[".dashboard{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;    \n}\n\n.dashboard .widget{\n    display: inline-block;\n    width: 300px;\n    min-height: 10px;\n    border: 1px dashed black;\n    margin:5px;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"dashboard": "dashboard-styles__dashboard--2ODfQtsi",
	"widget": "dashboard-styles__widget--1kQWfgtr"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./src/dashboard/default-widget/sensor-styles.css":
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"modules":true,"sourceMap":true,"localIdentName":"[name]__[local]--[hash:base64:8]"}!./~/postcss-loader/lib!./src/dashboard/default-widget/sensor-styles.css ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.sensor-styles__sensor_number--T0_b9QG2{\n\n}\n\n\n.sensor-styles__progress--12qqz78f{\n    display: block;\n    height: 10px;\n    position: relative;\n    border:1px solid gray;\n    margin: 0px 0px;    \n}\n\n\n.sensor-styles__progress--12qqz78f>.sensor-styles__bar--sEugU17-{\n        display: block;\n        position: absolute;\n        top:0px;\n        left: 0px;\n        height: 100%;\n        background-color: orangered;\n        transition:width 90ms 0ms ease;\n}\n\n\n.sensor-styles__sensor_val--2Bf3fY3G{\n\n}\n\n\n.sensor-styles__sensor_val--2Bf3fY3G .sensor-styles__options--8arlYE-H{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n}\n\n\n.sensor-styles__sensor_val--2Bf3fY3G .sensor-styles__options--8arlYE-H .sensor-styles__option--Vf0uveF2, .sensor-styles__option_active--uT0SW8Fe{\n    border-radius: 100px;   \n    padding: 0.1em 0.5em;\n    border:1px dotted black;    \n}\n\n\n.sensor-styles__sensor_val--2Bf3fY3G .sensor-styles__options--8arlYE-H .sensor-styles__option--Vf0uveF2:before{\n    content: '\\25FB\\FE0E'\n}\n\n\n.sensor-styles__option_active--uT0SW8Fe{\n    border-color:green;\n    background-color: aquamarine;\n}\n\n\n.sensor-styles__option_active--uT0SW8Fe:before{\n    content: '\\2611\\FE0E'\n}\n\n\n.sensor-styles__sensor_flag--RU_SifSt{\n\n}\n\n\n.sensor-styles__sensor_flag--RU_SifSt .sensor-styles__flags--1bZZquly{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n}\n\n\n.sensor-styles__sensor_flag--RU_SifSt .sensor-styles__flags--1bZZquly .sensor-styles__flag--2oSUUWpe{\n    border-radius: 100px;    \n    padding: 0.1em 0.5em;\n    border:1px dotted black;\n}\n\n\n.sensor-styles__sensor_flag--RU_SifSt .sensor-styles__flags--1bZZquly .sensor-styles__flag--2oSUUWpe:before{\n    content:'\\25FB\\FE0E';\n}\n\n\n.slider {\n    position:absolute;    \n    height:10px;\n    width:300px;\n    background-color:green;\n}\n\n\n.slider .handle {\n    position:absolute;\n    height:10px;\n    width:20px;\n    background-color:red;\n}", "", {"version":3,"sources":["/Volumes/WORK/doom-day-device/ddserver-ui/src/dashboard/default-widget/sensor-styles.css"],"names":[],"mappings":";AACA;;CAEC;;;AAGD;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,gBAAgB;CACnB;;;AAGD;QACQ,eAAe;QACf,mBAAmB;QACnB,QAAQ;QACR,UAAU;QACV,aAAa;QACb,4BAA4B;QAC5B,+BAA+B;CACtC;;;AAGD;;CAEC;;;AAGD;IACI,oBAAoB;IACpB,oBAAoB;IACpB,aAAa;IACb,+BAA+B;IAC/B,8BAA8B;QAC1B,wBAAwB;YACpB,oBAAoB;IAC5B,0BAA0B;QACtB,8BAA8B;IAClC,4BAA4B;QACxB,uBAAuB;CAC9B;;;AAGD;IACI,qBAAqB;IACrB,qBAAqB;IACrB,wBAAwB;CAC3B;;;AAGD;IACI,qBAAa;CAChB;;;AAGD;IACI,mBAAmB;IACnB,6BAA6B;CAChC;;;AAGD;IACI,qBAAa;CAChB;;;AAGD;;CAEC;;;AAGD;IACI,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,+BAA+B;IAC/B,8BAA8B;QAC1B,wBAAwB;YACpB,oBAAoB;IAC5B,0BAA0B;QACtB,8BAA8B;IAClC,4BAA4B;QACxB,uBAAuB;CAC9B;;;AAGD;IACI,qBAAqB;IACrB,qBAAqB;IACrB,wBAAwB;CAC3B;;;AAGD;IACI,qBAAa;CAChB;;;AAGD;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,uBAAuB;CAC1B;;;AAGD;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,qBAAqB;CACxB","file":"sensor-styles.css","sourcesContent":["\n.sensor_number{\n\n}\n\n\n.progress{\n    display: block;\n    height: 10px;\n    position: relative;\n    border:1px solid gray;\n    margin: 0px 0px;    \n}\n\n\n.progress>.bar{\n        display: block;\n        position: absolute;\n        top:0px;\n        left: 0px;\n        height: 100%;\n        background-color: orangered;\n        transition:width 90ms 0ms ease;\n}\n\n\n.sensor_val{\n\n}\n\n\n.sensor_val .options{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n}\n\n\n.sensor_val .options .option, .option_active{\n    border-radius: 100px;   \n    padding: 0.1em 0.5em;\n    border:1px dotted black;    \n}\n\n\n.sensor_val .options .option:before{\n    content: '◻︎'\n}\n\n\n.option_active{\n    border-color:green;\n    background-color: aquamarine;\n}\n\n\n.option_active:before{\n    content: '☑︎'\n}\n\n\n.sensor_flag{\n\n}\n\n\n.sensor_flag .flags{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n}\n\n\n.sensor_flag .flags .flag{\n    border-radius: 100px;    \n    padding: 0.1em 0.5em;\n    border:1px dotted black;\n}\n\n\n.sensor_flag .flags .flag:before{\n    content:'◻︎';\n}\n\n\n:global .slider {\n    position:absolute;    \n    height:10px;\n    width:300px;\n    background-color:green;\n}\n\n\n:global .slider .handle {\n    position:absolute;\n    height:10px;\n    width:20px;\n    background-color:red;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"sensor_number": "sensor-styles__sensor_number--T0_b9QG2",
	"progress": "sensor-styles__progress--12qqz78f",
	"bar": "sensor-styles__bar--sEugU17-",
	"sensor_val": "sensor-styles__sensor_val--2Bf3fY3G",
	"options": "sensor-styles__options--8arlYE-H",
	"option": "sensor-styles__option--Vf0uveF2",
	"option_active": "sensor-styles__option_active--uT0SW8Fe",
	"sensor_flag": "sensor-styles__sensor_flag--RU_SifSt",
	"flags": "sensor-styles__flags--1bZZquly",
	"flag": "sensor-styles__flag--2oSUUWpe"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./src/dashboard/default-widget/trigger-styles.css":
/* no static exports found */
/* all exports used */
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"modules":true,"sourceMap":true,"localIdentName":"[name]__[local]--[hash:base64:8]"}!./~/postcss-loader/lib!./src/dashboard/default-widget/trigger-styles.css ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.trigger-styles__view--1PoZ_Odg{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.trigger-styles__view--1PoZ_Odg>.trigger-styles__content--WjhxBhZj{\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n\n.trigger-styles__view--1PoZ_Odg>.trigger-styles__actions--_9jONehc{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}", "", {"version":3,"sources":["/Volumes/WORK/doom-day-device/ddserver-ui/src/dashboard/default-widget/trigger-styles.css"],"names":[],"mappings":";AACA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,aAAa;IACb,6BAA6B;IAC7B,8BAA8B;QAC1B,2BAA2B;YACvB,uBAAuB;CAClC;;AAED;IACI,oBAAoB;QAChB,qBAAqB;YACjB,aAAa;CACxB;;AAED;IACI,4BAA4B;IAC5B,4BAA4B;IAC5B,qBAAqB;IACrB,0BAA0B;QACtB,8BAA8B;CACrC","file":"trigger-styles.css","sourcesContent":["\n.view{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.view>.content{\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n\n.view>.actions{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"view": "trigger-styles__view--1PoZ_Odg",
	"content": "trigger-styles__content--WjhxBhZj",
	"actions": "trigger-styles__actions--_9jONehc"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./src/dashboard/default-widget/widget-styles.css":
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"modules":true,"sourceMap":true,"localIdentName":"[name]__[local]--[hash:base64:8]"}!./~/postcss-loader/lib!./src/dashboard/default-widget/widget-styles.css ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".widget-styles__content--2ZGZa9ia{\n    position: relative;\n}\n.widget-styles__triggerParamPane--j7NMPfdE, .widget-styles__triggerParamPane_active--1zeQv6OR{\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    background-color: white;\n    height: 0%;\n    transition:height 100ms 100ms linear;\n    overflow: hidden;\n}\n.widget-styles__triggerParamPane_active--1zeQv6OR{\n    height: 100%;\n}\n.widget-styles__actions--gLWT1Ujl{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}", "", {"version":3,"sources":["/Volumes/WORK/doom-day-device/ddserver-ui/src/dashboard/default-widget/widget-styles.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;CACtB;AACD;IACI,mBAAmB;IACnB,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,wBAAwB;IACxB,WAAW;IACX,qCAAqC;IACrC,iBAAiB;CACpB;AACD;IACI,aAAa;CAChB;AACD;IACI,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,0BAA0B;QACtB,8BAA8B;CACrC","file":"widget-styles.css","sourcesContent":[".content{\n    position: relative;\n}\n.triggerParamPane, .triggerParamPane_active{\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    background-color: white;\n    height: 0%;\n    transition:height 100ms 100ms linear;\n    overflow: hidden;\n}\n.triggerParamPane_active{\n    height: 100%;\n}\n.actions{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"content": "widget-styles__content--2ZGZa9ia",
	"triggerParamPane": "widget-styles__triggerParamPane--j7NMPfdE",
	"triggerParamPane_active": "widget-styles__triggerParamPane_active--1zeQv6OR",
	"actions": "widget-styles__actions--gLWT1Ujl"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./src/dashboard/widget-styles.css":
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"modules":true,"sourceMap":true,"localIdentName":"[name]__[local]--[hash:base64:8]"}!./~/postcss-loader/lib!./src/dashboard/widget-styles.css ***!
  \*********************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".widget-styles__widget--1tZMiU2B{\n    display: inline-block;\n    width: 300px;\n    min-height: 10px;\n    border: 1px dashed black;\n    margin:5px;\n}\n\n.widget-styles__widget-header--2_WRVzyQ{\n\n}\n\n", "", {"version":3,"sources":["/Volumes/WORK/doom-day-device/ddserver-ui/src/dashboard/widget-styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,aAAa;IACb,iBAAiB;IACjB,yBAAyB;IACzB,WAAW;CACd;;AAED;;CAEC","file":"widget-styles.css","sourcesContent":[".widget{\n    display: inline-block;\n    width: 300px;\n    min-height: 10px;\n    border: 1px dashed black;\n    margin:5px;\n}\n\n.widget-header{\n\n}\n\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"widget": "widget-styles__widget--1tZMiU2B",
	"widget-header": "widget-styles__widget-header--2_WRVzyQ"
};

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
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

/***/ "./node_modules/hoist-non-react-statics/index.js":
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./~/hoist-non-react-statics/index.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./~/invariant/browser.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.eot":
/* no static exports found */
/* all exports used */
/*!********************************************************************!*\
  !*** ./~/material-design-icons/iconfont/MaterialIcons-Regular.eot ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e79bfd88537def476913f3ed52f4f4b3.eot";

/***/ }),

/***/ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.ttf":
/* no static exports found */
/* all exports used */
/*!********************************************************************!*\
  !*** ./~/material-design-icons/iconfont/MaterialIcons-Regular.ttf ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a37b0c01c0baf1888ca812cc0508f6e2.ttf";

/***/ }),

/***/ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff":
/* no static exports found */
/* all exports used */
/*!*********************************************************************!*\
  !*** ./~/material-design-icons/iconfont/MaterialIcons-Regular.woff ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "012cf6a10129e2275d79d6adac7f3b02.woff";

/***/ }),

/***/ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2":
/* no static exports found */
/* all exports used */
/*!**********************************************************************!*\
  !*** ./~/material-design-icons/iconfont/MaterialIcons-Regular.woff2 ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "570eb83859dc23dd0eec423a49e147fe.woff2";

/***/ }),

/***/ "./node_modules/material-design-icons/iconfont/material-icons.css":
/* no static exports found */
/* all exports used */
/*!*************************************************************!*\
  !*** ./~/material-design-icons/iconfont/material-icons.css ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader??ref--2-1!../../postcss-loader/lib!./material-icons.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./node_modules/material-design-icons/iconfont/material-icons.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js??ref--2-1!../../postcss-loader/lib/index.js!./material-icons.css", function() {
			var newContent = require("!!../../css-loader/index.js??ref--2-1!../../postcss-loader/lib/index.js!./material-icons.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
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



var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");
var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

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

/***/ "./node_modules/prop-types/index.js":
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
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/ramda/src/dissoc.js":
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./~/ramda/src/dissoc.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");


/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
module.exports = _curry2(function dissoc(prop, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
});


/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry1.js":
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/ramda/src/internal/_curry1.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

var _isPlaceholder = __webpack_require__(/*! ./_isPlaceholder */ "./node_modules/ramda/src/internal/_isPlaceholder.js");


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry2.js":
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/ramda/src/internal/_curry2.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _isPlaceholder = __webpack_require__(/*! ./_isPlaceholder */ "./node_modules/ramda/src/internal/_isPlaceholder.js");


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2
             : _curry1(function(_b) { return fn(a, _b); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b); })
             : fn(a, b);
    }
  };
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_has.js":
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./~/ramda/src/internal/_has.js ***!
  \**************************************/
/***/ (function(module, exports) {

module.exports = function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};


/***/ }),

/***/ "./node_modules/ramda/src/internal/_isArguments.js":
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/ramda/src/internal/_isArguments.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

var _has = __webpack_require__(/*! ./_has */ "./node_modules/ramda/src/internal/_has.js");


module.exports = (function() {
  var toString = Object.prototype.toString;
  return toString.call(arguments) === '[object Arguments]' ?
    function _isArguments(x) { return toString.call(x) === '[object Arguments]'; } :
    function _isArguments(x) { return _has('callee', x); };
}());


/***/ }),

/***/ "./node_modules/ramda/src/internal/_isPlaceholder.js":
/* no static exports found */
/* all exports used */
/*!************************************************!*\
  !*** ./~/ramda/src/internal/_isPlaceholder.js ***!
  \************************************************/
/***/ (function(module, exports) {

module.exports = function _isPlaceholder(a) {
  return a != null &&
         typeof a === 'object' &&
         a['@@functional/placeholder'] === true;
};


/***/ }),

/***/ "./node_modules/ramda/src/keys.js":
/* no static exports found */
/* all exports used */
/*!*****************************!*\
  !*** ./~/ramda/src/keys.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/src/internal/_curry1.js");
var _has = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/src/internal/_has.js");
var _isArguments = __webpack_require__(/*! ./internal/_isArguments */ "./node_modules/ramda/src/internal/_isArguments.js");


/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
module.exports = (function() {
  // cover IE < 9 keys issues
  var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString',
                            'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
  // Safari bug
  var hasArgsEnumBug = (function() {
    'use strict';
    return arguments.propertyIsEnumerable('length');
  }());

  var contains = function contains(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };

  return typeof Object.keys === 'function' && !hasArgsEnumBug ?
    _curry1(function keys(obj) {
      return Object(obj) !== obj ? [] : Object.keys(obj);
    }) :
    _curry1(function keys(obj) {
      if (Object(obj) !== obj) {
        return [];
      }
      var prop, nIdx;
      var ks = [];
      var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
      for (prop in obj) {
        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
          ks[ks.length] = prop;
        }
      }
      if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while (nIdx >= 0) {
          prop = nonEnumerableProps[nIdx];
          if (_has(prop, obj) && !contains(ks, prop)) {
            ks[ks.length] = prop;
          }
          nIdx -= 1;
        }
      }
      return ks;
    });
}());


/***/ }),

/***/ "./node_modules/react-css-themr/lib/components/ThemeProvider.js":
/* no static exports found */
/* all exports used */
/*!***********************************************************!*\
  !*** ./~/react-css-themr/lib/components/ThemeProvider.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _themrShape = __webpack_require__(/*! ../utils/themr-shape */ "./node_modules/react-css-themr/lib/utils/themr-shape.js");

var _themrShape2 = _interopRequireDefault(_themrShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThemeProvider = (_temp = _class = function (_Component) {
  _inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    _classCallCheck(this, ThemeProvider);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    return {
      themr: {
        theme: this.props.theme
      }
    };
  };

  ThemeProvider.prototype.render = function render() {
    return _react.Children.only(this.props.children);
  };

  return ThemeProvider;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.element.isRequired,
  theme: _propTypes2.default.object.isRequired
}, _class.defaultProps = {
  theme: {}
}, _class.childContextTypes = {
  themr: _themrShape2.default.isRequired
}, _temp);
exports.default = ThemeProvider;

/***/ }),

/***/ "./node_modules/react-css-themr/lib/components/themr.js":
/* no static exports found */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/react-css-themr/lib/components/themr.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.themeable = themeable;

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/index.js");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @typedef {Object.<string, TReactCSSThemrTheme>} TReactCSSThemrTheme
 */

/**
 * @typedef {{}} TReactCSSThemrOptions
 * @property {String|Boolean} [composeTheme=COMPOSE_DEEPLY]
 */

var COMPOSE_DEEPLY = 'deeply';
var COMPOSE_SOFTLY = 'softly';
var DONT_COMPOSE = false;

var DEFAULT_OPTIONS = {
  composeTheme: COMPOSE_DEEPLY,
  mapThemrProps: defaultMapThemrProps
};

var THEMR_CONFIG = typeof Symbol !== 'undefined' ? Symbol('THEMR_CONFIG') : '__REACT_CSS_THEMR_CONFIG__';

/**
 * Themr decorator
 * @param {String|Number|Symbol} componentName - Component name
 * @param {TReactCSSThemrTheme} [localTheme] - Base theme
 * @param {{}} [options] - Themr options
 * @returns {function(ThemedComponent:Function):Function} - ThemedComponent
 */

exports.default = function (componentName, localTheme) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return function (ThemedComponent) {
    var _class, _temp;

    var _DEFAULT_OPTIONS$opti = _extends({}, DEFAULT_OPTIONS, options),
        optionComposeTheme = _DEFAULT_OPTIONS$opti.composeTheme,
        optionMapThemrProps = _DEFAULT_OPTIONS$opti.mapThemrProps;

    validateComposeOption(optionComposeTheme);

    var config = ThemedComponent[THEMR_CONFIG];
    if (config && config.componentName === componentName) {
      config.localTheme = themeable(config.localTheme, localTheme);
      return ThemedComponent;
    }

    config = {
      componentName: componentName,
      localTheme: localTheme
    };

    /**
     * @property {{wrappedInstance: *}} refs
     */
    var Themed = (_temp = _class = function (_Component) {
      _inherits(Themed, _Component);

      function Themed() {
        _classCallCheck(this, Themed);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

        _this.theme_ = _this.calcTheme(_this.props);
        return _this;
      }

      Themed.prototype.getWrappedInstance = function getWrappedInstance() {
        (0, _invariant2.default)(true, 'DEPRECATED: To access the wrapped instance, you have to pass ' + '{ innerRef: fn } and retrieve with a callback ref style.');

        return this.refs.wrappedInstance;
      };

      Themed.prototype.getNamespacedTheme = function getNamespacedTheme(props) {
        var themeNamespace = props.themeNamespace,
            theme = props.theme;

        if (!themeNamespace) return theme;
        if (themeNamespace && !theme) throw new Error('Invalid themeNamespace use in react-css-themr. ' + 'themeNamespace prop should be used only with theme prop.');

        return Object.keys(theme).filter(function (key) {
          return key.startsWith(themeNamespace);
        }).reduce(function (result, key) {
          var _extends2;

          return _extends({}, result, (_extends2 = {}, _extends2[removeNamespace(key, themeNamespace)] = theme[key], _extends2));
        }, {});
      };

      Themed.prototype.getThemeNotComposed = function getThemeNotComposed(props) {
        if (props.theme) return this.getNamespacedTheme(props);
        if (config.localTheme) return config.localTheme;
        return this.getContextTheme();
      };

      Themed.prototype.getContextTheme = function getContextTheme() {
        return this.context.themr ? this.context.themr.theme[config.componentName] : {};
      };

      Themed.prototype.getTheme = function getTheme(props) {
        return props.composeTheme === COMPOSE_SOFTLY ? _extends({}, this.getContextTheme(), config.localTheme, this.getNamespacedTheme(props)) : themeable(themeable(this.getContextTheme(), config.localTheme), this.getNamespacedTheme(props));
      };

      Themed.prototype.calcTheme = function calcTheme(props) {
        var composeTheme = props.composeTheme;

        return composeTheme ? this.getTheme(props) : this.getThemeNotComposed(props);
      };

      Themed.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.composeTheme !== this.props.composeTheme || nextProps.theme !== this.props.theme || nextProps.themeNamespace !== this.props.themeNamespace) {
          this.theme_ = this.calcTheme(nextProps);
        }
      };

      Themed.prototype.render = function render() {
        return _react2.default.createElement(ThemedComponent, this.props.mapThemrProps(this.props, this.theme_));
      };

      return Themed;
    }(_react.Component), _class.displayName = 'Themed' + ThemedComponent.name, _class.contextTypes = {
      themr: _propTypes2.default.object
    }, _class.propTypes = _extends({}, ThemedComponent.propTypes, {
      composeTheme: _propTypes2.default.oneOf([COMPOSE_DEEPLY, COMPOSE_SOFTLY, DONT_COMPOSE]),
      innerRef: _propTypes2.default.func,
      theme: _propTypes2.default.object,
      themeNamespace: _propTypes2.default.string,
      mapThemrProps: _propTypes2.default.func
    }), _class.defaultProps = _extends({}, ThemedComponent.defaultProps, {
      composeTheme: optionComposeTheme,
      mapThemrProps: optionMapThemrProps
    }), _temp);


    Themed[THEMR_CONFIG] = config;

    return (0, _hoistNonReactStatics2.default)(Themed, ThemedComponent);
  };
};

/**
 * Merges passed themes by concatenating string keys and processing nested themes
 *
 * @param {...TReactCSSThemrTheme} themes - Themes
 * @returns {TReactCSSThemrTheme} - Resulting theme
 */


function themeable() {
  for (var _len2 = arguments.length, themes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    themes[_key2] = arguments[_key2];
  }

  return themes.reduce(function (acc, theme) {
    return merge(acc, theme);
  }, {});
}

/**
 * @param {TReactCSSThemrTheme} [original] - Original theme
 * @param {TReactCSSThemrTheme} [mixin] - Mixin theme
 * @returns {TReactCSSThemrTheme} - resulting theme
 */
function merge() {
  var original = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mixin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  //make a copy to avoid mutations of nested objects
  //also strip all functions injected by isomorphic-style-loader
  var result = Object.keys(original).reduce(function (acc, key) {
    var value = original[key];
    if (typeof value !== 'function') {
      acc[key] = value;
    }
    return acc;
  }, {});

  //traverse mixin keys and merge them to resulting theme
  Object.keys(mixin).forEach(function (key) {
    //there's no need to set any defaults here
    var originalValue = result[key];
    var mixinValue = mixin[key];

    switch (typeof mixinValue === 'undefined' ? 'undefined' : _typeof(mixinValue)) {
      case 'object':
        {
          //possibly nested theme object
          switch (typeof originalValue === 'undefined' ? 'undefined' : _typeof(originalValue)) {
            case 'object':
              {
                //exactly nested theme object - go recursive
                result[key] = merge(originalValue, mixinValue);
                break;
              }

            case 'undefined':
              {
                //original does not contain this nested key - just take it as is
                result[key] = mixinValue;
                break;
              }

            default:
              {
                //can't merge an object with a non-object
                throw new Error('You are merging object ' + key + ' with a non-object ' + originalValue);
              }
          }
          break;
        }

      case 'undefined': //fallthrough - handles accidentally unset values which may come from props
      case 'function':
        {
          //this handles issue when isomorphic-style-loader addes helper functions to css-module
          break; //just skip
        }

      default:
        {
          //plain values
          switch (typeof originalValue === 'undefined' ? 'undefined' : _typeof(originalValue)) {
            case 'object':
              {
                //can't merge a non-object with an object
                throw new Error('You are merging non-object ' + mixinValue + ' with an object ' + key);
              }

            case 'undefined':
              {
                //mixin key is new to original theme - take it as is
                result[key] = mixinValue;
                break;
              }
            case 'function':
              {
                //this handles issue when isomorphic-style-loader addes helper functions to css-module
                break; //just skip
              }

            default:
              {
                //finally we can merge
                result[key] = originalValue.split(' ').concat(mixinValue.split(' ')).filter(function (item, pos, self) {
                  return self.indexOf(item) === pos && item !== '';
                }).join(' ');
                break;
              }
          }
          break;
        }
    }
  });

  return result;
}

/**
 * Validates compose option
 *
 * @param {String|Boolean} composeTheme - Compose them option
 * @throws
 * @returns {undefined}
 */
function validateComposeOption(composeTheme) {
  if ([COMPOSE_DEEPLY, COMPOSE_SOFTLY, DONT_COMPOSE].indexOf(composeTheme) === -1) {
    throw new Error('Invalid composeTheme option for react-css-themr. Valid composition options are ' + COMPOSE_DEEPLY + ', ' + COMPOSE_SOFTLY + ' and ' + DONT_COMPOSE + '. The given option was ' + composeTheme);
  }
}

/**
 * Removes namespace from key
 *
 * @param {String} key - Key
 * @param {String} themeNamespace - Theme namespace
 * @returns {String} - Key
 */
function removeNamespace(key, themeNamespace) {
  var capitalized = key.substr(themeNamespace.length);
  return capitalized.slice(0, 1).toLowerCase() + capitalized.slice(1);
}

/**
 * Maps props and theme to an object that will be used to pass down props to the
 * decorated component.
 *
 * @param {Object} ownProps - All props given to the decorated component
 * @param {Object} theme - Calculated then that should be passed down
 * @returns {Object} - Props that will be passed down to the decorated component
 */
function defaultMapThemrProps(ownProps, theme) {
  var composeTheme = ownProps.composeTheme,
      innerRef = ownProps.innerRef,
      themeNamespace = ownProps.themeNamespace,
      mapThemrProps = ownProps.mapThemrProps,
      rest = _objectWithoutProperties(ownProps, ['composeTheme', 'innerRef', 'themeNamespace', 'mapThemrProps']);

  return _extends({}, rest, {
    ref: innerRef,
    theme: theme
  });
}

/***/ }),

/***/ "./node_modules/react-css-themr/lib/index.js":
/* no static exports found */
/* all exports used */
/*!****************************************!*\
  !*** ./~/react-css-themr/lib/index.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ThemeProvider = __webpack_require__(/*! ./components/ThemeProvider */ "./node_modules/react-css-themr/lib/components/ThemeProvider.js");

Object.defineProperty(exports, 'ThemeProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ThemeProvider).default;
  }
});

var _themr = __webpack_require__(/*! ./components/themr */ "./node_modules/react-css-themr/lib/components/themr.js");

Object.defineProperty(exports, 'themr', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_themr).default;
  }
});
Object.defineProperty(exports, 'themeable', {
  enumerable: true,
  get: function get() {
    return _themr.themeable;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-css-themr/lib/utils/themr-shape.js":
/* no static exports found */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/react-css-themr/lib/utils/themr-shape.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _propTypes2.default.shape({
  theme: _propTypes2.default.object.isRequired
});

/***/ }),

/***/ "./node_modules/react-slider/react-slider.js":
/* no static exports found */
/* all exports used */
/*!****************************************!*\
  !*** ./~/react-slider/react-slider.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ "./node_modules/react/react.js"),__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! create-react-class */ "./node_modules/create-react-class/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ "./node_modules/react-toolbox/lib/app_bar/AppBar.js":
/* no static exports found */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/react-toolbox/lib/app_bar/AppBar.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppBar = exports.appBarFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = __webpack_require__(/*! react-css-themr */ "./node_modules/react-css-themr/lib/index.js");

var _identifiers = __webpack_require__(/*! ../identifiers */ "./node_modules/react-toolbox/lib/identifiers.js");

var _IconButton = __webpack_require__(/*! ../button/IconButton */ "./node_modules/react-toolbox/lib/button/IconButton.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(IconButton) {
  var AppBar = function (_React$Component) {
    _inherits(AppBar, _React$Component);

    function AppBar() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, AppBar);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppBar.__proto__ || Object.getPrototypeOf(AppBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = { hidden: false, height: 0 }, _this.handleScroll = function () {
        var scrollDiff = _this.curScroll - window.scrollY;
        var hidden = scrollDiff < 0 && window.scrollY !== undefined && window.scrollY > _this.state.height;
        _this.setState({ hidden: hidden });
        _this.curScroll = window.scrollY;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AppBar, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.scrollHide) {
          this.initializeScroll();
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (!this.props.scrollHide && nextProps.scrollHide) {
          this.initializeScroll();
        }

        if (this.props.scrollHide && !nextProps.scrollHide) {
          this.endScroll();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.props.scrollHide) {
          this.endScroll();
        }
      }
    }, {
      key: 'initializeScroll',
      value: function initializeScroll() {
        window.addEventListener('scroll', this.handleScroll);

        var _rootNode$getBounding = this.rootNode.getBoundingClientRect(),
            height = _rootNode$getBounding.height;

        this.curScroll = window.scrollY;
        this.setState({ height: height });
      }
    }, {
      key: 'endScroll',
      value: function endScroll() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }, {
      key: 'render',
      value: function render() {
        var _cn,
            _this2 = this;

        var _props = this.props,
            children = _props.children,
            leftIcon = _props.leftIcon,
            onLeftIconClick = _props.onLeftIconClick,
            onRightIconClick = _props.onRightIconClick,
            rightIcon = _props.rightIcon,
            theme = _props.theme,
            title = _props.title;


        var className = (0, _classnames2.default)(theme.appBar, (_cn = {}, _defineProperty(_cn, theme.fixed, this.props.fixed), _defineProperty(_cn, theme.flat, this.props.flat), _defineProperty(_cn, theme.scrollHide, this.state.hidden), _cn), this.props.className);

        var renderedTitle = typeof title === 'string' ? _react2.default.createElement(
          'h1',
          { className: (0, _classnames2.default)(theme.title) },
          title
        ) : title;

        var renderedLeftIcon = leftIcon && _react2.default.createElement(IconButton, {
          inverse: true,
          className: (0, _classnames2.default)(theme.leftIcon),
          onClick: onLeftIconClick,
          icon: leftIcon
        });

        var renderedRightIcon = rightIcon && _react2.default.createElement(IconButton, {
          inverse: true,
          className: (0, _classnames2.default)(theme.rightIcon),
          onClick: onRightIconClick,
          icon: rightIcon
        });

        return _react2.default.createElement(
          'header',
          {
            className: className,
            'data-react-toolbox': 'app-bar',
            ref: function ref(node) {
              _this2.rootNode = node;
            }
          },
          _react2.default.createElement(
            'div',
            { className: theme.inner },
            renderedLeftIcon,
            renderedTitle,
            children,
            renderedRightIcon
          )
        );
      }
    }]);

    return AppBar;
  }(_react2.default.Component);

  AppBar.propTypes = {
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    fixed: _propTypes2.default.bool,
    flat: _propTypes2.default.bool,
    leftIcon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    onLeftIconClick: _propTypes2.default.func,
    onRightIconClick: _propTypes2.default.func,
    rightIcon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    scrollHide: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
      appBar: _propTypes2.default.string,
      inner: _propTypes2.default.string,
      fixed: _propTypes2.default.string,
      flat: _propTypes2.default.string,
      leftIcon: _propTypes2.default.string,
      rightIcon: _propTypes2.default.string,
      scrollHide: _propTypes2.default.string,
      title: _propTypes2.default.string
    }),
    title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
  };
  AppBar.defaultProps = {
    className: '',
    fixed: false,
    flat: false,
    scrollHide: false
  };


  return AppBar;
};

var AppBar = factory(_IconButton2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.APP_BAR)(AppBar);
exports.appBarFactory = factory;
exports.AppBar = AppBar;

/***/ }),

/***/ "./node_modules/react-toolbox/lib/app_bar/index.js":
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/react-toolbox/lib/app_bar/index.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppBar = undefined;

var _reactCssThemr = __webpack_require__(/*! react-css-themr */ "./node_modules/react-css-themr/lib/index.js");

var _identifiers = __webpack_require__(/*! ../identifiers */ "./node_modules/react-toolbox/lib/identifiers.js");

var _AppBar = __webpack_require__(/*! ./AppBar */ "./node_modules/react-toolbox/lib/app_bar/AppBar.js");

var _button = __webpack_require__(/*! ../button */ "./node_modules/react-toolbox/lib/button/index.js");

var _theme = __webpack_require__(/*! ./theme.css */ "./node_modules/react-toolbox/lib/app_bar/theme.css");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppBar = (0, _AppBar.appBarFactory)(_button.IconButton);
var ThemedAppBar = (0, _reactCssThemr.themr)(_identifiers.APP_BAR, _theme2.default)(AppBar);

exports.default = ThemedAppBar;
exports.AppBar = ThemedAppBar;

/***/ }),

/***/ "./node_modules/react-toolbox/lib/app_bar/theme.css":
/* no static exports found */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/react-toolbox/lib/app_bar/theme.css ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../css-loader??ref--2-1!../../../postcss-loader/lib!./theme.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./node_modules/react-toolbox/lib/app_bar/theme.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js??ref--2-1!../../../postcss-loader/lib/index.js!./theme.css", function() {
			var newContent = require("!!../../../css-loader/index.js??ref--2-1!../../../postcss-loader/lib/index.js!./theme.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/react-toolbox/lib/button/BrowseButton.js":
/* no static exports found */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/react-toolbox/lib/button/BrowseButton.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowseButton = exports.browseButtonFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(/*! react-css-themr */ "./node_modules/react-css-themr/lib/index.js");

var _identifiers = __webpack_require__(/*! ../identifiers */ "./node_modules/react-toolbox/lib/identifiers.js");

var _FontIcon = __webpack_require__(/*! ../font_icon/FontIcon */ "./node_modules/react-toolbox/lib/font_icon/FontIcon.js");

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Ripple = __webpack_require__(/*! ../ripple/Ripple */ "./node_modules/react-toolbox/lib/ripple/Ripple.js");

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(ripple, FontIcon) {
  var SimpleBrowseButton = function (_Component) {
    _inherits(SimpleBrowseButton, _Component);

    function SimpleBrowseButton() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SimpleBrowseButton);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SimpleBrowseButton.__proto__ || Object.getPrototypeOf(SimpleBrowseButton)).call.apply(_ref, [this].concat(args))), _this), _this.getLevel = function () {
        if (_this.props.primary) return 'primary';
        if (_this.props.accent) return 'accent';
        return 'neutral';
      }, _this.getShape = function () {
        if (_this.props.raised) return 'raised';
        if (_this.props.floating) return 'floating';
        return 'flat';
      }, _this.handleMouseUp = function (event) {
        _this.labelNode.blur();
        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
      }, _this.handleMouseLeave = function (event) {
        _this.labelNode.blur();
        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
      }, _this.handleFileChange = function (event) {
        if (_this.props.onChange) _this.props.onChange(event);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SimpleBrowseButton, [{
      key: 'render',
      value: function render() {
        var _classnames,
            _this2 = this;

        var _props = this.props,
            accent = _props.accent,
            children = _props.children,
            className = _props.className,
            flat = _props.flat,
            floating = _props.floating,
            icon = _props.icon,
            inverse = _props.inverse,
            label = _props.label,
            mini = _props.mini,
            neutral = _props.neutral,
            primary = _props.primary,
            raised = _props.raised,
            theme = _props.theme,
            others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'flat', 'floating', 'icon', 'inverse', 'label', 'mini', 'neutral', 'primary', 'raised', 'theme']);

        var element = 'label';
        var level = this.getLevel();
        var shape = this.getShape();

        var classes = (0, _classnames3.default)(theme.button, [theme[shape]], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.mini, mini), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);

        var props = _extends({}, others, {
          ref: function ref(node) {
            _this2.labelNode = node;
          },
          className: classes,
          disabled: this.props.disabled,
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave,
          'data-react-toolbox': 'label'
        });

        return _react2.default.createElement(element, props, icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null, _react2.default.createElement(
          'span',
          null,
          label
        ), _react2.default.createElement('input', {
          className: classes,
          type: 'file',
          onChange: this.handleFileChange
        }), children);
      }
    }]);

    return SimpleBrowseButton;
  }(_react.Component);

  SimpleBrowseButton.propTypes = {
    accent: _propTypes2.default.bool,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    flat: _propTypes2.default.bool,
    floating: _propTypes2.default.bool,
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    inverse: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    mini: _propTypes2.default.bool,
    neutral: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    onMouseLeave: _propTypes2.default.func,
    onMouseUp: _propTypes2.default.func,
    primary: _propTypes2.default.bool,
    raised: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
      accent: _propTypes2.default.string,
      button: _propTypes2.default.string,
      flat: _propTypes2.default.string,
      floating: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      inverse: _propTypes2.default.string,
      mini: _propTypes2.default.string,
      neutral: _propTypes2.default.string,
      primary: _propTypes2.default.string,
      raised: _propTypes2.default.string,
      rippleWrapper: _propTypes2.default.string,
      toggle: _propTypes2.default.string
    }),
    type: _propTypes2.default.string
  };
  SimpleBrowseButton.defaultProps = {
    accent: false,
    className: '',
    flat: false,
    floating: false,
    mini: false,
    neutral: true,
    primary: false,
    raised: false
  };


  return ripple(SimpleBrowseButton);
};

var BrowseButton = factory((0, _Ripple2.default)({ centered: false }), _FontIcon2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(BrowseButton);
exports.browseButtonFactory = factory;
exports.BrowseButton = BrowseButton;

/***/ }),

/***/ "./node_modules/react-toolbox/lib/button/Button.js":
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/react-toolbox/lib/button/Button.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.buttonFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(/*! react-css-themr */ "./node_modules/react-css-themr/lib/index.js");

var _identifiers = __webpack_require__(/*! ../identifiers */ "./node_modules/react-toolbox/lib/identifiers.js");

var _FontIcon = __webpack_require__(/*! ../font_icon/FontIcon */ "./node_modules/react-toolbox/lib/font_icon/FontIcon.js");

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Ripple = __webpack_require__(/*! ../ripple/Ripple */ "./node_modules/react-toolbox/lib/ripple/Ripple.js");

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(ripple, FontIcon) {
  var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Button);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.getLevel = function () {
        if (_this.props.primary) return 'primary';
        if (_this.props.accent) return 'accent';
        return 'neutral';
      }, _this.getShape = function () {
        if (_this.props.raised) return 'raised';
        if (_this.props.floating) return 'floating';
        return 'flat';
      }, _this.handleMouseUp = function (event) {
        _this.buttonNode.blur();
        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
      }, _this.handleMouseLeave = function (event) {
        _this.buttonNode.blur();
        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Button, [{
      key: 'render',
      value: function render() {
        var _classnames,
            _this2 = this;

        var _props = this.props,
            accent = _props.accent,
            children = _props.children,
            className = _props.className,
            flat = _props.flat,
            floating = _props.floating,
            href = _props.href,
            icon = _props.icon,
            inverse = _props.inverse,
            label = _props.label,
            mini = _props.mini,
            neutral = _props.neutral,
            primary = _props.primary,
            raised = _props.raised,
            theme = _props.theme,
            type = _props.type,
            others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'flat', 'floating', 'href', 'icon', 'inverse', 'label', 'mini', 'neutral', 'primary', 'raised', 'theme', 'type']);

        var element = href ? 'a' : 'button';
        var level = this.getLevel();
        var shape = this.getShape();

        var classes = (0, _classnames3.default)(theme.button, [theme[shape]], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.mini, mini), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);

        var props = _extends({}, others, {
          href: href,
          ref: function ref(node) {
            _this2.buttonNode = node;
          },
          className: classes,
          disabled: this.props.disabled,
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave,
          type: !href ? type : null,
          'data-react-toolbox': 'button'
        });

        return _react2.default.createElement(element, props, icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null, label, children);
      }
    }]);

    return Button;
  }(_react.Component);

  Button.propTypes = {
    accent: _propTypes2.default.bool,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    flat: _propTypes2.default.bool,
    floating: _propTypes2.default.bool,
    href: _propTypes2.default.string,
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    inverse: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    mini: _propTypes2.default.bool,
    neutral: _propTypes2.default.bool,
    onMouseLeave: _propTypes2.default.func,
    onMouseUp: _propTypes2.default.func,
    primary: _propTypes2.default.bool,
    raised: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
      accent: _propTypes2.default.string,
      button: _propTypes2.default.string,
      flat: _propTypes2.default.string,
      floating: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      inverse: _propTypes2.default.string,
      mini: _propTypes2.default.string,
      neutral: _propTypes2.default.string,
      primary: _propTypes2.default.string,
      raised: _propTypes2.default.string,
      rippleWrapper: _propTypes2.default.string,
      toggle: _propTypes2.default.string
    }),
    type: _propTypes2.default.string
  };
  Button.defaultProps = {
    accent: false,
    className: '',
    flat: false,
    floating: false,
    mini: false,
    neutral: true,
    primary: false,
    raised: false,
    type: 'button'
  };


  return ripple(Button);
};

var Button = factory((0, _Ripple2.default)({ centered: false }), _FontIcon2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(Button);
exports.buttonFactory = factory;
exports.Button = Button;

/***/ }),

/***/ "./node_modules/react-toolbox/lib/button/IconButton.js":
/* no static exports found */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/react-toolbox/lib/button/IconButton.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = exports.iconButtonFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(/*! react-css-themr */ "./node_modules/react-css-themr/lib/index.js");

var _identifiers = __webpack_require__(/*! ../identifiers */ "./node_modules/react-toolbox/lib/identifiers.js");

var _FontIcon = __webpack_require__(/*! ../font_icon/FontIcon */ "./node_modules/react-toolbox/lib/font_icon/FontIcon.js");

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Ripple = __webpack_require__(/*! ../ripple/Ripple */ "./node_modules/react-toolbox/lib/ripple/Ripple.js");

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(ripple, FontIcon) {
  var IconButton = function (_Component) {
    _inherits(IconButton, _Component);

    function IconButton() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, IconButton);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconButton.__proto__ || Object.getPrototypeOf(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.getLevel = function () {
        if (_this.props.primary) return 'primary';
        if (_this.props.accent) return 'accent';
        return 'neutral';
      }, _this.handleMouseUp = function (event) {
        _this.buttonNode.blur();
        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
      }, _this.handleMouseLeave = function (event) {
        _this.buttonNode.blur();
        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(IconButton, [{
      key: 'render',
      value: function render() {
        var _classnames,
            _this2 = this;

        var _props = this.props,
            accent = _props.accent,
            children = _props.children,
            className = _props.className,
            href = _props.href,
            icon = _props.icon,
            inverse = _props.inverse,
            neutral = _props.neutral,
            primary = _props.primary,
            theme = _props.theme,
            type = _props.type,
            others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'href', 'icon', 'inverse', 'neutral', 'primary', 'theme', 'type']);

        var element = href ? 'a' : 'button';
        var level = this.getLevel();
        var classes = (0, _classnames3.default)([theme.toggle], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);

        var props = _extends({}, others, {
          href: href,
          ref: function ref(node) {
            _this2.buttonNode = node;
          },
          className: classes,
          disabled: this.props.disabled,
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave,
          type: !href ? type : null,
          'data-react-toolbox': 'button'
        });

        var iconElement = typeof icon === 'string' ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : icon;

        return _react2.default.createElement(element, props, icon && iconElement, children);
      }
    }]);

    return IconButton;
  }(_react.Component);

  IconButton.propTypes = {
    accent: _propTypes2.default.bool,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    href: _propTypes2.default.string,
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    inverse: _propTypes2.default.bool,
    neutral: _propTypes2.default.bool,
    onMouseLeave: _propTypes2.default.func,
    onMouseUp: _propTypes2.default.func,
    primary: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
      accent: _propTypes2.default.string,
      button: _propTypes2.default.string,
      flat: _propTypes2.default.string,
      floating: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      inverse: _propTypes2.default.string,
      mini: _propTypes2.default.string,
      neutral: _propTypes2.default.string,
      primary: _propTypes2.default.string,
      raised: _propTypes2.default.string,
      rippleWrapper: _propTypes2.default.string,
      toggle: _propTypes2.default.string
    }),
    type: _propTypes2.default.string
  };
  IconButton.defaultProps = {
    accent: false,
    className: '',
    neutral: true,
    primary: false,
    type: 'button'
  };


  return ripple(IconButton);
};

var IconButton = factory((0, _Ripple2.default)({ centered: true }), _FontIcon2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(IconButton);
exports.iconButtonFactory = factory;
exports.IconButton = IconButton;

/***/ }),

/***/ "./node_modules/react-toolbox/lib/button/index.js":
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/react-toolbox/lib/button/index.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowseButton = exports.IconButton = exports.Button = undefined;

var _reactCssThemr = __webpack_require__(/*! react-css-themr */ "./node_modules/react-css-themr/lib/index.js");

var _identifiers = __webpack_require__(/*! ../identifiers */ "./node_modules/react-toolbox/lib/identifiers.js");

var _Button = __webpack_require__(/*! ./Button */ "./node_modules/react-toolbox/lib/button/Button.js");

var _BrowseButton = __webpack_require__(/*! ./BrowseButton */ "./node_modules/react-toolbox/lib/button/BrowseButton.js");

var _IconButton = __webpack_require__(/*! ./IconButton */ "./node_modules/react-toolbox/lib/button/IconButton.js");

var _FontIcon = __webpack_require__(/*! ../font_icon/FontIcon */ "./node_modules/react-toolbox/lib/font_icon/FontIcon.js");

var _ripple = __webpack_require__(/*! ../ripple */ "./node_modules/react-toolbox/lib/ripple/index.js");

var _ripple2 = _interopRequireDefault(_ripple);

var _theme = __webpack_require__(/*! ./theme.css */ "./node_modules/react-toolbox/lib/button/theme.css");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = (0, _Button.buttonFactory)((0, _ripple2.default)({ centered: false }), _FontIcon.FontIcon);
var IconButton = (0, _IconButton.iconButtonFactory)((0, _ripple2.default)({ centered: true }), _FontIcon.FontIcon);
var BrowseButton = (0, _BrowseButton.browseButtonFactory)((0, _ripple2.default)({ centered: false }), _FontIcon.FontIcon);
var ThemedButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(Button);
var ThemedIconButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(IconButton);
var ThemedBrowseButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(BrowseButton);

exports.default = ThemedButton;
exports.Button = ThemedButton;
exports.IconButton = ThemedIconButton;
exports.BrowseButton = ThemedBrowseButton;

/***/ }),

/***/ "./node_modules/react-toolbox/lib/button/theme.css":
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/react-toolbox/lib/button/theme.css ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../css-loader??ref--2-1!../../../postcss-loader/lib!./theme.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./node_modules/react-toolbox/lib/button/theme.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js??ref--2-1!../../../postcss-loader/lib/index.js!./theme.css", function() {
			var newContent = require("!!../../../css-loader/index.js??ref--2-1!../../../postcss-loader/lib/index.js!./theme.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/react-toolbox/lib/font_icon/FontIcon.js":
/* no static exports found */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/react-toolbox/lib/font_icon/FontIcon.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FontIcon = function FontIcon(_ref // eslint-disable-line
) {
  var alt = _ref.alt,
      children = _ref.children,
      className = _ref.className,
      theme = _ref.theme,
      value = _ref.value,
      other = _objectWithoutProperties(_ref, ['alt', 'children', 'className', 'theme', 'value']);

  return _react2.default.createElement(
    'span',
    _extends({
      'data-react-toolbox': 'font-icon',
      'aria-label': alt,
      className: (0, _classnames2.default)({
        'material-icons': typeof value === 'string' || typeof children === 'string'
      }, className)
    }, other),
    value,
    children
  );
};

FontIcon.propTypes = {
  alt: _propTypes2.default.string,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object, // eslint-disable-line
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
};

FontIcon.defaultProps = {
  alt: '',
  className: ''
};

exports.default = FontIcon;
exports.FontIcon = FontIcon;

/***/ }),

/***/ "./node_modules/react-toolbox/lib/identifiers.js":
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./~/react-toolbox/lib/identifiers.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var APP_BAR = exports.APP_BAR = 'RTAppBar';
var AUTOCOMPLETE = exports.AUTOCOMPLETE = 'RTAutocomplete';
var AVATAR = exports.AVATAR = 'RTAvatar';
var BUTTON = exports.BUTTON = 'RTButton';
var CARD = exports.CARD = 'RTCard';
var CHIP = exports.CHIP = 'RTChip';
var CHECKBOX = exports.CHECKBOX = 'RTCheckbox';
var DATE_PICKER = exports.DATE_PICKER = 'RTDatePicker';
var DIALOG = exports.DIALOG = 'RTDialog';
var DRAWER = exports.DRAWER = 'RTDrawer';
var DROPDOWN = exports.DROPDOWN = 'RTDropdown';
var INPUT = exports.INPUT = 'RTInput';
var LAYOUT = exports.LAYOUT = 'RTLayout';
var LINK = exports.LINK = 'RTLink';
var LIST = exports.LIST = 'RTList';
var MENU = exports.MENU = 'RTMenu';
var NAVIGATION = exports.NAVIGATION = 'RTNavigation';
var OVERLAY = exports.OVERLAY = 'RTOverlay';
var PROGRESS_BAR = exports.PROGRESS_BAR = 'RTProgressBar';
var RADIO = exports.RADIO = 'RTRadio';
var RIPPLE = exports.RIPPLE = 'RTRipple';
var SLIDER = exports.SLIDER = 'RTSlider';
var SNACKBAR = exports.SNACKBAR = 'RTSnackbar';
var SWITCH = exports.SWITCH = 'RTSwitch';
var TABLE = exports.TABLE = 'RTTable';
var TABS = exports.TABS = 'RTTabs';
var TOOLTIP = exports.TOOLTIP = 'RTTooltip';
var TIME_PICKER = exports.TIME_PICKER = 'RTTimePicker';

/***/ }),

/***/ "./node_modules/react-toolbox/lib/ripple/Ripple.js":
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/react-toolbox/lib/ripple/Ripple.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames2 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(/*! react-css-themr */ "./node_modules/react-css-themr/lib/index.js");

var _dissoc = __webpack_require__(/*! ramda/src/dissoc */ "./node_modules/ramda/src/dissoc.js");

var _dissoc2 = _interopRequireDefault(_dissoc);

var _identifiers = __webpack_require__(/*! ../identifiers */ "./node_modules/react-toolbox/lib/identifiers.js");

var _events = __webpack_require__(/*! ../utils/events */ "./node_modules/react-toolbox/lib/utils/events.js");

var _events2 = _interopRequireDefault(_events);

var _prefixer = __webpack_require__(/*! ../utils/prefixer */ "./node_modules/react-toolbox/lib/utils/prefixer.js");

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaults = {
  centered: false,
  className: '',
  multiple: true,
  passthrough: true,
  spread: 2,
  theme: {}
};

var rippleFactory = function rippleFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaults$options = _extends({}, defaults, options),
      defaultCentered = _defaults$options.centered,
      defaultClassName = _defaults$options.className,
      defaultMultiple = _defaults$options.multiple,
      defaultPassthrough = _defaults$options.passthrough,
      defaultSpread = _defaults$options.spread,
      defaultTheme = _defaults$options.theme,
      props = _objectWithoutProperties(_defaults$options, ['centered', 'className', 'multiple', 'passthrough', 'spread', 'theme']);

  return function (ComposedComponent) {
    var RippledComponent = function (_Component) {
      _inherits(RippledComponent, _Component);

      function RippledComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RippledComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RippledComponent.__proto__ || Object.getPrototypeOf(RippledComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          ripples: {}
        }, _this.rippleNodes = {}, _this.doRipple = function () {
          return !_this.props.disabled && _this.props.ripple;
        }, _this.handleMouseDown = function (event) {
          if (_this.props.onMouseDown) _this.props.onMouseDown(event);
          if (_this.doRipple()) {
            var _events$getMousePosit = _events2.default.getMousePosition(event),
                x = _events$getMousePosit.x,
                y = _events$getMousePosit.y;

            _this.animateRipple(x, y, false);
          }
        }, _this.handleTouchStart = function (event) {
          if (_this.props.onTouchStart) _this.props.onTouchStart(event);
          if (_this.doRipple()) {
            var _events$getTouchPosit = _events2.default.getTouchPosition(event),
                x = _events$getTouchPosit.x,
                y = _events$getTouchPosit.y;

            _this.animateRipple(x, y, true);
          }
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(RippledComponent, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
          // If a new ripple was just added, add a remove event listener to its animation
          if (Object.keys(prevState.ripples).length < Object.keys(this.state.ripples).length) {
            this.addRippleRemoveEventListener(this.getLastKey());
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var _this2 = this;

          // Remove document event listeners for ripple if they still exists
          Object.keys(this.state.ripples).forEach(function (key) {
            _this2.state.ripples[key].endRipple();
          });
        }

        /**
         * Find out a descriptor object for the ripple element being created depending on
         * the position where the it was triggered and the component's dimensions.
         *
         * @param {Number} x Coordinate x in the viewport where ripple was triggered
         * @param {Number} y Coordinate y in the viewport where ripple was triggered
         * @return {Object} Descriptor element including position and size of the element
         */

      }, {
        key: 'getDescriptor',
        value: function getDescriptor(x, y) {
          var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(this).getBoundingClientRect(),
              left = _ReactDOM$findDOMNode.left,
              top = _ReactDOM$findDOMNode.top,
              height = _ReactDOM$findDOMNode.height,
              width = _ReactDOM$findDOMNode.width;

          var _props = this.props,
              centered = _props.rippleCentered,
              spread = _props.rippleSpread;

          return {
            left: centered ? 0 : x - left - width / 2,
            top: centered ? 0 : y - top - height / 2,
            width: width * spread
          };
        }

        /**
         * Increments and internal counter and returns the next value as a string. It
         * is used to assign key references to new ripple elements.
         *
         * @return {String} Key to be assigned to a ripple.
         */

      }, {
        key: 'getNextKey',
        value: function getNextKey() {
          this.currentCount = this.currentCount ? this.currentCount + 1 : 1;
          return 'ripple' + this.currentCount;
        }

        /**
         * Return the last generated key for a ripple element. When there is only one ripple
         * and to get the reference when a ripple was just created.
         *
         * @return {String} The last generated ripple key.
         */

      }, {
        key: 'getLastKey',
        value: function getLastKey() {
          return 'ripple' + this.currentCount;
        }

        /**
         * Variable to store the ripple references
         */

      }, {
        key: 'rippleShouldTrigger',


        /**
         * Determine if a ripple should start depending if its a touch event. For mobile both
         * touchStart and mouseDown are launched so in case is touch we should always trigger
         * but if its not we should check if a touch was already triggered to decide.
         *
         * @param {Boolean} isTouch True in case a touch event triggered the ripple false otherwise.
         * @return {Boolean} True in case the ripple should trigger or false if it shouldn't.
         */
        value: function rippleShouldTrigger(isTouch) {
          var shouldStart = isTouch ? true : !this.touchCache;
          this.touchCache = isTouch;
          return shouldStart;
        }

        /**
         * Start a ripple animation on an specific point with touch or mouse events. First
         * decides if the animation should trigger. If the ripple is multiple or there is no
         * ripple present, it creates a new key. If it's a simple ripple and already exists,
         * it just restarts the current ripple. The animation happens in two state changes
         * to allow triggering via css.
         *
         * @param {Number} x Coordinate X on the screen where animation should start
         * @param {Number} y Coordinate Y on the screen where animation should start
         * @param {Boolean} isTouch Use events from touch or mouse.
         */

      }, {
        key: 'animateRipple',
        value: function animateRipple(x, y, isTouch) {
          var _this3 = this;

          if (this.rippleShouldTrigger(isTouch)) {
            var _getDescriptor = this.getDescriptor(x, y),
                top = _getDescriptor.top,
                left = _getDescriptor.left,
                width = _getDescriptor.width;

            var noRipplesActive = Object.keys(this.state.ripples).length === 0;
            var key = this.props.rippleMultiple || noRipplesActive ? this.getNextKey() : this.getLastKey();
            var endRipple = this.addRippleDeactivateEventListener(isTouch, key);
            var initialState = {
              active: false,
              restarting: true,
              top: top,
              left: left,
              width: width,
              endRipple: endRipple
            };
            var runningState = { active: true, restarting: false };
            var ripples = _extends({}, this.state.ripples, _defineProperty({}, key, initialState));
            this.setState({ ripples: ripples }, function () {
              if (_this3.rippleNodes[key]) _this3.rippleNodes[key].offsetWidth; // eslint-disable-line
              _this3.setState({
                ripples: _extends({}, _this3.state.ripples, _defineProperty({}, key, Object.assign({}, _this3.state.ripples[key], runningState)))
              });
            });
          }
        }

        /**
         * Add an event listener to the reference with given key so when the animation transition
         * ends we can be sure that it finished and it can be safely removed from the state.
         * This function is called whenever a new ripple is added to the component.
         *
         * @param {String} rippleKey Is the key of the ripple to add the event.
         */

      }, {
        key: 'addRippleRemoveEventListener',
        value: function addRippleRemoveEventListener(rippleKey) {
          var self = this;
          var rippleNode = this.rippleNodes[rippleKey];
          _events2.default.addEventListenerOnTransitionEnded(rippleNode, function onOpacityEnd(e) {
            if (e.propertyName === 'opacity') {
              if (self.props.onRippleEnded) self.props.onRippleEnded(e);
              _events2.default.removeEventListenerOnTransitionEnded(self.rippleNodes[rippleKey], onOpacityEnd);
              delete self.rippleNodes[rippleKey];
              self.setState({ ripples: (0, _dissoc2.default)(rippleKey, self.state.ripples) });
            }
          });
        }

        /**
         * Add an event listener to the document needed to deactivate a ripple and make it dissappear.
         * Deactivation can happen with a touchend or mouseup depending on the trigger type. The
         * ending function is created from a factory function and returned.
         *
         * @param {Boolean} isTouch True in case the trigger was a touch event false otherwise.
         * @param {String} rippleKey It's a key to identify the ripple that should be deactivated.
         * @return {Function} Callback function that deactivates the ripple and removes the listener
         */

      }, {
        key: 'addRippleDeactivateEventListener',
        value: function addRippleDeactivateEventListener(isTouch, rippleKey) {
          var eventType = isTouch ? 'touchend' : 'mouseup';
          var endRipple = this.createRippleDeactivateCallback(eventType, rippleKey);
          document.addEventListener(eventType, endRipple);
          return endRipple;
        }

        /**
         * Generates a function that can be called to deactivate a ripple and remove its finishing
         * event listener. If is generated because we need to store it to be called on unmount in case
         * the ripple is still running.
         *
         * @param {String} eventType Is the event type that can be touchend or mouseup
         * @param {String} rippleKey Is the key representing the ripple
         * @return {Function} Callback function that deactivates the ripple and removes the listener
         */

      }, {
        key: 'createRippleDeactivateCallback',
        value: function createRippleDeactivateCallback(eventType, rippleKey) {
          var self = this;
          return function endRipple() {
            document.removeEventListener(eventType, endRipple);
            self.setState({
              ripples: _extends({}, self.state.ripples, _defineProperty({}, rippleKey, Object.assign({}, self.state.ripples[rippleKey], {
                active: false
              })))
            });
          };
        }
      }, {
        key: 'renderRipple',
        value: function renderRipple(key, className, _ref2) {
          var _classnames,
              _this4 = this;

          var active = _ref2.active,
              left = _ref2.left,
              restarting = _ref2.restarting,
              top = _ref2.top,
              width = _ref2.width;

          var scale = restarting ? 0 : 1;
          var transform = 'translate3d(' + (-width / 2 + left) + 'px, ' + (-width / 2 + top) + 'px, 0) scale(' + scale + ')';
          var _className = (0, _classnames3.default)(this.props.theme.ripple, (_classnames = {}, _defineProperty(_classnames, this.props.theme.rippleActive, active), _defineProperty(_classnames, this.props.theme.rippleRestarting, restarting), _classnames), className);
          return _react2.default.createElement(
            'span',
            _extends({
              key: key,
              'data-react-toolbox': 'ripple',
              className: this.props.theme.rippleWrapper
            }, props),
            _react2.default.createElement('span', {
              className: _className,
              ref: function ref(node) {
                if (node) _this4.rippleNodes[key] = node;
              },
              style: (0, _prefixer2.default)({ transform: transform }, { width: width, height: width })
            })
          );
        }
      }, {
        key: 'render',
        value: function render() {
          var _this5 = this;

          var _props2 = this.props,
              children = _props2.children,
              disabled = _props2.disabled,
              ripple = _props2.ripple,
              onRippleEnded = _props2.onRippleEnded,
              rippleCentered = _props2.rippleCentered,
              rippleClassName = _props2.rippleClassName,
              rippleMultiple = _props2.rippleMultiple,
              rippleSpread = _props2.rippleSpread,
              theme = _props2.theme,
              other = _objectWithoutProperties(_props2, ['children', 'disabled', 'ripple', 'onRippleEnded', 'rippleCentered', 'rippleClassName', 'rippleMultiple', 'rippleSpread', 'theme']);

          var ripples = this.state.ripples;

          var childRipples = Object.keys(ripples).map(function (key) {
            return _this5.renderRipple(key, rippleClassName, ripples[key]);
          });
          var childProps = _extends({
            onMouseDown: this.handleMouseDown,
            onTouchStart: this.handleTouchStart
          }, other);
          var finalProps = defaultPassthrough ? _extends({}, childProps, { theme: theme, disabled: disabled }) : childProps;

          return !ripple ? _react2.default.createElement(ComposedComponent, finalProps, children) : _react2.default.createElement(ComposedComponent, finalProps, [children, childRipples]);
        }
      }]);

      return RippledComponent;
    }(_react.Component);

    RippledComponent.propTypes = {
      children: _propTypes2.default.node,
      disabled: _propTypes2.default.bool,
      onMouseDown: _propTypes2.default.func,
      onRippleEnded: _propTypes2.default.func,
      onTouchStart: _propTypes2.default.func,
      ripple: _propTypes2.default.bool,
      rippleCentered: _propTypes2.default.bool,
      rippleClassName: _propTypes2.default.string,
      rippleMultiple: _propTypes2.default.bool,
      rippleSpread: _propTypes2.default.number,
      theme: _propTypes2.default.shape({
        ripple: _propTypes2.default.string,
        rippleActive: _propTypes2.default.string,
        rippleRestarting: _propTypes2.default.string,
        rippleWrapper: _propTypes2.default.string
      })
    };
    RippledComponent.defaultProps = {
      disabled: false,
      ripple: true,
      rippleCentered: defaultCentered,
      rippleClassName: defaultClassName,
      rippleMultiple: defaultMultiple,
      rippleSpread: defaultSpread
    };


    return (0, _reactCssThemr.themr)(_identifiers.RIPPLE, defaultTheme)(RippledComponent);
  };
};

exports.default = rippleFactory;

/***/ }),

/***/ "./node_modules/react-toolbox/lib/ripple/index.js":
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/react-toolbox/lib/ripple/index.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Ripple = __webpack_require__(/*! ./Ripple */ "./node_modules/react-toolbox/lib/ripple/Ripple.js");

var _Ripple2 = _interopRequireDefault(_Ripple);

var _theme = __webpack_require__(/*! ./theme.css */ "./node_modules/react-toolbox/lib/ripple/theme.css");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return (0, _Ripple2.default)(_extends({}, options, { theme: _theme2.default }));
};

/***/ }),

/***/ "./node_modules/react-toolbox/lib/ripple/theme.css":
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/react-toolbox/lib/ripple/theme.css ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../css-loader??ref--2-1!../../../postcss-loader/lib!./theme.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./node_modules/react-toolbox/lib/ripple/theme.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js??ref--2-1!../../../postcss-loader/lib/index.js!./theme.css", function() {
			var newContent = require("!!../../../css-loader/index.js??ref--2-1!../../../postcss-loader/lib/index.js!./theme.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/react-toolbox/lib/utils/events.js":
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/react-toolbox/lib/utils/events.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(/*! ramda/src/keys */ "./node_modules/ramda/src/keys.js");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getMousePosition: function getMousePosition(event) {
    return {
      x: event.pageX - (window.scrollX || window.pageXOffset),
      y: event.pageY - (window.scrollY || window.pageYOffset)
    };
  },
  getTouchPosition: function getTouchPosition(event) {
    return {
      x: event.touches[0].pageX - (window.scrollX || window.pageXOffset),
      y: event.touches[0].pageY - (window.scrollY || window.pageYOffset)
    };
  },
  pauseEvent: function pauseEvent(event) {
    event.stopPropagation();
    event.preventDefault();
  },
  addEventsToDocument: function addEventsToDocument(eventMap) {
    Object.keys(eventMap).forEach(function (key) {
      document.addEventListener(key, eventMap[key], false);
    });
  },
  removeEventsFromDocument: function removeEventsFromDocument(eventMap) {
    Object.keys(eventMap).forEach(function (key) {
      document.removeEventListener(key, eventMap[key], false);
    });
  },
  targetIsDescendant: function targetIsDescendant(event, parent) {
    var node = event.target;
    while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
    }
    return false;
  },
  addEventListenerOnTransitionEnded: function addEventListenerOnTransitionEnded(element, fn) {
    var eventName = transitionEventNamesFor(element);
    if (!eventName) return false;
    element.addEventListener(eventName, fn);
    return true;
  },
  removeEventListenerOnTransitionEnded: function removeEventListenerOnTransitionEnded(element, fn) {
    var eventName = transitionEventNamesFor(element);
    if (!eventName) return false;
    element.removeEventListener(eventName, fn);
    return true;
  }
};


var TRANSITIONS = {
  transition: 'transitionend',
  OTransition: 'oTransitionEnd',
  MozTransition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd'
};

function transitionEventNamesFor(element) {
  return (0, _keys2.default)(TRANSITIONS).reduce(function (result, transition) {
    return !result && element && element.style[transition] !== undefined ? TRANSITIONS[transition] : result;
  }, null);
}

/***/ }),

/***/ "./node_modules/react-toolbox/lib/utils/prefixer.js":
/* no static exports found */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/react-toolbox/lib/utils/prefixer.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var WEBKIT = 'Webkit';
var MICROSOFT = 'Ms';

var properties = {
  transform: [WEBKIT, MICROSOFT]
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substr(1);
}

function getPrefixes(property, value) {
  return properties[property].reduce(function (acc, item) {
    acc['' + item + capitalize(property)] = value; // eslint-disable-line no-param-reassign
    return acc;
  }, {});
}

function addPrefixesTo(style, property, value) {
  var vendor = getPrefixes(property, value);
  for (var prefix in vendor) {
    // eslint-disable-line no-restricted-syntax
    if ({}.hasOwnProperty.call(vendor, prefix)) {
      style[prefix] = vendor[prefix]; // eslint-disable-line no-param-reassign
    }
  }

  return style;
}

function prefixer(style) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _style = defaultValue;
  for (var property in style) {
    // eslint-disable-line no-restricted-syntax
    if ({}.hasOwnProperty.call(style, property)) {
      _style[property] = style[property];
      if (properties[property]) {
        addPrefixesTo(_style, property, style[property]);
      }
    }
  }

  return _style;
}

exports.default = prefixer;

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
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

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

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

/***/ "./node_modules/style-loader/lib/urls.js":
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

/***/ "./src/app.js":
/* no static exports found */
/* all exports used */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dashboard = __webpack_require__(/*! ./dashboard/dashboard */ "./src/dashboard/dashboard.js");

__webpack_require__(/*! ./css/layout */ "./src/css/layout.css");

__webpack_require__(/*! ./device/device-conf */ "./src/device/device-conf.js");

var _app_bar = __webpack_require__(/*! react-toolbox/lib/app_bar */ "./node_modules/react-toolbox/lib/app_bar/index.js");

var _app_bar2 = _interopRequireDefault(_app_bar);

var _reactSlider = __webpack_require__(/*! react-slider */ "./node_modules/react-slider/react-slider.js");

var _reactSlider2 = _interopRequireDefault(_reactSlider);

var _dashboardConf = __webpack_require__(/*! ./dashboard/dashboard-conf */ "./src/dashboard/dashboard-conf.js");

var _dashboardConf2 = _interopRequireDefault(_dashboardConf);

var _materialIcons = __webpack_require__(/*! material-design-icons/iconfont/material-icons */ "./node_modules/material-design-icons/iconfont/material-icons.css");

var _materialIcons2 = _interopRequireDefault(_materialIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import './css/default-widget';


var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_app_bar2.default, { leftIcon: 'menu', title: 'Doomsday Laboratories' }),
                _react2.default.createElement(_dashboard.Dashboard, { config: _dashboardConf2.default })
            );
        }
    }]);

    return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("root"));

/***/ }),

/***/ "./src/css/layout.css":
/* no static exports found */
/* all exports used */
/*!****************************!*\
  !*** ./src/css/layout.css ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader??ref--2-1!../../~/postcss-loader/lib!./layout.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./src/css/layout.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/postcss-loader/lib/index.js!./layout.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/postcss-loader/lib/index.js!./layout.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/dashboard/dashboard-conf.js":
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

/***/ "./src/dashboard/dashboard-styles.css":
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./src/dashboard/dashboard-styles.css ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader??ref--2-1!../../~/postcss-loader/lib!./dashboard-styles.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./src/dashboard/dashboard-styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/postcss-loader/lib/index.js!./dashboard-styles.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/postcss-loader/lib/index.js!./dashboard-styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/dashboard/dashboard.js":
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

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _widget = __webpack_require__(/*! ./widget */ "./src/dashboard/widget.js");

var _dashboardStyles = __webpack_require__(/*! ./dashboard-styles */ "./src/dashboard/dashboard-styles.css");

var _dashboardStyles2 = _interopRequireDefault(_dashboardStyles);

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
                { className: _dashboardStyles2.default.dashboard },
                this.props.config.widgets.map(function (widgetConf, k) {
                    return _react2.default.createElement(_widget.Widget, { key: k, config: widgetConf });
                })
            );
        }
    }]);

    return Dashboard;
}(_react2.default.Component);

/***/ }),

/***/ "./src/dashboard/default-widget/sensor-styles.css":
/* no static exports found */
/* all exports used */
/*!********************************************************!*\
  !*** ./src/dashboard/default-widget/sensor-styles.css ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader??ref--2-1!../../../~/postcss-loader/lib!./sensor-styles.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./src/dashboard/default-widget/sensor-styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/lib/index.js!./sensor-styles.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/lib/index.js!./sensor-styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/dashboard/default-widget/sensors.js":
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

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _sensorStyles = __webpack_require__(/*! ./sensor-styles */ "./src/dashboard/default-widget/sensor-styles.css");

var _sensorStyles2 = _interopRequireDefault(_sensorStyles);

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
        key: 'render',
        value: function render() {
            var v = (this.props.value - this.min) / this.max * 100;
            return _react2.default.createElement(
                'div',
                { className: _sensorStyles2.default.sensor_number },
                _react2.default.createElement(
                    'h4',
                    null,
                    this.props.config.title
                ),
                _react2.default.createElement(
                    'div',
                    { className: _sensorStyles2.default.progress },
                    _react2.default.createElement('div', { className: _sensorStyles2.default.bar, style: { width: v + '%' } })
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
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _sensorStyles2.default.sensor_str },
                _react2.default.createElement(
                    'h4',
                    null,
                    this.props.config.title
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    'this.props.value'
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
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                'div',
                { className: _sensorStyles2.default.sensor_val },
                _react2.default.createElement(
                    'h4',
                    null,
                    this.props.config.title
                ),
                _react2.default.createElement(
                    'div',
                    { className: _sensorStyles2.default.options },
                    this.options.map(function (o, i) {
                        return _react2.default.createElement(
                            'span',
                            { key: i, className: function () {
                                    return i == _this4.props.value ? _sensorStyles2.default.option_active : _sensorStyles2.default.option;
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
        key: 'render',
        value: function render() {
            var _this6 = this;

            return _react2.default.createElement(
                'div',
                { className: _sensorStyles2.default.sensor_flag },
                _react2.default.createElement(
                    'h4',
                    null,
                    this.props.config.title
                ),
                _react2.default.createElement(
                    'div',
                    { className: _sensorStyles2.default.flags },
                    this.flags.map(function (f, i) {
                        return _react2.default.createElement(
                            'span',
                            { key: i, className: function () {
                                    return (1 << i & _this6.props.value) > 0 ? _sensorStyles2.default.flag_active : _sensorStyles2.default.flag;
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

/***/ "./src/dashboard/default-widget/trigger-styles.css":
/* no static exports found */
/* all exports used */
/*!*********************************************************!*\
  !*** ./src/dashboard/default-widget/trigger-styles.css ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader??ref--2-1!../../../~/postcss-loader/lib!./trigger-styles.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./src/dashboard/default-widget/trigger-styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/lib/index.js!./trigger-styles.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/lib/index.js!./trigger-styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/dashboard/default-widget/triggerargpane.js":
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
exports.TriggerArgPane = exports.style = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactSlider = __webpack_require__(/*! react-slider */ "./node_modules/react-slider/react-slider.js");

var _reactSlider2 = _interopRequireDefault(_reactSlider);

var _triggerStyles = __webpack_require__(/*! ./trigger-styles */ "./src/dashboard/default-widget/trigger-styles.css");

var _triggerStyles2 = _interopRequireDefault(_triggerStyles);

var _button = __webpack_require__(/*! react-toolbox/lib/button */ "./node_modules/react-toolbox/lib/button/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = exports.style = _triggerStyles2.default;

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
        _this.component = _react2.default.createElement(_reactSlider2.default, { onChange: function onChange(v) {
                return _this.props.onValue ? _this.props.onValue(v) : null;
            } });
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

        var _this2 = _possibleConstructorReturn(this, (TriggerArgPane.__proto__ || Object.getPrototypeOf(TriggerArgPane)).call(this));

        _this2.values = [];
        return _this2;
    }

    _createClass(TriggerArgPane, [{
        key: 'handleCall',
        value: function handleCall() {
            console.log(this.props);
            if (this.props.onCall) {
                this.props.onCall(this.values);
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
        value: function handleParamValueSet(index, value) {
            console.log('Value', index, value);
            this.values[index] = value;
        }
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
                { className: _triggerStyles2.default.view },
                _react2.default.createElement(
                    'div',
                    { className: _triggerStyles2.default.content },
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
                    { className: _triggerStyles2.default.actions },
                    _react2.default.createElement(_button.Button, { onClick: function onClick() {
                            return _this3.handleCancel();
                        }, label: 'Cancel', raised: true }),
                    _react2.default.createElement(_button.Button, { onClick: function onClick() {
                            return _this3.handleCall();
                        }, label: this.props.trigger.trigger.title, raised: true })
                )
            );
        }
    }]);

    return TriggerArgPane;
}(_react2.default.Component);

/***/ }),

/***/ "./src/dashboard/default-widget/widget-styles.css":
/* no static exports found */
/* all exports used */
/*!********************************************************!*\
  !*** ./src/dashboard/default-widget/widget-styles.css ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader??ref--2-1!../../../~/postcss-loader/lib!./widget-styles.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./src/dashboard/default-widget/widget-styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/lib/index.js!./widget-styles.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/lib/index.js!./widget-styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/dashboard/default-widget/widget.js":
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

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _deviceManager = __webpack_require__(/*! ../../device/device-manager */ "./src/device/device-manager.js");

var _deviceManager2 = _interopRequireDefault(_deviceManager);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _sensors = __webpack_require__(/*! ./sensors */ "./src/dashboard/default-widget/sensors.js");

var _triggerargpane = __webpack_require__(/*! ./triggerargpane */ "./src/dashboard/default-widget/triggerargpane.js");

var _button = __webpack_require__(/*! react-toolbox/lib/button */ "./node_modules/react-toolbox/lib/button/index.js");

var _widgetStyles = __webpack_require__(/*! ./widget-styles */ "./src/dashboard/default-widget/widget-styles.css");

var _widgetStyles2 = _interopRequireDefault(_widgetStyles);

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
                        trig: trigger,
                        trigger: t
                    }
                };
                this.setState(state);
            }
        }
    }, {
        key: 'handleTriggerCall',
        value: function handleTriggerCall(trigger, values) {
            trigger.trig.call(values);
            this.setState({ activeTrigger: null });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.mode === 'widget') return _react2.default.createElement(
                'div',
                { className: _widgetStyles2.default.content },
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
                    { className: _widgetStyles2.default.actions },
                    this.triggers.map(function (t, k) {
                        return _react2.default.createElement(_button.Button, { key: k, onClick: function onClick() {
                                _this2.handleActionClick(t);
                            }, label: t.title, raised: true });
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: function () {
                            return _this2.state.activeTrigger == null ? _widgetStyles2.default.triggerParamPane : _widgetStyles2.default.triggerParamPane_active;
                        }() },
                    _react2.default.createElement(_triggerargpane.TriggerArgPane, { onCancel: function onCancel() {
                            return _this2.setState({ activeTrigger: null });
                        }, onCall: function onCall(valuesArray) {
                            return _this2.handleTriggerCall(_this2.state.activeTrigger, valuesArray);
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

/***/ "./src/dashboard/injector.js":
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

/***/ "./src/dashboard/widget-factory.js":
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

var src = '\nvar React = require(\'react\');\nvar ReactSlider = require(\'react-slider\');\n\nthis.renderView = function(){\nreturn React.createElement(\'div\',null,React.createElement(ReactSlider));\n}\nthis.renderPrefpane = function(){\nreturn React.createElement(\'div\',null,\'SCRIPT PREF PANE\');\n}\n';

function getWidget(className) {
    return new Function('require,config', src);
}

exports.default = {
    getWidget: getWidget
};

/***/ }),

/***/ "./src/dashboard/widget-styles.css":
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./src/dashboard/widget-styles.css ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader??ref--2-1!../../~/postcss-loader/lib!./widget-styles.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]--[hash:base64:8]\"}!./node_modules/postcss-loader/lib/index.js!./src/dashboard/widget-styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/postcss-loader/lib/index.js!./widget-styles.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/postcss-loader/lib/index.js!./widget-styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/dashboard/widget.js":
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

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _injector = __webpack_require__(/*! ./injector */ "./src/dashboard/injector.js");

var _injector2 = _interopRequireDefault(_injector);

var _widgetFactory = __webpack_require__(/*! ./widget-factory */ "./src/dashboard/widget-factory.js");

var _widgetFactory2 = _interopRequireDefault(_widgetFactory);

var _widget = __webpack_require__(/*! ./default-widget/widget */ "./src/dashboard/default-widget/widget.js");

var _reactSlider = __webpack_require__(/*! react-slider */ "./node_modules/react-slider/react-slider.js");

var _reactSlider2 = _interopRequireDefault(_reactSlider);

var _widgetStyles = __webpack_require__(/*! ./widget-styles */ "./src/dashboard/widget-styles.css");

var _widgetStyles2 = _interopRequireDefault(_widgetStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_injector2.default.append({ 'react': _react2.default, 'react-slider': _reactSlider2.default });

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
                { className: _widgetStyles2.default.widget },
                _react2.default.createElement(
                    'div',
                    { className: _widgetStyles2.default.header },
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

/***/ }),

/***/ "./src/device/device-conf.js":
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

/***/ "./src/device/device-manager.js":
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

var _deviceConf = __webpack_require__(/*! ./device-conf */ "./src/device/device-conf.js");

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
    this.call = function (args) {
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

/***/ })

},["./src/app.js"]);