import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;
  
  constructor(private formBuilder: FormBuilder) { 
	this.registerForm = this.formBuilder.group({
		username: '',
		passwordd: '',
		cpasswordd: '',
	 });
  }

  ngOnInit(): void {
  }
  
  onRegister(user){
	  console.log(user);
  }

}
