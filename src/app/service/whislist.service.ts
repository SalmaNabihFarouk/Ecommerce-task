import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhislistService {

  heartnum:BehaviorSubject<number>=new BehaviorSubject(0)
  usertoken:any={
    token:localStorage.getItem('usertoken')
  }
  constructor(private _HttpClient:HttpClient) { 

  }

addtowhishlist(productid:string):Observable<any>{
 
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
    {
      "productId": productid
  },
  {
    headers:this.usertoken
  }

  )

   
}

getwhislist():Observable<any>{
 
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,

{
  headers:this.usertoken
}

)
}


removewhislist(id:string):Observable<any>{
  return this._HttpClient .delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
  
  {
    headers:this.usertoken
  }
  
  )
}
}
