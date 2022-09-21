import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from '../../Models/IPropertyBase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyComponent: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  propertyTypes: Array<string> = ["House", "Apartment", "Duplex"];
  furnishTypes: Array<string> = ["Fully", "Semi", "UnFurnished"];

  propertyView: IPropertyBase = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    PType: null,
    FType: null,
    City: null,
    BHK: null,
    BuiltArea: null,
    RTM: null
  };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log(this.addPropertyComponent);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}
