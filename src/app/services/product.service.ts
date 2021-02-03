import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product';
import { Category } from '../product/category';
import { Newsletter } from '../product/newsletter';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  addNewsLetter(body): Observable<Newsletter> {
    const baseUrl: string = 'http://localhost:3000/Newsletter';
    return this.httpClient.post<Newsletter>(baseUrl, body);
  }

  viewProducts(): Observable<Product> {
    const baseUrl: string = 'http://localhost:3000/product';
    return this.httpClient.get<Product>(baseUrl);
  }

  viewProduct(productId): Observable<Product> {
    const baseUrl: string = 'http://localhost:3000/product/' + productId;
    return this.httpClient.get<Product>(baseUrl);
  }

  searchCategoryProduct(categoryId: number): Observable<Product> {
    const baseUrl: string =
      'http://localhost:3000/product?categoryId=' + categoryId;
    return this.httpClient.get<Product>(baseUrl);
  }

  getCategory(): Observable<Category> {
    const categoryUrl = 'http://localhost:3000/category';
    return this.httpClient.get<Category>(categoryUrl);
  }
}
