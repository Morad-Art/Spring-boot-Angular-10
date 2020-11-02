import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Person} from 'src/person';
import {User} from 'src/user'

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  isAuth=false;
  private loggedInState=false;

  editurl ="http://localhost:8088/api/edit";

  constructor(private httpClient:HttpClient) { }


  getAllPerson():Observable<Person[]>{

    return this.httpClient.get<Person[]>("http://localhost:8088/api/person")
  }
  deletePerson(id : number){

    return this.httpClient.delete("http://localhost:8088/api/del/"+id)

    
  }
  createPerson(person :Person):Observable<object>{

    return this.httpClient.post("http://localhost:8088/api/save",person)
  }

  getPersonbyId(id : number): Observable<Person>{
    return this.httpClient.get<Person>("http://localhost:8088/api/get/"+id)

  }

  update(id : number , person :Person ): Observable<object>{
   return this.httpClient.put(`${this.editurl}/${id}`,person);

  }
  searchPerson(motcle:string):Observable<Person[]>{

    return this.httpClient.get<Person[]>("http://localhost:8088/api/search/"+motcle)
  }

  loginUser(user: User): Observable<object>{
    return this.httpClient.post("http://localhost:8088/api/login",user);
    
  }
  setLoggedIn(value :boolean){
  this.loggedInState=value
  }
  get isLoggedIn(){
    return this.loggedInState
  }
  
}
