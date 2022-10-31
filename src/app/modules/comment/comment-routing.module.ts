import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentsComponent} from "./componets/comments/comments.component";


const routes: Routes = [
  {path:'',component:CommentsComponent ,children:[

    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }