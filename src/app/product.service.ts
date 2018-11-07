import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private database: AngularFireDatabase) { }

  saveNewProduct(product) {
    return this.database.list('/products').push(product);
  }

  getAllProducts(): AngularFireList<any[]> {
    return this.database.list('/products');
  }

  getProductByID(productID) {
    return this.database.object(`/products/${productID}`);
  }
}
