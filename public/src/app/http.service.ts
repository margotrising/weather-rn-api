import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCurrentWeather(pos:any){
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=imperial&appid=bac845945026ea07d0dc88c50c28e358`)
  }
  searchNewCity(city:string){
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=bac845945026ea07d0dc88c50c28e358`)
  }
}
