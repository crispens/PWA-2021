import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/sevices/base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {
  auth(obj : any) {
    this.setEndpoint('auth');
    return this.post(obj);
    
  }

}
