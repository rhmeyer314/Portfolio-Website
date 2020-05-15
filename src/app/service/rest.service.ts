import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseData } from '../model/response-data';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public post<T>(url: string, request: any) {
    return this.http.post<ResponseData<T>>(this.baseURL + url, request);
  }
}
