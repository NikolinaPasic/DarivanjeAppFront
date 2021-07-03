/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async GetURL() {
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

}
