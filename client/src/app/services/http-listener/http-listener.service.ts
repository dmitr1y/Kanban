import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { HttpStatusService } from 'src/app/services/http-status/http-status.service';

@Injectable({
  providedIn: 'root'
})
export class HttpListenerService implements HttpInterceptor {

  constructor(
    private httpStatus: HttpStatusService,
  ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.httpStatus.setHttpStatus(true);
    return next.handle(req).pipe(
      map(event => {
        return event;
      }),
      catchError(error => {
        return throwError(error);
      }),
      finalize(() => {
        this.httpStatus.setHttpStatus(false);
      })
    );
  }
}
