import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'video-player',
    template: `{{url}}<iframe *ngIf="url" type="text/html" width="100%" height="385"
                [src]="sanitizer.bypassSecurityTrustResourceUrl(url)"
                frameborder="0">
            </iframe>`
})

export class VideoPlayerComponent {
    @Input() url: string;

    constructor(private sanitizer: DomSanitizer) { }
}