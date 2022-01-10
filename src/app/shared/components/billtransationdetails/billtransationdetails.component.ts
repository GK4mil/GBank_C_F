import { HttpClient } from '@angular/common/http';
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
  constructor(private route: ActivatedRoute, private http: HttpClient ) { 
    
    


  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id=params['id'];
    });
    this.http.get<any>(GlobalConstants.apiURL+"/api/BillTransactions/newestdetail/"+
    this.id).subscribe(response=>{
      this.result=response;
      console.log(response);
      
    });
    
  }


}
