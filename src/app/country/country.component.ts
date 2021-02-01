import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../models/country';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countryName: string;
  fetchedCountry: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.countryName = this.activatedRoute.snapshot.params.countryName;
    this.fetchCountry();
  }

  async fetchCountry(): Promise<void> {
    this.countriesService.getCountry(this.countryName)
      .then(country => {
        this.fetchedCountry = country;
      }).catch(err => console.log(err));
  }
}
