import { Injectable } from '@angular/core';
import { IUser } from 'src/app/components/auth/interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/components/user/user.service';

interface LoginResponse {
  jwt: string,
  user: IUser,
  message?: string,
}

@Injectable()
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private userService: UserService,
  ) {
    this.jwtHelper = new JwtHelperService();
  }

  public static JWT_TOKEN_KEY = 'rawJWT';
  private jwtHelper: JwtHelperService;

  public static getToken(): string {
    return localStorage.getItem(AuthService.JWT_TOKEN_KEY);
  }

  public login(user: IUser): PromiseLike<IUser> {
    return new Promise<IUser>((resolve, reject) => {
      this.httpClient.post<LoginResponse>('/api/auth/login', {
        email: user.email,
        password: user.password,
      }).toPromise<LoginResponse>().then((data: LoginResponse) => {
        if (!data.jwt) {
          reject(data.message);
        }

        localStorage.setItem(AuthService.JWT_TOKEN_KEY, data.jwt);

        resolve(data.user);
      });
    });
  }

  public register(user: IUser): PromiseLike<IUser> {
    const params: HttpParams = new HttpParams({
      fromObject: {
        name: user.name,
        password: user.password,
        email: user.email,
      },
    });

    return this.httpClient.post<IUser>('/api/auth/signup', params).toPromise<IUser>().then((newUser: IUser) => {
      return newUser;
    });
  }

  public logout(): void {
    localStorage.clear();
    this.userService.clearCurrentUser();
    this.router.navigate(['/auth']);
  }

  public isTokenExpired(): boolean {
    const token = AuthService.getToken();

    return this.jwtHelper.isTokenExpired(token);
  }

  public isAuthorized(): boolean {
    return !this.isTokenExpired();
  }
}
