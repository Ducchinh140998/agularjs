//
// import {Component} from "@angular/core";
// import {IWeather} from "../interfaces/weather.interfaces";
// import {HttpClient, HttpParams} from "@angular/common/http";
//
// @Component({
//   selector: "app-weather",
//   templateUrl:"./weather.component.html"
// })
//
// export class WeatherComponent{
//   //@ts-ignore
//   data :IWeather = null;
//
//   cityCode: string = 'hanoi'
//   constructor(private servies: WeatherServices) {
//   }
//
//   ngOnInit (){
//     this.getData('');
//   }
//
//   getData(city: string){
//     this.service.currentWeather(this.cityCode)
//       })
//       .subscribe( value=>{
//         this.data = value;
//       })
//   }
//
//   hanoi(){
//     this.cityCode = 'hanoi'
//     this.getData('');
//   }
//   london(){
//     this.cityCode = 'london'
//     this.getData('');
//   }
//   saigon(){
//     this.cityCode = 'saigon'
//     this.getData('');
//   }
// }
//
