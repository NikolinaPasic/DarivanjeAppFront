/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Darivanje } from '../shared/models/darivanje.model';
import { DarivanjeService } from '../shared/services/darivanje.service';


@Component({
  selector: 'app-list-of-giveaways',
  templateUrl: './list-of-giveaways.page.html',
  styleUrls: ['./list-of-giveaways.page.scss'],
})
export class ListOfGiveawaysPage implements OnInit {
  public darivanja: Array<any> = [];

  constructor(private darivanjeService: DarivanjeService, private router: Router, activeRoute: ActivatedRoute) {
    this.darivanjeService.VratiNaCekanju()
        .subscribe(darivanja => {
          console.log(darivanja);
          this.darivanja = darivanja;
        });
  }

  ngOnInit() {
  }

  public Odobri(d: Darivanje): void {
    this.darivanjeService.OdobriDarivanje(d);

    this.router.navigate([this.router]);
  }

  reloadCurrentPage(){
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]);
    });
  }

}
