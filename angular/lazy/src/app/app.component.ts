import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeader: boolean = true;
  subcriptions: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    this.subcriptions = router.events.subscribe((event) => {
      // 3 instancias: NavigationStart, NavigationError, NavigationEnd

     /* if(event instanceof NavigationEnd){
        const showHeader : activatedRoute.snapshot.firstChild.data;
        console.log(showHeader);
        //this.showHeader = showHeader;
      }*/
    })
  }
}
