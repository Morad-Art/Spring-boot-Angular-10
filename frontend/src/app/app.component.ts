import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { PersonComponent } from './components/person/person.component';
import { PersonService } from './services/person.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';


  constructor(public auth :PersonService){}


}
