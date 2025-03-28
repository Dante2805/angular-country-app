import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';
  
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries; 
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  constructor(private countriesService: CountriesService) {}

  public searchByCapital(term: string) {
    this.isLoading = true;
    
    this.countriesService.searchCapital(term)
      .subscribe( countries => {
          this.countries = countries;
          this.isLoading = false;
        }
      );
  }
}
