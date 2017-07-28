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
var playlist_component_1 = require("./playlist.component");
var videos_service_1 = require("./videos.service");
var ManagePlaylistComponent = (function () {
    function ManagePlaylistComponent(VideoService) {
        this.VideoService = VideoService;
    }
    ManagePlaylistComponent.prototype.Save = function () {
        this.VideoService.saveVideos(this.playlist.videos); //.then();        
    };
    ManagePlaylistComponent.prototype.Add = function () {
    };
    return ManagePlaylistComponent;
}());
__decorate([
    core_1.ViewChild(playlist_component_1.PlaylistComponent),
    __metadata("design:type", playlist_component_1.PlaylistComponent)
], ManagePlaylistComponent.prototype, "playlist", void 0);
ManagePlaylistComponent = __decorate([
    core_1.Component({
        selector: "manage-playlist",
        template: "<playlist></playlist>\n                <button type=\"button\" (click)=\"Save()\" class=\"btn btn-default\">Save</button>\n                <button type=\"button\" (click)=\"Add()\" class=\"btn btn-default\">Add</button>",
        providers: [videos_service_1.VideoService]
    }),
    __metadata("design:paramtypes", [videos_service_1.VideoService])
], ManagePlaylistComponent);
exports.ManagePlaylistComponent = ManagePlaylistComponent;
//# sourceMappingURL=manageplaylist.component.js.map