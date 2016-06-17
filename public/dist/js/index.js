webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _home = __webpack_require__(164);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var title = "WHT";
	_reactDom2.default.render(_react2.default.createElement(_home2.default, { title: title }), document.getElementById('containerId'));

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(165);

	var _List2 = _interopRequireDefault(_List);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import ReactDOM from "react-dom";

	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home(props) {
	    _classCallCheck(this, Home);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));
	  }

	  _createClass(Home, [{
	    key: "handleClick",
	    value: function handleClick(event) {
	      event.preventDefault();
	      alert("click me");
	      console.log("====Clicked==");
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var ps = {
	        items: ['Marylin', 'Mike', 'Jack']
	      };
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "h1",
	          null,
	          this.props.title
	        ),
	        _react2.default.createElement(
	          "button",
	          { onClick: this.handleClick.bind(this) },
	          "Click me"
	        ),
	        _react2.default.createElement(_List2.default, { items: ps.items })
	      );
	    }
	  }]);

	  return Home;
	}(_react2.default.Component);

	// ReactDOM.render(<Home />, document.getElementById('containerId'));

	// module.exports = Home;


	exports.default = Home;

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import ReactDOMServer from "react-dom/server";

	var List = function (_React$Component) {
	  _inherits(List, _React$Component);

	  function List(props) {
	    _classCallCheck(this, List);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));
	  }

	  _createClass(List, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "ul",
	        null,
	        this.props.items.map(function (value, index) {
	          return _react2.default.createElement(
	            "li",
	            { key: index },
	            value
	          );
	        })
	      );
	    }
	  }]);

	  return List;
	}(_react2.default.Component);

	exports.default = List;

/***/ }

});