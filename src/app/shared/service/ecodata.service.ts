import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EcodataService {





  constructor( private _HttpClient:HttpClient) { 
    console.log("serrrrrr")
      }
    
    
    
      getproduct(pagenum:number=1):Observable<any>{
     
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${pagenum}`);
    
    
      }
    
      getdetails(id:string):Observable<any>{
     
        return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
        
        
          }
    
    getallcategories():Observable<any>{
      return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`);
    }
    
    
    
    
    getbrand():Observable<any>{
     
      return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands");
      
      
        }
}
