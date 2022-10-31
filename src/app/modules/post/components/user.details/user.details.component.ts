
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../../../interfeces/posts.interface";
import {IUser} from "../../interfeces/user.interface";
import {PostService} from "../../services/post.service";
import {Component, OnInit} from "@angular/core";



@Component({
  selector: 'app-user.details',
  templateUrl:'./user.details.component.html',
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
        this.PostService.getById(id).subscribe(valuee => this.user=valuee)
      }
    })
  }

  ngOnInit(): void {
  }

}
