import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '../public/validators/password.validators';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
   forma = new FormGroup({
    oldPassword: new FormControl('', Validators.required, PasswordValidators.oldPasswordMatch),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  })

  get newPassword():AbstractControl{
    return this.forma.controls['newPassword'];
  }

  get confirmPassword():AbstractControl{
    return this.forma.controls['confirmPassword'];
  }

  passwordMatch(){
    if(this.newPassword.value == this.confirmPassword.value){
      this.confirmPassword.setErrors(null);
    } else {
      this.confirmPassword.setErrors({mismatch:true});
    }
  }
}
