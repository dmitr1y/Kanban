import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/components/auth/interfaces';
import { AuthService } from 'src/app/components/auth/auth.service';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material';
import { ToastComponent } from 'src/app/shared/toast/toast.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService],
})
export class AuthComponent implements OnInit {

  public user: IUser;
  public isRegistration = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private bottomSheet: MatBottomSheet,
  ) {
    this.user = {
      email: '',
      name: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }

  public registation(): void {
    this.isRegistration = true;
  }

  public login(): void {
    this.isRegistration = false;
  }

  public submit(): void {
    if (this.isRegistration) {
      this.signup();
    } else {
      this.signin();
    }
  }

  private signin(): void {
    if (this.user && this.user.email && this.user.password) {
      this.authService.login(this.user).then(result => {
          this.router.navigate(['dashboard']);
        },
        (err) => {
          this.bottomSheet.open(ToastComponent, {
            data: {
              message: err.error.message,
            },
          });
        },
      );
    }
  }

  private signup(): void {
    if (this.user && this.user.email && this.user.password) {
      this.authService.register(this.user).then((user) => {
        this.user = user;
        this.signin();
      }, (err) => {
        this.bottomSheet.open(ToastComponent, {
          data: {
            message: err.error.message,
          },
        });
      });
    }
  }
}
