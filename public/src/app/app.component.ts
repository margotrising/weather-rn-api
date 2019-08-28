import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  geoError:any = {};
  searchError:any = {};
  weatherData:any;
  fTemp:number;
  cTemp:number = null;
  // type:string = 'f';
  // temp:number;
  
  constructor(private _http: HttpService){};

  ngOnInit(){
    this.findCurrentWeather();
  }

  findCurrentWeather(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position:any)=>{
        this._http.getCurrentWeather(position).subscribe((res:any)=>{
          if(res.hasOwnProperty('error')){
            console.log('Error geolocation:', res.error);
            return this.geoError = 'Error finding your location';
          } else {
            console.log('here is the current location weather res:', res);
            this.weatherData = res;
            this.fTemp=Math.round(this.weatherData.main.temp)
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
      this.weatherData = res;
      this.cTemp= null;
      this.fTemp=Math.round(this.weatherData.main.temp)
    })
  }

  convertToCelsius() {
    console.log('C temp:', Math.round((this.weatherData.main.temp - 32) * 5/9));   
    this.cTemp= Math.round((this.weatherData.main.temp - 32) * 5/9);
    console.log(this.cTemp);
    
  }

  // convertToCelsius(temp:number) {
  //   console.log('C temp:', Math.round((temp - 32) * 5/9));   
  //   return Math.round((temp - 32) * 5/9);
  // }

  // roundTemp(temp:number) {
  //   console.log('F temp:', temp);    
  //   return Math.round(temp);
  // }
}