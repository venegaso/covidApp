import { Component, OnInit } from '@angular/core';
import { ApiNewsService } from '../../services/api-news.service';

@Component({
  selector: 'app-noticias',
  templateUrl: 'noticias.page.html',
  styleUrls: ['noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

 dataNews;

 constructor(private myApi: ApiNewsService) {

 }
 ngOnInit(){
   this.myApi.getTopHeadLines('health').subscribe(resp=>{
     console.log(resp.articles);
     this.dataNews = resp.articles;
   });
 }
}
