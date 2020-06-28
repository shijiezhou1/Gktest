import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const IP = '52.230.86.97';

@Injectable({ providedIn: 'root' })
export class AddService {
  constructor(private http: HttpClient) {

  }

  createCustomOrder(customerName: string, customerAge: string, customerAddress: string) {
    // tslint:disable-next-line: max-line-length
    const url = `http://${IP}:8300/gktest/createCustomer?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;

    // request body
    // {"customerName":"gk","customerAge":23,"customerAddress":"Greenkoncepts,Singapore"}

    return this.http.post<any>(url, {
      customerName,
      customerAge,
      customerAddress
    }).pipe(map(res => {
      return res;
    }));
  }

  getCustomOrder() {
    // tslint:disable-next-line: max-line-length
    const url = `http://${IP}:8300/gktest/getAllOrders?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
    return this.http.get<any>(url).pipe(map(res => {
      return res;
    }));
  }
}
