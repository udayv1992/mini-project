import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllEmployeeService {

  constructor(private _httpClient:HttpClient) { }
  getEmployees():Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees");
 
  }
   
}
