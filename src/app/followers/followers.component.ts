import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';


@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers;

  constructor(private service: FollowerService) { }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe({ next: (followers) => this.followers=followers});
    console.log(this.followers)
  }

}
