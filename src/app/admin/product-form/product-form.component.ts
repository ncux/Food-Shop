import { Component, OnInit } from '@angular/core';
import { FoodCategoryService } from '../../food-category.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories: any[];

  constructor(private category: FoodCategoryService, private product: ProductService) { }

  ngOnInit() {
    this.category.getFoodCategories().valueChanges().subscribe(categories => {
      console.log(categories);
      this.categories = categories;
    });
  }

  saveNewProduct(product) {
    console.log(product);
    this.product.saveNewProduct(product);
  }

}
