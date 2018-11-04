import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksForYourPurchaseComponent } from './thanks-for-your-purchase.component';

describe('ThanksForYourPurchaseComponent', () => {
  let component: ThanksForYourPurchaseComponent;
  let fixture: ComponentFixture<ThanksForYourPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanksForYourPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksForYourPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
