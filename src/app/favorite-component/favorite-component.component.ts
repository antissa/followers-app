import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite-component',
  templateUrl: './favorite-component.component.html',
  styleUrls: ['./favorite-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FavoriteComponentComponent {
  //INPUT PROPERTIES
  @Input() isFavorite: boolean;

  //OUTPUT PROPERTIES
  @Output() change = new EventEmitter;

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }
}

//EVENT DATA FORMAT
export interface FavoriteChangedEventsArgs {
  newValue: boolean
}
