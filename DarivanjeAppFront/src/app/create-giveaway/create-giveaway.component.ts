import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Darivanje } from '../shared/models/darivanje.model';
import { Nagrada } from '../shared/models/nagrada.model';
import { DarivanjeService } from '../shared/services/darivanje.service';

@Component({
  selector: 'app-create-giveaway',
  templateUrl: './create-giveaway.component.html',
  styleUrls: ['./create-giveaway.component.scss'],
})
export class CreateGiveawayComponent  {

  public darivanje: Darivanje= null;
  constructor(private modalCtrl: ModalController, private service: DarivanjeService) {
    this.darivanje=new Darivanje();
    this.darivanje.Nagrada= new Nagrada();
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }
  kreiraj(){
    this.darivanje.InfluenserId=2;
    this.service.kreiraj(this.darivanje);
    this.dismissModal();
  }
}
