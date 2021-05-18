import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  url = 'https://api.covid19api.com/summary';

  constructor(private http: HttpClient) {

   }
   getCovid(){
     return this.http.get(this.url).pipe();
   }
}
