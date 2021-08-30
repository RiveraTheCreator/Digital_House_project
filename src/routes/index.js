const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function (req,res) {
	let htmlPath = path.resolve(__dirname,
		'../views/index.ejs');
	res.render(htmlPath);
});

module.exports = router;
