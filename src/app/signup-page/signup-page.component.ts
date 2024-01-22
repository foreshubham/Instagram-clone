import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

public signupForm !: FormGroup;
constructor (private formBuilder: FormBuilder, private http: HttpClient, private router: Router){ }

ngOnInit(): void {
  this.signupForm= this.formBuilder.group({
    fullname:[''],
    email:[''],
    password:[''],
    mobile:[''],
    username:['']
  })
}
signUp(){
this.http.post<any>("http://localhost:3000/user-signup",this.signupForm.value)
.subscribe(res=>{
  alert("Signup Successfull");
  this.signupForm.reset();
  this.router.navigate(['']);
},err=>{
  alert("something went wrong")
})
}
}
