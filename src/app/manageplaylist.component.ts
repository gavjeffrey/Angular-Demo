import { Component, ViewChild } from '@angular/core'

import { Video } from './video'
import { PlaylistComponent } from './playlist.component';
import { VideoService } from './videos.service'

@Component({
    selector: "manage-playlist",
    template: `<playlist></playlist>
                <button type="button" (click)="Save()" class="btn btn-default">Save</button>
                <button type="button" (click)="Add()" class="btn btn-default">Add</button>`,
    providers: [VideoService]
})

export class ManagePlaylistComponent {
    @ViewChild(PlaylistComponent) playlist: PlaylistComponent;

    constructor(private VideoService: VideoService) {

    }

    Save(){
        this.VideoService.saveVideos(this.playlist.videos);//.then();        
    }
        
    Add() {
        
    }
}