import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDetailsComponent} from "./components/user.details/user.details.component";
import {PostsComponent} from "./components/posts/posts.component";


const routes: Routes = [
  { path:'', component:PostsComponent,children:[
      {path:':id',component:UserDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
