import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions} from '@angular//http';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-news-board',
  templateUrl: './news-board.component.html',
  styleUrls: ['./news-board.component.css']
})
export class NewsBoardComponent implements OnInit {

  posts :any [];
  firstheaders=new Headers({"Content-Type":"application/json"});
  constructor(private http: Http)
  {
    http.get('http://localhost:8082/api/news/show').subscribe(response=>{
      this.posts=response.json();
      
    });
    
  }

  ngOnInit(): void {
  }

}
