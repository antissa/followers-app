import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorsService } from '../authors/authors.service';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

/* REACTIVE FORMS */

export class SignupFormComponent {
  forma= new FormGroup({
    account: new FormGroup ({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
      ],  UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required) 
    })
   
  });

  login(){
    this.forma.setErrors({
      invalidLogin: true
    })
  }

  get korisnickoIme(){
    return this.forma.get('account.username');
  }
}