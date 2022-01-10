import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-billhistory',
  templateUrl: './billhistory.component.html',
  styleUrls: ['./billhistory.component.css']
})
export class BillhistoryComponent implements OnInit {
  historyrows : Object []=null;
  id:number;
  constructor(private route: ActivatedRoute, private http: HttpClient)
  {    
    
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id=params['id'];
    });
    const headerDict = {
      //   'Accept': 'application/json',
         "Authorization":localStorage.getItem("accessToken")
       }
   
       const requestOptions = {                                                                                                                                                                                 
         headers: new HttpHeaders(headerDict), 
       };
   
   
       this.http.get<{ID:string, balance:string, billNumber: string}>(GlobalConstants.apiURL+"/api/BillTransactions/"+this.id,requestOptions).subscribe(response=>{
         this.historyrows=(Object)(response);
         console.log(response);
         
       });
  }

}
