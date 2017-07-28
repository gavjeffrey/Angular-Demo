import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Video } from './video'
import { VideoService } from './videos.service'

@Component({
    selector: 'playlist',
    templateUrl: './templates/playlist.component.html',
    providers: [VideoService]
})

export class PlaylistComponent implements OnInit {
    videos: Video[];
    CanEdit: boolean;

    @Output() onSrcChange = new EventEmitter<string>();
    
    ngOnInit(): void {
        this.VideoService.getVideos().then(x => this.videos = x);
    }

    constructor(private VideoService: VideoService, private route: ActivatedRoute) {
        if (this.route.snapshot.params['edit']) {
            this.CanEdit = true;
        }
    }

    onSelect(vid: Video) {
        this.onSrcChange.emit("https://www.youtube.com/embed/" + vid.videoCode);
    }    

    Remove(vid: Video) {
        let index = this.videos.indexOf(vid);

        if (index > -1) {
            this.videos.splice(index, 1);
        }
    }
}