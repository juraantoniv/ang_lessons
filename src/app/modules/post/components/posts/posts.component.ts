
import {IPost} from "../../../../interfeces/posts.interface";
import {Component, OnInit} from "@angular/core";
import {PostService} from "../../services/post.service";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:IPost[]
  selectPost:IPost

  constructor( private PostService:PostService) { }

  ngOnInit(): void {
    this.PostService.getAll().subscribe( value => this.posts =value)

  }


  getPost(selectedPost: IPost) {
    this.selectPost = selectedPost

  }
}
