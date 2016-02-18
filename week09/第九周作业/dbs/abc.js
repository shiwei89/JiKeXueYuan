var express = require('express');
var orm = require('orm');
var mysql = require('mysql');

var hdlusername = 'root';
var hdlpassword = '';
var hdlname = 'baidunews';

module.exports = function(router) {
	router.use(orm.express("mysql://" + hdlusername + ":" + hdlpassword + "@localhost/" + hdlname, {
		define: function(db, models, next) {
			models.News = db.define("allnews", {
				newsid: {
					type: 'serial',
					key: true
				},
				newstitle: String,
				newsimg: String,
				newscontent: String,
				addtime: Date,
				newstype: String
			});
			next();
		}
	}));
	// dbs函数
	var dbs = {
		//发布新闻
		publishNews: function(req, res, next) {
			req.models.News.create({
				newsid: req.body.newsid,
				newstitle: req.body.newstitle,
				newsimg: req.body.newsimg,
				newscontent: req.body.newscontent,
				addtime: req.body.addtime,
				newstype: req.body.newstype
			}, function(err, News) {
				if (err)
					return console.error('connection error:' + err);
				next();
			});
		},
		//删除新闻
		deleteNews: function(req, res, next) {
			req.models.News.find({
				newsid: req.body.newsid
			}, function(err, News) {
				if (err)
					return console.error('connection error:' + err);
				News[0].remove(function(err) {
					if (err)
						return console.error('connection error:' + err);
					res.locals.News = {
						'result': "成功删除了"
					};
					next();
				});
			});
		},
		
		//通过newstype
		selectNews: function(req, res, next) {
			req.models.News.find({}, function(err, News) {
				if (err)
					return console.error('connection error:' + err);
				res.locals.News = News;
				next();
			});
		}
	};
	return dbs;
}