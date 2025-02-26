import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit{
  constructor(private _CartService:CartService) {
    console.log("cart");
  }
   cartdata:Products ={}as Products;
  
  
  ngOnInit(): void {
   this._CartService.getcart().subscribe({
    next:(responce)=>{
      console.log(responce)
      console.log(responce.data)
      this.cartdata=responce.data;
    }
   })
   
  }
  deletcart(id:string){
    this._CartService.delet(id).subscribe({
      next:(responce)=>{
  console.log(responce);
  this.cartdata=responce.data;
  this._CartService.cartnumber.next(responce.numOfCartItems);
      },
      error:(err)=>{
  console.log(err);
      }
       })
  }
  
  
  updatecount(id :string,count:number){
    if(count>=1){
      this._CartService.update(id,count).subscribe({
        next:(responce)=>{
      console.log(responce);
      this.cartdata=responce.data;
        },
        error:(responce)=>{
          console.log(responce);
        }
      })
    }
  
  }
  
  
  
  
    
  
}
