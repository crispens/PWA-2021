import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalService } from '../../../../sevices/swal.service';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loaded = false;
  formObject =  {
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    pass: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20)

    ]),
  }
  form: FormGroup = new FormGroup(this.formObject);

  constructor(private swal : SwalService, private router: Router, private service: LoginService) { }

  ngOnInit(): void {
    this.form = new FormGroup(this.formObject);
    setTimeout(() => this.loaded = true, 500)
  }

  async login() {
    try {
    console.log('%c apretaron login', 'color: green'); 
    // poniendo %c + el color  y me sale el console.log de ese color
    console.log(this.form);
    const result : any = await this.service.auth(this.form.value);
    const {JWT, info} = result;


    localStorage.setItem('JWT', JWT);
    localStorage.setItem('user', JSON.stringify(info));
    this.swal.normalMessage({ html: 'FELICITACIONES', timer: 3000});
    this.router.navigate(['registro']);
    }
    catch (e) {
      this.swal.normalMessage({ html: 'Usuario o password incorrecto', icon: 'error', timer: 3000});
    }
  }

  verifyInput(field: string) {
    let message = '';
    const input = this.form.controls[field];
    input.status == 'INVALID' && input.touched ?
      message = `${field} es OBLIGATORIO`
      : null
    return message;  

  }

}