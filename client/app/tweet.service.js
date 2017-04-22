"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
//import { AppComponent } from './app.component';
require("rxjs/add/operator/map");
var TweetService = (function () {
    function TweetService(http) {
        this.http = http;
    }
    //constructor(private appComponent: AppComponent) { }
    TweetService.prototype.getTweets = function (query) {
        var tweetsUrl = 'tweets?q=' + query;
        //this.appComponent.toggleLoading();
        return this.http.get(tweetsUrl)
            .map(function (response) { return JSON.parse(response._body); });
    };
    return TweetService;
}());
TweetService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TweetService);
exports.TweetService = TweetService;
//# sourceMappingURL=tweet.service.js.map