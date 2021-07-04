import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DarivanjeService } from '../shared/services/darivanje.service';

@Component({
  selector: 'app-history-modal',
  templateUrl: './history-modal.component.html',
  styleUrls: ['./history-modal.component.scss'],
})
export class HistoryModalComponent  {

  public darivanja: Array<any> =  [];
  constructor(private modalCtrl: ModalController, private darivanjeService: DarivanjeService) {
    this.darivanjeService.getGiveaways(1)
      .subscribe(
        (response) => {
          this.darivanja = response;
          console.log(this.darivanja);
        },
        (error) => {
          console.log(error.toString());
        }
      );
   }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
