import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CardComponent } from './card/card.component';
import { BillComponent } from './bill/bill.component';
import { DepositsComponent } from './deposits/deposits.component';
import { RechargeComponent } from './recharge/recharge.component';
import { InvestComponent } from './invest/invest.component';
import { LoanComponent } from './loan/loan.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ThistoryComponent } from './thistory/thistory.component';
import { ViewtComponent } from './viewt/viewt.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NewaccountComponent,
    ForgotComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    TransactionsComponent,
    CardComponent,
    BillComponent,
    DepositsComponent,
    RechargeComponent,
    InvestComponent,
    LoanComponent,
    EmployeeComponent,
    AddUserComponent,
    ThistoryComponent,
    ViewtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
