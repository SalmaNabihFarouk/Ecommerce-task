import { CartService } from './../../shared/service/cart.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { WhislistService } from 'src/app/service/whislist.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent {
  num:number=0;
  num2:number=0;
constructor(private _CartService:CartService,private _WhislistService:WhislistService,private _Router:Router){

}


  ngOnInit(): void {

    this._CartService.cartnumber.subscribe({
      next:(data)=>{
  console.log(data);
  this.num=data;
      }
  
    })

  this._WhislistService.heartnum.subscribe({
      next:(data)=>{
  console.log(data);
  this.num2=data;
      }
  
    })


    this._CartService.getcart().subscribe({
      next:(r)=>{
console.log(r.numOfCartItems)
this.num=r.numOfCartItems;
      },
      error:()=>{

      }
    })

this._WhislistService.getwhislist().subscribe({
  next:(responce)=>{
this.num2=responce.count;
  }
})


    
  }




  signout(){
    localStorage.removeItem('usertoken');
this._Router.navigate(['login'])
  }
}
