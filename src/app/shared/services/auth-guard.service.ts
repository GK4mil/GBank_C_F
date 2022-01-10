import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private as: AuthService, private r:Router) { }
  
  canActivate(route, state:RouterStateSnapshot) {
    
    if(this.as.isLogged()) 
    {
      return true;
    }
    else
    {
        this.r.navigate(["/login"], {queryParams: {returnUrl: state.url}});
        
    }
     
  
    
  }    
}
