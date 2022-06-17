import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {Assignment1Component} from "./assignment1/assignment1.component";
import {NgModule} from "@angular/core";

// const appRoutes: Routes = [
//   {
//     path: '', component: ClassroomComponent
//   },
//   {
//     path: 'san-pham', component: ProductsComponent
//   },
//   {
//     path: 'thoi-tiet', component: WeatherComponent
//   }
// ];
@NgModule({
  declarations: [
    // AppComponent,
    // StudentComponent,
    // ClassroomComponent,
    // ProductsComponent,
    // WeatherComponent,
    Assignment1Component
  ],
  imports: [
    //BrowserModule,
    HttpClientModule,
    FormsModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
