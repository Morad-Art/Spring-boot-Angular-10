import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import {Person} from 'src/person';



@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  person :Person = new Person();


  constructor(private service :PersonService,  private router :Router) {

   }

  ngOnInit(): void {
    
  }

  save(){
    this.service.createPerson(this.person).subscribe(data=>{
      console.log(data);
      this.goToList();
    },
    error => console.log(error)); 
  }
  

  onSubmit(){
    console.log(this.person)
    this.save();
    
  }

  goToList(){
    this.router.navigate(["/home"]);
  }

}
