import { Component } from '@angular/core';
import { FavoriteChangedEventsArgs } from './favorite-component/favorite-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

/*   ASSIGNMENT 5
    isClicked= true;
    title: string;
  */

/*  ASSIGNMENT 4
 tweet={
    body: '',
    isLiked: false,
    likesCount: 0
  }

  onLikeChanged(isLiked){
    console.log("Like changed: ", isLiked)
    this.tweet.isLiked = !this.tweet.isLiked;
    this.tweet.likesCount += this.tweet.likesCount;
  } */

/* //ASSIGNMENT3
title: string */

/* task = {
  naziv: 'review aplikacija',
  assignee: null
} */

/* canSave = false; */

/*   tecajevi;

  loadTecajeve(){
    this.tecajevi=[
      {id:1, naziv:'tecaj1'},
      {id:2, naziv:'tecaj2'},
      {id:3, naziv:'tecaj3'}
    ];
  }

  trackTecaj(index, tecaj) {
    return tecaj ? tecaj.id : undefined;
  }
 */
  /*onAdd(){
    this.tecajevi.push ({id:4, naziv:'tecaj4'})
  }

  onRemove(tecaj){
    let index = this.tecajevi.indexOf(tecaj);
    this.tecajevi.splice(index,1);
  }

  onChange(tecaj){
    tecaj.naziv = 'AZURIRAN';
  } */
  /* viewMode = 'map'; */

  /* tecajevi=[1, 2]; */

  /*   post= {
    title: 'training_app',
    isFavorite: true
  }
  onFavoriteChanged(eventArgs: FavoriteChangedEventsArgs){
    console.log("favorite se promijenio", eventArgs)
  } */

  onFavoriteChanged(eventArgs: FavoriteChangedEventsArgs){
    console.log("favorite se promijenio", eventArgs)}
}
