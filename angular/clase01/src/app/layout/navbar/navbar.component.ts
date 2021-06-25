import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links: Array<{id: number, link: string, title: string}> = [
    {
      id: 1,
      link: '/home',
      title: 'HOME'
    },
    {
      id: 2,
      link: '/user',
      title: 'USER'
    }
  ]
  constructor() {
    console.log("Lo primero q se ejecuta, pero se ejecuta solamente una vez")
   }

  ngOnInit(): void {
    //aca se hacen peticiones http y maneja el ciclo de vida de un componente, tambien tenesmos (ngOnDestroy y ngOnUpdate)
    // se ejecuta despues del constructor
  }

}
