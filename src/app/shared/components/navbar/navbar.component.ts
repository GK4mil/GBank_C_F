import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bnavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  displayAdminPanel=false;
  constructor(private router: Router) { 
    console.log(this.router.url);
    if(this.router.url.includes("admin"))

      this.displayAdminPanel=true;
  }

  ngOnInit(): void {
  }

}
