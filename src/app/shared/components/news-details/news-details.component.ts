import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  item: NewsDetails =null;
  id:number;
  constructor(private route: ActivatedRoute, private http: HttpClient ) { 
    
    


  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id=params['id'];
    });
    this.http.get<NewsDetails>(GlobalConstants.apiURL+"/api/News/"+
    this.id).subscribe(response=>{
      this.item=response;
      console.log(response);
      
    });
    
  }

}
interface NewsDetails
{
  id: number, title:string, content:string, date: Date
}