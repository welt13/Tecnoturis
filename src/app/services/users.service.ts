import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'http://localhost:9090/users';

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.get(`${this.baseUrl}?email=${user.email}`);
  }

  register(user: any): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }
}
