import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Tweet } from './tweet';
//import { AppComponent } from './app.component';
import 'rxjs/add/operator/map';

@Injectable()
export class TweetService {
  	constructor(private http: Http) { }
  	//constructor(private appComponent: AppComponent) { }

  	getTweets(query) {
  		let tweetsUrl = 'tweets?q=' + query;

  		//this.appComponent.toggleLoading();
    
    	return this.http.get(tweetsUrl)
    		.map(response => JSON.parse(response._body));
  	}
}