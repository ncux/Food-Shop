import { TestBed, inject } from '@angular/core/testing';

import { FoodCategoryService } from './food-category.service';

describe('FoodCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodCategoryService]
    });
  });

  it('should be created', inject([FoodCategoryService], (service: FoodCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
