import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../configs";
import {IPost} from "../../interfeces";
import {PostService} from "../../services";

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
