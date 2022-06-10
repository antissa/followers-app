import { Component, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecajeviComponent } from './tecajevi.component';
import { TecajComponent } from './tecaj/tecaj.component';
import { TecajeviService } from './tecajevi.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponentComponent } from './favorite-component/favorite-component.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { InputPipe } from './inputtext.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { FormaComponent } from './forma/forma.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { PasswordComponent } from './password/password.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './public/app-error-handler';
import { FollowersComponent } from './followers/followers.component';
import { FollowerService } from './services/follower.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    TecajeviComponent,
    TecajComponent,
    AuthorsComponent,
    FavoriteComponentComponent,
    SummaryPipe,
    InputPipe,
    FavoriteComponentComponent,
    PanelComponent,
    InputFormatDirective,
    LikeComponent,
    ZippyComponent,
    FormaComponent,
    NewCourseComponent,
    PasswordComponent,
    PostsComponent,
    NavbarComponent,
    NotFoundComponent,
    GithubProfileComponent,
    GithubFollowersComponent,
    HomeComponent,
    FollowersComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: HomeComponent
      },
      {
        path: 'followers/:id/:username', 
        component: GithubProfileComponent
      },
      {
        path: 'followers', 
        component: GithubFollowersComponent
      },
      {
        path: 'posts', 
        component: PostsComponent
      },
      {
        path: '**', 
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    TecajeviService,
    AuthorsService,
    PostService,
    FollowerService,
    GithubFollowersService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
