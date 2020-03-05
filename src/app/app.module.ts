import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationsListComponent } from './locations-list/locations-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationDetailsComponent,
    LocationsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
