import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serch'
})
export class SerchPipe implements PipeTransform {

  transform(data:any[],term:string ):any [] {
    return  data.filter((item)=> item.title.toLowerCase().includes(term.toLowerCase())) ;
  }

}
