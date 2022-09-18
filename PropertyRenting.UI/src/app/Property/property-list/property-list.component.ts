import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Name 1",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 2,
      "Name": "Name 2",
      "Type": "House 1",
      "Price": 13000
    },
    {
      "Id": 3,
      "Name": "Name 3",
      "Type": "House 2",
      "Price": 14000
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
