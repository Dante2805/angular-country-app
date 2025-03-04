import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  ngOnInit(): void {
    this.countries = this.regionService.cacheStore.byRegion.countries;
    this.selectedRegion = this.regionService.cacheStore.byRegion.region;
  }

  constructor(private regionService: CountriesService){}

  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.regionService.searchRegion(region).subscribe( countries => {
      this.countries = countries;
    });
  }

}
