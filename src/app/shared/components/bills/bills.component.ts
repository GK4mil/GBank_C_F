import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  bills : Object [];
  firstheaders: Headers;
  constructor(private http: HttpClient)
  {
    this.firstheaders=new Headers({"Content-Type":"application/json", "Authorization":localStorage.getItem("accessToken")});
    http.get<{ID:string, balance:string, billNumber: string}>(GlobalConstants.apiURL+"/api/Bill").subscribe(response=>{
      this.bills=(Object)(response);
      console.log(response);
      
    });
    
  }

  ngOnInit(): void {
  }

}
