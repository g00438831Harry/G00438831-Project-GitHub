import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonCard, IonCardContent, IonButton, IonLabel} from '@ionic/angular/standalone';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonButton, IonList, IonItem, IonLabel]
})
export class CountriesPage implements OnInit {

  countries: any = [];

  


  options: HttpOptions = {
    url: "https://restcountries.com/v3.1/all"
  }

  constructor(private mhs: MyHttpService) { }


async getCountries(){
  var result = await this.mhs.get(this.options)
  console.log(JSON.stringify(result))
  //this.countries = result;
 
}  

  

  ngOnInit() {
    this.getCountries();
  }

  
  

}
