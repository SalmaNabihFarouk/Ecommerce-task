 import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  erromes:string="";
  loading:boolean=false;
  registerform:FormGroup=new FormGroup({

    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
   
  })
  
  constructor(private _AuthService: AuthService,private _Router:Router){
   console.log(this.registerform);
  }
  
  handleform():void{
    if(this.registerform.valid){
      this.loading=true;
      console.log("hiiii")
  
      this._AuthService.setlogin(this.registerform.value).subscribe({
        next:(responce)=>{
          
      console.log(responce);
      this._Router.navigate(["home"])
      localStorage.setItem("usertoken",responce.token);
      this._AuthService.decodeUser();
      console.log("llll");

  
        },
      
        error:(err)=>{
          this.loading=true;
          console.log(err);
      console.log(err.error.message);
  this.erromes=err.error.message;
  
  
  
        }
      
       })
    }
  
   
  
   
  
  }

}
