/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarivanjeService {

  constructor(private http: HttpClient) { }

  public VratiNaCekanju(): Observable<any>{
    return this.http.get<any>('http://localhost/giveaways');
  }
}
