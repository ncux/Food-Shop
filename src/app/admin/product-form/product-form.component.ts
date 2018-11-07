import { Component, OnInit } from '@angular/core';
import { FoodCategoryService } from '../../food-category.service';
import { ProductService } from '../../product.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories: any[];
  product;  // use [(ngModel)] for two-way binding with template data
  id;

  constructor(private categoryService: FoodCategoryService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,   // use this to get the route params
              private router: Router) {
    this.id = activatedRoute.snapshot.paramMap.get('id');
    this.getProduct();
  }

  ngOnInit() {
    this.categoryService.getFoodCategories().valueChanges().subscribe(categories => {
      console.log(categories);
      this.categories = categories;
    });
  }

  saveNewProduct(product) {
    console.log(product);
    this.productService.saveNewProduct(product);
  }

  viewAllProducts() {
    this.router.navigate(['/admin/products']);
  }

  getProduct() {
    return this.productService.getProductByID(this.id).valueChanges().subscribe(product => {
      this.product = product;
    });
  }

}
