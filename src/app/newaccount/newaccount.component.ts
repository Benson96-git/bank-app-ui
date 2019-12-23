import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.scss']
})
export class NewaccountComponent implements OnInit {
psw:String;
cpsw:String;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  alert(){
    if(this.psw==this.cpsw){
  this.router.navigate(['']);
    }
    else{
      window.alert("Passwords don't match");
    }
  }
  back(){
    this.router.navigate(['']);
  }
}
