package com.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonController {
	@Autowired
	PersonRepository repo;
	@Autowired
	UserRepository repoUser;
	
	
	
	@GetMapping("/person")
	public List<Person> getAllPerson(){
		
		
		return repo.findAll();
		
	}
	@GetMapping("/get/{id}")
	public Optional <Person> getPerson(@PathVariable long id){
		
		return repo.findById(id) ;
	}
	
	@PostMapping("/save")
	public void save(@RequestBody Person person) {
		
		repo.save(person);
	}
	
	
	@DeleteMapping("/del/{id}")
	public void deletePerson(@PathVariable long id) {
		
		repo.deleteById(id);
	}
	@PutMapping("/edit/{id}")
	public void editPerson(@PathVariable long id, @RequestBody Person person ) {
		
		person.setId(id);
		repo.save(person);
	}
	
	
	@GetMapping("/search/{motcle}")
	public List<Person> searchPerson(@PathVariable String motcle){
		
		return repo.findByName(motcle);
		
	}
	@PostMapping("/login")
	public User LoginUser(@RequestBody User user) throws Exception {
		String usernameTemp= user.getUsername();
		String passwordTemp=user.getPassword();
		User userObject=null;
		if(usernameTemp != null && passwordTemp !=null) {
			userObject = repoUser.findByUsernameAndPassword(usernameTemp, passwordTemp);
		}
		if(userObject==null) {
			throw new Exception("Pad Username or Password");
		}
		return userObject;
		
	}
       
}
