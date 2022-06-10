import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaComponent {

contactMethods=[
  {id:1, name:"email"},
  {id:2, name:"phone"}
]
categories=[
  {id:1, name:"development"},
  {id:2, name:"art"},
  {id:3, name:"languages"}
]
  create(forma){
    console.log(forma);
  }

  log(firstname){
    console.log(firstname);
  }

  submit(forma){
    console.log(forma);
  }
}
