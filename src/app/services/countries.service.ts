import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  public uri = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) { }

  getAll(): Promise<any> {
    return this.http.get(`${this.uri}`).toPromise();
  }
}
