/*!
 * angular-schema-form-spark
 * @version 1.0.0-alpha.5
 * @date Tue, 26 Jun 2018 14:06:45 GMT
 * @link https://github.com/json-schema-form/angular-schema-form-spark
 * @license MIT
 * Copyright (c) 2014-2018 JSON Schema Form
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var path = '/spark/actions.html';
var html = "<div class=\"sprk-o-Stack sprk-o-Stack--medium schema-form-actions {{::form.htmlClass + ' ' + idClass}}\">\n    <div class=\"sprk-o-Stack__item\" ng-repeat-start=\"item in form.items\">\n        <input\n            type=\"submit\"\n            class=\"sprk-c-Button {{ item.style || '' }} {{::form.fieldHtmlClass}}\"\n            value=\"{{item.title}}\"\n            ng-if=\"item.type === 'submit'\">\n        <button\n            class=\"sprk-c-Button {{ item.style || '' }} {{::form.fieldHtmlClass}}\"\n            type=\"button\"\n            ng-disabled=\"form.readonly\"\n            ng-if=\"item.type !== 'submit'\"\n            ng-click=\"buttonClick($event,item)\"><span ng-if=\"item.icon\" class=\"{{item.icon}}\"></span>{{item.title}}</button>\n    </div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var path = '/spark/array.html';
var html = "<div class=\"schema-form-array {{::form.htmlClass + ' ' + idClass}}\" sf-field-model=\"sf-new-array\" sf-new-array>\n  <label class=\"sprk-b-Label\" ng-show=\"showTitle()\">{{ form.title }}</label>\n  <ol class=\"list-group\" sf-field-model ui-sortable=\"form.sortOptions\">\n    <li class=\"list-group-item {{::form.fieldHtmlClass}}\"\n        sf-field-model=\"ng-repeat\"\n        ng-repeat=\"item in $$value$$ track by $id(trackBy(item, $index))\">\n      <button ng-hide=\"form.readonly || form.remove === null\"\n              ng-click=\"deleteFromArray(item)\"\n              ng-disabled=\"form.schema.minItems >= modelArray.length\"\n              style=\"position: relative; z-index: 20;\"\n              type=\"button\" class=\"close pull-right\">\n              <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n      </button>\n      <div schema-form-array-items sf-key-controller sf-parent-key=\"[{{form.key.join('][')}}]\" sf-index=\"{{$index}}\"></div>\n    </li>\n  </ol>\n  <div class=\"clearfix\" style=\"padding: 15px;\" ng-model=\"modelArray\" schema-validate=\"form\">\n    <div class=\"help-block\"\n         ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\n         ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n\n    <button ng-hide=\"form.readonly || form.add === null\"\n            ng-click=\"appendToArray()\"\n            ng-disabled=\"form.schema.maxItems <= modelArray.length\"\n            type=\"button\"\n            class=\"btn {{ form.style.add || 'btn-default' }} pull-right\">\n      <i class=\"glyphicon glyphicon-plus\"></i>\n      {{ form.add || 'Add'}}\n    </button>\n  </div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var path = '/spark/checkbox.html';
var html = "<div class=\"sprk-b-SelectionContainer schema-form-checkbox {{::form.htmlClass + ' ' + idClass}}\"\n     ng-class=\"{\n       'has-error': form.disableErrorState !== true && hasError(),\n       'has-success': form.disableSuccessState !== true && hasSuccess(),\n       'has-feedback': form.feedback !== false,\n       'required': form.required === true\n     }\">\n  <label class=\"{{::form.labelHtmlClass}}\">\n    <input type=\"checkbox\"\n           sf-changed=\"form\"\n           ng-disabled=\"form.readonly\"\n           sf-field-model\n           schema-validate=\"form\"\n           class=\"{{::form.fieldHtmlClass}}\"\n           name=\"{{::fieldId(true, false)}}\">\n    <span class=\"sprk-b-Label--inline sprk-u-mls\" ng-bind-html=\"form.title\"></span>\n  </label>\n  <div class=\"sprk-b-HelperText\" sf-message=\"form.description\"></div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var path = '/spark/checkboxes.html';
var html = "<div\n    sf-field-model=\"sf-new-array\"\n    sf-new-array\n    class=\"sprk-b-InputContainer schema-form-checkboxes {{::form.htmlClass + ' ' + idClass}}\"\n    ng-class=\"{\n        'has-error': form.disableErrorState !== true &&  hasError(),\n        'has-success': form.disableSuccessState !== true &&  hasSuccess(),\n        'required': form.required === true\n    }\">\n    <fieldset>\n        <legend>\n            <label\n                class=\"sprk-b-Label {{::form.labelHtmlClass}}\"\n                sf-field-model   \n                schema-validate=\"form\"\n                ng-show=\"showTitle()\">{{form.title}}</label>\n        </legend>\n        <div class=\"sprk-b-SelectionContainer\" ng-repeat=\"val in titleMapValues track by $index\" >\n            <label>\n              <input type=\"checkbox\"\n                     ng-disabled=\"form.readonly\"\n                     sf-changed=\"form\"\n                     class=\"{{::form.fieldHtmlClass}}\"\n                     ng-model=\"titleMapValues[$index]\"\n                     name=\"{{::fieldId(true, false)}}\" />\n              <span class=\"sprk-b-Label--inline sprk-u-mls\" ng-bind-html=\"form.titleMap[$index].name\"></span>\n            </label>\n        </div>\n    </fieldset>\n  <div class=\"sprk-b-HelperText\" sf-message=\"form.description\"></div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var path = '/spark/default.html';
var html = "<div class=\"sprk-b-InputContainer {{::form.htmlClass + ' schema-form-' + form.type + ' ' + idClass}}\"\n     ng-class=\"{\n       'has-error': form.disableErrorState !== true && hasError(),\n       'has-success': form.disableSuccessState !== true && hasSuccess(),\n       'has-feedback': form.feedback !== false,\n       'required': form.required === true\n     }\">\n  <label class=\"sprk-b-Label {{::form.labelHtmlClass}}\" ng-class=\"{'sr-only': !showTitle()}\" for=\"{{::fieldId(true, false)}}\">{{form.title}}</label>\n\n  <input ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\"\n         ng-show=\"::form.key\"\n         type=\"{{::form.type}}\"\n         step=\"any\"\n         sf-changed=\"form\"\n         placeholder=\"{{::form.placeholder}}\"\n         class=\"sprk-b-TextInput sprk-u-Width-100 {{::form.fieldHtmlClass}}\"\n         id=\"{{::fieldId(true, false)}}\"\n         sf-field-model\n         ng-disabled=\"form.readonly\"\n         schema-validate=\"form\"\n         name=\"{{::fieldId(true, false)}}\"\n         aria-describedby=\"{{::fieldId(true, true) + '-status'}}\">\n\n  <div ng-if=\"form.fieldAddonLeft || form.fieldAddonRight\"\n       ng-class=\"{'input-group': (form.fieldAddonLeft || form.fieldAddonRight)}\">\n    <span ng-if=\"form.fieldAddonLeft\"\n          class=\"input-group-addon\"\n          ng-bind-html=\"form.fieldAddonLeft\"></span>\n    <input ng-show=\"::form.key\"\n           type=\"{{::form.type}}\"\n           step=\"any\"\n           sf-changed=\"form\"\n           placeholder=\"{{::form.placeholder}}\"\n           class=\"sprk-b-TextInput sprk-u-Width-100 {{::form.fieldHtmlClass}}\"\n           id=\"{{::fieldId(true, false)}}\"\n           sf-field-model\n           ng-disabled=\"form.readonly\"\n           schema-validate=\"form\"\n           name=\"{{::fieldId(true, false)}}\"\n           aria-describedby=\"{{::fieldId(true, true) + '-status'}}\">\n\n    <span ng-if=\"form.fieldAddonRight\"\n          class=\"input-group-addon\"\n          ng-bind-html=\"form.fieldAddonRight\"></span>\n  </div>\n\n  <span ng-if=\"form.feedback !== false\"\n        class=\"form-control-feedback\"\n        ng-class=\"evalInScope(form.feedback) || {'glyphicon': true, 'glyphicon-ok': form.disableSuccessState !== true && hasSuccess(), 'glyphicon-remove': form.disableErrorState !== true && hasError() }\"\n        aria-hidden=\"true\"></span>\n\n  <span ng-if=\"hasError() || hasSuccess()\"\n        id=\"{{::fieldId(true, true) + '-status'}}\"\n        class=\"sr-only\">{{ hasSuccess() ? '(success)' : '(error)' }}</span>\n\n  <div class=\"sprk-b-HelperText\" sf-message=\"form.description\"></div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var path = '/spark/fieldset.html';
var html = "<fieldset ng-disabled=\"form.readonly\" class=\"schema-form-fieldset {{::form.htmlClass + ' ' + idClass}}\">\n  <legend ng-class=\"{'sr-only': !showTitle() }\">{{ form.title }}</legend>\n  <div class=\"sprk-b-HelperText\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div>\n</fieldset>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var path = '/spark/help.html';
var html = "<div class=\"sprk-b-TypeBodyTwo schema-form-helpvalue {{::form.htmlClass + ' ' + idClass}}\" ng-bind-html=\"form.helpvalue\"></div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var path = '/spark/radios.html';
var html = "<div\n    class=\"sprk-b-InputContainer schema-form-radios {{::form.htmlClass + ' ' + idClass}}\"\n    ng-class=\"{\n      'has-error': form.disableErrorState !== true &&  hasError(),\n      'has-success': form.disableSuccessState !== true && hasSuccess(),\n      'required': form.required === true\n    }\">\n    <fieldset>\n        <legend>\n            <label\n                class=\"sprk-b-Label {{::form.labelHtmlClass}}\"\n                sf-field-model\n                schema-validate=\"form\"\n                ng-show=\"showTitle()\">{{form.title}}</label>\n        </legend>\n        <div class=\"sprk-b-SelectionContainer\" ng-repeat=\"tm in form.titleMap\">\n            <label>\n                <input\n                    type=\"radio\"\n                    class=\"{{::form.fieldHtmlClass}}\"\n                    sf-changed=\"form\"\n                    ng-disabled=\"form.readonly\"\n                    sf-field-model\n                    ng-value=\"tm.value\"\n                    name=\"{{::fieldId(true, false)}}\" />\n                <span class=\"sprk-b-Label sprk-b-Label--inline sprk-u-mls\" ng-bind-html=\"tm.name\"></span>\n            </label>\n        </div>\n    </fieldset>\n    <div class=\"sprk-b-HelperText\" sf-message=\"form.description\"></div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var path = '/spark/section.html';
var html = "<div class=\"schema-form-section {{::form.htmlClass + ' ' + idClass}}\" sf-key-controller sf-parent-key=\"[{{form.key.join('][')}}]\" sf-index=\"{{$index}}\"></div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var path = '/spark/select.html';
var html = "<div class=\"sprk-b-InputContainer {{::form.htmlClass + ' ' + idClass}} schema-form-select\"\n     ng-class=\"{\n       'has-error': form.disableErrorState !== true && hasError(),\n       'has-success': form.disableSuccessState !== true && hasSuccess(),\n       'has-feedback': form.feedback !== false,\n       'required': form.required === true\n     }\">\n  <label class=\"sprk-b-Label {{::form.labelHtmlClass}}\" ng-show=\"showTitle()\" for=\"{{::fieldId(true, false)}}\">\n    {{form.title}}\n  </label>\n  <select sf-field-model\n          id=\"{{::fieldId(true, false)}}\"\n          ng-disabled=\"form.readonly\"\n          sf-changed=\"form\"\n          class=\"sprk-b-Select {{::form.fieldHtmlClass}}\"\n          schema-validate=\"form\"\n          ng-options=\"item.value as item.name group by item.group for item in form.titleMap\"\n          name=\"{{::fieldId(true, false)}}\">\n  </select>\n  <div class=\"sprk-b-HelperText\" sf-message=\"form.description\"></div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var path = '/spark/submit.html';
var html = "<div class=\"sprk-b-InputContainer schema-form-submit {{::form.htmlClass + ' ' + idClass}}\">\n  <input type=\"submit\"\n         class=\"sprk-c-Button {{ form.style || '' }} {{::form.fieldHtmlClass}}\"\n         value=\"{{form.title}}\"\n         ng-disabled=\"form.readonly\"\n         ng-if=\"form.type === 'submit'\">\n  <button class=\"sprk-c-Button {{ form.style || '' }}\"\n          type=\"button\"\n          ng-click=\"buttonClick($event,form)\"\n          ng-disabled=\"form.readonly\"\n          ng-if=\"form.type !== 'submit'\">\n      <span ng-if=\"form.icon\" class=\"{{form.icon}}\"></span>\n      {{form.title}}\n  </button>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var path = '/spark/tabarray.html';
var html = "<div ng-init=\"selected = { tab: 0 }\"\n     ng-model=\"modelArray\" schema-validate=\"form\"\n     sf-field-model=\"sf-new-array\"\n     sf-new-array\n     class=\"clearfix schema-form-tabarray schema-form-tabarray-{{form.tabType || 'left'}} {{::form.htmlClass + ' ' + idClass}}\">\n  <div ng-if=\"!form.tabType || form.tabType !== 'right'\"\n       ng-class=\"{'col-xs-3': !form.tabType || form.tabType === 'left'}\">\n    <ol class=\"nav nav-tabs\"\n        ng-class=\"{ 'tabs-left': !form.tabType || form.tabType === 'left'}\"\n        sf-field-model ui-sortable=\"form.sortOptions\">\n      <li sf-field-model=\"ng-repeat\"\n          ng-repeat=\"item in $$value$$ track by $index\"\n          ng-click=\"$event.preventDefault() || (selected.tab = $index)\"\n          ng-class=\"{active: selected.tab === $index}\">\n          <a href=\"#\">{{interp(form.title,{'$index':$index, value: item}) || $index}}</a>\n      </li>\n      <li ng-hide=\"form.readonly || form.add === null\"\n          ng-disabled=\"form.schema.maxItems <= modelArray.length\"\n          ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\">\n        <a href=\"#\">\n          <i class=\"glyphicon glyphicon-plus\"></i>\n          {{ form.add || 'Add'}}\n          </a>\n      </li>\n    </ol>\n  </div>\n\n  <div ng-class=\"{'col-xs-9': !form.tabType || form.tabType === 'left' || form.tabType === 'right'}\">\n    <div class=\"tab-content {{::form.fieldHtmlClass}}\">\n      <div class=\"tab-pane clearfix tab{{selected.tab}} index{{$index}}\"\n           sf-field-model=\"ng-repeat\"\n           ng-repeat=\"item in $$value$$ track by $index\"\n           ng-show=\"selected.tab === $index\"\n           ng-class=\"{active: selected.tab === $index}\">\n\n           <div schema-form-array-items sf-key-controller sf-parent-key=\"[{{form.key.join('][')}}]\" sf-index=\"{{$index}}\"></div>\n\n           <button ng-hide=\"form.readonly || form.remove === null\"\n                   ng-click=\"selected.tab = deleteFromArray($index).length - 1\"\n                   ng-disabled=\"form.schema.minItems >= modelArray.length\"\n                   type=\"button\"\n                   class=\"btn {{ form.style.remove || 'btn-default' }} pull-right\">\n             <i class=\"glyphicon glyphicon-trash\"></i>\n             {{ form.remove || 'Remove'}}\n           </button>\n      </div>\n      <div class=\"help-block\"\n           ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\n           ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div ng-if=\"form.tabType === 'right'\" class=\"col-xs-3\">\n    <ul class=\"nav nav-tabs tabs-right\">\n      <li  sf-field-model=\"ng-repeat\"\n          ng-repeat=\"item in $$value$$ track by $index\"\n          ng-click=\"$event.preventDefault() || (selected.tab = $index)\"\n          ng-class=\"{active: selected.tab === $index}\">\n          <a href=\"#\">{{interp(form.title,{'$index':$index, value: item}) || $index}}</a>\n      </li>\n      <li ng-hide=\"form.readonly || form.add === null\"\n          ng-disabled=\"form.schema.maxItems <= modelArray.length\"\n          ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\">\n        <a href=\"#\">\n          <i class=\"glyphicon glyphicon-plus\"></i>\n          {{ form.add || 'Add'}}\n          </a>\n      </li>\n    </ul>\n  </div>\n\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var path = '/spark/tabs.html';
var html = "<div ng-init=\"selected = { tab: 0 }\" class=\"sprk-c-Tabs {{::form.htmlClass + ' ' + idClass}}\" role=\"tablist\" aria-orientation=\"horizontal\" data-sprk-navigation=\"tabs\">\n  <div class=\"sprk-c-Tabs__buttons\">\n    <button role=\"tab\" ng-repeat=\"tab in form.tabs\"\n        ng-disabled=\"form.readonly\"\n            class=\"sprk-c-Tabs__button\"\n        ng-click=\"$event.preventDefault() || (selected.tab = $index)\"\n        ng-class=\"{'sprk-c-Tabs__button--active': selected.tab === $index}\">\n        {{ tab.title }}</button>\n  </div>\n\n  <div class=\"sprk-c-Tabs__content {{::form.fieldHtmlClass}}\" role=\"tabpanel\">\n  </div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var path = '/spark/textarea.html';
var html = "<div class=\"sprk-b-InputContainer has-feedback {{::form.htmlClass + ' ' + idClass}} schema-form-textarea\"\n     ng-class=\"{\n       'has-error': form.disableErrorState !== true && hasError(),\n       'has-success': form.disableSuccessState !== true && hasSuccess(),\n       'has-feedback': form.feedback !== false,\n       'required': form.required === true\n     }\">\n  <label class=\"sprk-b-Label {{::form.labelHtmlClass}}\" ng-class=\"{'sr-only': !showTitle()}\" for=\"{{::fieldId(true, false)}}\">{{form.title}}</label>\n\n  <textarea ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\"\n            class=\"sprk-b-TextInput  sprk-u-Width-100 {{::form.fieldHtmlClass}}\"\n            id=\"{{::fieldId(true, false)}}\"\n            sf-changed=\"form\"\n            ng-attr-placeholder=\"{{::form.placeholder}}\"\n            ng-disabled=\"form.readonly\"\n            sf-field-model\n            schema-validate=\"form\"\n            name=\"{{::fieldId(true, false)}}\"></textarea>\n\n  <div ng-if=\"form.fieldAddonLeft || form.fieldAddonRight\"\n       ng-class=\"{'input-group': (form.fieldAddonLeft || form.fieldAddonRight)}\">\n    <span ng-if=\"form.fieldAddonLeft\"\n          class=\"input-group-addon\"\n          ng-bind-html=\"form.fieldAddonLeft\"></span>\n    <textarea class=\"sprk-b-TextInput  sprk-u-Width-100 {{::form.fieldHtmlClass}}\"\n              id=\"{{::fieldId(true, false)}}\"\n              sf-changed=\"form\"\n              ng-attr-placeholder=\"{{::form.placeholder}}\"\n              ng-disabled=\"form.readonly\"\n              sf-field-model\n              schema-validate=\"form\"\n              name=\"{{::fieldId(true, false)}}\"></textarea>\n    <span ng-if=\"form.fieldAddonRight\"\n          class=\"input-group-addon\"\n          ng-bind-html=\"form.fieldAddonRight\"></span>\n  </div>\n\n  <span class=\"sprk-b-HelperText\" sf-message=\"form.description\"></span>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spark_actions_html__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spark_actions_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__spark_actions_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spark_array_html__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spark_array_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__spark_array_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spark_checkbox_html__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spark_checkbox_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__spark_checkbox_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spark_checkboxes_html__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spark_checkboxes_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__spark_checkboxes_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spark_default_html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spark_default_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__spark_default_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spark_fieldset_html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spark_fieldset_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__spark_fieldset_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__spark_help_html__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__spark_help_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__spark_help_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__spark_radios_html__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__spark_radios_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__spark_radios_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__spark_section_html__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__spark_section_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__spark_section_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__spark_select_html__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__spark_select_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__spark_select_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__spark_submit_html__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__spark_submit_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__spark_submit_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__spark_tabarray_html__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__spark_tabarray_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__spark_tabarray_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__spark_tabs_html__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__spark_tabs_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__spark_tabs_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__spark_textarea_html__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__spark_textarea_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__spark_textarea_html__);
// ngtemplate-loader embeds the html on build







//import radiobuttonsTemplate from './spark/radio-buttons.html';

//import radiosInlineTemplate from './spark/radios-inline.html';







angular
  .module('schemaForm')
  .config(decoratorConfig);

decoratorConfig.$inject = [
  'schemaFormDecoratorsProvider', 'sfBuilderProvider'
];

/**
 *
 * @param decoratorsProvider
 * @param sfBuilderProvider
 */
function decoratorConfig(decoratorsProvider, sfBuilderProvider) {
    var simpvarransclusion  = sfBuilderProvider.builders.simpvarransclusion;
    var ngModelOptions      = sfBuilderProvider.builders.ngModelOptions;
    var ngModel             = sfBuilderProvider.builders.ngModel;
    var sfField             = sfBuilderProvider.builders.sfField;
    var condition           = sfBuilderProvider.builders.condition;
    var array               = sfBuilderProvider.builders.array;
    var numeric             = sfBuilderProvider.builders.numeric;
    var defaults = [sfField, ngModel, ngModelOptions, condition];

    decoratorsProvider.defineDecorator('sparkDecorator', {
        actions: {template: __WEBPACK_IMPORTED_MODULE_0__spark_actions_html___default.a, builder: defaults},
        array: {template: __WEBPACK_IMPORTED_MODULE_1__spark_array_html___default.a, builder: [ sfField, ngModelOptions, ngModel, array, condition ]},
        button: {template: __WEBPACK_IMPORTED_MODULE_10__spark_submit_html___default.a, builder: defaults},
        checkbox: {template: __WEBPACK_IMPORTED_MODULE_2__spark_checkbox_html___default.a, builder: defaults},
        checkboxes: {template: __WEBPACK_IMPORTED_MODULE_3__spark_checkboxes_html___default.a, builder: [ sfField, ngModelOptions, ngModel, array, condition ]},
        conditional: {template: __WEBPACK_IMPORTED_MODULE_8__spark_section_html___default.a, builder: [ sfField, simpvarransclusion, condition ]},
        'default': {template: __WEBPACK_IMPORTED_MODULE_4__spark_default_html___default.a, builder: defaults},
        fieldset: {template: __WEBPACK_IMPORTED_MODULE_5__spark_fieldset_html___default.a, builder: [ sfField, simpvarransclusion, condition ]},
        help: {template: __WEBPACK_IMPORTED_MODULE_6__spark_help_html___default.a, builder: defaults},
        number: {template: __WEBPACK_IMPORTED_MODULE_4__spark_default_html___default.a, builder: defaults.concat(numeric)},
        password: {template: __WEBPACK_IMPORTED_MODULE_4__spark_default_html___default.a, builder: defaults},
        radios: {template: __WEBPACK_IMPORTED_MODULE_7__spark_radios_html___default.a, builder: defaults},
        // 'radios-inline': {template: radiosInlineTemplate, builder: defaults},
        // radiobuttons: {template: radiobuttonsTemplate, builder: defaults},
        section: {template: __WEBPACK_IMPORTED_MODULE_8__spark_section_html___default.a, builder: [ sfField, simpvarransclusion, condition ]},
        select: {template: __WEBPACK_IMPORTED_MODULE_9__spark_select_html___default.a, builder: [ selectPlaceholder ].concat(defaults)},
        submit: {template: __WEBPACK_IMPORTED_MODULE_10__spark_submit_html___default.a, builder: defaults},
        tabarray: {template: __WEBPACK_IMPORTED_MODULE_11__spark_tabarray_html___default.a, builder: [ sfField, ngModelOptions, ngModel, array, condition ]},
        tabs: {template: __WEBPACK_IMPORTED_MODULE_12__spark_tabs_html___default.a, builder: [ sfField, ngModelOptions, tabs, condition ]},
        textarea: {template: __WEBPACK_IMPORTED_MODULE_13__spark_textarea_html___default.a, builder: defaults},
    }, []);

    // Tabs is so bootstrap specific that it stays here.
    // @todo wtf??
    function tabs(args) {
        if (args.form.tabs && args.form.tabs.length > 0) {
            var tabContent = args.fieldFrag.querySelector('.tab-content');

            args.form.tabs.forEach(function (tab, index) {
                var evalExpr = '(evalExpr(' + args.path + '.tabs[' + index + ']' +
                    '.condition, { model: model, "arrayIndex": $index}))';
                var div = document.createElement('div');
                div.className = 'tab-pane';
                div.setAttribute('ng-disabled', 'form.readonly');
                div.setAttribute('ng-show', 'selected.tab === ' + index);
                div.setAttribute('ng-class', '{active: selected.tab === ' + index + '}');

                if(!!tab.condition) {
                    div.setAttribute('ng-if', evalExpr);
                }

                var childFrag = args.build(tab.items, args.path + '.tabs[' + index + '].items', args.state);
                div.appendChild(childFrag);
                tabContent.appendChild(div);
            });
        }
    }

    function selectPlaceholder(args) {
        if (args.form.placeholder) {
            var selectBox = args.fieldFrag.querySelector('select');
            var option = document.createElement('option');
            option.setAttribute('value', '');

            /* We only want the placeholder to show when we do not have a value on the model.
             * We make ngModel builder replace all so we can use $$value$$.
             */
            option.setAttribute('sf-field-model', 'replaceAll');

            /* https://github.com/angular/angular.js/issues/12190#issuecomment-115277040
             * angular > 1.4 does a emptyOption.attr('selected', true)
             * which does not like the ng-if comment.
             */
            if (angular.version.major === 1 && angular.version.minor < 4) {
                option.setAttribute('ng-if', '$$value$$ === undefined');
            } else {
                option.setAttribute('ng-show', '$$value$$ === undefined');
            }

            option.textContent = args.form.placeholder;

            selectBox.appendChild(option);
        }
    }
}


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);