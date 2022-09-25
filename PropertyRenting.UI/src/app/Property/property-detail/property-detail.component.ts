import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
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

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute, private router: Router, private housingService: HousingService) { }

  ngOnInit(): void {
    this.PropertyId = Number(this.route.snapshot.params['id']);

    this.route.data.subscribe(data => {
      this.property = data['prp']
    });

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        thumbnailsSwipe: true,
        preview: true,
        previewSwipe: true,
        //thumbnailsArrows: true,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true,
        previewBullets: true
      },
    ];

    this.galleryImages = [
      {
        small: 'assets/images/prop1.jpg',
        medium: 'assets/images/prop1.jpg',
        big: 'assets/images/prop1.jpg'
      },
      {
        small: 'assets/images/prop2.jpg',
        medium: 'assets/images/prop2.jpg',
        big: 'assets/images/prop2.jpg'
      },
      {
        small: 'assets/images/prop3.jpg',
        medium: 'assets/images/prop3.jpg',
        big: 'assets/images/prop3.jpg'
      },
      {
        small: 'assets/images/prop4.jpg',
        medium: 'assets/images/prop4.jpg',
        big: 'assets/images/prop4.jpg'
      },
      {
        small: 'assets/images/prop5.jpg',
        medium: 'assets/images/prop5.jpg',
        big: 'assets/images/prop5.jpg'
      },
      {
        small: 'assets/images/prop5.jpg',
        medium: 'assets/images/prop5.jpg',
        big: 'assets/images/prop5.jpg'
      },
      {
        small: 'assets/images/prop5.jpg',
        medium: 'assets/images/prop5.jpg',
        big: 'assets/images/prop5.jpg'
      },
    ];
  }
}
