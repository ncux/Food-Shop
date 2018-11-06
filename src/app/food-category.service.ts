import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FoodCategoryService {

  constructor(private database: AngularFireDatabase) { }

  getFoodCategories(): AngularFireList<any[]> {
    return this.database.list('/categories', ref => ref.orderByChild('name'));
  }
}
