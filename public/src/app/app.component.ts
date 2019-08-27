import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  newSearchRes:any = null;
  current:any;
  currentCity:any;
  currentTemp:any;
  currentF:any;
  currentC:any;
  currentFTemp:any = null;
  currentCTemp:any;
  FDeg:string;
  CDeg:string;
  newCity:any;
  searched:any;
  searchedCity:any;
  searchedFTemp:any;
  searchedFDeg:string;
  searchedCTemp:any = null;
  searchedCDeg:string;
  showTemp:string = 'currentFTemp';
  temp:string;
  geoError:any = {};
  searchError:any = {};
  
  constructor(private _http: HttpService){};

  ngOnInit(){
    this.findCurrentWeather();
  }

  findCurrentWeather(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this._http.getCurrentWeather(position).subscribe((res:any)=>{
          if(res.hasOwnProperty('error')){
            console.log('Error geolocation:', res.error);
            return this.geoError = 'Error finding your location';
          } else {
            console.log('here is the current location weather res:', res);
            this.current = res;
            this.currentCity = res.name;
            this.currentFTemp = Math.round(res.main.temp);
            this.currentCTemp = Math.round((res.main.temp - 32) * 5/9);
            this.FDeg='°F';
            this.CDeg='°C';
          }
        })
      })
    } else {
      console.log('Error: Cannot find your location');
      alert('Error: Cannot find your location');
    } 
  }

  searchWeather(newCity:string){
    this._http.searchNewCity(newCity).subscribe((res:any)=>{
      console.log('New searched city:', res);
      this.newSearchRes = res;
    })
  }
}