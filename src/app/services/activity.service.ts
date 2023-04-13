import { Injectable } from '@angular/core';
import { SAVED_ACTIVITIES } from '../shared/activity'
import { IActivity } from '../shared/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }
  getActivities(): IActivity[]{
    return SAVED_ACTIVITIES.slice(0)
  }

  getTotalActivities(activity: IActivity[]) : number{
    return activity.length
  }

  getTotalDistance(activity: IActivity[]) : number{
    let totalDistance = 0;
    for (let i = 0; i < activity.length; i++) {
      totalDistance +=  activity[i]?.distance ?? 0;
    }
    return totalDistance
  }

  getFirstDate(activity: IActivity[]){
    let firstDate = activity[0].date
    for (let i = 1; i < activity.length; i++) {
      if (activity[i].date < firstDate) {
        firstDate = activity[i].date
      }
    }
    return firstDate;
  }
}
