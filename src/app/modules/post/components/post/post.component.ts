import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from "../../interfeces";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post:IPost;

  @Output()
  selectPost = new EventEmitter<IPost>()

  constructor() { }

  ngOnInit(): void {
  }

  poststLift() {
    this.selectPost.emit(this.post)

  }
}
