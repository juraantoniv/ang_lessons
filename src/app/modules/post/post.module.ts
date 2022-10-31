import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {UserDetailsComponent} from "./components/user.details/user.details.component";
import {PostsComponent} from "./components/posts/posts.component";
import {PostComponent} from "./components/post/post.component";


@NgModule({
  declarations: [
    UserDetailsComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
