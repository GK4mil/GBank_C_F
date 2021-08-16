import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-clientdashboard',
  templateUrl: './clientdashboard.component.html',
  styleUrls: ['./clientdashboard.component.css']
})
export class ClientdashboardComponent implements OnInit {

  constructor(private as :AuthService, private r:Router) { 
    if(!as.isLogged())
    r.navigate(["/"]);
    
  }

  ngOnInit(): void {
  }

}
