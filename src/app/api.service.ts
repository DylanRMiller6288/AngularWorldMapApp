import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  fetchCountrryData(country: string) {
    let url = 'http://api.worldbank.org/V2/country/';
    let format = '?format=json';
    let call = url + country + format;
    return this.http.get(call);
  }

  setCountryData (country: string){

    let subject = new Subject();

    this.fetchCountrryData(country).subscribe((data: any) => {
      subject.next({
        name: data[1][0].name,
        capital: data[1][0].capitalCity,
        region: data[1][0].region.value,
        income: data[1][0].incomeLevel.value,
        longitude: data[1][0].longitude,
        latitude: data[1][0].latitude
      })
    })

    return subject.asObservable();
  }
}
