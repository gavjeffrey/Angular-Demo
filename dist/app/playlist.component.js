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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var videos_service_1 = require("./videos.service");
var PlaylistComponent = (function () {
    function PlaylistComponent(VideoService, route) {
        this.VideoService = VideoService;
        this.route = route;
        this.onSrcChange = new core_1.EventEmitter();
        if (this.route.snapshot.params['edit']) {
            this.CanEdit = true;
        }
    }
    PlaylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.VideoService.getVideos().then(function (x) { return _this.videos = x; });
    };
    PlaylistComponent.prototype.onSelect = function (vid) {
        this.onSrcChange.emit("https://www.youtube.com/embed/" + vid.videoCode);
    };
    PlaylistComponent.prototype.Remove = function (vid) {
        var index = this.videos.indexOf(vid);
        if (index > -1) {
            this.videos.splice(index, 1);
        }
    };
    return PlaylistComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PlaylistComponent.prototype, "onSrcChange", void 0);
PlaylistComponent = __decorate([
    core_1.Component({
        selector: 'playlist',
        templateUrl: './templates/playlist.component.html',
        providers: [videos_service_1.VideoService]
    }),
    __metadata("design:paramtypes", [videos_service_1.VideoService, router_1.ActivatedRoute])
], PlaylistComponent);
exports.PlaylistComponent = PlaylistComponent;
//# sourceMappingURL=playlist.component.js.map