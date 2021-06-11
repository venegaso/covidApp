import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telefonos',
  templateUrl: './telefonos.page.html',
  styleUrls: ['./telefonos.page.scss'],
})
export class TelefonosPage implements OnInit {

  // eslint-disable-next-line max-len
  departamentos = [{dep:'Lineas Minsalud',tel:'01 8000 95 55 90'},{dep:'Amazonas',tel:3153615018},{dep:'Antioquia',tel:3003050295},
  {dep:'Arauca',tel:125},{dep:'Atlántico',tel:3175173964},{dep:'Bogotá',tel:123},{dep:'Bolivar',tel:3174016183},
  {dep:'Boyaca',tel:31114834104},{dep:'Caldas',tel:3104267906},{dep:'Caquetá',tel:3104267906},{dep:'Casanare',tel:3213945317},
  {dep:'Cauca',tel:3012737787},{dep:'Cesar',tel:3106332291},{dep:'Chocó',tel:3213945297},{dep:'Cordoba',tel:3205308209},
  {dep:'Cundinamarca',tel:123},{dep:'Guainía',tel:3117421983},{dep:'Guaviare',tel:3213946560},{dep:'Huila',tel:8706633},
  {dep:'La Guajira',tel:3183400883},{dep:'Magdalena',tel:3128070326},{dep:'Meta',tel:3213945351},{dep:'Nariño',tel:3177129818},
  {dep:'Norte de Santander',tel:3202714512},{dep:'Putumayo',tel:3123191736},{dep:'Quindío',tel:3225816422},{dep:'Risaralda',tel:3152823059},
  {dep:'San Andres',tel:3106511341},{dep:'Santander',tel:678785},{dep:'Sucre',tel:3174028049},{dep:'Tolima',tel:3228123975},
  {dep:'Valle del Cauca',tel:6206819},{dep:'Vaupes',tel:3213945341},{dep:'Vichada',tel:3222476344}];

  constructor() { }

  ngOnInit() {
  }

}
