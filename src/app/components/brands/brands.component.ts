import { Component, OnInit } from '@angular/core';
import { brands } from 'src/app/shared/interfaces/brands';
import { EcodataService } from 'src/app/shared/service/ecodata.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  data:brands[]=[];


  constructor(private _EcodataService :EcodataService){

  }
ngOnInit(): void {
  this._EcodataService.getbrand().subscribe({
    next:(responce)=>{
      console.log(responce)
      this.data=responce.data
    }
  })
}
}
