import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from '../../Models/IPropertyBase';
import { HousingService } from '../../Services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  Properties: IPropertyBase[];

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this.housingService.GetAllProperties(this.SellRent).subscribe(
      data => {
        this.Properties = data;
      },
      error => {
        console.log('httpError:');
        console.log(error);
      },
    );
  }
}
