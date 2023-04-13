import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../services/activity.service'
import { IActivity } from '../shared/activity.model';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities : IActivity[] = [];
  totalActivities?:number;
  totalDistance?:number;
  firstDate?:Date

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activities = this.activityService.getActivities()

    this.totalActivities = this.activityService.getTotalActivities(this.activities)

    this.totalDistance = this.activityService.getTotalDistance(this.activities)

    this.firstDate = this.activityService.getFirstDate(this.activities)
  }

}
