import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  flag:Boolean;
  
  constructor(private http: HttpClient) {
    
   }
   
  login(credentials)
  {
    console.log("service");
    console.log(credentials);
    
    //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    
    

    const body = { username: credentials.email, password: credentials.password };
    this.http.post<any>('http://192.168.0.3:49166/accesstoken', body,{headers: new HttpHeaders({'Content-Type':  'application/json'})}).subscribe(
      {
      next: data => {
        console.log(data);
        localStorage.setItem('accessToken',data.accessToken);
        localStorage.setItem('refreshToken',data.refreshToken);
        this.flag = true;
        
        
    },
    error: error => {   
      this.flag=false;
  }}
    );
  return this.flag;
    
      // return this.http.post('http://192.168.0.3:49155/accesstoken', 
      // JSON.stringify({username: credentials.email, password: credentials.password})).pipe( map(response => {
      //   console.log(response.json());
      //   let result =response.json();
      //   localStorage.setItem('token',result.authorization);
      //   return true;
      // }));
    }
      
        
   
 
    
  }
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





