/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/commentSection.js":
/*!*****************************************!*\
  !*** ./src/client/js/commentSection.js ***!
  \*****************************************/
/***/ (() => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar videoContainer = document.getElementById(\"videoContainer\");\nvar form = document.getElementById(\"commentForm\");\nvar videoComment = document.querySelector(\".video__comment\");\nvar deleteBtn = document.querySelector(\".deleteBtn\");\n\nvar addComment = function addComment(text, id) {\n  var videoComments = document.querySelector(\".video__comments ul\");\n  var newComment = document.createElement(\"li\");\n  newComment.dataset.id = id;\n  newComment.className = \"video__comment\";\n  var icon = document.createElement(\"i\");\n  icon.className = \"fas fa-comment\";\n  var span = document.createElement(\"span\");\n  span.innerText = \" \".concat(text);\n  var deleteBtn = document.createElement(\"button\");\n  deleteBtn.className = \"deleteBtn\";\n  deleteBtn.innerText = \"❌\";\n  newComment.appendChild(icon);\n  newComment.appendChild(span);\n  newComment.appendChild(deleteBtn);\n  videoComments.prepend(newComment);\n};\n\nvar deleteCommentReq = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {\n    var id, reqUrl;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            id = videoComment.dataset.id;\n            _context.next = 3;\n            return fetch(\"/api/comment/\".concat(id, \"/delete\"), {\n              method: \"DELETE\"\n            });\n\n          case 3:\n            reqUrl = _context.sent;\n            console.log(reqUrl);\n            console.log(\"requested\");\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function deleteCommentReq(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {\n    var textarea, text, videoId, response, _yield$response$json, newCommentId;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            event.preventDefault();\n            textarea = form.querySelector(\"textarea\");\n            text = textarea.value;\n            videoId = videoContainer.dataset.videoid;\n\n            if (!(text === \"\")) {\n              _context2.next = 6;\n              break;\n            }\n\n            return _context2.abrupt(\"return\");\n\n          case 6:\n            _context2.next = 8;\n            return fetch(\"/api/videos/\".concat(videoId, \"/comment\"), {\n              method: \"POST\",\n              headers: {\n                \"Content-Type\": \"application/json\"\n              },\n              body: JSON.stringify({\n                text: text\n              })\n            });\n\n          case 8:\n            response = _context2.sent;\n\n            if (!(response.status === 201)) {\n              _context2.next = 16;\n              break;\n            }\n\n            textarea.value = \"\";\n            _context2.next = 13;\n            return response.json();\n\n          case 13:\n            _yield$response$json = _context2.sent;\n            newCommentId = _yield$response$json.newCommentId;\n            addComment(text, newCommentId);\n\n          case 16:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function handleSubmit(_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nif (form) {\n  form.addEventListener(\"submit\", handleSubmit);\n}\n\n;\ndeleteBtn.addEventListener(\"click\", deleteCommentReq);\n\n//# sourceURL=webpack://wetube/./src/client/js/commentSection.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/commentSection.js"]();
/******/ 	
/******/ })()
;