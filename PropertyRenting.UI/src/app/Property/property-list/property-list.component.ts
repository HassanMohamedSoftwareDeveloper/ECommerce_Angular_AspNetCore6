import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from '../../Models/IProperty';
import { HousingService } from '../../Services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  Properties: Array<IProperty> = [];

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this.housingService.GetAllProperties(this.SellRent).subscribe(
      data => {
        this.Properties = data;
        const newProperty = JSON.parse(localStorage.getItem('newProp'));
        if (newProperty.SellRent == this.SellRent) {
          this.Properties = [newProperty, ...this.Properties];
        }
      },
      error => {
        console.log('httpError:');
        console.log(error);
      },
    );
  }
}
