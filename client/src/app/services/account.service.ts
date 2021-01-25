import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppUser } from '../models/app-user.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api';
  private currentUserSource = new ReplaySubject<AppUser>(1);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post<AppUser>(`${this.baseUrl}/account/login`, model).pipe(
      map((response) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next();
  }

  register(model: any) {
    return this.http
      .post<AppUser>(`${this.baseUrl}/account/register`, model)
      .pipe(
        tap((user) => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        })
      );
  }

  setCurrentUser(user: AppUser) {
    this.currentUserSource.next(user);
  }
}
