import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Tweet } from './tweet';
import 'rxjs/add/operator/map';

@Injectable()
export class TweetService {

  constructor(private http: Http) { }

  getTweets(query) {
  	let tweetsUrl = 'tweets?q=' + query;

    return this.http.get(tweetsUrl)
    		.map(response => JSON.parse(response._body));
  }
}