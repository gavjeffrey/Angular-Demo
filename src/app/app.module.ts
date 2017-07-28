import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist.component';
import { VideoPlayerComponent } from './videoplayer.component';
import { ManagePlaylistComponent } from './manageplaylist.component';
import { HomeComponent } from './home.component';

const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'manage-playlist/:edit', component: ManagePlaylistComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES), FormsModule],
  declarations: [AppComponent, PlaylistComponent, VideoPlayerComponent, ManagePlaylistComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }