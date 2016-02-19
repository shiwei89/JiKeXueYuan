var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var orm = require('orm');
var dbs = require('../dbs/abc')(router);

// 进入首页
router.get('/', function(req, res, next) {
  res.render('index');
});
// // 进入新闻管理页
// router.get('/show', function(req, res, next) {
//   res.render('show');
// });
// 原始页面
router.post('/select', dbs.selectNews, function(req, res) {
	res.send(res.shenmea);
});
// // 删除
// router.post('/delete', dbs.deleteNews, function(req, res) {
// 	res.send(res.locals.News);
// });
// // 添加
// router.post('/publish', dbs.publishNews, function(req, res) {
// 	res.redirect('/show');
// });

module.exports = router;
