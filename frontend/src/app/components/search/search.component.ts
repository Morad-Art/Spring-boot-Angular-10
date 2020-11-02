import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import {Person} from 'src/person'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  motcle:string;
  people:Person[];

  constructor(private service : PersonService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.motcle=this.route.snapshot.params['motcle'];
    this.service.searchPerson(this.motcle).subscribe(data=>this.people=data)

  }


}
