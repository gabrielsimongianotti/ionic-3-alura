
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Agendamento } from '../../modelos/agendamento';

/*
  Generated class for the AgendamentosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgendamentosServiceProvider {
  private _url ="http://localhost:8080/api";


  constructor(public _http: HttpClient) {
    console.log('Hello AgendamentosServiceProvider Provider');
  }
  agenda(agendamento: Agendamento){
   return this._http
              .post(this._url+'/agendamento/agenda',agendamento)
              .do(() => agendamento.enviado = true)
              .catch((err) => Observable.of(new Error('Erro')));
  }

}
