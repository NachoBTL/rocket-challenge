import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  private launchesKey: string = 'https://api.spacexdata.com/v3/launches';
  private rocketKey: string = 'https://api.spacexdata.com/v3/rockets';

  constructor(private http: HttpClient) { }

  getLaunches(): Observable<any> {
    return this.http.get(this.launchesKey);
  }

  getRockets(): Observable<any> {
    return this.http.get(this.rocketKey);
  }
}
