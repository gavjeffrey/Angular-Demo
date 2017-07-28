import { Component } from '@angular/core'

@Component ({
    selector: "home",
    template: `<div class="row-fluid">
                    <div class="col-xs-12 col-sm-6 col-lg-8">
                    <video-player [url]="videoSrc"></video-player>
                </div>
                <div class="col-xs-6 col-lg-4">
                    <playlist (onSrcChange)="onSrcChange($event)"></playlist>
                </div>
            </div>`
})

export class HomeComponent {
    videoSrc: string;

    onSrcChange(src: string) {
         this.videoSrc = src;
    }
}