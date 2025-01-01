import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonContent, 
  IonLabel, 
  IonInput, 
  IonItem 
} from '@ionic/angular/standalone';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';

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
], 
})
export class HomePage {

options: HttpOptions = {
  url: "https://jsonblob.com/api/1314301160240373760"
}

  constructor(private mhs: MyHttpService) {}

  ngOnInit(){
    this.getCountries();
  }
  async getCountries(){
  let result = await this.mhs.get(this.options);
   console.log(result);
  }
    
  }

