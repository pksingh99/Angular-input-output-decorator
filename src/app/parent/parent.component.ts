import { Component, OnInit } from '@angular/core';
import { AbcService } from '../abc.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers:[AbcService]
})
export class ParentComponent implements OnInit {
 gifyfromchild:any;
 data:any;
  constructor(public abc:AbcService) {
    this.abc.setData(2);
    this.data=this.abc.getData();
   }

  ngOnInit() {
  }
 hmm(event:any){
   console.log("oik"+event);
   this.gifyfromchild = event;
 }
}
