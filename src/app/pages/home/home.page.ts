import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonAvatar, IonLabel, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonIcon, IonButton, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { hourglassOutline, add } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, IonButton, IonIcon, IonCardContent, IonCardSubtitle, IonCard, IonLabel, IonAvatar, IonItem, IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, IonCardHeader]
})
export class HomePage implements OnInit {

  constructor() { 
    addIcons({hourglassOutline,add});
  }

  ngOnInit() {
  }

}
