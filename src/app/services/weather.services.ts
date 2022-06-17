import {HttpClient, HttpParams} from "@angular/common/http";
import {IWeather} from "../interfaces/weather.interfaces";
import {HttpClient, HttpParams} from "@angular/common/h
    @injectable({
      providedIn: 'root'
    })
export class WeatherServices {
  constructor(private httpClient: HttpClient) {
  }

  currentWeather(city: string) {
    var parameters = new HttpParams();
    parameters = parameters.append('q', this.cityCode);
    parameters = parameters.append('appid', '09a71427c59d38d6a34f89b47d75975c');
    parameters = parameters.append('units', 'metric');
    return this.httpClient .get<IWeather>("https://api.openweathermap.org/data/2.5/weather",
      {
        params: parameters
      })
  }
  foreCast(cityCode: string){
    var parameters = new HttpParams();
    parameters = parameters.append('q', this.cityCode);
    parameters = parameters.append('appid', '09a71427c59d38d6a34f89b47d75975c');
    parameters = parameters.append('units', 'metric');
    return this.httpClient .get<IWeather>("https://api.openweathermap.org/data/2.5/forecast",
      {
        params: parameters
      })
  }

}
