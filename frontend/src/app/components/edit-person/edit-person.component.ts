import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/person';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  id : number;
  person : Person = new Person();

  constructor(private service :PersonService, private route :ActivatedRoute, private router :Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getPersonbyId(this.id).subscribe(data=>{
      this.person=data;
    },error => console.log(error))
  }

  onUpdate(){

    this.service.update(this.id,this.person).subscribe(data=>{
    this.router.navigate(["/home"])
    }, error => console.log(error))
  }

}
