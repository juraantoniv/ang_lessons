import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost, IUser} from "../../interfeces";
import {PostService} from "../../services";

@Component({
  selector: 'app-user.details',
  templateUrl: './user.details.component.html',
  styleUrls: ['./user.details.component.css']
})
export class UserDetailsComponent implements OnInit {
  post:IPost
  user:IUser

  constructor( private router:Router ,private ActivatedRoute:ActivatedRoute, private PostService:PostService) {
    this.ActivatedRoute.params.subscribe(({id}) => {
    this.post=this.router.getCurrentNavigation()?.extras.state?.['post']
      console.log(this.post)
      if(this.post){
        this.PostService.getById(id).subscribe(value1 => this.user=value1)
      }
    })
  }

  ngOnInit(): void {
  }

}
