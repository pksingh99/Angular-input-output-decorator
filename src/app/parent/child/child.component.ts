import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  in:any;
  @Output()
  out: EventEmitter<string> = new EventEmitter<string>();

onthis(){

  this.out.emit("after all this, this is what you send to your parent..."+this.in);
  console.log(this.in);
}
  constructor() { }

  ngOnInit() {
  }

}
