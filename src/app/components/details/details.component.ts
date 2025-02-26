import { ToastrService } from 'ngx-toastr';
import { EcodataService } from 'src/app/shared/service/ecodata.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  u={n:"kkkkkn"};
  iddata:string='';
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
  data:any={};
constructor(private _ActivatedRoute:ActivatedRoute,private _EcodataService:EcodataService,private _CartService:CartService,private _ToastrService :ToastrService){
console.log("ppppp");
}
ngOnInit(): void {
  this._ActivatedRoute.params.subscribe((p)=>{
   this.iddata=p['id'];
  });

this._EcodataService.getdetails(this.iddata).subscribe({
next:(responce)=>{
this.data=responce.data;
console.log(this.data)
}
})
console.log("detaails");

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
