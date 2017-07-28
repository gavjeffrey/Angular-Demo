"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var video_1 = require("./video");
var VideoService = (function () {
    function VideoService() {
    }
    VideoService.prototype.getVideos = function () {
        if (localStorage.getItem('Videos')) {
            this.videos = JSON.parse(localStorage.getItem('Videos'));
        }
        else {
            this.videos = [
                new video_1.Video(1, "Angular 2 for beginners", "f8qBeaGe2S4", "Description"),
                new video_1.Video(1, "Angular 4", "htPYk6QxacQ", "The Basics (Udemy Course Excerpt)")
            ];
        }
        return Promise.resolve(this.videos);
    };
    VideoService.prototype.saveVideos = function (Videos) {
        localStorage.setItem('Videos', JSON.stringify(Videos));
        console.log(JSON.stringify(Videos));
        return Promise.resolve(true);
    };
    return VideoService;
}());
VideoService = __decorate([
    core_1.Injectable()
], VideoService);
exports.VideoService = VideoService;
//# sourceMappingURL=videos.service.js.map