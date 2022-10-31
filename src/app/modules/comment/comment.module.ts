import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {CommentService} from "./services/comment.service";
import {CommentsComponent} from "./componets/comments/comments.component";
import {CommentComponent} from "./componets/comment/comment.component";





@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,



  ],
  providers:[
    CommentService
  ]
})
export class CommentModule { }
