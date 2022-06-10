import { AbstractControl, ValidationErrors } from "@angular/forms";

//CUSTOM VALIDATION
export class UsernameValidators {
   static  cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as String).indexOf(' ') >= 0)
            return {cannotContainSpace: true};
        
        return null;
    }
//ASYNCHRONOUS VALIDATOR
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(control.value === 'ante') 
                    resolve({shouldBeUnique:true}); 
                else resolve(null);
            }, 3000); 
        });
    }
} 