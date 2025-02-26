import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {


  constructor( private _HttpClient:HttpClient) {



  }

  forgetpassword(user:object):Observable<any>{
return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,user)
  }



  
  resetcode(user:object):Observable<any>{
   return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,user)
     }



     newpass(user:object):Observable<any>{
       return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,user)
     }
}
