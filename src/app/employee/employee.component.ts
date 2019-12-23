import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
username:String;
password:String;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  home(){
    if(this.username=="Benson")
    {
    if(this.password=="qwerty")
    {
      this.router.navigate(['addUser']);
      }
      else{
        window.alert("Password is incorrect");
    
      }
    }
      else{
window.alert("username is incorrect");

      }
    }

}
