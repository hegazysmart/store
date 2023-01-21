import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIstComponent } from './product-list.component';

describe('ProductIstComponent', () => {
  let component: ProductIstComponent;
  let fixture: ComponentFixture<ProductIstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductIstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
