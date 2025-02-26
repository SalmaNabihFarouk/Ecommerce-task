import { CartService } from './../../shared/service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Whishlist } from './../../shared/interfaces/whishlist';

import { Component } from '@angular/core';
import { WhislistService } from 'src/app/service/whislist.service';
 

@Component({
  selector: 'app-whislist',
  templateUrl: './whislist.component.html',
  styleUrls: ['./whislist.component.css']
})
export class WhislistComponent {
  data:Whishlist[]=[];
  whishlist:string[]=[];
  c:any=undefined;
    constructor(private _WhislistService:WhislistService,private _ToastrService:ToastrService,private _CartService:CartService){
  
    }
  
  ngOnInit(): void {

   this._WhislistService.getwhislist().subscribe({
    next:(responce)=>{
  console.log(responce);
  this.data=responce.data;
  this.whishlist=responce.data.map((item:any)=> item.id)
  
    }
    
   })
    
  }
  
  
  
  
  addwhishlist(id:string){

    this._WhislistService.addtowhishlist(id).subscribe({
      next:(responce)=>{
  console.log(responce);
  this._ToastrService.success(responce.message)
  this.whishlist=responce.data
  
      }
    })
  }
  
  
  removefav(id:string){
 
    this._WhislistService.removewhislist(id).subscribe({
      next:(responce)=>{
  console.log(responce);
  this._ToastrService.success(responce.message);
  this.whishlist=responce.data
  this._WhislistService.heartnum.next(responce.data.length);
  let h=this.data.filter((item:any)=>this.whishlist.includes(item.id))
  this.data=h;
      }
    })
    // this._WhislistService.getwhislist().subscribe({
    //   next:(responce)=>{
    //     console.log(responce);
    //     this.data=responce.data;
    //   }
    // })
  
  
  }
  addtocart(id:any){
    this._CartService.add(id).subscribe({
      next:(responce)=>{
        console.log(responce);
        this._CartService.cartnumber.next(responce.numOfCartItems)
  console.log(responce.message);
  this._ToastrService.success(responce.message);
  
      }
    })
     }
}
