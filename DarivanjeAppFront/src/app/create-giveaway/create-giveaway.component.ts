import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-giveaway',
  templateUrl: './create-giveaway.component.html',
  styleUrls: ['./create-giveaway.component.scss'],
})
export class CreateGiveawayComponent  {

  constructor(private modalCtrl: ModalController) { }

  dismissModal(){
    this.modalCtrl.dismiss();
  }


}
