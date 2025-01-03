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
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular'
import { MyDataService } from '../services/my-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
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
    CommonModule,
    FormsModule
], 
})
export class HomePage {

countryName: string = ""

constructor(private router: Router, private mds:MyDataService){}

async goToCountryName(){
  await this.mds.set("countryName", this.countryName);
  this.router.navigate(['/countries'])
}

  }

