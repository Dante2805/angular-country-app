import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public initialValue: string = '';
  
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }
  constructor(private countriesService: CountriesService){}

  public searchByCountry(term: string) {
    this.countriesService.searchCountry(term)
    .subscribe( countries => {
      this.countries = countries;
    });
  }
}
