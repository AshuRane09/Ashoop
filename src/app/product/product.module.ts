import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { FeaturesComponent } from './features/features.component';
import { CategoryComponent } from './item-page/category/category.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { ViewAllProductComponent } from './item-page/view-all-product/view-all-product.component';
import { ViewByCategoryComponent } from './item-page/view-by-category/view-by-category.component';
import { ViewProductComponent } from './item-page/view-product/view-product.component';
import { ProductComponent } from './product.component';
import { ReviewComponent } from './review/review.component';
import { RouterModule, Routes } from '@angular/router';

const productRoutes: Routes = [
  { path: 'productpage', component: ProductComponent },
  { path: 'products', component: ItemPageComponent },
  { path: 'viewproduct/:id', component: ViewProductComponent },
  { path: 'category/:id', component: ViewByCategoryComponent },
];

@NgModule({
  declarations: [
    ProductComponent,
    CarouselComponent,
    FeaturesComponent,
    ReviewComponent,
    ItemPageComponent,
    CategoryComponent,
    ViewProductComponent,
    ViewAllProductComponent,
    ViewByCategoryComponent,
  ],
  imports: [CommonModule, RouterModule.forRoot(productRoutes)],
})
export class ProductModule {}
