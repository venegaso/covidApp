import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-countries',
  templateUrl: './detail-countries.page.html',
  styleUrls: ['./detail-countries.page.scss'],
})
export class DetailCountriesPage implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

  back(){
    this.router.navigate(['/tabs/home']);
  }

}
