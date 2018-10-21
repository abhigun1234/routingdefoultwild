import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingdemonew';
  constructor(public router:Router)
  {

  }
  nevigateTodept()
  {
    this.router.navigate(['department'])
  }
  nevigateToEmpList()
  { 
    this.router.navigate(['emplist'])

  }
}
