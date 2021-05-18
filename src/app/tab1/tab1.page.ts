import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CovidApiService } from '../services/covid-api.service';
import { LoadingController } from '@ionic/angular';
import { CovidData, Global } from '../interfaces/ISummary';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  dataCovid = new Global();
  constructor(
    private _CovidApiService: CovidApiService,
    private router: Router,
    public loadingController: LoadingController
    ) {}

  ngOnInit(): void{
    this.getTotal();
  }

  async getTotal(){
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 2000
    });
    await loading.present();

    this._CovidApiService.getCovid().subscribe((resp: any) => {
      this.dataCovid = resp.Global;
      console.log(this.dataCovid);
      console.log(this.dataCovid);
      loading.dismiss();
    });
  }

  detailCountries(){
    this.router.navigate(['/tabs/detail-countries']);
  }

}
