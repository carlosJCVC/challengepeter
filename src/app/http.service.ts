import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

	constructor(private http: HttpClient) { }

	public getInfo(username: string): Observable<User>
  {
    const url = 'https://api.github.com/users/' + username;
 
    return this.http.get<User>(url);
  }
}
