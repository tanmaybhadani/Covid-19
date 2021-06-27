import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistrictsService {
  constructor(private http :HttpClient) { }

  getDistricts(stateId : string){
    // const params = new HttpParams()
    //                 .set('state_id',stateId)
    const url = "https://cdn-api.co-vin.in/api/v2/admin/location/districts/" + stateId
    return this.http.get<any>(url);
  }

  getCenters(district_id: string) : Observable<any> {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var currentDate = dd + '-' + mm + '-' + yyyy;
    const params = new HttpParams()
                  .set('district_id',district_id)
                  .set('date',currentDate)
    const url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict"
    return this.http.get<any>(url,{params:params});
  }}
