import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesDetailComponent } from './launches-detail/launches-detail.component';
import { LaunchesComponent } from './launches/launches.component';

const routes: Routes = [
  { path: 'launches', component: LaunchesComponent },
  { path: 'launches/:launchId/rockets/:rocketId', component: LaunchesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
