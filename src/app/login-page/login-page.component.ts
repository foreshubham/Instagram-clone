import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; // Import OnInit
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Import Validators
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit { // Implement OnInit

  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void { // Correct the lifecycle hook name
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required], // Add Validators.required for validation
      username: [''],
      password: ['', Validators.required] // Add Validators.required for validation
    });
  }

  login() {
    this.http.get<any>('http://localhost:3000/user-signup').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert('Login success');
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        } else {
          alert('User not found');
        }
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }
}
