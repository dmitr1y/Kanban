import { Injectable } from '@angular/core';
import { IUser } from 'src/app/components/auth/interfaces';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) {
    this.iUserBehaviorSubject = new BehaviorSubject<IUser>(null);
    this.currentUser = this.iUserBehaviorSubject.asObservable();
    this.iUserBehaviorSubject.next(this.getCurrentUser());
  }

  private userStorageKey = 'current_user';

  public iUserBehaviorSubject: BehaviorSubject<IUser>;

  public currentUser: Observable<IUser>;

  public getProfile(username?: string): Promise<IUser> {
    if (!username) {
      username = 'root';
    }

    return this.httpClient.get<{ user: IUser }>('/api/user/profile', {
      params: {
        username,
      },
    }).pipe(map((result => result.user))).toPromise();
  }

  public getCurrentUser(): IUser {
    return JSON.parse(localStorage.getItem(this.userStorageKey));
  }

  public saveCurrentUser(user: IUser): void {
    localStorage.setItem(this.userStorageKey, JSON.stringify(user));
    this.iUserBehaviorSubject.next(user);
  }

  public clearCurrentUser(): void {
    this.iUserBehaviorSubject.next(null);
  }
}
