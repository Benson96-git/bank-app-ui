import { Component, OnInit } from '@angular/core';
import {  Router} from '@angular/router';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
alert(){
  window.alert("Transaction is successful");
  this.router.navigate(['/home']);
}
}
