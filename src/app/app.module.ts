import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivityService } from './services/activity.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapService } from './services/map.service';


@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    ActivityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule
  ],
  providers: [ActivityService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
