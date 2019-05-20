import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from 'src/app/components/auth/interfaces';
import { UserService } from 'src/app/components/user/user.service';
import { AuthService } from 'src/app/components/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent implements OnInit, OnDestroy {

  public user: IUser;
  private subscription: Subscription;

  constructor(
    private userService: UserService,
    private auth: AuthService,
  ) {
  }

  ngOnInit() {
    this.subscription = this.userService.currentUser.subscribe(user => {
      this.user = user;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public logout(): void {
    this.auth.logout();
  }

}
