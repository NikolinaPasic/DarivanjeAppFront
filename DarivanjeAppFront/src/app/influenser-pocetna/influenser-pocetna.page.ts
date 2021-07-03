/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CreateGiveawayComponent } from '../create-giveaway/create-giveaway.component';
@Component({
  selector: 'app-influenser-pocetna',
  templateUrl: './influenser-pocetna.page.html',
  styleUrls: ['./influenser-pocetna.page.scss']
})
export class InfluenserPocetnaPage implements OnInit {

  url = 'https://www.instagram.com/imfashionbabe/';
  naziv= 'Prvo darivanje';
  opis= 'Ovo je opis prvog darivanja. Jedan jako lep opis, koji ce, nadam se, preci u novi red. Hvala.';
  datumOtvaranja= '2021-01-01';
  datumZatvaranja= '2021-01-01';

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    centeredSlides : true
  };

  constructor(private alertCtrl: AlertController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async getURL() {
    const alert = this.alertCtrl.create({
      header: 'URL za deljenje',
      message: this.url,
      buttons: [
        {
          text: 'Kopiraj URL',
          handler: () => {
            navigator.clipboard.writeText(this.url).then().catch(e => console.error(e));
          }
        }
      ]
    });
    (await alert).present();
  }

  async getGiveawayInfo() {
    const alert = this.alertCtrl.create({
      header: 'Osnovne informacije',
      inputs:[
        {
          name: 'naziv',
          type: 'text',
          id: 'naziv',
          value: this.naziv,
          disabled: false
        },
        {
          name: 'opis',
          type: 'textarea',
          cssClass:'opis',
          id: 'opis',
          value:  this.opis,
          disabled: false
        },
        {
          name: 'datumOtvaranja',
          type: 'date',
          id: '',
          value: this.datumOtvaranja,
          disabled: false
        },
        {
          name: 'datumZatvaranja',
          type: 'date',
          id: '',
          value: this.datumZatvaranja,
          disabled: false
        }
      ],
      buttons: [
        {
          text: 'U redu'
        }
      ]
    });
    (await alert).present();
  }

  async openModal(){
    const modal=await this.modalCtrl.create({
        component:CreateGiveawayComponent
    });
    await modal.present();
  }

}
