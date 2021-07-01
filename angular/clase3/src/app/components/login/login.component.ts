import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SwalService } from '../../sevices/swal.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formObject =  {
    usuario: new FormControl('', [
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

  constructor(private swal : SwalService) { }

  ngOnInit(): void {
    this.form = new FormGroup(this.formObject);
  }

  login(): void {
    console.log('%c apretaron login', 'color: green'); 
    // poniendo %c + el color  y me sale el console.log de ese color
    console.log(this.form);
    this.swal.normalMessage({html : 'FELICITACIONES'});
  }

  verifyInput(field: string): string {
    let message = '';
    const input = this.form.controls[field];
    input.status == 'INVALID' && input.touched ?
      message = `${field} es OBLIGATORIO`
      : null
    return message;  

  }

}