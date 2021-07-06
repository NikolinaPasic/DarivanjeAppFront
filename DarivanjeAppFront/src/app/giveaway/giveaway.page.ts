import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Darivanje } from '../shared/models/darivanje.model';
import { DarivanjeService } from '../shared/services/darivanje.service';

@Component({
  selector: 'app-giveaway',
  templateUrl: './giveaway.page.html',
  styleUrls: ['./giveaway.page.scss'],
})
export class GiveawayPage implements OnInit {
  private darivanje: Darivanje= new Darivanje();
  private id: number;
  constructor(private darivanjeService: DarivanjeService, private activeRoute: ActivatedRoute) {
    const stringId=window.location.pathname.substring(10);
    console.log(window.location.pathname);
    this.id=Number(stringId);
    console.log(this.id);
   }

  ngOnInit() {
  }
  enterGiveaway(){
    this.darivanjeService.PrijaviSe(this.id,1002);
  }

}
