/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParsedEvent } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Darivanje } from '../models/darivanje.model';
import { Ucestvovanje } from '../models/ucestvovanje-model';

@Injectable({
  providedIn: 'root',
})
export class DarivanjeService {
  u: Ucestvovanje = new Ucestvovanje();
  aktivnoDarivanje: Darivanje = new Darivanje();
  _darivanjaNaCekanju = new BehaviorSubject<Darivanje[]>([]);

  constructor(private http: HttpClient, private router: Router) {}

  LikeGiveaway(id: number, arg1: number) {
    console.log(this.u.DarivanjeId);
    this.u.UcesnikId = arg1;
    return this.http
      .post<any>('https://localhost:44328/like-giveaway', this.u, {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer ' + localStorage.getItem('token')
        ),
      })
      .subscribe(
        (response) => {
          console.log(response.toString());
        },
        (error) => {
          console.log(error.message);
        }
      );
  }

  public PrijaviSe(id: number, arg1: number): Observable<any> {
    this.u.DarivanjeId = id;
    console.log(this.u.DarivanjeId);
    this.u.UcesnikId = arg1;
    return this.http.post<any>('https://localhost:44328/enter', this.u, {
      headers: new HttpHeaders().set(
        'Authorization',
        'Bearer ' + localStorage.getItem('token')
      ),
    });
  }

  public VratiNaCekanju(): Observable<any> {
    return this.http.get<any>('https://localhost:44328/giveaways');
  }

  public OdobriDarivanje(darivanje: Darivanje) {
    return this.http
      .patch<any>('https://localhost:44328/approve-giveaway', darivanje)
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
    return this.http
      .patch<any>('https://localhost:44328/unapprove-giveaway', darivanje)
      .subscribe(
        (response) => {
          console.log(response.toString());
        },
        (error) => {
          console.log(error.toString());
        }
      );
  }

  public kreiraj(darivanje: Darivanje) {
    this.http
      .post<any>('https://localhost:44328/add-giveaway', darivanje, {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer ' + localStorage.getItem('token')
        ),
      })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          {
            console.log(error);
          }
        }
      );
  }

  public vratiAktivnoDarivanje(id: number): Observable<any> {
    return this.http.get<any>('https://localhost:44328/active-giveaway/' + id, {
      headers: new HttpHeaders().set(
        'Authorization',
        'Bearer ' + localStorage.getItem('token')
      ),
    });
  }

  getGiveaways(id: number): Observable<any> {
    return this.http.get<any>(
      'https://localhost:44328/finished-giveaways/' + id,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer ' + localStorage.getItem('token')
        ),
      }
    );
  }

  getGiveaway(darivanjeId: number): Observable<any> {
    return this.http.get<any>(
      'https://localhost:44328/get-giveaway/' + darivanjeId,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer ' + localStorage.getItem('token')
        ),
      }
    );
  }

  getEntries(d: Darivanje) {
    return this.http.post<any>('https://localhost:44328/enters', d, {
      headers: new HttpHeaders().set(
        'Authorization',
        'Bearer ' + localStorage.getItem('token')
      ),
    });
  }
  getEnteredGiveawaysByUser(id: number): Observable<any> {
    return this.http.get<any>(
      'https://localhost:44328/entered-giveaway/' + id,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer ' + localStorage.getItem('token')
        ),
      }
    );
  }

  getNumberOfEnters(d: Darivanje): Observable<any> {
    return this.http.post<any>('https://localhost:44328/number-of-enters', d, {
      headers: new HttpHeaders().set(
        'Authorization',
        'Bearer ' + localStorage.getItem('token')
      ),
    });
  }

  closeGiveaway(aktivnoDarivanje: Darivanje): Observable<any> {
    return this.http.patch<any>(
      'https://localhost:44328/close-giveaway',
      aktivnoDarivanje,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer ' + localStorage.getItem('token')
        ),
      }
    );
  }
}
