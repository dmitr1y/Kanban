import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/components/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PreventLoggedInAccessService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isAuthorized()) {
      this.router.navigate(['/dashboard']);
    }

    return !this.auth.isAuthorized();
  }
}
