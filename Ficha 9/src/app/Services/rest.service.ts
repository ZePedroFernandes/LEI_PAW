import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Product } from '../Models/Product';

const endpoint = 'http://localhost:3000/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(endpoint + 'products');
  }

  getProduct(id: String): Observable<Product> {
    return this.http.get<Product>(endpoint + 'product/' + id);
  }

  addProduct(product: Product): Observable<Product> {
    console.log(product);
    return this.http.post<Product>(endpoint + 'product', JSON.stringify(product), httpOptions);
  }

  updateProduct(id: String, product: Product): Observable<Product> {
    return this.http.put<Product>(endpoint + 'product/' + id, JSON.stringify(product), httpOptions);
  }

  deleteProduct(id: String): Observable<Product> {
    return this.http.delete<Product>(endpoint + 'product/' + id, httpOptions);
  }

}
