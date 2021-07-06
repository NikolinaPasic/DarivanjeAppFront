/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/member-ordering */
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
  public signal: boolean = false;
  public konkretnoDarivanje: Darivanje = new Darivanje();
  public ucestvovanja: Array<any> = [];

  constructor(private darivanjeService: DarivanjeService, private activeRoute: ActivatedRoute) {
    const stringId=window.location.pathname.substring(10);
    console.log(window.location.pathname);
    this.id=Number(stringId);
    console.log(this.id);
  }

  ngOnInit() {
    this.darivanjeService.getGiveaway(this.id)
    .subscribe(
      (response)=>{
        this.konkretnoDarivanje = response;
        console.log(response);

        this.darivanjeService.getEntries(this.id)
          .subscribe(
            (res)=>{
              this.ucestvovanja = res;
              console.log(res);
            },
            (error)=>{
            {
              console.log(error);
            }
            }
          );
      },
      (error)=>{
       {
        console.log(error);
       }
      }
    );

    this.ucestvovanja.forEach(u => {
      console.log(u.ucesnikId);
      if (u.UcesnikId === 1002){
        this.signal = true;
      }
    });
    console.log(this.signal);
  }
  enterGiveaway(){
   this.darivanjeService.PrijaviSe(this.id,1002).subscribe(
    (response) => {
      console.log(response.toString());
      this.signal = true;
    },
    (error) => {
      this.signal = true;
    }
    );
  }

  likeGiveaway(){
    this.darivanjeService.LikeGiveaway(this.id,1002);
  }

}
