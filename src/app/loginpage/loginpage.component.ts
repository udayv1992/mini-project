import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginpageService } from '../loginpage.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  public loginpageForm:FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })

  constructor(private _loginService:LoginpageService, private _router:Router){}
  login(){
    console.log(this.loginpageForm);
    this._loginService.login(this.loginpageForm.value).subscribe(
      (data:any)=>{
        alert("Login Success");
        // go to dashboard
        // this._router.navigateByUrl("/dashboard");
        // store token
        sessionStorage.setItem('token',data.token);
      },
      (err:any)=>{
        alert("invalid credentials");
      }
    )
  }
}
