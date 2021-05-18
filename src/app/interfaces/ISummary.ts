  export class Global {
      NewConfirmed: number;
      TotalConfirmed: number;
      NewDeaths: number;
      TotalDeaths: number;
      NewRecovered: number;
      TotalRecovered: number;
      constructor(){}
  }

  export class Country {
      Country: string;
      CountryCode: string;
      Slug: string;
      NewConfirmed: number;
      TotalConfirmed: number;
      NewDeaths: number;
      TotalDeaths: number;
      NewRecovered: number;
      TotalRecovered: number;
      Date: Date;
      constructor(){}
  }

  export class CovidData {
      Global: Global;
      Countries: Country[];
      Date: Date;

      constructor(){}
  }
