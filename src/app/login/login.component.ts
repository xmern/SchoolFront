import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  reactiveForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.reactiveForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pin: ['', [Validators.required]],
    })

  }
  onSubmit(){
    alert(this.reactiveForm.get("pin")?.value)
  }

}
