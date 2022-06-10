import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input()title: String;
 isExpanded: boolean;

 onClick(){
   this.isExpanded=!this.isExpanded;
 }



  ngOnInit(): void {
  }

}
