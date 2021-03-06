import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticatedGuardService } from './helpers/authenticated-guard.service';
import { SessionManagerService } from './helpers/session-manager.service';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { TrackComponent } from './track/track.component';
import { TrackDetailComponent } from './track-detail/track-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    NotFoundComponent,
    HomeComponent,
    DashboardComponent,
    PlaylistComponent,
    PlaylistDetailComponent,
    TrackComponent,
    TrackDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbButtonsModule,
    Ng2Webstorage,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthenticatedGuardService]
      },
      {
        path: 'playlist',
        component: PlaylistComponent,
        canActivate: [AuthenticatedGuardService]
      },
      {
        path: 'track/:playlistId',
        component: TrackComponent,
        canActivate: [AuthenticatedGuardService]
      },
      {
        path: 'home',
        component: HomeComponent
      }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, {
        path: 'callback',
        component: AuthorizationComponent
      }, {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [AuthenticatedGuardService, SessionManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
