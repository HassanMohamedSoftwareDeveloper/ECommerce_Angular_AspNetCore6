import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../../Models/Property';
import { HousingService } from '../../Services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public PropertyId: number;
  property = new Property();

  constructor(private route: ActivatedRoute, private router: Router, private housingService: HousingService) { }

  ngOnInit(): void {
    this.PropertyId = Number(this.route.snapshot.params['id']);

    this.route.params
      .subscribe(params => {
        this.PropertyId = + params['id'];
        this.housingService.GetProperty(this.PropertyId)
          .subscribe(
            data => {
              this.property = data;
            });
      });
  }
}
