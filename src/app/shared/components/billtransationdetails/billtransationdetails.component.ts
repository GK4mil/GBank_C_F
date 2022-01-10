import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-billtransationdetails',
  templateUrl: './billtransationdetails.component.html',
  styleUrls: ['./billtransationdetails.component.css']
})
export class BillTransationDetailsComponent implements OnInit {

  result =null;
  id:String;
  billid:String;
  constructor(private route: ActivatedRoute, private http: HttpClient ) { 
    
    


  }

  ngOnInit(): void {
    const headerDict = {
      //   'Accept': 'application/json',
         "Authorization":localStorage.getItem("accessToken")
       }
       
       const requestOptions = {                                                                                                                                                                                 
         headers: new HttpHeaders(headerDict), 
       };
   
    this.route.params.subscribe(params => {
      this.id=params['id'];
      this.billid=params["bill"];
    });
    this.http.get<any>(GlobalConstants.apiURL+"/api/BillTransactions/newestdetail/"+
    this.id+"/"+this.billid,requestOptions).subscribe(response=>{
      this.result=response;
      console.log(response);
      
    });
    
  }


}
