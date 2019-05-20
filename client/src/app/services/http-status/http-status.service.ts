import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoaderService } from 'src/app/components/loader/loader.service';

@Injectable()
export class HttpStatusService {
  private requestInFlight$: BehaviorSubject<boolean>;
  constructor(
    private loader: LoaderService,
  ) {
    this.requestInFlight$ = new BehaviorSubject(false);
  }

  setHttpStatus(inFlight: boolean) {
    this.loader.setStatus(inFlight);
    this.requestInFlight$.next(inFlight);
  }

  getHttpStatus(): Observable<boolean> {
    return this.requestInFlight$.asObservable();
  }
}
