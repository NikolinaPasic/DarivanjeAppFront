/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Darivanje } from '../models/darivanje.model';
import { Ucestvovanje } from '../models/ucestvovanje-model';

@Injectable({
  providedIn: 'root'
})
export class DarivanjeService {
  u: Ucestvovanje= new Ucestvovanje();

  constructor(private http: HttpClient, private router: Router) { }
  public PrijaviSe(id: number, arg1: number){
     this.u.DarivanjeId=id;
     console.log(this.u.DarivanjeId);
     this.u.UcesnikId=arg1;
    return this.http.post<any>('https://localhost:44328/enter',this.u)
    .subscribe(
      (response) => {
        console.log(response.toString());
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  public VratiNaCekanju(): Observable<any>{
    return this.http.get<any>('https://localhost:44328/giveaways');
  }

  public OdobriDarivanje(darivanje: Darivanje){
    return this.http.patch<any>('https://localhost:44328/approve-giveaway', darivanje)
    .subscribe(
      (response) => {
        //console.log(response.toString());
      },
      (error) => {
        console.log(error.toString());
      }
    );
  }

  OdbaciDarivanje(darivanje: Darivanje) {
    return this.http.patch<any>('https://localhost:44328/unapprove-giveaway', darivanje)
    .subscribe(
      (response) => {
        console.log(response.toString());
      },
      (error) => {
        console.log(error.toString());
      }
    );
  }
  public  kreiraj(darivanje: Darivanje){
    this.http.post<any>('https://localhost:44328/add-giveaway', darivanje)
    .subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
       {
        console.log(error);
       }
      }
    );
  }
  public vratiAktivnoDarivanje(id: number): Observable<any> {
    return this.http.get<any>('https://localhost:44328/active-giveaway/' + id);
  }

  getGiveaways(id: number): Observable<any> {
    return this.http.get<any>('https://localhost:44328/finished-giveaways/'+ id);
  }

}
