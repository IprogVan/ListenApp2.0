import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the Proveedor1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Proveedor1Provider {

  constructor(public http: HttpClient) {
    
  }

  ObtenerDatos(){
    return this.http.get<JSON>('https://cors-anywhere.herokuapp.com/https://pmulivan.000webhostapp.com/ListaCancionesDef');
    
  }

}
