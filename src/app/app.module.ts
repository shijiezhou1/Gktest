import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { MessagesComponent } from './messages/messages.component';
import { EmailComponent } from './email/email.component';
import { MenuTreeComponent } from './menu-tree/menu-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    HierarchyComponent,
    CustomerComponent,
    OrdersComponent,
    LoginComponent,
    MainComponent,
    SchedulesComponent,
    MessagesComponent,
    EmailComponent,
    MenuTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
