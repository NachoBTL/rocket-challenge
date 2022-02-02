import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LaunchesService } from '../launches.service';

@Component({
  selector: 'launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  
  launches: any;

  constructor(
    private launchesService: LaunchesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscription = this.launchesService.getLaunches().subscribe((launches: any) => {
      this.launches = launches;
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  goToDetails(launche: any): void {
    const launchId: number = launche.flight_number;
    const rocketId: number = launche.rocket.rocket_id;
    
    this.router.navigate([`launches/${launchId}/rockets/${rocketId}`]);
  }
}
