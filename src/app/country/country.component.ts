import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../models/country';
import { CountriesService } from '../services/countries.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countryName: string;
  fetchedCountry: Country;
  lat: number;
  lng: number;
  loaded = false;
  map: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.countryName = this.activatedRoute.snapshot.params.countryName;

    if (localStorage.getItem(`${this.countryName}`) === null) {
      await this.fetchCountry().then(() => {
        this.mapInit();
      }).catch(err => console.log(err));
    } else {
      await this.fetchCountryFromLs();
      this.mapInit();
    }
  }

  async fetchCountry(): Promise<void> {
    await this.countriesService.getCountryByName(this.countryName)
      .then(country => {
        this.fetchedCountry = country[0];
        this.lat = this.fetchedCountry.latlng[0];
        this.lng = this.fetchedCountry.latlng[1];
        this.loaded = true;
        localStorage.setItem(`${this.fetchedCountry.name}`, JSON.stringify(this.fetchedCountry));
      }).catch(err => console.log(err));
  }

  async openCountry(alphaCode: string): Promise<void> {
    await this.countriesService.getCountryByAlphaCode(alphaCode)
      .then(country => {
        this.router.navigate(['/countries-list/' + country.name]);
        this.fetchedCountry = country;
        this.lat = this.fetchedCountry.latlng[0];
        this.lng = this.fetchedCountry.latlng[1];
        this.map.setView([this.lat, this.lng], 6);
        localStorage.setItem(`${this.fetchedCountry.name}`, JSON.stringify(this.fetchedCountry));
      }).catch(err => console.log(err));
  }

  fetchCountryFromLs(): void {
    this.fetchedCountry = JSON.parse(localStorage.getItem(`${this.countryName}`));
    this.lat = this.fetchedCountry.latlng[0];
    this.lng = this.fetchedCountry.latlng[1];
    this.loaded = true;
  }

  mapInit(): void {
    this.map = L.map('mapid').setView([this.lat, this.lng], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
}
