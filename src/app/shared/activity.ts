import {IActivity} from './activity.model'

export const SAVED_ACTIVITIES: IActivity[]=[
  {
    id: 1,
    name: 'Biking to work',
    date: new Date('07/26/2017'),
    distance: 1.01,
    comments: 'Nice day',
    gpxData: '../../assets/gpx/1.gpx'
  },
  {
    id: 2,
    name: 'Biking to home',
    date: new Date('07/27/2017'),
    distance: 2.01,
    comments: 'Nice day',
    gpxData: '../../assets/gpx/2.gpx'
  },
  {
    id: 3,
    name: 'Biking to super market',
    date: new Date('07/28/2017'),
    distance: 3.01,
    comments: 'Nice day',
    gpxData: '../../assets/gpx/3.gpx'
  },
  {
    id: 4,
    name: 'Biking to park',
    date: new Date('07/29/2017'),
    distance: 5.01,
    comments: 'Nice day',
    gpxData: '../../assets/gpx/4.gpx'
  }
]
