/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/web/frontend/main.tsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/web/frontend/style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/web/frontend/style.css ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\r\n  max-width: 320px;\r\n  padding: 2em;\r\n  border: 1px solid silver;\r\n  border-radius: 1em;\r\n\r\n  text-align: center;\r\n}\r\n", ""]);


/***/ }),

/***/ "./src/web/frontend/App.tsx":
/*!**********************************!*\
  !*** ./src/web/frontend/App.tsx ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ "./src/web/frontend/Layout.tsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./src/web/frontend/Home.tsx");
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Counter */ "./src/web/frontend/Counter.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Form */ "./src/web/frontend/Form.tsx");






class App extends react__WEBPACK_IMPORTED_MODULE_4__["Component"] {
    constructor() {
        super(...arguments);
        this.displayName = App.name;
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[/* Switch */ "c"], null,
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_0__[/* Layout */ "a"], null,
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[/* Route */ "a"], { exact: true, path: '/', component: _Home__WEBPACK_IMPORTED_MODULE_2__[/* Home */ "a"] }),
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[/* Route */ "a"], { path: '/counter', component: _Counter__WEBPACK_IMPORTED_MODULE_3__[/* Counter */ "a"] }),
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[/* Route */ "a"], { path: '/form', component: _Form__WEBPACK_IMPORTED_MODULE_5__[/* Form */ "a"] })))));
    }
}


/***/ }),

/***/ "./src/web/frontend/AppBar.tsx":
/*!*************************************!*\
  !*** ./src/web/frontend/AppBar.tsx ***!
  \*************************************/
/*! exports provided: AppBarComponent */
/*! exports used: AppBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBarComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__);







class AppBarComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.styles = {
            root: {
                flexGrow: 1
            },
        };
        this.handleDrawerChange = () => {
            this.props.onSelectOpenState(true);
        };
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: this.styles.root },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], { position: "static" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], { edge: "start", color: "inherit", onClick: this.handleDrawerChange },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default.a, null)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { variant: "h6", style: this.styles.root }, "News")))));
    }
}


/***/ }),

/***/ "./src/web/frontend/Counter.tsx":
/*!**************************************!*\
  !*** ./src/web/frontend/Counter.tsx ***!
  \**************************************/
/*! exports provided: Counter */
/*! exports used: Counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Counter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



class Counter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.displayName = Counter.name;
        this.styles = {};
        this.state = {
            count: 0,
            dogs: [],
            page: 1
        };
        this.updateItems = () => {
            fetch(`api/dogs?page=${this.state.page}&skip=3`)
                .then(res => res.json())
                .then(res => {
                this.setState({
                    dogs: []
                });
                res.forEach((d) => this.setState({
                    dogs: [...this.state.dogs, { ID: d.ID, Name: d.Name }]
                }));
            })
                .catch(error => console.log(error));
        };
        this.increment = () => {
            const page = this.state.page + 1;
            this.setState({
                page: page
            }, () => this.updateItems());
        };
        this.decrement = () => {
            const page = this.state.page - 1;
            this.setState({
                page: page
            }, () => this.updateItems());
        };
    }
    componentDidMount() {
        this.getCount();
        this.updateItems();
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "a"], { onClick: this.increment, disabled: (this.state.page * 3) > this.state.count }, "Increment"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "a"], { onClick: this.decrement, disabled: this.state.page === 1 }, "Decrement")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.dogs.map((dog, k) => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", { key: k },
                    dog.ID,
                    " - ",
                    dog.Name));
            }))));
    }
    getCount() {
        fetch(`api/dogs/count`)
            .then(res => res.json())
            .then(res => {
            this.setState({
                count: parseInt(res)
            });
        })
            .catch(error => console.log(error));
    }
}


/***/ }),

/***/ "./src/web/frontend/Form.tsx":
/*!***********************************!*\
  !*** ./src/web/frontend/Form.tsx ***!
  \***********************************/
/*! exports provided: Form */
/*! exports used: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



class Form extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.displayName = Form.name;
        this.styles = {
            card: {
                display: 'flex',
                flex: '1',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%'
            },
            form: {
                maxWidth: '640px',
                width: '100%'
            },
            cardContent: {
                flex: '1',
                flexDirection: 'column',
                display: 'flex'
            }
        };
        this.state = {
            name: '',
            surname: '',
            secondName: '',
            selectedCity: null,
            cities: [],
            districts: [],
            selectedDistrict: null
        };
        this.cities = [{ Id: 1, Name: 'Тула' }, { Id: 2, Name: 'Щекино' }, { Id: 3, Name: 'Киреевск' }, { Id: 4, Name: 'Новомосковск' }, { Id: 5, Name: 'Богородицк' }];
        this.debounced = (value) => {
            console.log(value);
        };
        this.nameChange = (event) => {
            this.setState({
                name: event.target.value
            }, () => { this.debounced(this.state.name); });
        };
        this.surnameChange = (event) => {
            this.setState({
                surname: event.target.value
            }, () => { this.debounced(this.state.surname); });
        };
        this.secondNameChange = (event) => {
            this.setState({
                secondName: event.target.value
            }, () => { this.debounced(this.state.secondName); });
        };
        this.cityChange = (event) => {
            this.setState({
                selectedCity: event.target.value
            }, () => { this.debounced(this.state.selectedCity); });
        };
        this.districtChange = (event) => {
            this.setState({
                selectedDistrict: event.target.value
            }, () => {
                this.getCities();
                this.debounced(this.state.selectedDistrict);
            });
        };
        this.getCities = () => {
            fetch(`api/city?districtId=${this.state.selectedCity}`)
                .then(res => res.json())
                .then(res => {
                this.setState({
                    cities: []
                });
                res.forEach((s) => this.setState({
                    cities: [...this.state.cities, { Id: s.Id, Name: s.Name }]
                }));
            })
                .catch(error => console.log(error));
        };
        this.getDistricts = () => {
            fetch(`api/district`)
                .then(res => {
                debugger;
                this.setState({
                    districts: []
                });
                // this.setState({
                //     districts: [...res]
                // });
            })
                .catch(error => console.log(error));
        };
        this.debounced = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.debounce(this.debounced.bind(this), 250);
    }
    componentDidMount() {
        this.getDistricts();
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: this.styles.card },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* Card */ "b"], { style: this.styles.form },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* CardContent */ "c"], { style: this.styles.cardContent },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* FormControl */ "d"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* InputLabel */ "g"], { htmlFor: "name" }, "\u0418\u043C\u044F"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* Input */ "f"], { value: this.state.name, id: "name", onChange: this.nameChange })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* FormControl */ "d"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* InputLabel */ "g"], { htmlFor: "surname" }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* Input */ "f"], { value: this.state.surname, id: "surname", onChange: this.surnameChange })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* FormControl */ "d"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* InputLabel */ "g"], { htmlFor: "secondName" }, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* Input */ "f"], { value: this.state.secondName, id: "secondName", onChange: this.secondNameChange })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* FormControl */ "d"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* InputLabel */ "g"], { id: "city" }, "\u0420\u0430\u0439\u043E\u043D"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* Select */ "k"], { value: this.state.selectedDistrict, onChange: this.cityChange },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* MenuItem */ "j"], { value: 0 }, "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D"),
                            !!this.state.districts.length && this.state.districts.map((district, k) => {
                                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* MenuItem */ "j"], { key: k, value: district.Id }, district.Name));
                            })))))));
    }
}


/***/ }),

/***/ "./src/web/frontend/Home.tsx":
/*!***********************************!*\
  !*** ./src/web/frontend/Home.tsx ***!
  \***********************************/
/*! exports provided: Home */
/*! exports used: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.displayName = Home.name;
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hello, world!"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Welcome to your new single-page application, built with:"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: 'https://get.asp.net/' }, "ASP.NET Core"),
                    " and ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: 'https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx' }, "C#"),
                    " for cross-platform server-side code"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: 'https://facebook.github.io/react/' }, "React"),
                    " for client-side code"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: 'http://getbootstrap.com/' }, "Bootstrap"),
                    " for layout and styling")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To help you get started, we've also set up:"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Client-side navigation"),
                    ". For example, click ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "Counter"),
                    " then ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "Back"),
                    " to return here."),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Development server integration"),
                    ". In development mode, the development server from ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "create-react-app"),
                    " runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file."),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Efficient production builds"),
                    ". In production mode, development-time features are disabled, and your ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "dotnet publish"),
                    " configuration produces minified, efficiently bundled JavaScript files.")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                "The ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ClientApp"),
                " subdirectory is a standard React application based on the ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "create-react-app"),
                " template. If you open a command prompt in that directory, you can run ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "npm"),
                " commands such as ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "npm test"),
                " or ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "npm install"),
                ".")));
    }
}


/***/ }),

/***/ "./src/web/frontend/Layout.tsx":
/*!*************************************!*\
  !*** ./src/web/frontend/Layout.tsx ***!
  \*************************************/
/*! exports provided: Layout */
/*! exports used: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppBar */ "./src/web/frontend/AppBar.tsx");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _NavMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavMenu */ "./src/web/frontend/NavMenu.tsx");






class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.displayName = Layout.name;
        this.styles = {
            root: {
                padding: '10px'
            },
        };
        this.state = {
            isMenuOpen: false
        };
        this.handleDrawer = (open) => {
            this.setState({
                isMenuOpen: open
            });
            return this.state;
        };
        this.handleDrawer = this.handleDrawer.bind(this);
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* Grid */ "e"], { container: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* Grid */ "e"], { item: true, xs: 3 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { open: this.state.isMenuOpen, onClose: () => this.handleDrawer(false) },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NavMenu__WEBPACK_IMPORTED_MODULE_4__[/* NavMenu */ "a"], { onSelectOpenState: this.handleDrawer }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* Grid */ "e"], { item: true, xs: 12 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AppBar__WEBPACK_IMPORTED_MODULE_2__[/* AppBarComponent */ "a"], { onSelectOpenState: this.handleDrawer })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* Grid */ "e"], { item: true, xs: 12, style: this.styles.root }, this.props.children)));
    }
}


/***/ }),

/***/ "./src/web/frontend/NavMenu.tsx":
/*!**************************************!*\
  !*** ./src/web/frontend/NavMenu.tsx ***!
  \**************************************/
/*! exports provided: NavMenu */
/*! exports used: NavMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");





class NavMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.displayName = NavMenu.name;
        this.styles = {
            list: {
                width: "250px",
                flex: 1,
                flexDirection: "column"
            },
            button: {
                width: "100%",
                display: "flex"
            }
        };
        this.handleDrawerChange = () => {
            this.props.onSelectOpenState(false);
        };
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* List */ "h"], { component: "nav", style: this.styles.list },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* ListItem */ "i"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "b"], to: "/", onClick: this.handleDrawerChange, style: this.styles.button }, "Home")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* ListItem */ "i"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "b"], to: "/counter", onClick: this.handleDrawerChange, style: this.styles.button }, "Counter")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[/* ListItem */ "i"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "b"], to: "/form", onClick: this.handleDrawerChange, style: this.styles.button }, "Form"))));
    }
}


/***/ }),

/***/ "./src/web/frontend/main.tsx":
/*!***********************************!*\
  !*** ./src/web/frontend/main.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/web/frontend/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/web/frontend/App.tsx");





const rootElement = document.getElementById('root');
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* BrowserRouter */ "a"], null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null)), rootElement);


/***/ }),

/***/ "./src/web/frontend/style.css":
/*!************************************!*\
  !*** ./src/web/frontend/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/web/frontend/style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map