import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:9091';
  constructor(private http: HttpClient)  { }
  login(credentials: any): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, credentials);
  }
  registerAdmin(user: any): Observable<any> {
    const url = `${this.apiUrl}/register/admin`;
    return this.http.post(url, user);
  }
}
