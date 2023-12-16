import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name:new FormControl(null, Validators.required),
      mobile:new FormControl(null, Validators.required),
      email:new FormControl(null, [Validators.required, Validators.email]),
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
    console.log(this.registerForm)
  }
}
