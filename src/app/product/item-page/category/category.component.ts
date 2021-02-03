import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product.service';
import { Category } from '../../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categoryList: Category;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getCategory().subscribe((data) => {
      this.categoryList = data;
    });
  }
}
