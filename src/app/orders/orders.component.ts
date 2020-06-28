import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AddService } from '../services';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  customerLists: any = [];
  waitMsg: any;

  constructor(
    private _location: Location,
    private addService: AddService,
  ) {
    this.addService = addService;
  }

  ngOnInit() {
    this.getList();
  }

  backClicked() {
    this._location.back();
  }

  async getList() {
    this.waitMsg = "Loading..........";
    await this.addService.getCustomOrder()
      .pipe(first())
      .subscribe(
        data => {
          this.waitMsg = "";
          return this.customerLists = data;
        },
        error => {
          throw new Error('Not Found');
        }
      )
  }
}
