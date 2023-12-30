import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
 
  
    forgetPasswrod: FormGroup;
  
    ngOnInit(): void {
      this.forgetPasswrod = new FormGroup({
        email :new FormControl(null, [Validators.required,Validators.email]),
        oldPassword :new FormControl(null, Validators.required),
        password1:new FormControl(null, Validators.required),
        password2:new FormControl(null,[Validators.required])
      },
      {
        validators:this.passwordMatchValidator,
      });
  
    }
  
    passwordMatchValidator(control:AbstractControl){
      return control.get('password1')?.value === control.get('password2')?.value?null:{mismatch:true};
    }
  
  
    onSubmit(){
      console.log(this.forgetPasswrod)
    }
  
  
}
