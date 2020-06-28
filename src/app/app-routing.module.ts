import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { OrdersComponent } from './orders/orders.component';
import { MainComponent } from './main/main.component';
import { EmailComponent } from './email/email.component';
import { MessagesComponent } from './messages/messages.component';
import { SchedulesComponent } from './schedules/schedules.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'hierarchy', component: HierarchyComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'schedules', component: SchedulesComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'email', component: EmailComponent },
  { path: 'main', component: MainComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
