import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'bnavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  displayClientPanel=false;
  constructor(private router: Router, private authservice: AuthService) { 
  }
   

  ngOnInit(): void {
  }

}
