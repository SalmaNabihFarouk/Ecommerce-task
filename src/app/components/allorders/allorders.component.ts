import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/shared/service/auth.service';
import { CartService } from 'src/app/shared/service/cart.service';
@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {
// userid:any;
//   constructor(private _HttpClient:HttpClient,private _CartService: CartService,private _AuthService:AuthService){

//   }
// ngOnInit(): void {
//   this._AuthService.decodeUser();
//   // this.userid=this._AuthService.userid.id
//   this._CartService.getuserorder().subscribe({
//     next:(r)=>{
//       console.log(r);
//     }
//   })
// }
constructor(
  private _CartService:CartService,
  private _HttpClient:HttpClient,
  private _AuthService:AuthService
  ){}

  userId:string=''
  allOrders:any[]=[]


  

  ngOnInit(): void {
    this._AuthService.decodeUser()
    this.userId=this._AuthService.userid.id
    this._CartService.getuserorder(this.userId).subscribe({
      next:(response)=>{
        
        this.allOrders=response
      },
  
    })
  
    
    // this._CartService.getUserCart().subscribe({
    //   next:(response)=>{
    //     this._CartService.countProductsInCart.next(response. numOfCartItems)
      
    //   }
     
    // })
    // this._WishListService.getwhislist().subscribe({
    //   next:(response)=>{
    //     this._WishListService.countOfProductsInWishlist.next(response.count)
        
      
    //   },
    
    // })
  }
}
