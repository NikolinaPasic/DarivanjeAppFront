/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { DarivanjeService } from '../shared/services/darivanje.service';

@Component({
  selector: 'app-list-of-giveaways',
  templateUrl: './list-of-giveaways.page.html',
  styleUrls: ['./list-of-giveaways.page.scss'],
})
export class ListOfGiveawaysPage implements OnInit {
  public darivanja: any;

  constructor(private darivanjeService: DarivanjeService) {
    this.darivanjeService.VratiNaCekanju()
        .subscribe(darivanja => {
          console.log(darivanja);
        });
  }

  ngOnInit() {
  }

}
