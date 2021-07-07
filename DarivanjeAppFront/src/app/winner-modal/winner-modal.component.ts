import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Darivanje } from '../shared/models/darivanje.model';
import { Ucesnik } from '../shared/models/ucesnik.modal';
import { Ucestvovanje } from '../shared/models/ucestvovanje-model';
import { DarivanjeService } from '../shared/services/darivanje.service';

@Component({
  selector: 'app-winner-modal',
  templateUrl: './winner-modal.component.html',
  styleUrls: ['./winner-modal.component.scss'],
})

export class WinnerModalComponent implements OnInit {

  public aktivnoDarivanje: Darivanje  = new Darivanje();
  public brojPrijavljenih: number;
  public idDarivanja: number;
  public ucestvovanja: Array<any> = [];
  public pobednik: string =  null;

  constructor(private ctrl: ModalController, private darivanjeService: DarivanjeService, private activetedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.darivanjeService.vratiAktivnoDarivanje(2)
    .subscribe(
      (response) =>{
        this.aktivnoDarivanje = response;
        console.log(Number(this.aktivnoDarivanje.darivanjeId));

        this.darivanjeService.getNumberOfEnters(this.aktivnoDarivanje)
        .subscribe(
          (resp) =>{
            this.brojPrijavljenih = resp;
            console.log('Ovo je broj prijavljenih ' + this.brojPrijavljenih);

            this.darivanjeService.getEntries(this.aktivnoDarivanje)
            .subscribe(
              (resp2) =>{
                this.ucestvovanja = resp2;
                console.log(resp2);
              },
              (error) => {
                console.log(error.toString());
              }
            );
          },
          (error) => {
            console.log(error.toString());
          }
        );
      },
      (error) => {
        console.log(error.toString());
      }
    );
  }

  dismissModal(){
    this.ctrl.dismiss();
  }

  izaberiPobednika() {
    const niz: Array<any> = [];

    for(let i=1; i<=this.brojPrijavljenih; i++) {
      niz.push(i);
    }

    const random = niz[Math.floor(Math.random() * niz.length)];
    console.log(random);

    console.log(this.ucestvovanja[random]);
    this.pobednik = this.ucestvovanja[random].ucesnik.username;

    this.darivanjeService.closeGiveaway(this.aktivnoDarivanje)
    .subscribe(
      (resp) =>{
        //console.log(resp);
      },
      (error) => {
        console.log(error.toString());
      }
    );
  }


}
