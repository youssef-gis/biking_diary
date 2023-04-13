import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IActivity } from '../shared/activity.model';
import { SAVED_ACTIVITIES } from '../shared/activity';
import { ActivityService } from '../services/activity.service';
import * as L from 'leaflet';
// import * as mapboxgl from 'mapbox-gl';

var apiToken = "environment.mapbox_api_key";
declare var omnivore: any;


const defaultCoords: number[] = [40, -80];
const defaultZoom: number = 8;

@Injectable({
  providedIn: 'root',
})
export class MapService {

  // style = 'mapbox://styles/mapbox/streets-v11';
  // lat = 37.75;
  // lng = -122.41;


  constructor() {}

  getActivity(id: number) {
    return SAVED_ACTIVITIES.slice(0).find((run) => run.id == id);
  }

  plotActivity(id: number) {
    var myStyle = {
      color: '#3949AB',
      weight: 5,
      opacity: 0.95,
    };

    // this.map = new mapboxgl.Map({
    //   container: 'map',
    //   style: this.style,
    //   zoom: 13,
    //   accessToken: environment.mapbox_api_key,
    //   center: [this.lng, this.lat],
    // }); // Add map controls
    // this.map.addControl(new mapboxgl.NavigationControl());

     const map = L.map('map').setView([40, -80], defaultZoom);

    // map.maxZoom = 100;
    // let custmLAyer = new mapboxgl.GeoJSONSource();

    L.tileLayer('	https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.dark',
      accessToken: apiToken
    }).addTo(map);

    var customLayer = L.geoJson().setStyle(myStyle);

    var gpxLayer = omnivore.gpx(SAVED_ACTIVITIES.slice(0).find(run => run.id == id)?.gpxData, null, customLayer)
    .on('ready', function() {
     map.fitBounds(gpxLayer.getBounds());
    }).addTo(map);
  }
}
