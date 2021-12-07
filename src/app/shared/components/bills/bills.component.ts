
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  bills : Object [];
  
  constructor(private http: HttpClient)
  {    
    const headerDict = {
   //   'Accept': 'application/json',
      "Authorization":localStorage.getItem("accessToken")
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };


    http.get<{ID:string, balance:string, billNumber: string}>(GlobalConstants.apiURL+"/api/Bill",requestOptions).subscribe(response=>{
      this.bills=(Object)(response);
      console.log(response);
      
    });
    
  }

  ngOnInit(): void {
  }

}
