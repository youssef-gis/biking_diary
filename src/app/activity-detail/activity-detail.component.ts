import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapService } from '../services/map.service';

import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit , AfterViewInit {
  activity: any;
  activityName: any;
  activtyComments: any;
  activityDate?: Date;
  activityDistance?:number;
  gpx:any;

  // map: mapboxgl.Map | undefined;
  // style = 'mapbox://styles/mapbox/streets-v11';
  // lat = 37.75;
  // lng = -122.41;

  constructor(private _route: ActivatedRoute, private mapservice: MapService) { }

  ngOnInit(): void {
    this.activity = this.mapservice.getActivity(+this._route.snapshot.params['id']);

    this.activityName = this.activity.name;
    this.activtyComments = this.activity.comments;
    this.activityDistance = this.activity.distance;
    this.activityDate = this.activity.date;
    this.gpx = this.activity.gpxData;



    //   this.map = new mapboxgl.Map({
    //     container: 'map',
    //     style: this.style,
    //     zoom: 13,
    //     accessToken : environment.mapbox_api_key,
    //     center: [this.lng, this.lat]
    // });    // Add map controls
    // this.map.addControl(new mapboxgl.NavigationControl());

  }
  ngAfterViewInit(): void {
    this.mapservice.plotActivity(+this._route.snapshot.params['id']);

  }

}
