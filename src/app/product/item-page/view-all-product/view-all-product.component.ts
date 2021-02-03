import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product.service';
import { Product } from '../../product';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css'],
})
export class ViewAllProductComponent implements OnInit {
  productList: Product;
  rating1: string = '★ ☆ ☆ ☆ ☆';
  rating2: string = '★ ★ ☆ ☆ ☆';
  rating3: string = '★ ★ ★ ☆ ☆';
  rating4: string = '★ ★ ★ ★ ☆';
  rating5: string = '★ ★ ★ ★ ★';
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.viewProducts().subscribe((data) => {
      this.productList = data;
    });
  }
}
