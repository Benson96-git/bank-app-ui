import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
username:String;
password:String;
  constructor(private route:Router) { }

  ngOnInit() {

  }

  home(){
    if(this.username=="Benson")
    {
    if(this.password=="qwerty")
    {
      this.route.navigate(['home']);
      }
      else{
        window.alert("Password is incorrect");
    
      }
    }
      else{
window.alert("username is incorrect");

      }
    }}