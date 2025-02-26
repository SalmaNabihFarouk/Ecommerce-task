import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartnumber:BehaviorSubject<number>=new BehaviorSubject(0)
useri:any;
  constructor( private _HttpClient:HttpClient,private _AuthService:AuthService) {
   }
 usertoken:any={
  token:localStorage.getItem('usertoken')
}

   add(productid:string):Observable<any>{
return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
{
  "productId": productid
},

{
  headers: this.usertoken
 
  
}
)
   }



getcart():Observable<any>{
 return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
    headers:this.usertoken
  })
}
// getorder():Observable<any>{
//   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/6407cf6f515bdcf347c09f17`)
 
//  }

delet(id:string):Observable<any>{
return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
  headers:this.usertoken
})
}
update(id:string,count:number):Observable<any>{
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
  
 
  {
    "count": count
}
,{
    headers:this.usertoken
    
  })


}

checkout(id:string,user:object):Observable<any>{
 return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=https://ecomerce-virid.vercel.app`,
 
 {
  "shippingAddress":user
    
}
 
 ,

 {
  headers:this.usertoken
 }
 
 )
}

getuserorder(id:any):Observable<any>{
//  this.useri= this._AuthService.userid.id
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
}



}
