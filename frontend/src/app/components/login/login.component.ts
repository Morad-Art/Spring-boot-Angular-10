import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { User } from 'src/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username :string;
  password : string;
  user : User = new User();
  msg="";

  constructor( private service :PersonService, private router: Router) { }

  ngOnInit(): void {
  }

onLogin(){
this.service.loginUser(this.user).subscribe( data =>{
  
  this.router.navigate(["/home"]);
  this.service.setLoggedIn(true)
  
},
error => {
  console.log("execption occured");
  this.msg=("Incorrect User Name or Password")
}

)
}
}
