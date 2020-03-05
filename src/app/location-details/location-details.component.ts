import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../location';
import { locationArray } from '../helpers/location-list-constants';

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
}}

