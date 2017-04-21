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
	  
	constructor(private tweetService: TweetService) { }

	ngOnInit(){
		this.tweets = TWEETS;
	}
		  
	loadTweets() {
		this.tweetService.getTweets(this.tweetquery)
			.subscribe(data => this.tweets = data);
	}
}