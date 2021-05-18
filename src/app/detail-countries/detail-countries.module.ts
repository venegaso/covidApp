import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCountriesPageRoutingModule } from './detail-countries-routing.module';

import { DetailCountriesPage } from './detail-countries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCountriesPageRoutingModule
  ],
  //schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [DetailCountriesPage]
})
export class DetailCountriesPageModule {}
