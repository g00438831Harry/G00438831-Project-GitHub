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

//options: HttpOptions = {
//  url: "https://api.countrylayer.com/v2/all?access_key=c8e0e2f66dc542ab0946961f4dcc9fec"
//}
//"https://restcountries.com/v3.1/all"

//private mhs: MyHttpService, private mds: MyDataService,
  constructor(private navCtrl: NavController) {}

  
  
  


goToCountriesPage(){
  this.navCtrl.navigateForward('/countries');
}

  }

