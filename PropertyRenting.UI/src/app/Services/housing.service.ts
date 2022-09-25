import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPropertyBase } from '../Models/IPropertyBase';
import { Property } from '../Models/Property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  GetProperty(id: number) {
    return this.GetAllProperties().pipe(
      map(propertiesArray => {
        return propertiesArray.find(p => p.Id === id) as Property
      })
    )
  }

  GetAllProperties(SellRent?: number): Observable<IPropertyBase[]> {
    return this.http.get('/data/properties.json')
      .pipe(
        map((data) => {
          const propertiesArray: Array<IPropertyBase> = [];
          const localProperties = JSON.parse(localStorage.getItem('newProp'));
          if (localProperties) {
            for (const id in localProperties) {
              if (SellRent) {
                if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
                  propertiesArray.push(localProperties[id]);
                }
              }
              else {
                propertiesArray.push(localProperties[id]);
              }
            }
          }


          for (const id in data) {
            if (SellRent) {
              if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
                propertiesArray.push(data[id]);
              }
            }
            else {
              propertiesArray.push(data[id]);
            }
          }
          return propertiesArray;
        })
      );
  }

  AddProperty(property: Property) {
    let newProp = [property];

    if (localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp'))]
    }

    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  NewPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(JSON.parse(localStorage.getItem('PID')) + 1));
      return + localStorage.getItem('PID');
    }
    else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
