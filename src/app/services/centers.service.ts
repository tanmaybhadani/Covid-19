import { Injectable } from '@angular/core';
import { Center } from 'src/models/center.model';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CentersService {

  constructor(private http:HttpClient) { }

  // centers: Center[] = new Array(
  //   new Center(1,'Raniganj','NSB Road','West Bengal','Burdawan','E',713347,31,98,'','','free',''),
  //   new Center(1,'Asansol','NSB Road','West Bengal','Burdawan','E',713301,31,98,'','','paid','')
  //   )

    getCenters(pincode:string) : Observable<any> {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      var currentDate = dd + '-' + mm + '-' + yyyy;
      const params = new HttpParams()
                    .set('pincode',pincode)
                    .set('date',currentDate)
      const url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin"
      return this.http.get<any>(url,{params:params});
    }

    
}
