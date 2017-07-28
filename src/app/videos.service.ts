import { Injectable } from '@angular/core';
import { Video } from './video'

@Injectable()
export class VideoService {
    videos: Video[];

    getVideos(): Promise<Video[]> {
        if(localStorage.getItem('Videos')) {
            this.videos = JSON.parse(localStorage.getItem('Videos'));
        }
        else {
            this.videos = [
                new Video(1, "Angular 2 for beginners", "f8qBeaGe2S4", "Description"),
                new Video(1, "Angular 4", "htPYk6QxacQ", "The Basics (Udemy Course Excerpt)")];
        }

        return Promise.resolve(this.videos);
    }

    saveVideos(Videos: Video[]): Promise<boolean> {
        localStorage.setItem('Videos', JSON.stringify(Videos));

        console.log(JSON.stringify(Videos));

        return Promise.resolve(true);
    }
}