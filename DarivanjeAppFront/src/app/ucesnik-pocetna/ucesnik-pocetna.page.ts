import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { EnterHistoryModalComponent } from '../enter-history-modal/enter-history-modal.component';
import { HistoryModalComponent } from '../history-modal/history-modal.component';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-ucesnik-pocetna',
  templateUrl: './ucesnik-pocetna.page.html',
  styleUrls: ['./ucesnik-pocetna.page.scss'],
})
export class UcesnikPocetnaPage implements OnInit {
  constructor(
    private alertCtrl: AlertController,
    private router: Router,
    private modalCtrl: ModalController,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  async enterUrl() {
    let link = null;
    const alert = await this.alertCtrl.create({
      header: 'Unesite url!',
      inputs: [
        {
          name: 'url',
          type: 'url',
        },
      ],
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            console.log(alertData.url);
            link = alertData.url.substring(22);
            this.router.navigate([link]);
          },
        },
      ],
    });
    await alert.present();
  }

  async openHistoryModal() {
    const modal = await this.modalCtrl.create({
      component: EnterHistoryModalComponent,
    });

    await modal.present();
  }

  public logout(): void {
    this.authService.logout().subscribe(
      (response) => {
        localStorage.removeItem('token');
        localStorage.removeItem('type');
        this.router.navigate(['login']);
      },
      (error) => {
        console.log(error.toString());
      }
    );
  }
}
