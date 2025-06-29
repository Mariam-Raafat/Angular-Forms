import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,Validators,FormGroup,FormControl, AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss'
})
export class RegisterPage implements OnInit{
myForm!:FormGroup;
ngOnInit(): void {
  this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)]),
      uname: new FormControl('',[Validators.required,Validators.pattern(/^\S+$/)]),
      password: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)]),
      confirmPassword: new FormControl ('',[Validators.required])
    },
  {validators:this.passwordMatch});
}

passwordMatch(form:AbstractControl):ValidationErrors|null{
const password = form.get('password')?.value;
const confirmPassword = form.get('confirmPassword')?.value;
if (password !== confirmPassword) {
    return { passwordsMismatch: true };
  }
  return null;
}

onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
