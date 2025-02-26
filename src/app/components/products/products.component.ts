import { ToastrService } from 'ngx-toastr';
import { EcodataService } from 'src/app/shared/service/ecodata.service';
import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { WhislistService } from 'src/app/service/whislist.service';
import { category } from 'src/app/shared/interfaces/category';
import { product } from 'src/app/shared/interfaces/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  whishlist:string[]=[];
  pageSize:number=0;
  currentpage:number=0;
  total:number=0;
  productdata:product[]=[];
 categories:category[]=[];
 datainput:string=''
  constructor(private _EcodataService :EcodataService ,private _CartService :CartService,private _ToastrService:ToastrService,private _WhislistService:WhislistService){

  }

  ngOnInit():void{



    this. _EcodataService.getproduct().subscribe({
     next:(responce)=>
     {
       console.log(responce);
   
       this.productdata=responce.data;
       this.pageSize=responce.metadata.limit
       this.currentpage=responce.metadata.currentPage
       this.total=responce.results
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

   pageChanged(e:any):void{
   

   }
}
