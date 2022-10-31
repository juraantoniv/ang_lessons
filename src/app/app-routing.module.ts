import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layuots/main.layout/main.layout.component";



const router:Routes=[
  {path:'', component:MainLayoutComponent,children:[
      {path:'posts', loadChildren:()=>import('./modules/post/post.module').then(value => value.PostModule)},
      {path:'comments', loadChildren:()=>import('./modules/comment/comment.module').then(value => value.CommentModule)}
    ]}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],


exports:[
  RouterModule
]

})

export class AppRoutingModule { }
