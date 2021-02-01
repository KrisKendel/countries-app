import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  public uriAll = 'https://restcountries.eu/rest/v2/all';
  public uriName = 'https://restcountries.eu/rest/v2/name';

  constructor(private http: HttpClient) { }

  getAll(): Promise<any> {
    return this.http.get(`${this.uriAll}`).toPromise();
  }

  getCountry(countryName): Promise<any> {
    return this.http.get(`${this.uriName}/${countryName}`).toPromise();
  }
}
