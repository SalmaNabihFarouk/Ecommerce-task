

import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/shared/interfaces/category';
import { EcodataService } from 'src/app/shared/service/ecodata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  implements OnInit{
  data:category[]=[];

  constructor(private _EcodataService:EcodataService){

  }

 

  ngOnInit(): void {
   
    this._EcodataService.getallcategories().subscribe({
      next:(responce)=>{
        console.log(responce);
        this.data=responce.data;
      }
    })
  }
}
