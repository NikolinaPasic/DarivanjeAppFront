/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Darivanje } from '../shared/models/darivanje.model';
import { DarivanjeService } from '../shared/services/darivanje.service';


@Component({
  selector: 'app-list-of-giveaways',
  templateUrl: './list-of-giveaways.page.html',
  styleUrls: ['./list-of-giveaways.page.scss'],
})
export class ListOfGiveawaysPage implements OnInit {
   darivanja: Array<any>  = [];

  constructor(private darivanjeService: DarivanjeService, private router: Router, activeRoute: ActivatedRoute) {
  }

  ionViewWillEnter(){
    this.darivanjeService.VratiNaCekanju().
    pipe(
      map((response)=>{
        console.log(response);

        this.darivanja=response;
      })).subscribe();
  }
  ngOnInit() {
  }

  approveGivaway(d: Darivanje): void {
    d.AdminId = Number(localStorage.getItem('adminid'));
    this.darivanjeService.OdobriDarivanje(d);
    this.darivanjeService.VratiNaCekanju().
    pipe(
      map((response)=>{
        console.log(response);

        this.darivanja=response;
      })).subscribe();

  }

  notApproveGiveaway(d: Darivanje): void{
    d.AdminId = Number(localStorage.getItem('adminid'));
    this.darivanjeService.OdbaciDarivanje(d);
    this.darivanjeService.VratiNaCekanju().
    pipe(
      map((response)=>{
        console.log(response);

        this.darivanja=response;
      })).subscribe();
  }



}
