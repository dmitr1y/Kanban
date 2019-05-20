import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/components/auth/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.auth.isAuthorized()) {
      this.router.navigate(['/auth']);

      return false;
    }

    return true;
  }
}
