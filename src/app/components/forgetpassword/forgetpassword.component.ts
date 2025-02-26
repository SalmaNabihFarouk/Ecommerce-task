import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetpasswordService } from 'src/app/service/forgetpassword.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  alert:string='';

  constructor(private _ForgetpasswordService:ForgetpasswordService,private _Router:Router){

  }
  useremail:string='';
step1:boolean=true;

step2:boolean=false;
step3:boolean=false;

  forgetform:FormGroup=new FormGroup({
  
    email:new FormControl('',[Validators.required,Validators.email]),
  
  })


  
  resetcode:FormGroup=new FormGroup({
  
    resetCode:new FormControl('',[Validators.required]),
  
  })

  resetpassword:FormGroup=new FormGroup({

    newPassword:new FormControl('',[Validators.required]),
  
  })


  handleforget(){
    
    let forgetpass=this.forgetform.value
    this.useremail=this.forgetform.value.email
this._ForgetpasswordService.forgetpassword(forgetpass).subscribe({

  next:(responce)=>{
console.log(responce);
this.step1=false;
this.step2=true;
this.alert=responce.message
  },
  error:(error)=>{
console.log(error);
this.alert=error.error.message
  }
})
  }

  handleresetcode(){

    let resetcode=this.resetcode.value

this._ForgetpasswordService.resetcode(resetcode).subscribe({

  next:(responce)=>{
console.log(responce);
this.step2=false;
this.step3=true;
this.alert=responce.status;

  },
  error:(error)=>{
console.log(error);
this.alert=error.error.message
  }
})
  }



  handlenewpassword(){

    let newpass=this.resetpassword.value
newpass.email=this.useremail;
this._ForgetpasswordService.newpass(newpass).subscribe({

  next:(responce)=>{
console.log(responce);
localStorage.setItem('usertoken',responce.token);
this._Router.navigate(['home'])

  },
  error:(error)=>{
console.log(error);
this.alert=error.error.message
  }
})
  }

}
