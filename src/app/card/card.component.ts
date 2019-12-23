import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  //pin[]= Array;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  alert(){
window.alert("Pin has been updated");
this.router.navigate(['home']);
     }
  }

