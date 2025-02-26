import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/service/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartid:any;
  checkout:FormGroup=this._FormBuilder.group({
    details:[''],
    phone:[''],
    city:['']
  })
  
  
    constructor( private _CartService:CartService,private _FormBuilder:FormBuilder,private _ActivatedRoute:ActivatedRoute){
  
    }
  
  ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
   this.cartid=params.get('id');
    }
  })
    
    
  }
  
  handleform(){
    console.log(this.checkout.value);
  this._CartService.checkout(this.cartid,this.checkout.value).subscribe({
    next:(responce)=>{
      
  console.log(responce.session.url);  
  window.open(responce.session.url,'_self')
  
    }
  })
  }
}
