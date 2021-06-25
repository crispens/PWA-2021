import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase01';
  mensajeSecreto: string = '';
  nombre: string = "Jon";
  apellido: string = "Gibaut";
  edad: number = 19;
  lenguajes: Array<string> = ['TS', 'JS'];
  empleados: Array<{id: number, nombre?: string, sueldo: number, antiguedad: number}> = [
    //cuando pongo un OBJETO y luego ?  quiere decir q es opcional (en este caso nombre es opcional)
    { 
      id: 1,
      nombre: 'Jon',
      sueldo: 10000,
      antiguedad: 5
    },
    { 
      id: 2, 
      nombre: 'Messi', 
      sueldo: 30000,
      antiguedad: 3
    },
    {
      id: 3,
      nombre: 'Fulanito',
      sueldo: 10000,
      antiguedad: 2
    }
  ];

  usuarios: Array<{
    id: number, 
    nombre: string, 
    apellido: string, 
    edad: number, 
    mail: string, 
    pass: string}> = [
    {
      id: 1,
      nombre: 'Jon',
      apellido: 'Gibaut',
      edad: 19,
      mail: 'jongibaut@gmail.com',
      pass: '1234'
    },
    {
      id: 2,
      nombre: 'Daniel',
      apellido: 'Crispens',
      edad: 29,
      mail: 'dani@gmail.com',
      pass: '1234'
    },
    {
      id: 3,
      nombre: 'Alejandro',
      apellido: 'Crispens',
      edad: 54,
      mail: 'alejandro@gmail.com',
      pass: '1234'
    },
    {
      id: 4,
      nombre: 'Maricel Guadalupe',
      apellido: 'Rocca',
      edad: 54,
      mail: 'maricel@gmail.com',
      pass: '1234'
    },
    {
      id: 5,
      nombre: 'Leonardo',
      apellido: 'Cristalli',
      edad: 35,
      mail: 'leo@gmail.com',
      pass: '1234'
    },  
    {
      id: 6,
      nombre: 'Emiliano',
      apellido: 'Crispens',
      edad: 33,
      mail: 'emilianot@gmail.com',
      pass: '1234'
    },
    {
      id: 7,
      nombre: 'Romina',
      apellido: 'Crispens',
      edad: 27,
      mail: 'romina@gmail.com',
      pass: '1234'
    },
    {
      id: 8,
      nombre: 'Morena',
      apellido: 'Crispens',
      edad: 11,
      mail: 'morena@gmail.com',
      pass: '1234'
    },
    {
      id: 9,
      nombre: 'Faustina',
      apellido: 'Crispens',
      edad: 3,
      mail: 'fauti@gmail.com',
      pass: '1234'
    },

  ];



Input(e:any) : void {
    console.log(e);
    const {value, name} = e.target;
    console.log(`el valor de ${name} es: ${value}`);
  }
clickeado() : void {
    console.log('boton apretado');
    this.mensajeSecreto = "descubriste el secreto";
  }

}
