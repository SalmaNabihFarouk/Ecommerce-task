import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  erromes:string="";
  loading:boolean=false;
  registerform:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
    rePassword :new FormControl(null,[Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/),Validators.required]),
    phone :new FormControl('',[Validators.pattern(/^01[0125][0-9]{8}$/),Validators.required]),
  },{validators:[this.confirmrepassword]}as FormControlOptions);
  
  constructor(private _AuthService: AuthService,private _Router:Router){
   
  }
  
  handleform():void{
    if(this.registerform.valid){
      this.loading=true;
      console.log("hiiii")
  
      this._AuthService.setregister(this.registerform.value).subscribe({
        next:(responce)=>{
          
      console.log(responce);
  this._Router.navigate(["login"])
  
        }, 
      
        error:(err)=>{
          this.loading=true;
          console.log(err);
      // console.log(err.error.errors.msg);
   this.erromes=err.error.message;
  // this.erromes=err.error.errors.msg;
  
  
        }
      
       })
    }
  
   
  
   
  
  }
  
  
  confirmrepassword(form:FormGroup ){
  let password=form.get('password')
  let repassword=form.get('rePassword')
  
    if(repassword?.value==''){
      repassword?.setErrors({required:true})
    }
    else if(password?.value!=repassword?.value){
      repassword?.setErrors({mismatch:true})
    }
  
  
  
  }
}
