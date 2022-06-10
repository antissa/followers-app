import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
   static oldPasswordMatch(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if(control.value !== '1234')
                resolve({oldPasswordMatch: true});
            else resolve(null);
        });
    }
}