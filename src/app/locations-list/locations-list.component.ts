import { Component, OnInit } from '@angular/core';
import { locationArray } from '../helpers/location-list-constants';
import { Location } from '../location';
import { LocationDetailsComponent } from '../location-details/location-details.component';

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

  selectedLocation: Location

  onSelectedPen(data) {
    console.log(data)
    this.selectedLocation = this.locationList[0]
  }

}
