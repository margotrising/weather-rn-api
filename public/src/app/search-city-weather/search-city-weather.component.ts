import { Component, Input, OnInit, OnChanges, SimpleChanges, Output  } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-search-city-weather',
  templateUrl: './search-city-weather.component.html',
  styleUrls: ['./search-city-weather.component.css']
})
export class SearchCityWeatherComponent implements OnInit {
  @Input() searchWeather: any;

  newCity:any;
  searched:any;
  searchedCity:any;
  searchedFTemp:any;
  searchedFDeg:string;
  searchedCTemp:any = null;
  searchedCDeg:string;
  showNewTemp:string = 'searchedFTemp';

  constructor(private _http: HttpService) { }

  ngOnInit(){
    console.log('in the component:', this.searchWeather);
    
  }

  // ngOnChanges(changes: SimpleChanges){
  //   this.getNewWeather();
  // }

  // getNewWeather(){
  //   this.newCity = this.searchWeather;
  //   this.searchedCity = this.newCity.name;
  //   this.searchedFTemp = Math.round(this.newCity.main.temp);
  //   this.searchedFDeg='°F';
  //   this.searchedCTemp = Math.round((this.newCity.main.temp - 32) * 5/9);
  //   this.searchedCDeg='°C';    
  // }
}
