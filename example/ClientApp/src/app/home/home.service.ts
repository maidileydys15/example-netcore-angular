import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient) { }

  getEmployee(): Observable<string[]> {
    return this.http.get<string[]>("https://localhost:5001/api/employee");
  }
}
