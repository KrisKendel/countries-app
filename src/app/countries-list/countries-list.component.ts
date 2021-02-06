import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Country } from '../models/country';
import { CountriesService } from '../services/countries.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  countries: Country[];
  dataSource: MatTableDataSource<Country> = null;
  loaded = false;
  pageSize = 8;
  currentPage = 0;
  displayedColumns: string[] = ['name', 'nativeName', 'population', 'capital', 'flag'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    if (localStorage.getItem('all-countries') === null) {
      this.getAllCountries();
    } else {
      this.getAllCountriesFromLs();
    }
  }

  getAllCountries(): void {
    this.countriesService.getAll().then(countries => {
      this.countries = countries;
      this.dataSource = new MatTableDataSource(this.countries);
      this.loaded = true;
      this.dataSource.paginator = this.paginator;
      localStorage.setItem('all-countries', JSON.stringify(this.countries));
    }).catch(err => console.log(err));
  }

  getAllCountriesFromLs(): void {
    this.countries = JSON.parse(localStorage.getItem('all-countries'));
    this.dataSource = new MatTableDataSource(this.countries);
    this.loaded = true;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): any {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
