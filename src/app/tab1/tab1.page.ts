import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CovidApiService } from '../services/covid-api.service';
import { LoadingController } from '@ionic/angular';
import { Global, Country } from '../interfaces/ISummary';

import { OrderPipe } from 'ngx-order-pipe';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  dataTotal = new Global();
  dataCountries: Country[];
  colombia: Country[];

  constructor(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private _CovidApiService: CovidApiService,
    private router: Router,
    public loadingController: LoadingController,
    private orderPipe: OrderPipe
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

    // eslint-disable-next-line no-underscore-dangle
    this._CovidApiService.getCovid().subscribe((resp: any) => {
      this.dataTotal = resp.Global;
      this.dataCountries = this.orderPipe.transform(resp.Countries, 'TotalConfirmed',true);
      this.dataCountries = this.dataCountries.filter((item, index) => index <3);

      loading.dismiss();
    });
  }

  detailCountries(){
    this.router.navigate(['/tabs/detail-countries']);
  }

}
