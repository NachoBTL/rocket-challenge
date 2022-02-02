import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesComponent } from './launches/launches.component';
import { LaunchesDetailComponent } from './launches-detail/launches-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    LaunchesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
