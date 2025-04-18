import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'countries-table',
  standalone: false,
  templateUrl: './country-table.component.html',
  styles: `
  img {
    width: 35px;
  }
  `
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];
}
