import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})

export class LocationDetailsComponent implements OnInit {

  locationList: Location[]

  constructor() { }

  @Input() locations: Location[]

  ngOnInit(): void {
    this.locationList = [{
      LocationName: "Paul's desk",
      Pens: ["red pen", "blue pen"]
    },

    {
      LocationName: "Scott's desk",
      Pens: ["black pen", "pink pen"]
    }
    ]
  }

}

