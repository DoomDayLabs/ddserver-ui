webpackJsonp([1],{

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
exports.push([module.i, "html, body, root{\n    margin: 0px;\n    padding: 0px;\n}\n/*\n.appbar{\n    padding: 0px 1em;\n    background-color: cornflowerblue;\n}\n.appbar h1{\n    padding: 0px;\n    margin: 0px;\n}\n\n\n.dashboard .widget{\n    display: inline-block;\n    width: 300px;\n    min-height: 10px;\n    border: 1px dashed black;\n    margin:5px;\n}\n\n.widget .header .btnConfig{\n    float:right;\n}\n\n\n\n\n\n.widget .actions{\n    display: flex;\n    justify-content: space-around;\n    align-items: stretch;\n}\n*/", "", {"version":3,"sources":["/Volumes/WORK/doomday/ddserver-ui/src/css/layout.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;CAChB;AACD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAgCE","file":"layout.css","sourcesContent":["html, body, root{\n    margin: 0px;\n    padding: 0px;\n}\n/*\n.appbar{\n    padding: 0px 1em;\n    background-color: cornflowerblue;\n}\n.appbar h1{\n    padding: 0px;\n    margin: 0px;\n}\n\n\n.dashboard .widget{\n    display: inline-block;\n    width: 300px;\n    min-height: 10px;\n    border: 1px dashed black;\n    margin:5px;\n}\n\n.widget .header .btnConfig{\n    float:right;\n}\n\n\n\n\n\n.widget .actions{\n    display: flex;\n    justify-content: space-around;\n    align-items: stretch;\n}\n*/"],"sourceRoot":""}]);

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
exports.push([module.i, ".dashboard-styles__dashboard--2ODfQtsi{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;    \n    -ms-flex-pack: distribute;    \n        justify-content: space-around;\n}\n\n.dashboard-styles__dashboard--2ODfQtsi .dashboard-styles__widget--1kQWfgtr{\n    display: inline-block;\n    width: 300px;\n    min-height: 10px;\n    border: 1px dashed black;\n    margin:5px;\n}", "", {"version":3,"sources":["/Volumes/WORK/doomday/ddserver-ui/src/dashboard/dashboard-styles.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,oBAAoB;QAChB,gBAAgB;IACpB,0BAA0B;QACtB,8BAA8B;CACrC;;AAED;IACI,sBAAsB;IACtB,aAAa;IACb,iBAAiB;IACjB,yBAAyB;IACzB,WAAW;CACd","file":"dashboard-styles.css","sourcesContent":[".dashboard{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;    \n    -ms-flex-pack: distribute;    \n        justify-content: space-around;\n}\n\n.dashboard .widget{\n    display: inline-block;\n    width: 300px;\n    min-height: 10px;\n    border: 1px dashed black;\n    margin:5px;\n}"],"sourceRoot":""}]);

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
exports.push([module.i, "\n.sensor-styles__sensor_number--T0_b9QG2{\n\n}\n\n\n.sensor-styles__progress--12qqz78f{\n    display: block;\n    height: 10px;\n    position: relative;\n    border:1px solid gray;\n    margin: 0px 0px;    \n}\n\n\n.sensor-styles__progress--12qqz78f>.sensor-styles__bar--sEugU17-{\n        display: block;\n        position: absolute;\n        top:0px;\n        left: 0px;\n        height: 100%;\n        background-color: orangered;\n        transition:width 90ms 0ms ease;\n}\n\n\n.sensor-styles__sensor_val--2Bf3fY3G{\n\n}\n\n\n.sensor-styles__sensor_val--2Bf3fY3G .sensor-styles__options--8arlYE-H{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n}\n\n\n.sensor-styles__sensor_val--2Bf3fY3G .sensor-styles__options--8arlYE-H .sensor-styles__option--Vf0uveF2, .sensor-styles__option_active--uT0SW8Fe{\n    border-radius: 100px;   \n    padding: 0.1em 0.5em;\n    border:1px dotted black;    \n}\n\n\n.sensor-styles__sensor_val--2Bf3fY3G .sensor-styles__options--8arlYE-H .sensor-styles__option--Vf0uveF2:before{\n    content: '\\25FB\\FE0E'\n}\n\n\n.sensor-styles__option_active--uT0SW8Fe{\n    border-color:green;\n    background-color: aquamarine;\n}\n\n\n.sensor-styles__option_active--uT0SW8Fe:before{\n    content: '\\2611\\FE0E'\n}\n\n\n.sensor-styles__sensor_flag--RU_SifSt{\n\n}\n\n\n.sensor-styles__sensor_flag--RU_SifSt .sensor-styles__flags--1bZZquly{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n}\n\n\n.sensor-styles__sensor_flag--RU_SifSt .sensor-styles__flags--1bZZquly .sensor-styles__flag--2oSUUWpe{\n    border-radius: 100px;    \n    padding: 0.1em 0.5em;\n    border:1px dotted black;\n}\n\n\n.sensor-styles__sensor_flag--RU_SifSt .sensor-styles__flags--1bZZquly .sensor-styles__flag--2oSUUWpe:before{\n    content:'\\25FB\\FE0E';\n}\n\n\n.slider {\n    position:absolute;    \n    height:10px;\n    width:300px;\n    background-color:green;\n}\n\n\n.slider .handle {\n    position:absolute;\n    height:10px;\n    width:20px;\n    background-color:red;\n}", "", {"version":3,"sources":["/Volumes/WORK/doomday/ddserver-ui/src/dashboard/default-widget/sensor-styles.css"],"names":[],"mappings":";AACA;;CAEC;;;AAGD;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,gBAAgB;CACnB;;;AAGD;QACQ,eAAe;QACf,mBAAmB;QACnB,QAAQ;QACR,UAAU;QACV,aAAa;QACb,4BAA4B;QAC5B,+BAA+B;CACtC;;;AAGD;;CAEC;;;AAGD;IACI,oBAAoB;IACpB,oBAAoB;IACpB,aAAa;IACb,+BAA+B;IAC/B,8BAA8B;QAC1B,wBAAwB;YACpB,oBAAoB;IAC5B,0BAA0B;QACtB,8BAA8B;IAClC,4BAA4B;QACxB,uBAAuB;CAC9B;;;AAGD;IACI,qBAAqB;IACrB,qBAAqB;IACrB,wBAAwB;CAC3B;;;AAGD;IACI,qBAAa;CAChB;;;AAGD;IACI,mBAAmB;IACnB,6BAA6B;CAChC;;;AAGD;IACI,qBAAa;CAChB;;;AAGD;;CAEC;;;AAGD;IACI,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,+BAA+B;IAC/B,8BAA8B;QAC1B,wBAAwB;YACpB,oBAAoB;IAC5B,0BAA0B;QACtB,8BAA8B;IAClC,4BAA4B;QACxB,uBAAuB;CAC9B;;;AAGD;IACI,qBAAqB;IACrB,qBAAqB;IACrB,wBAAwB;CAC3B;;;AAGD;IACI,qBAAa;CAChB;;;AAGD;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,uBAAuB;CAC1B;;;AAGD;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,qBAAqB;CACxB","file":"sensor-styles.css","sourcesContent":["\n.sensor_number{\n\n}\n\n\n.progress{\n    display: block;\n    height: 10px;\n    position: relative;\n    border:1px solid gray;\n    margin: 0px 0px;    \n}\n\n\n.progress>.bar{\n        display: block;\n        position: absolute;\n        top:0px;\n        left: 0px;\n        height: 100%;\n        background-color: orangered;\n        transition:width 90ms 0ms ease;\n}\n\n\n.sensor_val{\n\n}\n\n\n.sensor_val .options{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n}\n\n\n.sensor_val .options .option, .option_active{\n    border-radius: 100px;   \n    padding: 0.1em 0.5em;\n    border:1px dotted black;    \n}\n\n\n.sensor_val .options .option:before{\n    content: '◻︎'\n}\n\n\n.option_active{\n    border-color:green;\n    background-color: aquamarine;\n}\n\n\n.option_active:before{\n    content: '☑︎'\n}\n\n\n.sensor_flag{\n\n}\n\n\n.sensor_flag .flags{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n}\n\n\n.sensor_flag .flags .flag{\n    border-radius: 100px;    \n    padding: 0.1em 0.5em;\n    border:1px dotted black;\n}\n\n\n.sensor_flag .flags .flag:before{\n    content:'◻︎';\n}\n\n\n:global .slider {\n    position:absolute;    \n    height:10px;\n    width:300px;\n    background-color:green;\n}\n\n\n:global .slider .handle {\n    position:absolute;\n    height:10px;\n    width:20px;\n    background-color:red;\n}"],"sourceRoot":""}]);

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
exports.push([module.i, "\n.trigger-styles__view--1PoZ_Odg{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding:0px 10px;;\n    \n}\n\n.trigger-styles__view--1PoZ_Odg>.trigger-styles__content--WjhxBhZj{\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n\n.trigger-styles__view--1PoZ_Odg>.trigger-styles__actions--_9jONehc{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}", "", {"version":3,"sources":["/Volumes/WORK/doomday/ddserver-ui/src/dashboard/default-widget/trigger-styles.css"],"names":[],"mappings":";AACA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,aAAa;IACb,6BAA6B;IAC7B,8BAA8B;QAC1B,2BAA2B;YACvB,uBAAuB;IAC/B,iBAAiB;;CAEpB;;AAED;IACI,oBAAoB;QAChB,qBAAqB;YACjB,aAAa;CACxB;;AAED;IACI,4BAA4B;IAC5B,4BAA4B;IAC5B,qBAAqB;IACrB,sBAAsB;QAClB,mBAAmB;YACf,0BAA0B;CACrC","file":"trigger-styles.css","sourcesContent":["\n.view{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding:0px 10px;;\n    \n}\n\n.view>.content{\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n\n.view>.actions{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}"],"sourceRoot":""}]);

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
exports.push([module.i, ".widget-styles__content--2ZGZa9ia{\n    position: relative;\n    padding: 5px 10px;\n    padding-bottom: 0px;\n}\n.widget-styles__triggerParamPane--j7NMPfdE, .widget-styles__triggerParamPane_active--1zeQv6OR{\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    background-color: white;\n    height: 0%;\n    transition:height 200ms 0ms ease-out;\n    overflow: hidden;\n}\n.widget-styles__triggerParamPane_active--1zeQv6OR{\n    height: 100%;\n}\n.widget-styles__actions--gLWT1Ujl{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}", "", {"version":3,"sources":["/Volumes/WORK/doomday/ddserver-ui/src/dashboard/default-widget/widget-styles.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;CACvB;AACD;IACI,mBAAmB;IACnB,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,wBAAwB;IACxB,WAAW;IACX,qCAAqC;IACrC,iBAAiB;CACpB;AACD;IACI,aAAa;CAChB;AACD;IACI,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,sBAAsB;QAClB,mBAAmB;YACf,0BAA0B;CACrC","file":"widget-styles.css","sourcesContent":[".content{\n    position: relative;\n    padding: 5px 10px;\n    padding-bottom: 0px;\n}\n.triggerParamPane, .triggerParamPane_active{\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    background-color: white;\n    height: 0%;\n    transition:height 200ms 0ms ease-out;\n    overflow: hidden;\n}\n.triggerParamPane_active{\n    height: 100%;\n}\n.actions{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}"],"sourceRoot":""}]);

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
exports.push([module.i, ".widget-styles__widget--1tZMiU2B{\n    display: inline-block;\n    width: 20%;\n    min-height: 10px;    \n    margin:16px 0px;    \n    margin:1rem 0rem;\n    position: relative;\n}\n\n\n\n@media screen and (max-device-width:1280px){\n    .widget-styles__widget--1tZMiU2B{\n        width: 32%;\n    }\n}\n\n\n\n@media screen and (max-device-width:1023px){\n    .widget-styles__widget--1tZMiU2B{\n        width: 50%;\n    }\n}\n\n\n\n@media screen and (max-device-width:767px){\n    .widget-styles__widget--1tZMiU2B{\n        width: 100%;\n    }\n}\n\n\n\n\n\n", "", {"version":3,"sources":["/Volumes/WORK/doomday/ddserver-ui/src/dashboard/widget-styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,WAAW;IACX,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;CACtB;;;;AAID;IACI;QACI,WAAW;KACd;CACJ;;;;AAID;IACI;QACI,WAAW;KACd;CACJ;;;;AAID;IACI;QACI,YAAY;KACf;CACJ","file":"widget-styles.css","sourcesContent":[".widget{\n    display: inline-block;\n    width: 20%;\n    min-height: 10px;    \n    margin:16px 0px;    \n    margin:1rem 0rem;\n    position: relative;\n}\n\n\n\n@media screen and (max-device-width:1280px){\n    .widget{\n        width: 32%;\n    }\n}\n\n\n\n@media screen and (max-device-width:1023px){\n    .widget{\n        width: 50%;\n    }\n}\n\n\n\n@media screen and (max-device-width:767px){\n    .widget{\n        width: 100%;\n    }\n}\n\n\n\n\n\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"widget": "widget-styles__widget--1tZMiU2B"
};

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

/***/ "./src/api.js":
/* no static exports found */
/* all exports used */
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _popsicle = __webpack_require__(/*! popsicle */ "./node_modules/popsicle/dist/common.js");

var addrBase = 'http://localhost:8080/dds/webclient';
function makeUrl(url) {
    return addrBase + url;
}

exports.default = {
    makeUrl: makeUrl

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

var _deviceManager = __webpack_require__(/*! ./device/device-manager */ "./src/device/device-manager.js");

var _deviceManager2 = _interopRequireDefault(_deviceManager);

var _progress_bar = __webpack_require__(/*! react-toolbox/lib/progress_bar */ "./node_modules/react-toolbox/lib/progress_bar/index.js");

var _progress_bar2 = _interopRequireDefault(_progress_bar);

__webpack_require__(/*! ./css/layout */ "./src/css/layout.css");

var _app_bar = __webpack_require__(/*! react-toolbox/lib/app_bar */ "./node_modules/react-toolbox/lib/app_bar/index.js");

var _app_bar2 = _interopRequireDefault(_app_bar);

var _reactSlider = __webpack_require__(/*! react-slider */ "./node_modules/react-slider/react-slider.js");

var _reactSlider2 = _interopRequireDefault(_reactSlider);

var _widgetFactory = __webpack_require__(/*! ./dashboard/widget-factory */ "./src/dashboard/widget-factory.js");

var _widgetFactory2 = _interopRequireDefault(_widgetFactory);

var _drawer = __webpack_require__(/*! react-toolbox/lib/drawer */ "./node_modules/react-toolbox/lib/drawer/index.js");

var _drawer2 = _interopRequireDefault(_drawer);

var _dashboardList = __webpack_require__(/*! ./dashboard-list */ "./src/dashboard-list.js");

var _list = __webpack_require__(/*! react-toolbox/lib/list */ "./node_modules/react-toolbox/lib/list/index.js");

var _font_icon = __webpack_require__(/*! react-toolbox/lib/font_icon */ "./node_modules/react-toolbox/lib/font_icon/index.js");

var _font_icon2 = _interopRequireDefault(_font_icon);

var _popsicle = __webpack_require__(/*! popsicle */ "./node_modules/popsicle/dist/common.js");

var _api = __webpack_require__(/*! ./api */ "./src/api.js");

var _api2 = _interopRequireDefault(_api);

var _eventbus = __webpack_require__(/*! eventbus */ "./lib/eventbus/index.js");

var _eventbus2 = _interopRequireDefault(_eventbus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import './client/client';


//popsicle('/devices.conf');

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = { dashboard: { title: '' }, drawer: false, rooms: [] };
        _this.dashboard = null;
        _this.promises = [];

        (0, _popsicle.get)(_api2.default.makeUrl('/device/list')).then(function ($r) {
            var devicesConf = JSON.parse($r.body);
            devicesConf.forEach(function (d) {
                return _deviceManager2.default.addDevice(d);
            });
        }).then(function () {
            (0, _popsicle.get)(_api2.default.makeUrl('/dashboard/list')).then(function ($r) {
                var dashboardConfig = JSON.parse($r.body);
                var sources = [];
                dashboardConfig.forEach(function (r) {
                    (r.widgets || []).forEach(function (w) {
                        if ((w.class || 'default') != 'default') {
                            if (sources.indexOf(w.class) == -1) {
                                sources.push(w.class);
                            }
                        }
                    });
                });

                Promise.all(sources.map(function (s) {
                    return Promise.all([(0, _popsicle.get)('/ext/' + s + '/widget.js'), (0, _popsicle.get)('/ext/' + s + '/widget.css')]).then(function (sources) {
                        return _widgetFactory2.default.addWidget(s, sources[0].body, sources[1].body);
                    });
                })).then(function (widgetSources) {
                    _this.setState({ dashboard: dashboardConfig[0], rooms: dashboardConfig });
                });
            });
        });
        return _this;
    }

    _createClass(App, [{
        key: 'handleDrawerToggle',
        value: function handleDrawerToggle() {
            this.setState({ drawer: !this.state.drawer });
        }
    }, {
        key: 'handleRoomSelect',
        value: function handleRoomSelect(room) {
            this.setState({ dashboard: room, drawer: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var content = null;
            if (this.state.dashboard) {
                content = _react2.default.createElement(_dashboard.Dashboard, { config: this.state.dashboard });
            } else {
                content = _react2.default.createElement(_progress_bar2.default, { type: 'linear', mode: 'indeterminate' });
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _app_bar2.default,
                    { leftIcon: 'menu', onLeftIconClick: function onLeftIconClick() {
                            return _this2.handleDrawerToggle();
                        }, title: 'Doomsday Laboratories: ' + this.state.dashboard.title },
                    _react2.default.createElement(_font_icon2.default, { value: this.state.dashboard.icon }),
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.dashboard.title
                    )
                ),
                content,
                _react2.default.createElement(
                    _drawer2.default,
                    { active: this.state.drawer, onOverlayClick: function onOverlayClick() {
                            return _this2.handleDrawerToggle();
                        }, style: { width: '25%' } },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'This is your Drawer.'
                    ),
                    _react2.default.createElement(_dashboardList.DashboardList, { rooms: this.state.rooms, onSelect: function onSelect(r) {
                            return _this2.handleRoomSelect(r);
                        } }),
                    _react2.default.createElement(
                        _list.List,
                        { selectable: true, ripple: true },
                        _react2.default.createElement(_list.ListItem, { caption: 'Configuration', leftIcon: 'settings_applications' })
                    )
                )
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

/***/ "./src/dashboard-list.js":
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./src/dashboard-list.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DashboardList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(/*! react-toolbox/lib/list */ "./node_modules/react-toolbox/lib/list/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardList = exports.DashboardList = function (_React$Component) {
    _inherits(DashboardList, _React$Component);

    function DashboardList() {
        _classCallCheck(this, DashboardList);

        return _possibleConstructorReturn(this, (DashboardList.__proto__ || Object.getPrototypeOf(DashboardList)).apply(this, arguments));
    }

    _createClass(DashboardList, [{
        key: 'handleRoomSelect',
        value: function handleRoomSelect(r) {
            this.onRoom ? this.onRoom(r) : null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _list.List,
                { selectable: true, ripple: true },
                this.props.rooms.map(function (r, i) {
                    return _react2.default.createElement(_list.ListItem, {
                        key: i,
                        leftIcon: r.icon,
                        caption: r.title,
                        legend: r.legend,
                        onClick: function onClick() {
                            return _this2.props.onSelect ? _this2.props.onSelect(r) : {};
                        }
                    });
                })
            );
        }
    }]);

    return DashboardList;
}(_react2.default.Component);

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
                (this.props.config.widgets || []).map(function (widgetConf, k) {
                    return _react2.default.createElement(_widget.Widget, { key: k, config: widgetConf });
                })
            );
        }
    }]);

    return Dashboard;
}(_react2.default.Component);

/***/ }),

/***/ "./src/dashboard/default-widget/sensor-history.js":
/* no static exports found */
/* all exports used */
/*!********************************************************!*\
  !*** ./src/dashboard/default-widget/sensor-history.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SensorHistory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _dialog = __webpack_require__(/*! react-toolbox/lib/dialog */ "./node_modules/react-toolbox/lib/dialog/index.js");

var _dialog2 = _interopRequireDefault(_dialog);

var _dropdown = __webpack_require__(/*! react-toolbox/lib/dropdown */ "./node_modules/react-toolbox/lib/dropdown/index.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SensorHistory = exports.SensorHistory = function (_React$Component) {
    _inherits(SensorHistory, _React$Component);

    function SensorHistory(props) {
        _classCallCheck(this, SensorHistory);

        var _this = _possibleConstructorReturn(this, (SensorHistory.__proto__ || Object.getPrototypeOf(SensorHistory)).call(this));

        _this.viewMode = [{ value: 'day', label: 'Per day' }, { value: 'interval', label: 'Per interval' }];
        _this.state = {
            viewMode: 'day'
        };
        return _this;
    }

    _createClass(SensorHistory, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _dialog2.default,
                { active: this.props.active,
                    actions: [{ label: 'Close', onClick: this.props.onClose }],
                    title: this.props.title,
                    onOverlayClick: this.props.onClose,
                    onEscKeyDown: this.props.onClose
                },
                _react2.default.createElement(_dropdown2.default, { source: this.viewMode, value: this.state.viewMode, onChange: function onChange(viewMode) {
                        return _this2.setState({ viewMode: viewMode });
                    } })
            );
        }
    }]);

    return SensorHistory;
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
exports.FlagSensor = exports.ValSensor = exports.BoolSensor = exports.StrSensor = exports.IntSensor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _sensorStyles = __webpack_require__(/*! ./sensor-styles */ "./src/dashboard/default-widget/sensor-styles.css");

var _sensorStyles2 = _interopRequireDefault(_sensorStyles);

var _progress_bar = __webpack_require__(/*! react-toolbox/lib/progress_bar */ "./node_modules/react-toolbox/lib/progress_bar/index.js");

var _progress_bar2 = _interopRequireDefault(_progress_bar);

var _avatar = __webpack_require__(/*! react-toolbox/lib/avatar */ "./node_modules/react-toolbox/lib/avatar/index.js");

var _avatar2 = _interopRequireDefault(_avatar);

var _chip = __webpack_require__(/*! react-toolbox/lib/chip */ "./node_modules/react-toolbox/lib/chip/index.js");

var _chip2 = _interopRequireDefault(_chip);

var _sensorHistory = __webpack_require__(/*! ./sensor-history */ "./src/dashboard/default-widget/sensor-history.js");

var _dialog = __webpack_require__(/*! react-toolbox/lib/dialog */ "./node_modules/react-toolbox/lib/dialog/index.js");

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sensor = function (_React$Component) {
    _inherits(Sensor, _React$Component);

    function Sensor() {
        _classCallCheck(this, Sensor);

        var _this = _possibleConstructorReturn(this, (Sensor.__proto__ || Object.getPrototypeOf(Sensor)).call(this));

        _this.handleDialogToggle = function () {
            _this.setState({ dialogActive: !_this.state.dialogActive });
        };

        _this.state = {
            dialogActive: false
        };

        return _this;
    }

    return Sensor;
}(_react2.default.Component);

var IntSensor = exports.IntSensor = function (_Sensor) {
    _inherits(IntSensor, _Sensor);

    function IntSensor(props) {
        _classCallCheck(this, IntSensor);

        var _this2 = _possibleConstructorReturn(this, (IntSensor.__proto__ || Object.getPrototypeOf(IntSensor)).call(this, props));

        _this2.min = props.def.min;
        _this2.max = props.def.max - props.def.min;

        return _this2;
    }

    _createClass(IntSensor, [{
        key: 'value',
        value: function value() {
            return parseInt(this.props.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var v = (this.props.value - this.min) / this.max * 100;
            var displayValue = this.props.config.displayValue ? _react2.default.createElement(
                'span',
                { style: { float: 'right' } },
                this.props.value,
                ' ',
                this.props.def.char
            ) : null;
            return _react2.default.createElement(
                'div',
                { className: _sensorStyles2.default.sensor_number, onClick: this.handleDialogToggle },
                _react2.default.createElement(
                    'h4',
                    null,
                    this.props.config.title,
                    displayValue
                ),
                _react2.default.createElement(_progress_bar2.default, { min: this.props.def.min, max: this.props.def.max, type: 'linear', value: this.value(), mode: 'determinate' }),
                _react2.default.createElement(_sensorHistory.SensorHistory, { active: this.state.dialogActive,
                    title: this.props.config.title,
                    onClose: this.handleDialogToggle
                })
            );
        }
    }]);

    return IntSensor;
}(Sensor);

var StrSensor = exports.StrSensor = function (_Sensor2) {
    _inherits(StrSensor, _Sensor2);

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
                ),
                _react2.default.createElement(_sensorHistory.SensorHistory, { active: this.state.dialogActive,
                    title: this.props.config.title,
                    onClose: this.handleDialogToggle,
                    config: this.props.config.history
                })
            );
        }
    }]);

    return StrSensor;
}(Sensor);

var BoolSensor = exports.BoolSensor = function (_Sensor3) {
    _inherits(BoolSensor, _Sensor3);

    function BoolSensor() {
        _classCallCheck(this, BoolSensor);

        return _possibleConstructorReturn(this, (BoolSensor.__proto__ || Object.getPrototypeOf(BoolSensor)).apply(this, arguments));
    }

    _createClass(BoolSensor, [{
        key: 'render',
        value: function render() {
            var color = this.props.value === true ? 'yellowgreen' : 'firebrick';
            return _react2.default.createElement(
                'div',
                { className: _sensorStyles2.default.sensor_bool },
                _react2.default.createElement(
                    'h4',
                    null,
                    this.props.config.title,
                    ' ',
                    _react2.default.createElement(
                        _chip2.default,
                        { style: { float: 'right' } },
                        _react2.default.createElement(_avatar2.default, { style: { backgroundColor: color } }),
                        this.props.value.toString()
                    )
                )
            );
        }
    }]);

    return BoolSensor;
}(Sensor);

var ValSensor = exports.ValSensor = function (_Sensor4) {
    _inherits(ValSensor, _Sensor4);

    function ValSensor(props) {
        _classCallCheck(this, ValSensor);

        var _this5 = _possibleConstructorReturn(this, (ValSensor.__proto__ || Object.getPrototypeOf(ValSensor)).call(this));

        _this5.options = props.def.options;
        return _this5;
    }

    _createClass(ValSensor, [{
        key: 'render',
        value: function render() {
            var _this6 = this;

            return _react2.default.createElement(
                'div',
                { className: _sensorStyles2.default.sensor_val, onClick: this.handleDialogToggle },
                _react2.default.createElement(
                    'h4',
                    null,
                    this.props.config.title
                ),
                _react2.default.createElement(
                    'div',
                    { className: _sensorStyles2.default.options },
                    this.options.map(function (o, i) {
                        var avatarIcon = i == _this6.props.value ? "radio_button_checked" : "radio_button_unchecked";
                        var bgColor = i == _this6.props.value ? 'yellowgreen' : 'FireBrick';
                        return _react2.default.createElement(
                            _chip2.default,
                            { key: i },
                            _react2.default.createElement(_avatar2.default, { style: { color: 'black', backgroundColor: bgColor }, icon: avatarIcon }),
                            _react2.default.createElement(
                                'span',
                                null,
                                o
                            )
                        );
                    })
                ),
                _react2.default.createElement(_sensorHistory.SensorHistory, { active: this.state.dialogActive,
                    title: this.props.config.title,
                    onClose: this.handleDialogToggle,
                    config: this.props.config.history
                })
            );
        }
    }]);

    return ValSensor;
}(Sensor);

var FlagSensor = exports.FlagSensor = function (_Sensor5) {
    _inherits(FlagSensor, _Sensor5);

    function FlagSensor(props) {
        _classCallCheck(this, FlagSensor);

        var _this7 = _possibleConstructorReturn(this, (FlagSensor.__proto__ || Object.getPrototypeOf(FlagSensor)).call(this));

        _this7.flags = props.def.flags;
        return _this7;
    }

    _createClass(FlagSensor, [{
        key: 'render',
        value: function render() {
            var _this8 = this;

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
                        var avatarIcon = (1 << i & _this8.props.value) > 0 ? 'check_box' : 'check_box_outline_blank';
                        var bgColor = i == _this8.props.value ? 'yellowgreen' : 'tomato';
                        return _react2.default.createElement(
                            _chip2.default,
                            { key: i },
                            _react2.default.createElement(_avatar2.default, { style: { color: blColor }, icon: avatarIcon }),
                            f
                        );
                    })
                ),
                _react2.default.createElement(_sensorHistory.SensorHistory, { active: this.state.dialogActive,
                    title: this.props.config.title,
                    onClose: this.handleDialogToggle,
                    config: this.props.config.history
                })
            );
        }
    }]);

    return FlagSensor;
}(Sensor);

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

var _slider = __webpack_require__(/*! react-toolbox/lib/slider */ "./node_modules/react-toolbox/lib/slider/index.js");

var _slider2 = _interopRequireDefault(_slider);

var _input = __webpack_require__(/*! react-toolbox/lib/input */ "./node_modules/react-toolbox/lib/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _card = __webpack_require__(/*! react-toolbox/lib/card */ "./node_modules/react-toolbox/lib/card/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = exports.style = _triggerStyles2.default;

var ParamSetter = function (_React$Component) {
    _inherits(ParamSetter, _React$Component);

    _createClass(ParamSetter, [{
        key: 'handleChange',
        value: function handleChange(value) {
            this.setState({ value: value });
            this.props.onValue ? this.props.onValue(value) : null;
        }
    }]);

    function ParamSetter(props) {
        _classCallCheck(this, ParamSetter);

        var _this = _possibleConstructorReturn(this, (ParamSetter.__proto__ || Object.getPrototypeOf(ParamSetter)).call(this));

        _this.state = { value: null };
        _this.def = props.param;

        _this.component = _react2.default.createElement('div', null);

        switch (_this.def.type) {
            case 'int':
                {
                    _this.state.value = _this.def.min;
                };break;
            case 'str':
                {
                    _this.state.value = '';
                };break;
        }
        //console.log(this.state);
        return _this;
    }

    _createClass(ParamSetter, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.handleChange(this.state.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            //console.log('Param props=',this.props);
            if (this.def.type === 'int') {
                return _react2.default.createElement(
                    'div',
                    { className: 'param-contailer' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        this.def.name
                    ),
                    _react2.default.createElement(_slider2.default, { min: this.def.min, max: this.def.max, onChange: function onChange(v) {
                            return _this2.handleChange(v);
                        }, pinned: true, value: this.state.value })
                );
            }
            if (this.def.type === 'str') {
                return _react2.default.createElement(
                    'div',
                    { className: 'param-container' },
                    _react2.default.createElement(_input2.default, { type: 'text', label: this.def.name, value: this.state.value, onChange: function onChange(v) {
                            return _this2.handleChange(v);
                        } })
                );
            }
            return this.component;
        }
    }]);

    return ParamSetter;
}(_react2.default.Component);

var TriggerArgPane = exports.TriggerArgPane = function (_React$Component2) {
    _inherits(TriggerArgPane, _React$Component2);

    function TriggerArgPane(props) {
        _classCallCheck(this, TriggerArgPane);

        var _this3 = _possibleConstructorReturn(this, (TriggerArgPane.__proto__ || Object.getPrototypeOf(TriggerArgPane)).call(this));

        _this3.values = [];
        return _this3;
    }

    _createClass(TriggerArgPane, [{
        key: 'handleCall',
        value: function handleCall() {
            //console.log(this.props);
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
            //console.log('Value',index,value);
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
            var _this4 = this;

            console.log('render');
            if (this.props.trigger == null) return _react2.default.createElement('span', null);

            var params = this.props.trigger.def.params || [];

            return _react2.default.createElement(
                'div',
                { className: _triggerStyles2.default.view },
                _react2.default.createElement(
                    'div',
                    { className: _triggerStyles2.default.content },
                    params.map(function (p, i) {
                        return _react2.default.createElement(ParamSetter, { key: i, param: p, onValue: function onValue(value) {
                                return _this4.handleParamValueSet(i, value);
                            } });
                    })
                ),
                _react2.default.createElement(
                    _card.CardActions,
                    { className: _triggerStyles2.default.actions },
                    _react2.default.createElement(_button.Button, { onClick: function onClick() {
                            return _this4.handleCancel();
                        }, label: 'Cancel' }),
                    _react2.default.createElement(_button.Button, { onClick: function onClick() {
                            return _this4.handleCall();
                        }, label: this.props.trigger.trigger.title })
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

var _card = __webpack_require__(/*! react-toolbox/lib/card */ "./node_modules/react-toolbox/lib/card/index.js");

var _reactToolbox = __webpack_require__(/*! react-toolbox */ "./node_modules/react-toolbox/lib/index.js");

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
            if (this.$mounted) {
                var state = {};
                state[name] = val;
                this.setState(state);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('Mounted');
            this.$mounted = true;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('Unmount');
            this.$mounted = false;
        }
    }]);

    function DefaultWidget(props) {
        _classCallCheck(this, DefaultWidget);

        console.log('create');

        var _this = _possibleConstructorReturn(this, (DefaultWidget.__proto__ || Object.getPrototypeOf(DefaultWidget)).call(this));

        _this.$mounted = false;
        //console.log(props);
        _this.sensorsMain = [];
        _this.sensorsExtend = [];
        _this.sensors = new Map();
        _this.triggers = [].concat(_toConsumableArray(props.config.triggers));

        var state = { activeTrigger: null, mounted: false };
        (props.config.sensors || []).forEach(function (s) {
            var sensor = _deviceManager2.default.getSensor(s.sensor);
            if (sensor) {
                state[sensor.def().UID] = sensor.val();
                sensor.sub(function (val, UID) {
                    return _this.refreshSensor(val, UID);
                });
                _this.sensors.set(s, sensor);
                if (s.viewInMain) {
                    _this.sensorsMain.push(s);
                } else {
                    _this.sensorsExtend.push(s);
                }
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
                            case 'bool':
                                return _react2.default.createElement(_sensors.BoolSensor, { key: k, config: s, def: def, value: _this2.state[def.UID] });
                        }
                    })
                ),
                _react2.default.createElement('div', { className: 'sensors-extend' }),
                _react2.default.createElement(
                    _card.CardActions,
                    { className: _widgetStyles2.default.actions },
                    this.triggers.map(function (t, k) {
                        return _react2.default.createElement(_button.Button, { icon: t.icon, key: k, onClick: function onClick() {
                                _this2.handleActionClick(t);
                            }, label: t.title });
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: function () {
                            return _this2.state.activeTrigger == null ? _widgetStyles2.default.triggerParamPane : _widgetStyles2.default.triggerParamPane_active;
                        }() },
                    function () {
                        if (_this2.state.activeTrigger != null) return _react2.default.createElement(_triggerargpane.TriggerArgPane, {
                            onCancel: function onCancel() {
                                return _this2.setState({ activeTrigger: null });
                            },
                            onCall: function onCall(valuesArray) {
                                return _this2.handleTriggerCall(_this2.state.activeTrigger, valuesArray);
                            },
                            trigger: _this2.state.activeTrigger });
                    }()
                )
            );else {

                var handleTabChange = function handleTabChange(index) {
                    _this2.setState({ activePrefTab: index });
                };
                return _react2.default.createElement(
                    _reactToolbox.Tabs,
                    { index: this.state.activePrefTab, onChange: handleTabChange },
                    _react2.default.createElement(_reactToolbox.Tab, { label: 'Prefs' }),
                    _react2.default.createElement(_reactToolbox.Tab, { label: 'Sensors' }),
                    _react2.default.createElement(_reactToolbox.Tab, { label: 'Actions' })
                );
            }
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var src = '\nvar React = require(\'react\');\nvar ReactSlider = require(\'react-slider\');\n\nthis.renderView = function(){\nreturn React.createElement(\'div\',null,React.createElement(ReactSlider));\n}\nthis.renderPrefpane = function(){\nreturn React.createElement(\'div\',null,\'SCRIPT PREF PANE\');\n}\n';

var WidgetClass = function WidgetClass(name, jsSource, cssSource) {
    _classCallCheck(this, WidgetClass);

    var $name = name;
    var $js = jsSource;
    var $css = cssSource;
    var $fn = new Function('widget,require,config,React', $js);

    this.jsSource = function () {
        return $js;
    };
    this.cssSource = function () {
        return $css;
    };
    this.fn = function () {
        return $fn;
    };
};

var classes = new Map();

function addWidget(className, jsSource, cssSource) {
    var w = new WidgetClass(className, jsSource, cssSource);
    classes.set(className, w);
    return w;
};

function getWidget(className) {

    return classes.get(className) || new WidgetClass(className, '', '');
}

function makeWidget($this, className, injector) {
    var widgetSource = classes.get(className);
    if (!widgetSource) return function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    null,
                    'VIEW_NOT_FOUND'
                );
            }
        }]);

        return _class;
    }(_react2.default.Component);

    var widgetFn = widgetSource.fn();

    var widgetClass = function (_React$Component2) {
        _inherits(widgetClass, _React$Component2);

        function widgetClass(props) {
            _classCallCheck(this, widgetClass);

            var _this2 = _possibleConstructorReturn(this, (widgetClass.__proto__ || Object.getPrototypeOf(widgetClass)).call(this));

            var _render = _this2.render;
            var _componentWillMount = _this2.componentnWillMount;
            var _componentDidMount = _this2.componentDidMount;
            _this2.state = {};
            widgetFn.apply(_this2, [_this2, function (name) {
                return injector.require(name);
            }, props.config, _react2.default]);
            _this2.componentDidMount = _componentDidMount;
            _this2.componentWillMount = _componentWillMount;
            _this2.render = _render;
            return _this2;
        }

        _createClass(widgetClass, [{
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

        return widgetClass;
    }(_react2.default.Component);
    return widgetClass;
}

exports.default = {
    getWidget: getWidget,
    addWidget: addWidget,
    makeWidget: makeWidget
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

var _card = __webpack_require__(/*! react-toolbox/lib/card */ "./node_modules/react-toolbox/lib/card/index.js");

var _menu = __webpack_require__(/*! react-toolbox/lib/menu */ "./node_modules/react-toolbox/lib/menu/index.js");

var _input = __webpack_require__(/*! react-toolbox/lib/input */ "./node_modules/react-toolbox/lib/input/index.js");

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_injector2.default.append({
    'react': _react2.default,
    'react-slider': _reactSlider2.default,
    'react-toolbox/lib/input': __webpack_require__(/*! react-toolbox/lib/input */ "./node_modules/react-toolbox/lib/input/index.js")
});

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
            //let widgetClass = WidgetFactory.getWidget(props.config.class);

            //let widgetFn = widgetClass.fn;
            var injector = _injector2.default.get();

            _this.widget = _widgetFactory2.default.makeWidget(_this, props.config.class, injector);
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
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: _widgetStyles2.default.widget },
                _react2.default.createElement(
                    _card.Card,
                    null,
                    _react2.default.createElement(
                        'div',
                        { style: { position: 'absolute', right: '1rem', top: '1rem', display: function () {
                                    return _this2.state.mode == 'widget' ? 'block' : 'none';
                                }() } },
                        _react2.default.createElement(
                            _menu.IconMenu,
                            { icon: 'more_vert', position: 'topRight', menuRipple: true },
                            _react2.default.createElement(_menu.MenuItem, { caption: 'Config', icon: 'settings', onClick: function onClick() {
                                    return _this2.handlePrefClick();
                                } }),
                            _react2.default.createElement(_menu.MenuItem, { caption: 'Move', icon: 'swap_horiz' }),
                            _react2.default.createElement(_menu.MenuItem, { caption: 'Remove', icon: 'delete_forever' })
                        )
                    ),
                    _react2.default.createElement(_card.CardTitle, {
                        title: this.header,
                        subtitle: this.subheader
                    }),
                    _react2.default.createElement(this.widget, { mode: this.state.mode, config: this.props.config.config })
                )
            );
        }
    }]);

    return Widget;
}(_react2.default.Component);

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    this.UID = function () {
        return UID;
    };
};

var Sensor = function Sensor(sensorDef, value, UID) {
    _classCallCheck(this, Sensor);

    var $def = _extends({ UID: UID }, sensorDef);
    var $value = value;
    var $subs = [];

    this.def = function () {
        return _extends({}, $def);
    };
    this.sub = function (fn) {
        return $subs.push(fn);
    };
    this.val = function () {
        return $value;
    };
    this.put = function (v) {
        $value = v;
        $subs.forEach(function (s) {
            return s(v, $def.UID);
        });
    };
};

var sensors = new Map();
var triggers = new Map();

function addDevice(device) {
    (device.sensors || []).forEach(function (s) {
        var UID = device.name + '.' + s.name;
        var value = device.values[s.name];
        var sensor = new Sensor(s, value, UID);
        sensors.set(sensor.def().UID, sensor);
    });

    var onlineSensor = new Sensor({ name: 'online', type: 'bool', value: false }, false, device.name + '.online');
    sensors.set(onlineSensor.def().UID, onlineSensor);

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