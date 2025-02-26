import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userid:any;

  constructor(private _HttpClient:HttpClient) {

  }

setregister(userdata:object):Observable<any>
{
return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userdata);
}
setlogin(userdata:{}):Observable<any>{
 return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userdata);
}



decodeUser():void{
  const encode=localStorage.getItem('usertoken')
if(encode!=null){
  const decode=jwtDecode(encode)
  console.log(decode);
  this.userid=decode
  console.log(this.userid.id)
}
}
}
