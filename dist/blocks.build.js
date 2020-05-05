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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls,\n    ColorPalette = _wp$editor.ColorPalette,\n    MediaUpload = _wp$editor.MediaUpload,\n    InnerBlocks = _wp$editor.InnerBlocks,\n    BlockControls = _wp$editor.BlockControls,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    IconButton = _wp$components.IconButton,\n    RangeControl = _wp$components.RangeControl;\n\nvar ALLOWED_BLOCKS = ['core/button'];\nvar validAlignemnts = ['full'];\n\nregisterBlockType('etterem-blocks/intro', {\n\ttitle: __('Etterem Intro'),\n\ticon: 'admin-page',\n\tcategory: 'weart',\n\tkeywords: [__('etterem'), __('intro'), __('weart')],\n\tsupports: {\n\t\talign: ['full']\n\t},\n\n\t// attributes\n\tattributes: {\n\t\talign: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'full'\n\t\t},\n\t\ttitle: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'html',\n\t\t\tselector: 'h2'\n\t\t},\n\t\ttitleColor: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'white'\n\t\t},\n\t\tsubtitle: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'html',\n\t\t\tselector: 'h4'\n\t\t},\n\t\tsubtitleColor: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'white'\n\t\t},\n\t\talignment: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'none'\n\t\t},\n\t\tbackgroundImage: {\n\t\t\ttype: 'string',\n\t\t\tdefault: null\n\t\t},\n\t\toverlayColor: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'black'\n\t\t},\n\t\toverlayOpacity: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 0.3\n\t\t}\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\n\t\t// attributes\n\t\tvar title = attributes.title,\n\t\t    titleColor = attributes.titleColor,\n\t\t    subtitle = attributes.subtitle,\n\t\t    subtitleColor = attributes.subtitleColor,\n\t\t    backgroundImage = attributes.backgroundImage,\n\t\t    overlayColor = attributes.overlayColor,\n\t\t    overlayOpacity = attributes.overlayOpacity,\n\t\t    alignment = attributes.alignment;\n\n\t\t// functions\n\n\t\tvar onChangeAlign = function onChangeAlign(newItem) {\n\t\t\tsetAttributes({ alignment: newItem });\n\t\t};\n\t\tvar onChangeTitle = function onChangeTitle(newItem) {\n\t\t\tsetAttributes({ subtitle: newItem });\n\t\t};\n\t\tvar onChangeSubtitle = function onChangeSubtitle(newItem) {\n\t\t\tsetAttributes({ subtitle: newItem });\n\t\t};\n\n\t\t// return\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'weart-intro' },\n\t\t\twp.element.createElement(\n\t\t\t\tBlockControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(AlignmentToolbar, { value: alignment,\n\t\t\t\t\tonChange: onChangeAlign\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'container' },\n\t\t\t\twp.element.createElement(RichText, { key: 'editable',\n\t\t\t\t\ttagName: 'h4',\n\t\t\t\t\tplaceholder: 'Kis C\\xEDm Sz\\xF6vege',\n\t\t\t\t\tvalue: subtitle,\n\t\t\t\t\tonChange: onChangeSubtitle,\n\t\t\t\t\tstyle: { color: subtitleColor } }),\n\t\t\t\twp.element.createElement(RichText, { key: 'editable',\n\t\t\t\t\ttagName: 'h2',\n\t\t\t\t\tplaceholder: 'Nagy C\\xEDm Sz\\xF6vege',\n\t\t\t\t\tvalue: title,\n\t\t\t\t\tonChange: onChangeTitle,\n\t\t\t\t\tstyle: { color: titleColor } }),\n\t\t\t\twp.element.createElement(InnerBlocks, { allowedBlocks: ALLOWED_BLOCKS })\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes;\n\n\t\t// attributes\n\t\tvar title = attributes.title,\n\t\t    titleColor = attributes.titleColor,\n\t\t    subtitle = attributes.subtitle,\n\t\t    subtitleColor = attributes.subtitleColor,\n\t\t    backgroundImage = attributes.backgroundImage,\n\t\t    overlayColor = attributes.overlayColor,\n\t\t    overlayOpacity = attributes.overlayOpacity,\n\t\t    alignment = attributes.alignment;\n\n\t\t// return\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'weart-intro' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'container' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h4',\n\t\t\t\t\t{ style: { color: subtitleColor } },\n\t\t\t\t\tsubtitle\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h2',\n\t\t\t\t\t{ style: { color: titleColor } },\n\t\t\t\t\ttitle\n\t\t\t\t),\n\t\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t\t)\n\t\t);\n\t}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRlZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgQ29sb3JQYWxldHRlID0gX3dwJGVkaXRvci5Db2xvclBhbGV0dGUsXG4gICAgTWVkaWFVcGxvYWQgPSBfd3AkZWRpdG9yLk1lZGlhVXBsb2FkLFxuICAgIElubmVyQmxvY2tzID0gX3dwJGVkaXRvci5Jbm5lckJsb2NrcyxcbiAgICBCbG9ja0NvbnRyb2xzID0gX3dwJGVkaXRvci5CbG9ja0NvbnRyb2xzLFxuICAgIEFsaWdubWVudFRvb2xiYXIgPSBfd3AkZWRpdG9yLkFsaWdubWVudFRvb2xiYXI7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBJY29uQnV0dG9uID0gX3dwJGNvbXBvbmVudHMuSWNvbkJ1dHRvbixcbiAgICBSYW5nZUNvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5SYW5nZUNvbnRyb2w7XG5cbnZhciBBTExPV0VEX0JMT0NLUyA9IFsnY29yZS9idXR0b24nXTtcbnZhciB2YWxpZEFsaWduZW1udHMgPSBbJ2Z1bGwnXTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2V0dGVyZW0tYmxvY2tzL2ludHJvJywge1xuXHR0aXRsZTogX18oJ0V0dGVyZW0gSW50cm8nKSxcblx0aWNvbjogJ2FkbWluLXBhZ2UnLFxuXHRjYXRlZ29yeTogJ3dlYXJ0Jyxcblx0a2V5d29yZHM6IFtfXygnZXR0ZXJlbScpLCBfXygnaW50cm8nKSwgX18oJ3dlYXJ0JyldLFxuXHRzdXBwb3J0czoge1xuXHRcdGFsaWduOiBbJ2Z1bGwnXVxuXHR9LFxuXG5cdC8vIGF0dHJpYnV0ZXNcblx0YXR0cmlidXRlczoge1xuXHRcdGFsaWduOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICdmdWxsJ1xuXHRcdH0sXG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAnaHRtbCcsXG5cdFx0XHRzZWxlY3RvcjogJ2gyJ1xuXHRcdH0sXG5cdFx0dGl0bGVDb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnd2hpdGUnXG5cdFx0fSxcblx0XHRzdWJ0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICdodG1sJyxcblx0XHRcdHNlbGVjdG9yOiAnaDQnXG5cdFx0fSxcblx0XHRzdWJ0aXRsZUNvbG9yOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICd3aGl0ZSdcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnbm9uZSdcblx0XHR9LFxuXHRcdGJhY2tncm91bmRJbWFnZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiBudWxsXG5cdFx0fSxcblx0XHRvdmVybGF5Q29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJ2JsYWNrJ1xuXHRcdH0sXG5cdFx0b3ZlcmxheU9wYWNpdHk6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogMC4zXG5cdFx0fVxuXHR9LFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzO1xuXG5cdFx0Ly8gYXR0cmlidXRlc1xuXHRcdHZhciB0aXRsZSA9IGF0dHJpYnV0ZXMudGl0bGUsXG5cdFx0ICAgIHRpdGxlQ29sb3IgPSBhdHRyaWJ1dGVzLnRpdGxlQ29sb3IsXG5cdFx0ICAgIHN1YnRpdGxlID0gYXR0cmlidXRlcy5zdWJ0aXRsZSxcblx0XHQgICAgc3VidGl0bGVDb2xvciA9IGF0dHJpYnV0ZXMuc3VidGl0bGVDb2xvcixcblx0XHQgICAgYmFja2dyb3VuZEltYWdlID0gYXR0cmlidXRlcy5iYWNrZ3JvdW5kSW1hZ2UsXG5cdFx0ICAgIG92ZXJsYXlDb2xvciA9IGF0dHJpYnV0ZXMub3ZlcmxheUNvbG9yLFxuXHRcdCAgICBvdmVybGF5T3BhY2l0eSA9IGF0dHJpYnV0ZXMub3ZlcmxheU9wYWNpdHksXG5cdFx0ICAgIGFsaWdubWVudCA9IGF0dHJpYnV0ZXMuYWxpZ25tZW50O1xuXG5cdFx0Ly8gZnVuY3Rpb25zXG5cblx0XHR2YXIgb25DaGFuZ2VBbGlnbiA9IGZ1bmN0aW9uIG9uQ2hhbmdlQWxpZ24obmV3SXRlbSkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogbmV3SXRlbSB9KTtcblx0XHR9O1xuXHRcdHZhciBvbkNoYW5nZVRpdGxlID0gZnVuY3Rpb24gb25DaGFuZ2VUaXRsZShuZXdJdGVtKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgc3VidGl0bGU6IG5ld0l0ZW0gfSk7XG5cdFx0fTtcblx0XHR2YXIgb25DaGFuZ2VTdWJ0aXRsZSA9IGZ1bmN0aW9uIG9uQ2hhbmdlU3VidGl0bGUobmV3SXRlbSkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IHN1YnRpdGxlOiBuZXdJdGVtIH0pO1xuXHRcdH07XG5cblx0XHQvLyByZXR1cm5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ3dlYXJ0LWludHJvJyB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRCbG9ja0NvbnRyb2xzLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQWxpZ25tZW50VG9vbGJhciwgeyB2YWx1ZTogYWxpZ25tZW50LFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZUFsaWduXG5cdFx0XHRcdH0pXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdjb250YWluZXInIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwgeyBrZXk6ICdlZGl0YWJsZScsXG5cdFx0XHRcdFx0dGFnTmFtZTogJ2g0Jyxcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogJ0tpcyBDXFx4RURtIFN6XFx4RjZ2ZWdlJyxcblx0XHRcdFx0XHR2YWx1ZTogc3VidGl0bGUsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlU3VidGl0bGUsXG5cdFx0XHRcdFx0c3R5bGU6IHsgY29sb3I6IHN1YnRpdGxlQ29sb3IgfSB9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7IGtleTogJ2VkaXRhYmxlJyxcblx0XHRcdFx0XHR0YWdOYW1lOiAnaDInLFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiAnTmFneSBDXFx4RURtIFN6XFx4RjZ2ZWdlJyxcblx0XHRcdFx0XHR2YWx1ZTogdGl0bGUsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlVGl0bGUsXG5cdFx0XHRcdFx0c3R5bGU6IHsgY29sb3I6IHRpdGxlQ29sb3IgfSB9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCB7IGFsbG93ZWRCbG9ja3M6IEFMTE9XRURfQkxPQ0tTIH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYyKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuXG5cdFx0Ly8gYXR0cmlidXRlc1xuXHRcdHZhciB0aXRsZSA9IGF0dHJpYnV0ZXMudGl0bGUsXG5cdFx0ICAgIHRpdGxlQ29sb3IgPSBhdHRyaWJ1dGVzLnRpdGxlQ29sb3IsXG5cdFx0ICAgIHN1YnRpdGxlID0gYXR0cmlidXRlcy5zdWJ0aXRsZSxcblx0XHQgICAgc3VidGl0bGVDb2xvciA9IGF0dHJpYnV0ZXMuc3VidGl0bGVDb2xvcixcblx0XHQgICAgYmFja2dyb3VuZEltYWdlID0gYXR0cmlidXRlcy5iYWNrZ3JvdW5kSW1hZ2UsXG5cdFx0ICAgIG92ZXJsYXlDb2xvciA9IGF0dHJpYnV0ZXMub3ZlcmxheUNvbG9yLFxuXHRcdCAgICBvdmVybGF5T3BhY2l0eSA9IGF0dHJpYnV0ZXMub3ZlcmxheU9wYWNpdHksXG5cdFx0ICAgIGFsaWdubWVudCA9IGF0dHJpYnV0ZXMuYWxpZ25tZW50O1xuXG5cdFx0Ly8gcmV0dXJuXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ3dlYXJ0LWludHJvJyB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdjb250YWluZXInIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnaDQnLFxuXHRcdFx0XHRcdHsgc3R5bGU6IHsgY29sb3I6IHN1YnRpdGxlQ29sb3IgfSB9LFxuXHRcdFx0XHRcdHN1YnRpdGxlXG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnaDInLFxuXHRcdFx0XHRcdHsgc3R5bGU6IHsgY29sb3I6IHRpdGxlQ29sb3IgfSB9LFxuXHRcdFx0XHRcdHRpdGxlXG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cblxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);