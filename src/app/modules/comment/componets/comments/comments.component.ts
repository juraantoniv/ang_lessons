
import {CommentService} from "../../services/comment.service";
import {IComment} from "../../interfeces/comments.interface";
import {Component, OnInit} from "@angular/core";



@Component({
  selector: 'app-comments',
  templateUrl:'./comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments:IComment[]
  selectComment:IComment

  constructor( private  CommentService:CommentService) { }

  ngOnInit(): void {
    this.CommentService.getAll().subscribe( value => this.comments =value)

  }


  getComment(commentLift: IComment) {
    this.selectComment = commentLift

  }
}
