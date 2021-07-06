import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DarivanjeService } from '../shared/services/darivanje.service';

@Component({
  selector: 'app-enter-history-modal',
  templateUrl: './enter-history-modal.component.html',
  styleUrls: ['./enter-history-modal.component.scss'],
})
export class EnterHistoryModalComponent implements OnInit {

  public darivanjaUcesnika: Array<any> = [];

  constructor(private modalCtrl: ModalController, private darivanjeService: DarivanjeService) { }

  ngOnInit() {
    this.darivanjeService.getEnteredGiveawaysByUser(1002)
    .subscribe(
      (response)=>{
        console.log(response);
        this.darivanjaUcesnika = response;
      },
      (error)=>{
       {
        console.log(error);
       }
      }
    );
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
