/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Darivanje } from '../models/darivanje.model';

@Injectable({
  providedIn: 'root'
})
export class DarivanjeService {

  constructor(private http: HttpClient) { }

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

  public vratiAktivnoDarivanje(id: number): Observable<any> {
    return this.http.get<any>('https://localhost:44328/giveaway/' + id);
  }

  getGiveaways(id: number): Observable<any> {
    return this.http.get<any>('https://localhost:44328/finished-giveaways/'+ id);
  }
}
