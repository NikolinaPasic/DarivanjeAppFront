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
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    centeredSlides : true
  };

  constructor(private alertCtrl: AlertController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async GetURL() {
    const alert = this.alertCtrl.create({
      header: 'URL za deljenje',
      message: this.url,
      buttons: ['Copy']
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
