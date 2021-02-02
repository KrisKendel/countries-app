import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Country } from '../models/country';
import { CountriesService } from '../services/countries.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit, AfterViewInit {
  countries: Country[];
  dataSource: any = [];
  loaded = false;

  public pageSize = 8;
  public currentPage = 0;
  public totalSize = 0;
  public displayedColumns: string[] = ['name', 'nativeName', 'population', 'capital', 'flag'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getAllCountries(): void {
    this.countriesService.getAll().then(countries => {
      this.countries = countries;
      this.dataSource = new MatTableDataSource(this.countries);
      this.loaded = true;
      this.dataSource.paginator = this.paginator;
    }).catch(err => console.log(err));
  }

  applyFilter(event: Event): any {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
