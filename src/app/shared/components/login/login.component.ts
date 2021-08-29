import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  wrongCredentials=false;
  private stat:Boolean;
  

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService) { }

  tryToLogin(credentials)
  {
    this.wrongCredentials=false;
    this.authService.login(credentials).subscribe(
        result=>
        {
          let returnUrl =this.route.snapshot.queryParamMap.get('returnUrl');
           
          this.router.navigate([returnUrl|| 'db']);
        }, error =>{
          this.wrongCredentials=true;
            console.log(error.message);
        });
        
    
      
      
    
  }
  

  ngOnInit(): void {
  }

}
