import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers;

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit(): void {

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
    switchMap(combinedParams => {
      let id = combinedParams[0].get('id');  //required params - first member
      let page = combinedParams[1].get('page'); //optional params - second member

      return this.service.getAll();
    }))
    .subscribe({next: (followers) => this.followers = followers
/*       let id = combinedParams[0].get('id');  //required params - first member
      let page = combinedParams[1].get('page'); //optional params - second member

      this.service.getAll()
      .subscribe({next: (followers) => this.followers = followers}); */
    })
  }
}
