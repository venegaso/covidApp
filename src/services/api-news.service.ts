import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiNewsService {

  constructor(private https: HttpClient) {

  }

  getTopHeadLines(covid): Observable<any>{
    // eslint-disable-next-line max-len
    return this.https.get('https://newsapi.org/v2/top-headlines?q=covid&apiKey=21cb05bbf848489387cfe9a67d2b31fc').pipe();
  }
}
