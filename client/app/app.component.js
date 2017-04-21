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
var tweet_service_1 = require("./tweet.service");
var mocks_1 = require("./mocks");
var AppComponent = (function () {
    function AppComponent(tweetService) {
        this.tweetService = tweetService;
        this.tweetquery = 'trump';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.tweets = mocks_1.TWEETS;
    };
    AppComponent.prototype.loadTweets = function () {
        var _this = this;
        this.tweetService.getTweets(this.tweetquery)
            .subscribe(function (data) { return _this.tweets = data; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [tweet_service_1.TweetService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map