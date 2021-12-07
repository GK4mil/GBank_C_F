import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-news-board',
  templateUrl: './news-board.component.html',
  styleUrls: ['./news-board.component.css']
})
export class NewsBoardComponent implements OnInit {

  posts : Object [];
  
  constructor(private http: HttpClient)
  {
    http.get<{title:string, content:string, date: Date}>(GlobalConstants.apiURL+"/api/News/GetSomeCount?count=5").subscribe(response=>{
      this.posts=(Object)(response);
      console.log(response);
      
    });
    
  }

  ngOnInit(): void {
  }

}
