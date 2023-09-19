"use strict";
self["webpackHotUpdateToDoApp"](0,{

/***/ 28:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var _NewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _api_tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var App = function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    taskTitle = _useState2[0],
    setTaskTitle = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    taskDescription = _useState4[0],
    setTaskDescription = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    listOfTasks = _useState6[0],
    setListOfTasks = _useState6[1];
  var newTaskData = {
    description: taskDescription,
    status: "open",
    title: taskTitle
  };
  var removeAddedTask = function (id) {
    console.log(id);
    setListOfTasks(function (prevState) {
      return prevState.filter(function (item) {
        return item.id !== id;
      });
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_api_tasks__WEBPACK_IMPORTED_MODULE_3__.getTasks)(setListOfTasks);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NewTask__WEBPACK_IMPORTED_MODULE_2__.NewTask, {
    inputTitle: taskTitle,
    changeTitleFunction: function changeTitle(event) {
      setTaskTitle(event.target.value);
    },
    inputDescription: taskDescription,
    changeDescriptionFunction: function changeDescription(event) {
      setTaskDescription(event.target.value);
    },
    sendTaskFunction: function addNewTask(event) {
      event.preventDefault();
      (0,_api_tasks__WEBPACK_IMPORTED_MODULE_3__.sendTask)(newTaskData, setListOfTasks);
      setTaskTitle("");
      setTaskDescription("");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, function showListOfTasks() {
    if (listOfTasks === false) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u0141aduj\u0119 dane...");
    } else {
      return listOfTasks.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Task__WEBPACK_IMPORTED_MODULE_4__.Task, {
          removeTask: removeAddedTask,
          key: item.id,
          item: item
        });
      });
    }
  }()));
};
var container = document.querySelector("#app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("26fa5ff2591bbd2fb3e2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7SUFDTjtFQUNKLENBQUMsQ0FNNEIsQ0FDakIsQ0FDTixDQUFDO0FBRVgsQ0FBQztBQUVELElBQU1tQixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdyRCw0REFBVSxDQUFDa0QsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3ZELDBEQUFBLENBQUNRLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDN0RuQiIsInNvdXJjZXMiOlsid2VicGFjazovL1RvRG9BcHAvLi9wcm9qZWt0L2pzL0FwcC5qcyIsIndlYnBhY2s6Ly9Ub0RvQXBwL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtOZXdUYXNrfSBmcm9tIFwiLi9OZXdUYXNrXCI7XG5pbXBvcnQge2dldFRhc2tzLCBzZW5kVGFza30gZnJvbSBcIi4vYXBpL3Rhc2tzXCI7XG5pbXBvcnQge1Rhc2t9IGZyb20gXCIuL1Rhc2tcIjtcbmNvbnN0IEFwcCA9ICgpPT57XG4gICAgY29uc3QgW3Rhc2tUaXRsZSwgc2V0VGFza1RpdGxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW3Rhc2tEZXNjcmlwdGlvbiwgc2V0VGFza0Rlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW2xpc3RPZlRhc2tzLCBzZXRMaXN0T2ZUYXNrc10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IG5ld1Rhc2tEYXRhID0ge1xuICAgICAgICBkZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICBzdGF0dXM6IFwib3BlblwiLFxuICAgICAgICB0aXRsZTogdGFza1RpdGxlLFxuICAgIH1cbiAgICBjb25zdCBhZGROZXdUYXNrID0gKGV2ZW50KSA9PntcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2VuZFRhc2sobmV3VGFza0RhdGEsIHNldExpc3RPZlRhc2tzKTtcbiAgICAgICAgc2V0VGFza1RpdGxlKFwiXCIpO1xuICAgICAgICBzZXRUYXNrRGVzY3JpcHRpb24oXCJcIilcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlQWRkZWRUYXNrID0gKGlkKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhpZClcbiAgICAgICAgc2V0TGlzdE9mVGFza3MocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZS5maWx0ZXIoaXRlbT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmlkICE9PSBpZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0VGFza3Moc2V0TGlzdE9mVGFza3MpXG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGNoYW5nZVRpdGxlID0gKGV2ZW50KSA9PntcbiAgICAgICAgc2V0VGFza1RpdGxlKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICB9XG4gICAgY29uc3QgY2hhbmdlRGVzY3JpcHRpb24gPSAoZXZlbnQpPT57XG4gICAgICAgIHNldFRhc2tEZXNjcmlwdGlvbihldmVudC50YXJnZXQudmFsdWUpXG4gICAgfVxuICAgIGNvbnN0IHNob3dMaXN0T2ZUYXNrcyA9ICgpID0+e1xuICAgICAgICBpZihsaXN0T2ZUYXNrcyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgcmV0dXJuIDxwPsWBYWR1asSZIGRhbmUuLi48L3A+XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGxpc3RPZlRhc2tzLm1hcChpdGVtID0+e1xuICAgICAgICAgICAgICAgIHJldHVybiA8VGFzayByZW1vdmVUYXNrPXtyZW1vdmVBZGRlZFRhc2t9IGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0vPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOZXdUYXNrIGlucHV0VGl0bGU9e3Rhc2tUaXRsZX0gY2hhbmdlVGl0bGVGdW5jdGlvbj17Y2hhbmdlVGl0bGV9IGlucHV0RGVzY3JpcHRpb249e3Rhc2tEZXNjcmlwdGlvbn0gY2hhbmdlRGVzY3JpcHRpb25GdW5jdGlvbj17Y2hhbmdlRGVzY3JpcHRpb259IHNlbmRUYXNrRnVuY3Rpb249e2FkZE5ld1Rhc2t9Lz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7c2hvd0xpc3RPZlRhc2tzKCl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNmZhNWZmMjU5MWJiZDJmYjNlMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5ld1Rhc2siLCJnZXRUYXNrcyIsInNlbmRUYXNrIiwiVGFzayIsIkFwcCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRhc2tUaXRsZSIsInNldFRhc2tUaXRsZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwidGFza0Rlc2NyaXB0aW9uIiwic2V0VGFza0Rlc2NyaXB0aW9uIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJsaXN0T2ZUYXNrcyIsInNldExpc3RPZlRhc2tzIiwibmV3VGFza0RhdGEiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsInRpdGxlIiwicmVtb3ZlQWRkZWRUYXNrIiwiaWQiLCJjb25zb2xlIiwibG9nIiwicHJldlN0YXRlIiwiZmlsdGVyIiwiaXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImlucHV0VGl0bGUiLCJjaGFuZ2VUaXRsZUZ1bmN0aW9uIiwiY2hhbmdlVGl0bGUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaW5wdXREZXNjcmlwdGlvbiIsImNoYW5nZURlc2NyaXB0aW9uRnVuY3Rpb24iLCJjaGFuZ2VEZXNjcmlwdGlvbiIsInNlbmRUYXNrRnVuY3Rpb24iLCJhZGROZXdUYXNrIiwicHJldmVudERlZmF1bHQiLCJzaG93TGlzdE9mVGFza3MiLCJtYXAiLCJyZW1vdmVUYXNrIiwia2V5IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=