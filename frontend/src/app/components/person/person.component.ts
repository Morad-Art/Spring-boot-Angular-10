import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { PersonService } from 'src/app/services/person.service';
import {Person} from 'src/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  people:Person[];

  constructor(private personService:PersonService, private router :Router) { }

  ngOnInit(): void {
    this.personService.getAllPerson().subscribe(data=>this.people= data)
  }

  onDelete(id : number){
   this.personService.deletePerson(id).subscribe();
   this.router.navigate(["/home"]);

  }
  updatePerson(id : number){
  this.router.navigate(["edit",id])

  }

  

}
