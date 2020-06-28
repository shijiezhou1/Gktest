import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tiles = [
    { name: 'Hierarchy', url: '/hierarchy' },
    { name: 'Customers', url: '/customer' },
    { name: 'Orders', url: '/orders' },
    { name: 'Schedules', url: '/schedules' },
    { name: 'Messages', url: '/messages' },
    { name: 'Email', url: '/email' },
  ]

  currentUser: any;
  currUserSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.currUserSubscription = this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    // check localStorage
    const localData = localStorage.getItem('user');
    if (!localData) {
      this.router.navigate(['/login']);
    } else {
      const data = JSON.parse(localData);
      if (!data.key) {
        // key not found
        console.log('here?')
        this.router.navigate(['/login'])
      }
      this.currentUser = data;
    }
  }

  ngOnDestroy() {
    this.currUserSubscription.unsubscribe();
  }

  logout() {
    const key = this.currentUser.key;
    this.authService.logout(key);
    this.router.navigate(['/login']);
  }

}
