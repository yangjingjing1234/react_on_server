var express = require('express');
var router = express.Router();

// var React = require("react");
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var Home = require("../public/build/js/home").default;
/* GET home page. */
router.get('/', function(req, res, next) {

	res.setHeader('Content-Type', 'text/html');
	var _html = ReactDOMServer.renderToStaticMarkup(React.createElement(
		'section',
		null,
		// React.createElement('div', { id: 'containerId', dangerouslySetInnerHTML: { __html: str}})
		React.createElement(Home, {}),
		React.createElement('script', { src: '/dist/js/lib.js' }),
		React.createElement('script', { src: '/dist/js/index.js' })
	));

  res.render("index",{title:"React to Server",content:_html})
});

module.exports = router;
