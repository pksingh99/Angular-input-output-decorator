import { Injectable } from '@angular/core';

@Injectable()
export class AbcService {
data:any;
  constructor() { }
 setData(data){
   this.data=data;
 }
   getData(){
     return this.data;
   }


}
