import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { LoginRequestDto } from '../interfaces/login-request';
import { HttpGatewayServiceService } from '../Http/http-gateway-service.service';
import { LoginResponseDto } from '../interfaces/login-response';
import { JwtDecoderService } from '../Auth/jwt-decoder.service';
import { User } from '../interfaces/User';
import { DecodedLoginJwt } from '../interfaces/login-jwtDecoded';
import { AuthServiceService } from '../Auth/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  reactiveForm: FormGroup;
  constructor(private fb: FormBuilder, private httpGateway: HttpGatewayServiceService, private jwtbreaker : JwtDecoderService, private authService : AuthServiceService){
    this.reactiveForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })

  }
  onSubmit(){
    let data:LoginRequestDto = {email:this.reactiveForm.get("email")?.value,password:this.reactiveForm.get("password")?.value.toString()};
    console.log(data);
    
    this.httpGateway.post<LoginResponseDto>("Account/login", data).subscribe({
      next: (response) => {
        
        let responseData = response
        let decoded:any = this.jwtbreaker.decodeJwt(responseData.token.result)
        let userData:User = { 
          email:decoded.email,
          role:decoded.role,
          jwt:responseData.token.result

        }
        console.log('Login success:', userData)// this.jwtbreaker.decodeJwt(responseData.token.result));
        this.authService.login(userData)
        
      },
      error: (error) => {
        console.error('Login failed:', error);
        // 👉 Handle error, maybe show an error message to the user
      },
    });
  }

}
