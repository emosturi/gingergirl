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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/user/Documentos/dev/nico/game_portfolio/canvas-project/src/js/canvas.js: Unexpected token (162:0)\n\n\u001b[0m \u001b[90m 160 | \u001b[39m  \u001b[36mif\u001b[39m (scrollTracker\u001b[33m>\u001b[39m\u001b[35m2000\u001b[39m) console\u001b[33m.\u001b[39mlog(\u001b[32m'you win!'\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m 161 | \u001b[39m  \u001b[36mif\u001b[39m (player\u001b[33m.\u001b[39mposition\u001b[33m.\u001b[39my \u001b[33m>\u001b[39m canvas\u001b[33m.\u001b[39mheight)\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 162 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 163 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 164 | \u001b[39manimate()\u001b[0m\n\u001b[0m \u001b[90m 165 | \u001b[39m\u001b[90m/* Once again I dont need to call window.addEventListener here below,\u001b[39m\u001b[0m\n    at Parser._raise (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:742:17)\n    at Parser.raiseWithData (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.raise (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:729:17)\n    at Parser.unexpected (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:8757:16)\n    at Parser.parseExprAtom (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:10052:20)\n    at Parser.parseExprSubscripts (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:9602:23)\n    at Parser.parseMaybeUnary (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:9582:21)\n    at Parser.parseExprOps (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:9452:23)\n    at Parser.parseMaybeConditional (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:9425:23)\n    at Parser.parseMaybeAssign (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:9380:21)\n    at Parser.parseExpression (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:9332:23)\n    at Parser.parseStatementContent (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:11210:23)\n    at Parser.parseStatement (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:11081:17)\n    at Parser.parseIfStatement (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:11433:28)\n    at Parser.parseStatementContent (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:11126:21)\n    at Parser.parseStatement (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:11081:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:11656:25)\n    at Parser.parseBlockBody (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:11642:10)\n    at Parser.parseBlock (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:11626:10)\n    at Parser.parseFunctionBody (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:10634:24)\n    at Parser.parseArrowExpression (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:10603:10)\n    at Parser.parseParenAndDistinguishExpression (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:10221:12)\n    at Parser.parseExprAtom (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:9947:21)\n    at Parser.parseExprSubscripts (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:9602:23)\n    at Parser.parseMaybeUnary (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:9582:21)\n    at Parser.parseExprOps (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:9452:23)\n    at Parser.parseMaybeConditional (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:9425:23)\n    at Parser.parseMaybeAssign (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:9380:21)\n    at Parser.parseVar (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:11740:26)\n    at Parser.parseVarStatement (/home/user/Documentos/dev/nico/game_portfolio/canvas-project/node_modules/@babel/parser/lib/index.js:11549:10)");

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map