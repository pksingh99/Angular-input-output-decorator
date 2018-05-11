import { Component } from '@angular/core';
import { AbcService } from './abc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AbcService]
})
export class AppComponent {
  title = 'app';
  isBold:boolean= true;
 fontSize:number=10;
 name:string="Jaish";
  detail:any[]= [{
    "id":1,
  "name":'a'
},
{
  "id":2,
"name":'b'
},
{
  "id":3,
"name":'c'
}
];
data:any="";
constructor(public abc:AbcService){
 this.abc.setData(1);
 this.data=this.abc.getData();
}



   applyStyle(){
     let style={
       'font-size.px':this.fontSize,
       'font-weight':this.isBold ? 'bold' :'normal'
     }
     return style;
   }

cli(){

  this.fontSize= this.fontSize+10;
  this.isBold=!this.isBold;
  this.detail=[{
    "id":1,
  "name":'a'
  },
  {
  "id":2,
  "name":'b'
  },
  {
  "id":3,
  "name":'c'
},
{
"id":4,
"name":'d'
}
,
{
"id":4,
"name":'d'
}];
}
trackById(id:number, item:any){
  return item.id;
}
}
