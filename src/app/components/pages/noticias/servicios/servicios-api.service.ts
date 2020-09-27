import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ServiciosApiService {
  public apikey = '7700c5ef589e48d29bcaaaef6199f855'
  public country
  public category

  constructor(private http: HttpClient) { }

  public getNoti(country, category) {
    let url = country === '' ? 'category=' + category : 'country=' + country + '&category=' + category;

    return this.http.get(`http://newsapi.org/v2/top-headlines?${url}&apiKey=${this.apikey}`);
  }
}
