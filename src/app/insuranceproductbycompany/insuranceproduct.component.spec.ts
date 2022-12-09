import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceproductComponent } from './insuranceproduct.component';

describe('InsuranceproductComponent', () => {
  let component: InsuranceproductComponent;
  let fixture: ComponentFixture<InsuranceproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
