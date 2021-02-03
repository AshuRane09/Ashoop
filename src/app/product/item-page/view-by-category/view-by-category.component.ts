import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/product.service';
import { Category } from '../../category';
import { Product } from '../../product';

@Component({
  selector: 'app-view-by-category',
  templateUrl: './view-by-category.component.html',
  styleUrls: ['./view-by-category.component.css'],
})
export class ViewByCategoryComponent implements OnInit {
  searchCategory: number;
  productList: Product;
  rating1: string = '★ ☆ ☆ ☆ ☆';
  rating2: string = '★ ★ ☆ ☆ ☆';
  rating3: string = '★ ★ ★ ☆ ☆';
  rating4: string = '★ ★ ★ ★ ☆';
  rating5: string = '★ ★ ★ ★ ★';

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.searchCategory = data.id;
      console.log(this.searchCategory);

      this.productsService
        .searchCategoryProduct(this.searchCategory)
        .subscribe((categoryData) => {
          this.productList = categoryData;
        });
    });
  }
}
