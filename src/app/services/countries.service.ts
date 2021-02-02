import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  public uri = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  getAll(): Promise<any> {
    return this.http.get(`${this.uri}/all`).toPromise();
  }

  getCountryByName(countryName: string): Promise<any> {
    return this.http.get(`${this.uri}/name/${countryName}`).toPromise();
  }

  getCountryByAlphaCode(countryAlpha: string): Promise<any> {
    return this.http.get(`${this.uri}/alpha/${countryAlpha}`).toPromise();
  }
}
