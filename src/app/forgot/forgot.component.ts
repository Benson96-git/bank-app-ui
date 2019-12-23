import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
psw:String;
cpsw:String;
email:String;
uname:String;
  constructor(private router : Router) { }

  ngOnInit() {
  }
alert1(){
  if(this.psw==this.cpsw){
this.router.navigate(['']);
  }
  else{
    window.alert("Passwords don't match");
  }
}
}
