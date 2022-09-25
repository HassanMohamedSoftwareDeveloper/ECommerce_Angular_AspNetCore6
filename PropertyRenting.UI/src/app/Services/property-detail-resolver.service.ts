import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { Property } from '../Models/Property';
import { HousingService } from './housing.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property> {

  constructor(private housingService: HousingService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Property | Observable<Property> | Promise<Property> | Observable<any> {
    const propId = route.params['id'];
    return this.housingService.GetProperty(+propId)
      .pipe(
        catchError(error => {
          this.router.navigate(['/']);
          return null;
        }));
  }
}
