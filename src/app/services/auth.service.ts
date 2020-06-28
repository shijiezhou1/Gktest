
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  key: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const url = `https://kem.greenkoncepts.com/ems/services/ResourceService/login?username=${username}&credential=${password}`;
    return this.http.get<any>(url).pipe(map(user => {
      if (user) {
        // if(!user.key) { throw new Error('no key') };
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
      return user;
    }));
  }

  logout(sessionKey) {
    const url = `https://kem.greenkoncepts.com/ems/services/ResourceService/logout?key=${sessionKey}`
    return this.http.get<any>(url).pipe(map(user => {
      if (user) {
        localStorage.removeItem('user');
        this.currentUserSubject.next(null);
      }
      return user;
    }));
  }
}
