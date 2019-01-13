import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IUser } from '../model/user.app.model';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  debugger;
  usersUrl = `${environment.apiUrl}users.json`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser> {
    return this.http.get<IUser>(this.usersUrl);
  }

}
