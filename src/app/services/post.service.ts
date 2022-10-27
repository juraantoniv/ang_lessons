import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {urls} from '../configs';
import {IPost} from "../interfeces";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts)
  }

  // getById(id: number): Observable<IUser> {
  //   return this.httpClient.get<IUser>(`${urls.users}/${id}`)
  // }
}
