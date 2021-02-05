import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  public uri = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  getAll(): Promise<Country[]> {
    return this.http.get<Country[]>(`${this.uri}/all`).toPromise();
  }

  getCountryByName(countryName: string): Promise<Country> {
    return this.http.get<Country>(`${this.uri}/name/${countryName}`).toPromise();
  }

  getCountryByAlphaCode(countryAlpha: string): Promise<Country> {
    return this.http.get<Country>(`${this.uri}/alpha/${countryAlpha}`).toPromise();
  }
}
