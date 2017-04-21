var express = require('express');
var router = express.Router();
var twit = require('twitter');
var path = require('path');

var twitter = new twit({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

router.get('/tweets', function(req, res, next) {
	if(req.query){
		let query = req.query;
		twitter.get('search/tweets', query, function(error, tweets, response){
			if(error) throw error;
			res.send(tweets.statuses);
		});
	}
});


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
