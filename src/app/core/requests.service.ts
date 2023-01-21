import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.baseUrl}products?limit=10`).subscribe(
        (data) => resolve(data),
        (err) => reject(err)
      );
    });
  }

  getSingleProduct(key: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.baseUrl}products/${key}`).subscribe(
        (data) => resolve(data),
        (err) => reject(err)
      );
    });
  }

  addProduct(data:FormData){
    return this.http.post(`${environment.baseUrl}products`, data);
  }
}
