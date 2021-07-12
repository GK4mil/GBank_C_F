import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  wrongCredentials=false;
  

  constructor(
    private router: Router, 
    private authService: AuthService) { }

  tryToLogin(credentials)
  {
    
    

    if(this.authService.login(credentials))
    {
      this.router.navigate(["/admindashboard"]);
    }
    else
    {
      this.wrongCredentials=true;
      console.log("zle dane");
    }
  }
  

  ngOnInit(): void {
  }

}
