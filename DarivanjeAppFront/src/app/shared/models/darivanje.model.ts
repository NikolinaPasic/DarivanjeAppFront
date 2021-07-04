import { Nagrada } from './nagrada.model';

/* eslint-disable @typescript-eslint/naming-convention */
export class Darivanje{
  DarivanjeId: number;
  Naziv: string;
  Opis: string;
  DatumOtvaranja: Date;
  DatumZatvaranja: Date;
  Nagrada: Nagrada;
  AdminId: number;
  InfluenserId: number;
}
