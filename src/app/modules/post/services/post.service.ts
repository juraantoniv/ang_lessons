import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



import {Params} from "@angular/router";
import {urls} from "../../../configs";
import {IPost} from "../../../interfeces/posts.interface";
import {IUser} from "../interfeces/user.interface";



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts)
  }

  getById(id: Params): Observable<IUser> {
    return this.httpClient.get<IUser>(`${urls.users}/${id}`)
  }
}
