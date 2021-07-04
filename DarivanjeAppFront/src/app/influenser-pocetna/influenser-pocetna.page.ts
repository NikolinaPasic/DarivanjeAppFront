/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { stringify } from 'querystring';
import { CreateGiveawayComponent } from '../create-giveaway/create-giveaway.component';
import { Darivanje } from '../shared/models/darivanje.model';
import { DarivanjeService } from '../shared/services/darivanje.service';


@Component({
  selector: 'app-influenser-pocetna',
  templateUrl: './influenser-pocetna.page.html',
  styleUrls: ['./influenser-pocetna.page.scss']
})
export class InfluenserPocetnaPage implements OnInit {

  url = 'https://www.instagram.com/imfashionbabe/';
  naziv= 'Prvo darivanje';
  opis= 'Ovo je opis prvog darivanja. Jedan jako lep opis, koji ce, nadam se, preci u novi red. Hvala.';
  aktivnoDarivanje: any;
  datumOtvaranja: any;
  datumZatvaranja: any;


  slideOpts = {
    initialSlide: 0,
    speed: 400,
    centeredSlides : true
  };

  constructor(private alertCtrl: AlertController, private modalCtrl: ModalController, private darivanjeService: DarivanjeService) {
    this.darivanjeService.vratiAktivnoDarivanje(1)
    .subscribe(
      (response) =>{
        this.aktivnoDarivanje = response;
        console.log(this.aktivnoDarivanje);
        this.datumOtvaranja = this.aktivnoDarivanje.datumOtvaranja.toString();
        this.datumZatvaranja = this.aktivnoDarivanje.datumZatvaranja.toString();
      },
      (error) => {
        console.log(error.toString());
      }
    );
  }

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
          value: this.aktivnoDarivanje.naziv,
          disabled: false
        },
        {
          name: 'opis',
          type: 'textarea',
          cssClass:'opis',
          id: 'opis',
          value:  this.aktivnoDarivanje.opis,
          disabled: false
        },
        {
          name: 'datumOtvaranja',
          type: 'text',
          id: '',
          value: this.datumOtvaranja,
          disabled: false
        },
        {
          name: 'datumZatvaranja',
          type: 'text',
          id: '',
          value:  this.datumZatvaranja,
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
