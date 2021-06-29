import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends BaseService {
  // extends servicio : Hereda todas las funciones del servicio ex: extends BaseService hereda todas las funciones de BaseService (get, setEndPonit, handlerError).
  
  getAll() {
    // para hacer mi get necesito mi endpoint
    this.setEndPoint('character');
    return this.get();
  }
  getSingle(id: number) {
    this.setEndPoint(`character/${id}`)
    return this.get();
  }
}
