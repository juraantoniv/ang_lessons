import { Component, OnInit } from '@angular/core';
import {IComment} from "../../interfeces";
import {CommentService} from "../../services/comment.service";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments:IComment[]

  constructor( private  CommentService:CommentService) { }

  ngOnInit(): void {
    this.CommentService.getAll().subscribe( value => this.comments =value)

  }


}
