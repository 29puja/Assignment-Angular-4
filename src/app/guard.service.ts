import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddComponent } from './add/add.component';
@Injectable({
  providedIn: 'root'
})

export class GuardService implements CanDeactivate<AddComponent > {

    canDeactivate(component: AddComponent): boolean {
      if(component.ahh.dirty && !component.ahh.submitted){
        return confirm("Are you sure you want to leave?");
      }
      return true;
    }
      
}
    
 

