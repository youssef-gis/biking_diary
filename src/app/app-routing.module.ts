import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';

const routes: Routes = [
  { path: 'runs', component: ActivityListComponent },
  {path:'runs/:id', component:ActivityDetailComponent},
  {path:'', redirectTo:'/runs', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
