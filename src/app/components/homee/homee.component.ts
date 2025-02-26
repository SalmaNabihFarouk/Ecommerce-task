import { WhislistService } from './../../service/whislist.service';


import { Component, OnInit } from '@angular/core';
import { EcodataService } from 'src/app/shared/service/ecodata.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { category } from 'src/app/shared/interfaces/category';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-homee',
  templateUrl: './homee.component.html',
  styleUrls: ['./homee.component.css']
})
export class HomeeComponent  implements OnInit{
  whishlist:string[]=[];

  slider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
 items:1,
    nav: false,
    autoplay:true
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    
    },
    nav: false,
    autoplay:true
  }
constructor(private _EcodataService :EcodataService ,private _CartService :CartService,private _ToastrService:ToastrService,private _WhislistService:WhislistService,private _AuthService:AuthService){

}
productdata:any[]=[];
categories:category[]=[];
datainput:string=''

ngOnInit():void{
this._AuthService.decodeUser();


 this. _EcodataService.getproduct().subscribe({
  next:(responce)=>
  {
    console.log(responce);

    this.productdata=responce.data;
  }
 })


 this._EcodataService.getallcategories().subscribe({
  next:(responce)=>{
   this.categories= responce.data;
  }
 })
this._WhislistService.getwhislist().subscribe({
  next:(responce)=>{
console.log(responce);
this.whishlist=responce.data.map((item:any)=> item.id)
  }
})

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

addwhishlist(id:string){
  this._WhislistService.addtowhishlist(id).subscribe({
    next:(responce)=>{
console.log(responce);
this._ToastrService.success(responce.message)
this.whishlist=responce.data
console.log(responce.data.length);
this._WhislistService.heartnum.next(responce.data.length);
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

    }
  })


}
}
