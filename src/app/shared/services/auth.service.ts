import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { JwtHelperService } from "@auth0/angular-jwt";
import { GlobalConstants } from 'src/app/common/global-constants';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  flag:Boolean;
  helper:JwtHelperService;
  
  constructor(private http: HttpClient, private r:Router) {
    this.helper=new JwtHelperService();
    
   }
   
login(credentials)
{
  this.flag=false;
  const body = { username: credentials.email, password: credentials.password };
  return this.http.post<Auth>(GlobalConstants.apiURL+"/api/Token/accesstoken", body,{headers: new HttpHeaders({'Content-Type':  'application/json'})})
  .map(resp=>
    {
      localStorage.setItem('accessToken',resp.accessToken);
      localStorage.setItem('refreshToken',resp.refreshToken);
      this.flag = true;
      return true; 
    });
}

logout()
{
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    
    this.r.navigate(["/"]);
}

isLogged()
{
  
  let atoken= localStorage.getItem('accessToken');
  //trzeba zrobić obsluge refreshu tokenu!!!!!!!!
  if(!atoken)
    return false;

  return this.helper.isTokenExpired(atoken)?false:true;

}
tryToRefreshToken()
{
  let rtoken=localStorage.getItem('refreshToken');
  if(!rtoken) return false;
  this.http.put<Auth>(GlobalConstants.apiURL+"/api/Token/accesstoken",null, {headers: new HttpHeaders({'Authorization':  ''})})
  .subscribe(resp=>{
    localStorage.setItem('accessToken',resp.accessToken);
      localStorage.setItem('refreshToken',resp.refreshToken);
  },err=>{
    
  });
}

}


 /* login(credentials)
  {
    console.log("service");
    console.log(credentials);
    
    //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    
    

    const body = { username: credentials.email, password: credentials.password };
    this.http.post<Auth>('http://192.168.0.3:49160/api/Token/accesstoken', body,{headers: new HttpHeaders({'Content-Type':  'application/json'})})
    
  return this.flag;
   */ 
      // return this.http.post('http://192.168.0.3:49155/accesstoken', 
      // JSON.stringify({username: credentials.email, password: credentials.password})).pipe( map(response => {
      //   console.log(response.json());
      //   let result =response.json();
      //   localStorage.setItem('token',result.authorization);
      //   return true;
      // }));
    //}
      
        
   
 
    
  
////
interface Auth
{
  accessToken;
  refreshToken

} 
   
//private setSession(authResult) {
 // const expiresAt = moment().add(authResult.expiresIn,'second');

  //localStorage.setItem('id_token', authResult.idToken);
 // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
        
/* 
logout() {
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
}

public isLoggedIn() {
  return moment().isBefore(this.getExpiration());
}

isLoggedOut() {
  return !this.isLoggedIn();
}

getExpiration() {
  const expiration = localStorage.getItem("expires_at");
  const expiresAt = JSON.parse(expiration);
  return moment(expiresAt);
}  
*/



////





