import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})

export class LocationDetailsComponent implements OnInit {
  location: Location = {
    LocationName: "Paul's desk",
    pens: ["red one", "blue one"],
  }

  constructor() { }

  @Input() locations: Location[]

  ngOnInit(): void {
  }

}

