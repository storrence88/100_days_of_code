
var TwitterPackage = require('twitter');

// replace the words in caps with the keys that
// we saw before on apps.twitter.com
var secret = {
  consumer_key: 'dmrkg3g0c0xsqk76zR6m5NKBi',
  consumer_secret: '66WjmFgKNYupAlcp4zwtT6z2wYcJ5TZcCvmct8T8iodAW2yS2w',
  access_token_key: '1017207751817269249-RrFYTVREAM1EDBH2GrJDjpSbxfPe97',
  access_token_secret: 'LMEa3aGLrRSvkSlxDJtmp5fyx8uwmPCJ0m23tzT0cr0j8'
}

var Twitter = new TwitterPackage(secret);

var query = "steven";
Twitter.get('search/tweets', {q: query, count: 100, lang:"en"}, function(error, tweets, response) {
   
   var tweet_list = tweets['statuses'];
   
   for (var i = 0; i < tweet_list.length; i++) {
   		if ('retweeted_status' in tweet_list[i]) {
   			continue;
   		} 
   		var screen_name = tweet_list[i].user.screen_name;
   		var message = "@" + 'caseycodes' + " Follow for follow";
   		var tweet_id = tweet_list[i].id_str

   		try {
		    Twitter.post('statuses/update', {"status": message, "in_reply_to_status_id":tweet_id}, function(error, tweet, response){
			     console.log("Tweet posted successfully!")
  			});
  		}

  		catch(err) {
  		    console.log(err);
  		}
   }
});
