import { Component, Input, OnInit } from '@angular/core';
import { IPropertyBase } from '../../Models/IPropertyBase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input() Property: IPropertyBase;
  @Input() HideIcons: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
