import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../location';
import { LocationDetailsComponent } from '../location-details/location-details.component';
import { locationArray } from '../helpers/location-list-constants';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {

  locationList: Location[]
  locationDetails: LocationDetailsComponent
  constructor() { }

  ngOnInit(): void {
      this.locationList = locationArray()
  }
}
