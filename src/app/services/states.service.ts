import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  constructor(private http:HttpClient) { }

  getStates(){
    const url = "https://cdn-api.co-vin.in/api/v2/admin/location/states"
    return this.http.get<any>(url);
  }
}
