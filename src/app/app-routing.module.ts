import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent  } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import {TransactionsComponent } from './transactions/transactions.component';
import { CardComponent } from './card/card.component';
import { BillComponent } from './bill/bill.component';
import { DepositsComponent } from './deposits/deposits.component';
import { RechargeComponent } from './recharge/recharge.component';
import { InvestComponent } from './invest/invest.component';
import { LoanComponent } from './loan/loan.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ThistoryComponent } from './thistory/thistory.component';
import { ViewtComponent } from './viewt/viewt.component';

const routes: Routes = [
  
    {path:"",component:LoginPageComponent},
   { path:"newaccount",component:NewaccountComponent},
   { path:"forgot",component:ForgotComponent},
   { path:"home",component:HomeComponent},
   { path:"about",component:AboutComponent},
   { path:"profile",component:ProfileComponent},
   { path:"transactions",component: TransactionsComponent},
   { path:"card",component: CardComponent},
   { path:"bill",component: BillComponent},
   { path:"deposits",component: DepositsComponent},
   { path:"recharge",component: RechargeComponent},
   { path:"invest",component: InvestComponent},
   { path:"loan",component: LoanComponent},
   { path:"employee",component: EmployeeComponent},
   { path:"addUser",component: AddUserComponent},
   { path:"thistory",component: ThistoryComponent},
   { path:"viewt",component:ViewtComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
