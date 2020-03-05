import { Component, OnInit } from '@angular/core';
import { locationArray } from '../helpers/location-list-constants';
import { Location } from '../location';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})

export class LocationDetailsComponent implements OnInit {

  locationList: Location[]

  constructor() { }

  //@Input() locations: Location[]

  ngOnInit(): void {
    this.locationList = locationArray()
  }
}

