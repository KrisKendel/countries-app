import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'countries-list', component: CountriesListComponent },
  { path: 'countries-list/:countryName', component: CountryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
