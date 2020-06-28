import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HierarchyService {
  constructor(private http: HttpClient) { }

  getCustomOrder() {
    // tslint:disable-next-line: max-line-length
    const sessionKey = JSON.parse(localStorage.getItem('user')).key;
    const url = `https://kem.greenkoncepts.com/ems/mvc/node-hierarchy-with-metadata?key=${sessionKey}`;
    return this.http.get<any>(url).pipe(map(res => {
      return res;
    }));
  }
}
