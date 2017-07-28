"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.onSrcChange = function (src) {
        this.videoSrc = src;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        template: "<div class=\"row-fluid\">\n                    <div class=\"col-xs-12 col-sm-6 col-lg-8\">\n                    <video-player [url]=\"videoSrc\"></video-player>\n                </div>\n                <div class=\"col-xs-6 col-lg-4\">\n                    <playlist (onSrcChange)=\"onSrcChange($event)\"></playlist>\n                </div>\n            </div>"
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map