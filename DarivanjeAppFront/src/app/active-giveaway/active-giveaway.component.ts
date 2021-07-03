import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-active-giveaway',
  templateUrl: './active-giveaway.component.html',
  styleUrls: ['./active-giveaway.component.scss'],
})
export class ActiveGiveawayComponent {

  constructor(private modalCtrl: ModalController) { }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

}
