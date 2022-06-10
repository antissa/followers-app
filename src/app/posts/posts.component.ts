import { Component, Input, OnInit } from '@angular/core';
import { AppError } from '../public/app-error';
import { NotFoundError } from '../public/not-found-errors';
import { BadInputError } from '../public/bad-input';
import { PostService } from '../services/post.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  postsArray;
  

  constructor(private service: PostService) {
  }

  addPost(naslov: HTMLInputElement){
    let post = {title: naslov.value};
    this.postsArray.splice(0, 0, post);
    
    naslov.value = '';

    this.service.add(post)
      .subscribe({
        next:(newPost) => {
          post['id']=newPost['id'];
        }, 
        error:(error: AppError) => {
          this.postsArray.splice(0, 1);

          if(error instanceof BadInputError)
          console.log('Bad input errorrrrrr!!');
          else throw error;
        }})
  }

  updatePost(post){
    this.service.update(post)
    .subscribe({
      next: (updatedPost)=>{
        console.log(updatedPost)
      }})
  }

  deletePost(post){
    this.service.izbrisi(post.id)//converted to promise
/*     let index = this.postsArray.indexOf(post);
    this.postsArray.splice(index, 1);

    this.service.izbrisi(330)
      .subscribe({
        next: ()=> {
          null
        },
        error: (error: AppError) => {
          this.postsArray.splice(index, 0, post)
          if(error instanceof NotFoundError)
            alert('This post has already been deleted');
          else throw error;
        }
    }) */
  }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe({ next: (postsArray) => this.postsArray=postsArray});
  }

}

