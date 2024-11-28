import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginpageService {

  constructor(private _httpClient:HttpClient) { }
  login(data:any):Observable<any>{
    return this._httpClient.post("https://6572df5d192318b7db412dfe.mockapi.io/employees",data);
  }

}
