import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public regions: Country[] = [];

  constructor(private regionService: CountriesService){}

  searchByRegion(region: string) {
    this.regionService.searchRegion(region).subscribe( regions => {
      this.regions = regions;
    });
  }

}
