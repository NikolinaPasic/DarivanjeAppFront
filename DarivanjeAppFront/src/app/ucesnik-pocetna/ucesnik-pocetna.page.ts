import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ucesnik-pocetna',
  templateUrl: './ucesnik-pocetna.page.html',
  styleUrls: ['./ucesnik-pocetna.page.scss'],
})
export class UcesnikPocetnaPage implements OnInit {

  constructor(private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
  }

  /*  async enterURL(){
      const alert = this.alertCtrl.create({
        header: 'Unesite URL darivanja',
        inputs:[
          {
            name: 'url',
            type: 'text',
            id: 'url'
          }
        ],
        buttons: [
          {
            text: 'Pretraži',
         //   handler: () => {
           //   navigator.clipboard.writeText(this.url).then().catch(e => console.error(e));
            //}
          }
        ]
      });
      (await alert).present();

  } */
  async enterUrl() {
    let link =null;
    const alert = await this.alertCtrl.create({
      header: 'Unesite url!',
      inputs: [
        {
          name: 'url',
          type: 'url'
        }
      ],
      buttons: [
         {
          text: 'Ok',
          handler: (alertData) => {
            console.log(alertData.url);
            link=alertData.url.substring(22);
            this.router.navigate([link]);
          }
        }
      ]
    });
    await alert.present();
  }

}
