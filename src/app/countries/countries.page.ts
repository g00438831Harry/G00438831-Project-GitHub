import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButton, IonCardHeader,IonCardTitle} from '@ionic/angular/standalone';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonButton, IonCardHeader, IonCardTitle]
})
export class CountriesPage implements OnInit {

  countries: any = [];

  countryName: string = ""
  countryInfo!:any;
  options: HttpOptions = {
    url: "https://restcountries.com/v3.1/name/"
  }

  constructor(private mhs: MyHttpService, private mds:MyDataService) { }


async getCountries(){
  var result = await this.mhs.get(this.options)
  console.log(result)
  //this.countries = result;
 
}  

  

  ngOnInit() {
    this.getCountryName();
  }

async getCountryName(){
 this.countryName = await this.mds.get('countryName');
 this.options.url = this.options.url.concat(this.countryName)
 let result = await this.mhs.get(this.options)
 this.countryInfo = result.data;
 console.log(this.countryInfo)
 
}
  
  

}
