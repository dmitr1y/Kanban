import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/components/auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  /**
   * Перехват запроса и подстановка в заголовок токена авторизации
   *
   * @param request Запрос
   * @param next Обработчик запроса
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = AuthService.getToken();
    let clone: HttpRequest<any>;

    if (token) {
      if (this.authService.isTokenExpired()) {
        this.router.navigate(['/auth']);
      }

      clone = request.clone({
        setHeaders: {
          Authorization: token,
        }
      });
    } else {
      clone = request;
    }

    return next.handle(clone);
  }
}
