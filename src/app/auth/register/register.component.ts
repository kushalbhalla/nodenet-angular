import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoading = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }

    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password; 
    
    let authObs: Observable<any>;
    this.isLoading = true;
    authObs = this.authService.signup(username, email, password);

    authObs.subscribe(
      resData => {
        this.isLoading = false;        
        this.router.navigate(['/auth/login'])
      }, err => {
        this.isLoading = false;
        console.log(err);
        
      }
    )
    form.reset();
  }

}
