import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader,  
  IonTitle, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonContent, 
  IonLabel, 
  IonInput, 
  IonItem,
  //IonList,
  IonToolbar
} from '@ionic/angular/standalone';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
import { MyDataService } from '../services/my-data.service';
import { NavController } from '@ionic/angular'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonLabel,
    IonInput,
    IonItem,
   // IonList,
    IonToolbar,
    CommonModule
], 
})
export class HomePage {

options: HttpOptions = {
  url: "https://api.countrylayer.com/v2/all?access_key=c8e0e2f66dc542ab0946961f4dcc9fec"
}
//"https://restcountries.com/v3.1/all"
  constructor(private mhs: MyHttpService, private mds: MyDataService, private navCtrl: NavController) {}

  countries:any = [];
  
  async getCountries(){
    var result = await this.mhs.get(this.options)
    this.countries = result.data;
    console.log(this.countries)
  }  


goToCountriesPage(){
  this.navCtrl.navigateForward('/countries');
}

  }

