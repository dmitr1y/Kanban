import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoaderService {
  public loaderState: Observable<boolean>;

  private loaderStateSubject: BehaviorSubject<boolean>;

  constructor() {
    this.loaderStateSubject = new BehaviorSubject<boolean>(false);
    this.loaderState = this.loaderStateSubject.asObservable();
  }

  public setStatus(status: boolean): void {
    this.loaderStateSubject.next(status);
  }
}
