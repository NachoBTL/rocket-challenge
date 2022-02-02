import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, mergeMap, Subscription } from 'rxjs';
import { LaunchesService } from '../launches.service';

@Component({
  selector: 'launches-detail',
  templateUrl: './launches-detail.component.html',
  styleUrls: ['./launches-detail.component.scss']
})
export class LaunchesDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  filteredLaunches: any;
  filteredRockets: any;
  finalObect: any;

  constructor(
    private router: ActivatedRoute,
    private launchesService: LaunchesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const { launchId, rocketId } = this.router.snapshot.params;

    this.subscription = forkJoin([this.launchesService.getLaunches(), this.launchesService.getRockets()])
      .subscribe(results => {
        const launchesResult = results[0];
        const rocketsResult = results[1];
        const filteredLaunches: any = launchesResult.filter((launche: any) => launche.flight_number == launchId)[0];
        const filteredRockets: any = rocketsResult.filter((rocket: any) => rocket.rocket_id === rocketId)[0];
        console.log(filteredLaunches);
        console.log(filteredRockets);

        this.finalObect = { 
          flight_number: filteredLaunches.flight_number, 
          mission_name: filteredRockets.mission_name, 
          launch_date_unix: filteredLaunches.launch_date_unix,
          details: '',
          rocket: {
            rocket_id: filteredRockets.rocket_id,
            rocket_name: filteredRockets.rocket_name,
            active: filteredRockets.active,
            cost_per_launch: filteredRockets.cost_per_launch,
            company: filteredRockets.company
          }
        }
      });    
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
