import { Component } from '@angular/core';
import { Tweet } from './tweet';
import { TweetService } from './tweet.service';
import { TWEETS } from "./mocks";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
	tweetquery = 'trump';
	tweets: Tweet[];
	isLoading = false;
	  
	constructor(private tweetService: TweetService) { }

	ngOnInit(){
		//this.tweets = TWEETS;
	}

	userURL(user_name) {
		return "https://twitter.com/" + user_name;
	}
		  
	loadTweets(query) {
		this.toggleLoading();
		if(query) this.tweetquery = query;
		this.tweetService.getTweets(this.tweetquery)
			.subscribe(data => this.tweets = data);
		var _this = this;
		setTimeout(function(){
    		_this.toggleLoading();
  		}, 1000);
	}

	toggleLoading() {
		return this.isLoading = !this.isLoading;
	}
}