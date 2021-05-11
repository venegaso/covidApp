import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-countries',
  templateUrl: './detail-countries.page.html',
  styleUrls: ['./detail-countries.page.scss'],
})
export class DetailCountriesPage implements OnInit {

  constructor(private router: Router) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  countries = [
    {
      "Country": "ALA Aland Islands",
      "CountryCode": "AX",
      "Slug": "ala-aland-islands",
      "NewConfirmed": 0,
      "TotalConfirmed": 0,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Afghanistan",
      "CountryCode": "AF",
      "Slug": "afghanistan",
      "NewConfirmed": 18,
      "TotalConfirmed": 299,
      "NewDeaths": 1,
      "TotalDeaths": 7,
      "NewRecovered": 0,
      "TotalRecovered": 10,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Albania",
      "CountryCode": "AL",
      "Slug": "albania",
      "NewConfirmed": 29,
      "TotalConfirmed": 333,
      "NewDeaths": 3,
      "TotalDeaths": 20,
      "NewRecovered": 10,
      "TotalRecovered": 99,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Algeria",
      "CountryCode": "DZ",
      "Slug": "algeria",
      "NewConfirmed": 80,
      "TotalConfirmed": 1251,
      "NewDeaths": 25,
      "TotalDeaths": 130,
      "NewRecovered": 28,
      "TotalRecovered": 90,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "American Samoa",
      "CountryCode": "AS",
      "Slug": "american-samoa",
      "NewConfirmed": 0,
      "TotalConfirmed": 0,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Andorra",
      "CountryCode": "AD",
      "Slug": "andorra",
      "NewConfirmed": 27,
      "TotalConfirmed": 466,
      "NewDeaths": 1,
      "TotalDeaths": 17,
      "NewRecovered": 5,
      "TotalRecovered": 21,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Angola",
      "CountryCode": "AO",
      "Slug": "angola",
      "NewConfirmed": 2,
      "TotalConfirmed": 10,
      "NewDeaths": 0,
      "TotalDeaths": 2,
      "NewRecovered": 1,
      "TotalRecovered": 2,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Anguilla",
      "CountryCode": "AI",
      "Slug": "anguilla",
      "NewConfirmed": 0,
      "TotalConfirmed": 0,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Antarctica",
      "CountryCode": "AQ",
      "Slug": "antarctica",
      "NewConfirmed": 0,
      "TotalConfirmed": 0,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Antigua and Barbuda",
      "CountryCode": "AG",
      "Slug": "antigua-and-barbuda",
      "NewConfirmed": 0,
      "TotalConfirmed": 15,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Argentina",
      "CountryCode": "AR",
      "Slug": "argentina",
      "NewConfirmed": 186,
      "TotalConfirmed": 1451,
      "NewDeaths": 4,
      "TotalDeaths": 43,
      "NewRecovered": 13,
      "TotalRecovered": 279,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Armenia",
      "CountryCode": "AM",
      "Slug": "armenia",
      "NewConfirmed": 34,
      "TotalConfirmed": 770,
      "NewDeaths": 0,
      "TotalDeaths": 7,
      "NewRecovered": 0,
      "TotalRecovered": 43,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Aruba",
      "CountryCode": "AW",
      "Slug": "aruba",
      "NewConfirmed": 0,
      "TotalConfirmed": 0,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Australia",
      "CountryCode": "AU",
      "Slug": "australia",
      "NewConfirmed": 220,
      "TotalConfirmed": 5550,
      "NewDeaths": 2,
      "TotalDeaths": 30,
      "NewRecovered": 52,
      "TotalRecovered": 701,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Austria",
      "CountryCode": "AT",
      "Slug": "austria",
      "NewConfirmed": 257,
      "TotalConfirmed": 11781,
      "NewDeaths": 18,
      "TotalDeaths": 186,
      "NewRecovered": 485,
      "TotalRecovered": 2507,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Azerbaijan",
      "CountryCode": "AZ",
      "Slug": "azerbaijan",
      "NewConfirmed": 78,
      "TotalConfirmed": 521,
      "NewDeaths": 0,
      "TotalDeaths": 5,
      "NewRecovered": 0,
      "TotalRecovered": 32,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Bahrain",
      "CountryCode": "BH",
      "Slug": "bahrain",
      "NewConfirmed": 16,
      "TotalConfirmed": 688,
      "NewDeaths": 0,
      "TotalDeaths": 4,
      "NewRecovered": 41,
      "TotalRecovered": 423,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Bangladesh",
      "CountryCode": "BD",
      "Slug": "bangladesh",
      "NewConfirmed": 9,
      "TotalConfirmed": 70,
      "NewDeaths": 2,
      "TotalDeaths": 8,
      "NewRecovered": 4,
      "TotalRecovered": 30,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Barbados",
      "CountryCode": "BB",
      "Slug": "barbados",
      "NewConfirmed": 1,
      "TotalConfirmed": 52,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Belarus",
      "CountryCode": "BY",
      "Slug": "belarus",
      "NewConfirmed": 89,
      "TotalConfirmed": 440,
      "NewDeaths": 1,
      "TotalDeaths": 5,
      "NewRecovered": 0,
      "TotalRecovered": 53,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Belgium",
      "CountryCode": "BE",
      "Slug": "belgium",
      "NewConfirmed": 1661,
      "TotalConfirmed": 18431,
      "NewDeaths": 140,
      "TotalDeaths": 1283,
      "NewRecovered": 375,
      "TotalRecovered": 3247,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Belize",
      "CountryCode": "BZ",
      "Slug": "belize",
      "NewConfirmed": 0,
      "TotalConfirmed": 4,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2020-04-05T06:37:00Z"
    },
  ]

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/tabs/home']);
  }

}
