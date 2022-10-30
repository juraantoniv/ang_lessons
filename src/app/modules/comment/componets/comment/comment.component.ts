import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IComment} from "../../interfeces";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment:IComment;

  @Output()

  liftComment = new EventEmitter<IComment>()

  constructor() { }

  ngOnInit(): void {
  }

  commentLift():void {
  this.liftComment.emit(this.comment)
  }
}
