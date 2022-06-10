import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

@Input()isLiked: boolean;
@Input()likesCount: number;

@Output()change = new EventEmitter


onClick(){
  this.isLiked = !this.isLiked;
  if(this.isLiked) {this.likesCount++;}
  else {this.likesCount--;}
  this.change.emit(this.isLiked)
}

  ngOnInit(): void {
  }

}
