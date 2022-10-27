import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {urls} from '../configs';
import {IUser} from "../interfeces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users)
  }

  getById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${urls.users}/${id}`)
  }
}
